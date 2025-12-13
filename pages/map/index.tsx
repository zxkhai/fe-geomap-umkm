import dynamic from "next/dynamic";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { Culinary } from "@/lib/culinary/culinary.type";
import { culinaryService } from "@/lib/culinary/culinary.service";
import PopSlideDetail from "@/components/maps/PopSlideDetail";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const MapRBI = dynamic(() => import('@/components/maps/MapRBI'), { ssr: false });

export default function MapPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [selectedCulinary, setSelectedCulinary] = useState<Culinary | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [culinaryData, setCulinaryData] = useState<Culinary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCulinaryData();
  }, []);

  const fetchCulinaryData = async () => {
    try {
      setLoading(true);
      const result = await culinaryService.getAll();
      if (result.success && result.data) {
        setCulinaryData(result.data);
      }
    } catch (error) {
      console.error("Error fetching Culinary data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkerClick = (culinary: Culinary) => {
    setSelectedCulinary(culinary);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedCulinary(null);
  };

  const filterButtons = [
    { name: t('map.filterAll'), value: "Semua" },
    { name: "Pamekasan", value: "Pamekasan" },
    { name: "Sumenep", value: "Sumenep" },
  ];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-white">
        <div className="flex justify-center items-center h-screen">
          <div className="text-base md:text-xl">{t('map.loadingData')}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-white">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-5">
          {t('map.title')}{" "}
          <span className="text-(--yellow-umkm)">{t('map.subtitle')}</span>
        </h2>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between mb-6 md:mb-8 gap-4 md:gap-6 px-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder={t('map.searchPlaceholder')}
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
        culinaryData={culinaryData}
        searchQuery={searchQuery}
      />

      {/* Pop Slide Detail */}
      <PopSlideDetail
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
        culinary={
          selectedCulinary
            ? {
                name: selectedCulinary.name || '',
                location: selectedCulinary.regency || '',
                story: selectedCulinary.story || '',
                address: selectedCulinary.address || '',
                phone: selectedCulinary.phone || '',
                image: selectedCulinary.product_pict || '/culinary/default.jpg',
                slug: selectedCulinary.slug || '',
                latitude: selectedCulinary.location?.latitude,
                longitude: selectedCulinary.location?.longitude,
              }
            : null
        }
      />
    </div>
  );
}