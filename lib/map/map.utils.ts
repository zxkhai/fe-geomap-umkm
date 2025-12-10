import L from 'leaflet';
import { foodTrenImage } from '@/assets';
import { Culinary } from '@/lib/culinary/culinary.type';
import { MapCulinary } from '@/lib/map/map.type';

export class MapUtils {
  static transformCulinaryData(culinaryList: Culinary[]): MapCulinary[] {
    return culinaryList.map(culinary => ({
      id: culinary.id,
      name: culinary.name.trim(),
      lat: culinary.location.latitude,
      lng: culinary.location.longitude,
      photo: culinary.product_pict || foodTrenImage.src || foodTrenImage,
      regency: culinary.regency.trim(),
      address: culinary.address,
      phone: culinary.phone,
      story: culinary.story,
    }));
  }

  static createMarkerIcon(photo: string): L.DivIcon {
    return L.divIcon({
      html: `
        <div style="
          position: relative;
          width: 42px;
          height: 42px;
          background-color: white;
          border-radius: 50%;
          overflow: hidden;
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
          "></div>
        </div>
      `,
      className: 'custom-marker-icon',
      iconSize: [50, 50],
      iconAnchor: [21, 42],
      popupAnchor: [0, -40],
    });
  }

  static filterCulinary(
    culinaryList: MapCulinary[],
    filter: string,
    searchQuery: string = ''
  ): MapCulinary[] {
    return culinaryList.filter((culinary) => {
      // Filter by regency
      const matchesRegency = filter === 'Semua' || culinary.regency === filter;
      
      // Filter by search query
      const matchesSearch = searchQuery === '' || 
        culinary.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        culinary.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        culinary.regency.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesRegency && matchesSearch;
    });
  }
}
