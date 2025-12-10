'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapUtils } from '@/lib/map/map.utils';
import { routeService } from '@/lib/map/route.service';
import { GeoLayer, MapProps, RouteData } from '@/lib/map/map.type';
import { geoLayerService } from '@/lib/map/geoLayer.service';
import { MapContainer, TileLayer, GeoJSON, Marker } from 'react-leaflet';

export default function RBImap({ 
  filter = 'Semua',
  onMarkerClick,
  culinaryData = [],
  searchQuery = ''
}: MapProps) {
  const [pamekasanLayers, setPamekasanLayers] = useState<GeoLayer[]>([]);
  const [sumenepLayers, setSumenepLayers] = useState<GeoLayer[]>([]);
  const [allRoutes, setAllRoutes] = useState<RouteData[]>([]);
  const [isLoadingRoutes, setIsLoadingRoutes] = useState(false);
  
  const mapCulinaryData = MapUtils.transformCulinaryData(culinaryData);
  
  const visibleRoutes = routeService.filterRoutes(allRoutes, filter);
  
  const filteredMarkers = MapUtils.filterCulinary(mapCulinaryData, filter, searchQuery);
  const loadGeoLayers = async () => {
    const pamekasan = await geoLayerService.loadKabupatenData('pamekasan', '#22c55e');
    const sumenep = await geoLayerService.loadKabupatenData('sumenep', '#2fdb04');
    
    setPamekasanLayers(pamekasan);
    setSumenepLayers(sumenep);
  };

  const generateRoutes = async () => {
    if (mapCulinaryData.length < 2) {
      setAllRoutes([]);
      return;
    }

    setIsLoadingRoutes(true);
    
    try {
      const routes = await routeService.generateRoutes(mapCulinaryData);
      setAllRoutes(routes);
    } catch (error) {
      console.error('Error generating routes:', error);
    } finally {
      setIsLoadingRoutes(false);
    }
  };

  useEffect(() => {
    loadGeoLayers();
  }, []);

  useEffect(() => {
    if (mapCulinaryData.length >= 2) {
      console.log('🔄 Generating routes for all Culinary...');
      generateRoutes();
    } else {
      setAllRoutes([]);
    }
  }, [mapCulinaryData.length]);

  return (
    <MapContainer
      center={[-7.11667, 113.63333]}
      zoom={10}
      style={{ height: '30vh', width: '100%' }}
      className="md:!h-[90vh]"
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

      {visibleRoutes.map((route, i) => (
        <GeoJSON key={`route-${i}-${filter}`} data={route.data} style={route.style} />
      ))}

      {filteredMarkers.map((mapCulinary) => {
        const originalCulinary = culinaryData.find(u => u.id === mapCulinary.id);
        
        return (
          <Marker 
            key={mapCulinary.id} 
            position={[mapCulinary.lat, mapCulinary.lng]} 
            icon={MapUtils.createMarkerIcon(mapCulinary.photo)}
            eventHandlers={{
              click: () => {
                if (onMarkerClick && originalCulinary) {
                  onMarkerClick(originalCulinary);
                }
              },
            }}
          />
        );
      })}
    </MapContainer>
  );
}