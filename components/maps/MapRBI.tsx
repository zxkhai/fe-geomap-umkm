'use client';

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { UMKM } from '@/lib/api/umkm';

interface GeoLayer {
  name: string;
  data: any;
  style: any;
}

interface MapUMKM {
  id: number;
  name: string;
  lat: number;
  lng: number;
  photo: string;
  regency: string;
  address?: string;
  phone?: string;
  story?: string;
}

// Transform API UMKM data to MapUMKM format
const transformUMKMData = (umkmList: UMKM[]): MapUMKM[] => {
  return umkmList.map(umkm => ({
    id: umkm.id,
    name: umkm.name,
    lat: umkm.location.latitude,
    lng: umkm.location.longitude,
    photo: umkm.place_pict || '/umkm/default.jpg',
    regency: umkm.regency,
    address: umkm.address,
    phone: umkm.phone,
    story: umkm.story,
  }));
};

const createIcon = (photo: string) =>
  L.divIcon({
    html: `
      <div style="
        position: relative;
        width: 42px;
        height: 42px;
        background-color: white;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid orange;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      ">
        <img src="${photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" />
        <div style="
          position:absolute;
          bottom:-8px;
          left:50%;
          transform:translateX(-50%);
          width:0;
          height:0;
          border-left:8px solid transparent;
          border-right:8px solid transparent;
          border-top:12px solid orange;
        "></div>
      </div>
    `,
    className: '',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -40],
  });

export default function RBImap({ 
  filter = 'Semua',
  onMarkerClick,
  umkmData = [],
  searchQuery = ''
}: { 
  filter?: string;
  onMarkerClick?: (umkm: UMKM) => void;
  umkmData?: UMKM[];
  searchQuery?: string;
}) {
  const [pamekasanLayers, setPamekasanLayers] = useState<GeoLayer[]>([]);
  const [sumenepLayers, setSumenepLayers] = useState<GeoLayer[]>([]);
  
  // Transform UMKM data for map display
  const mapUMKMData = transformUMKMData(umkmData);

  // Calculate distance between two coordinates (in kilometers)
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Check if point is on the line between two points (with tolerance)
  const isPointBetween = (pointLat: number, pointLng: number, lat1: number, lng1: number, lat2: number, lng2: number, tolerance: number = 0.01): boolean => {
    // Calculate distances
    const d1 = calculateDistance(pointLat, pointLng, lat1, lng1);
    const d2 = calculateDistance(pointLat, pointLng, lat2, lng2);
    const d12 = calculateDistance(lat1, lng1, lat2, lng2);
    
    // Point is "between" if sum of distances to both ends ≈ distance between ends
    const distanceSum = d1 + d2;
    const difference = Math.abs(distanceSum - d12);
    
    return difference <= tolerance;
  };

  // Check if a road segment is positioned between two UMKMs (forms a corridor)
  const isRoadConnectingUMKMs = (coordinates: any, umkmList: MapUMKM[]): boolean => {
    if (!coordinates || coordinates.length === 0 || umkmList.length < 2) return false;

    // Flatten coordinates if nested (MultiLineString)
    const flatCoords = Array.isArray(coordinates[0][0]) 
      ? coordinates.flat() 
      : coordinates;

    // Try all UMKM pairs to see if this road is between any pair
    for (let i = 0; i < umkmList.length; i++) {
      for (let j = i + 1; j < umkmList.length; j++) {
        const umkm1 = umkmList[i];
        const umkm2 = umkmList[j];
        
        // Check if any point on the road is between these two UMKMs
        let pointsBetween = 0;
        for (const coord of flatCoords) {
          const [lng, lat] = coord;
          if (isPointBetween(lat, lng, umkm1.lat, umkm1.lng, umkm2.lat, umkm2.lng, 1.0)) {
            pointsBetween++;
          }
        }
        
        // If at least 30% of road points are between these UMKMs, this road connects them
        const percentageBetween = pointsBetween / flatCoords.length;
        if (percentageBetween >= 0.3) {
          console.log(`✅ Road connects ${umkm1.name} ↔ ${umkm2.name} (${(percentageBetween * 100).toFixed(1)}% points between)`);
          return true;
        }
      }
    }

    return false;
  };

  // Filter roads to only show roads connecting between UMKMs
  const filterConnectingRoads = (roadData: any, kabupaten: string): any => {
    if (!roadData || !roadData.features) return roadData;

    // Use ALL UMKMs for road connectivity (cross-regency connections allowed)
    const allUMKM = mapUMKMData;

    console.log('🔍 filterConnectingRoads called:', {
      kabupaten,
      totalMapUMKM: allUMKM.length,
      mapUMKMSample: allUMKM.slice(0, 2),
      allRegencies: [...new Set(allUMKM.map(u => u.regency))],
      totalRoadFeatures: roadData.features.length
    });
    
    // If less than 2 UMKMs globally, no roads should be shown
    if (allUMKM.length < 2) {
      console.log(`⚠️ Not enough total UMKMs (${allUMKM.length} < 2), hiding all roads`);
      return {
        ...roadData,
        features: []
      };
    }
    
    console.log(`✅ Found ${allUMKM.length} total UMKMs, filtering ${roadData.features.length} road segments in ${kabupaten}...`);
    
    const filteredFeatures = roadData.features.filter((feature: any) => {
      const coordinates = feature.geometry?.coordinates;
      
      // Only show roads that are positioned between UMKMs (corridor-based filtering)
      const isConnecting = isRoadConnectingUMKMs(coordinates, allUMKM);
      return isConnecting;
    });

    console.log(`🛣️ Filtered roads result: ${filteredFeatures.length} of ${roadData.features.length} roads connecting UMKMs`);

    return {
      ...roadData,
      features: filteredFeatures
    };
  };

  const loadKabupatenData = async (
    kabupaten: string,
    color: string,
    roadColor?: string
  ) => {
    const files = ['adm_desa.json', 'jalan.json'];
    const results: GeoLayer[] = [];

    for (const file of files) {
      try {
        const res = await fetch(`/datas/${kabupaten}/${file}`);
        if (!res.ok) continue;
        let data = await res.json();

        let style = {};
        if (file.includes('adm_desa')) {
          // Layer kabupaten selalu aktif
          style = { color, weight: 0, fillOpacity: 0.5 };
          results.push({ name: file, data, style });
        }
        if (file.includes('jalan')) {
          // Filter roads to show only roads connecting between UMKMs
          data = filterConnectingRoads(data, kabupaten);
          style = { color: roadColor ?? 'orange', weight: 2 };
          // Hanya push layer jalan jika ada data setelah filter
          if (data.features && data.features.length > 0) {
            results.push({ name: file, data, style });
          }
        }
      } catch (err) {
        console.error(`Gagal load ${file} untuk ${kabupaten}`, err);
      }
    }

    return results;
  };

  useEffect(() => {
    // Load kabupaten data (always show layers, but roads depend on UMKM)
    loadKabupatenData('pamekasan', '#22c55e', '#0000ab').then(setPamekasanLayers);
    loadKabupatenData('sumenep', '#2fdb04', '#0000ab').then(setSumenepLayers);
  }, [umkmData.length, filter, searchQuery]);

  return (
    <MapContainer
      center={[-7.11667, 113.33333]}
      zoom={9}
      style={{ height: '90vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {(filter === 'Semua' || filter === 'Pamekasan') &&
        pamekasanLayers.map((layer, i) => (
          <GeoJSON key={`pamekasan-${i}`} data={layer.data} style={layer.style} />
        ))}

      {(filter === 'Semua' || filter === 'Sumenep') &&
        sumenepLayers.map((layer, i) => (
          <GeoJSON key={`sumenep-${i}`} data={layer.data} style={layer.style} />
        ))}

      {mapUMKMData
        .filter((u) => {
          // Filter by regency
          const matchesRegency = filter === 'Semua' || u.regency === filter;
          
          // Filter by search query
          const matchesSearch = searchQuery === '' || 
            u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.regency.toLowerCase().includes(searchQuery.toLowerCase());
          
          return matchesRegency && matchesSearch;
        })
        .map((mapUmkm) => {
          // Find the original UMKM object to pass to onMarkerClick
          const originalUmkm = umkmData.find(u => u.id === mapUmkm.id);
          
          return (
            <Marker 
              key={mapUmkm.id} 
              position={[mapUmkm.lat, mapUmkm.lng]} 
              icon={createIcon(mapUmkm.photo)}
              eventHandlers={{
                click: () => {
                  if (onMarkerClick && originalUmkm) {
                    onMarkerClick(originalUmkm);
                  }
                },
              }}
            >
            </Marker>
          );
        })}
    </MapContainer>
  );
}