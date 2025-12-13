import Head from "next/head";
import { foodOneImage } from "@/assets";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { Culinary } from "@/lib/culinary/culinary.type";
import FoodCardCulinary from "@/components/cards/CardCulinaries";
import { culinaryService } from "@/lib/culinary/culinary.service";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CulinaryPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [culinaryData, setCulinaryData] = useState<Culinary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetchCulinaryData();
    
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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

  const filterButtons = [
    { name: t('culinary.filterAll'), value: "Semua" },
    { name: "Pamekasan", value: "Pamekasan" },
    { name: "Sumenep", value: "Sumenep" }
  ];

  // Filter Culinary data based on search and regency filter
  const filteredCulinary = culinaryData.filter((culinary) => {
    const matchesRegency = activeFilter === "Semua" || culinary.regency === activeFilter;
    const matchesSearch = searchQuery === "" || 
      culinary.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      culinary.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      culinary.regency.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesRegency && matchesSearch;
  });

  // Pagination logic
  const itemsPerPage = isMobile ? 10 : 15;
  const totalPages = Math.ceil(filteredCulinary.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCulinary = filteredCulinary.slice(startIndex, endIndex);

  // Reset to page 1 when filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-white">
        <div className="flex justify-center items-center h-screen">
          <div className="text-base md:text-xl">{t('culinary.loadingData')}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Ragam Kuliner - GeoKuliner</title>
        <meta name="description" content="Jelajahi berbagai pilihan kuliner dari Pamekasan dan Sumenep. Temukan makanan favorit Anda di peta kuliner interaktif." />
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">
        {t('culinary.title')}{" "}
        <span className="text-(--yellow-umkm)">{t('culinary.subtitle')}</span>
      </h2>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between mb-6 md:mb-8 gap-4 md:gap-6 px-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder={t('culinary.searchPlaceholder')}
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

      {/* Grid UMKM */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-3 justify-items-center">
        {paginatedCulinary.length > 0 ? (
          paginatedCulinary.map((culinary) => (
            <div key={culinary.id}>
              <FoodCardCulinary
                props={{
                  name: culinary.name,
                  image: culinary.place_pict || foodOneImage,
                  slug: `${culinary.slug}`,
                }}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 md:py-12">
            <p className="text-gray-500 text-base md:text-lg">Tidak ada Kuliner ditemukan</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 px-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-lg text-sm md:text-base ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-black border border-gray-300 hover:bg-black hover:text-white transition-colors hover:cursor-pointer'
            }`}
          >
            Previous
          </button>

          <div className="flex gap-1 md:gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage = 
                page === 1 || 
                page === totalPages || 
                (page >= currentPage - 1 && page <= currentPage + 1);
              
              const showEllipsis = 
                (page === currentPage - 2 && currentPage > 3) ||
                (page === currentPage + 2 && currentPage < totalPages - 2);

              if (showEllipsis) {
                return (
                  <span key={page} className="px-2 py-2 text-gray-400">
                    ...
                  </span>
                );
              }

              if (!showPage) return null;

              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base transition-colors ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'bg-white text-black border border-gray-300 hover:bg-gray-100 hover:cursor-pointer'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-lg text-sm md:text-base ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-black border border-gray-300 hover:bg-black hover:text-white transition-colors hover:cursor-pointer'
            }`}
          >
            Next
          </button>
        </div>
      )}
      </div>
    </>
  );
}
