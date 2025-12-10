import dynamic from "next/dynamic";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { Culinary } from "@/lib/culinary/culinary.type";
import { culinaryService } from "@/lib/culinary/culinary.service";
import PopSlideDetail from "@/components/maps/PopSlideDetail";

const MapRBI = dynamic(() => import('@/components/maps/MapRBI'), { ssr: false });

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [selectedUMKM, setSelectedUMKM] = useState<Culinary | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [umkmData, setUmkmData] = useState<Culinary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUMKMData();
  }, []);

  const fetchUMKMData = async () => {
    try {
      setLoading(true);
      const result = await culinaryService.getAll();
      if (result.success && result.data) {
        setUmkmData(result.data);
      }
    } catch (error) {
      console.error("Error fetching Culinary data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkerClick = (umkm: Culinary) => {
    setSelectedUMKM(umkm);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedUMKM(null);
  };

  const filterButtons = [
    { name: "Semua", value: "Semua" },
    { name: "Pamekasan", value: "Pamekasan" },
    { name: "Sumenep", value: "Sumenep" },
  ];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-white">
        <div className="flex justify-center items-center h-screen">
          <div className="text-base md:text-xl">Loading map data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-white">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-5">
          Geo Kuliner{" "}
          <span className="text-[var(--yellow-umkm)]">Pamekasan & Sumenep</span>
        </h2>
        <p className="text-sm md:text-base mb-2">Gunakan Geo Kuliner Pamekasan & Sumenep untuk menjelajahi cita rasa lokal.</p>
        <p className="text-sm md:text-base px-4 md:px-0">Pilih kabupaten, klik titik lokasi di peta, dan temukan informasi lengkap tentang kuliner khas beserta pengelolanya.</p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between mb-6 md:mb-8 gap-4 md:gap-6 px-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Cari daerah/makanan"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12 focus:outline-none text-sm md:text-base"
          />
          <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl pointer-events-none" />
        </div>
        <div className="flex space-x-2 md:space-x-4 justify-center md:justify-start">
          {filterButtons.map((button) => (
            <button
              key={button.value}
              onClick={() => setActiveFilter(button.value)}
              className={`py-2 px-4 md:px-8 rounded-full transition-all text-sm md:text-base whitespace-nowrap ${
                activeFilter === button.value
                  ? "bg-black text-white"
                  : "bg-white text-black outline-black outline-1 hover:bg-black hover:text-white hover:cursor-pointer"
              }`}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <MapRBI 
        filter={activeFilter} 
        onMarkerClick={handleMarkerClick}
        culinaryData={umkmData}
        searchQuery={searchQuery}
      />

      {/* Pop Slide Detail */}
      <PopSlideDetail
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
        culinary={
          selectedUMKM
            ? {
                name: selectedUMKM.name || '',
                location: selectedUMKM.regency || '',
                story: selectedUMKM.story || '',
                address: selectedUMKM.address || '',
                phone: selectedUMKM.phone || '',
                image: selectedUMKM.product_pict || '/culinary/default.jpg',
                slug: selectedUMKM.slug || '',
              }
            : null
        }
      />
    </div>
  );
}