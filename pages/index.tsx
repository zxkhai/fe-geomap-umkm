import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Culinary } from "@/lib/culinary/culinary.type";
import { FaArrowRight } from "react-icons/fa";
import { culinaryService } from "@/lib/culinary/culinary.service";
import FoodCardCulinary from "@/components/cards/CardCulinaries";
import {heroHome, foodOneImage, foodTrenImage, newsImage} from "@/assets";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LandingPage() {
  const { t } = useLanguage();
  const [culinaryData, setCulinaryData] = useState<Culinary[]>([]);
  const [loading, setLoading] = useState(true);
  const [trendingCulinary, setTrendingCulinary] = useState<Culinary | null>(null);

  useEffect(() => {
    fetchCulinaryData();
  }, []);

  const fetchCulinaryData = async () => {
    try {
      setLoading(true);
      const result = await culinaryService.getAll();
      if (result.success && result.data) {
        setCulinaryData(result.data);
        // Set a random Culinary as trending
        if (result.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * result.data.length);
          setTrendingCulinary(result.data[randomIndex]);
        }
      }
    } catch (error) {
      console.error("Error fetching Culinary data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get popular Culinary (first 5 for now, you can implement sorting logic later)
  const popularCulinary = culinaryData.slice(0, 5);

  return (
    <>
      <Head>
        <title>GeoKuliner - Peta Kuliner Pamekasan & Sumenep</title>
        <meta name="description" content="Satu peta, ribuan rasa untuk dijelajahi. Temukan kuliner lokal terbaik di Madura." />
      </Head>
      {/* HERO SECTION */}
      <section
        className="w-full min-h-100 md:h-135 flex items-center px-4 py-12 md:py-0"
        style={{
          backgroundImage: `url(${typeof heroHome === 'string' ? heroHome : heroHome.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-10 text-center flex-col items-center justify-center">
          <p className="font-semibold text-2xl md:text-5xl my-2">{t('home.hero.title')}</p>
          <p className="text-(--yellow-umkm) font-semibold text-2xl md:text-5xl my-2">{t('home.hero.subtitle')}</p>
          <p className="max-w-2xl text-sm md:text-xl my-6 md:my-8 px-4">{t('home.hero.description')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-12 mt-4">
            <Link
              href="/map"
              className="group flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-(--yellow-umkm) transition-colors w-full sm:w-auto justify-center"
            >
              <p className="group-hover:text-black font-medium transition-colors text-sm md:text-base">{t('home.hero.exploreMapButton')}</p>
              <div className="bg-transparent p-1 rounded-full outline-1 outline-white group-hover:bg-black group-hover:outline-none transition-colors">
                <div className="bg-white p-1 rounded-full group-hover:bg-black transition-colors">
                  <FaArrowRight className="w-3 h-auto text-black group-hover:text-(--yellow-umkm) transition-colors" />
                </div>
              </div>
            </Link>
            <Link
              href="/culinary"
              className="group flex items-center gap-3 bg-(--yellow-umkm) text-white px-6 py-3 rounded-full hover:bg-black transition-colors w-full sm:w-auto justify-center"
            >
              <p className="font-medium transition-colors text-sm md:text-base">{t('home.hero.exploreCulinaryButton')}</p>
              <div className="bg-transparent p-1 rounded-full outline-1 outline-white group-hover:bg-white group-hover:outline-none transition-colors">
                <div className="bg-white p-1 rounded-full transition-colors">
                  <FaArrowRight className="w-3 h-auto text-(--yellow-umkm) group-hover:text-black transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="max-w-7xl mx-auto px-4 py-6 md:py-16 gap-3 md:gap-8 flex flex-col lg:flex-row justify-center items-stretch">
        <div className="group flex flex-col sm:flex-row justify-center items-center border border-gray-300 hover:border-(--yellow-umkm) rounded-2xl md:rounded-3xl px-4 py-5 md:px-6 md:py-8 w-full lg:w-4/12 transition-all duration-300 hover:shadow-lg bg-white">
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 border-2 border-(--yellow-umkm) rounded-full shrink-0 mb-3 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-(--yellow-umkm)">
              {loading ? "..." : `${culinaryData.length}`}
            </p>
          </div>
          <div className="sm:ml-4 md:ml-6 text-center sm:text-left">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
              {t('home.stats.culinaryMapped')}
            </p>
          </div>
        </div>
        
        <div className="group flex flex-col sm:flex-row justify-center items-center border border-gray-300 hover:border-(--yellow-umkm) rounded-2xl md:rounded-3xl px-4 py-5 md:px-6 md:py-8 w-full lg:w-4/12 transition-all duration-300 hover:shadow-lg bg-white">
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 border-2 border-(--yellow-umkm) rounded-full shrink-0 mb-3 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-(--yellow-umkm)">
              {loading ? "..." : `${new Set(culinaryData.map(u => u.classification || u.type).filter(Boolean)).size}`}
            </p>
          </div>
          <div className="sm:ml-4 md:ml-6 text-center sm:text-left">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
              {t('home.stats.culinaryCategory')}
            </p>
          </div>
        </div>
        
        <div className="group flex flex-col sm:flex-row justify-center items-center border border-gray-300 hover:border-(--yellow-umkm) rounded-2xl md:rounded-3xl px-4 py-5 md:px-6 md:py-8 w-full lg:w-4/12 transition-all duration-300 hover:shadow-lg bg-white">
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 border-2 border-(--yellow-umkm) rounded-full shrink-0 mb-3 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-(--yellow-umkm)">2</p>
          </div>
          <div className="sm:ml-4 md:ml-6 text-center sm:text-left">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
              {t('home.stats.culinaryRegion')}
            </p>
          </div>
        </div>
      </section>

      {/* Popular Culinary */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl md:text-4xl font-bold mb-6">
          {t('home.popularCulinary.culinary')} <span className="text-(--yellow-umkm)">{t('home.popularCulinary.popular')}</span>
        </h2>
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading...</p>
          </div>
        ) : (
          <div className="flex gap-6 overflow-x-auto pb-4 px-3 justify-center">
            {popularCulinary.length > 0 ? (
              popularCulinary.map((culinary) => (
                <div key={culinary.id}>
                  <FoodCardCulinary
                    props={{
                      name: culinary.name,
                      image: culinary.place_pict || foodOneImage,
                      slug: culinary.slug,
                    }}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">{t('home.popularCulinary.results')}</p>
            )}
          </div>
        )}
      </section>

      {/* TRENDING */}
      {trendingCulinary && (
        <section className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-6 md:gap-0">
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <Image
              src={trendingCulinary.place_pict || foodTrenImage}
              alt="trending"
              width={700}
              height={700}
              className="w-full h-auto relative z-10 drop-shadow-2xl object-cover"
            />
            {/* soft oval shadow under image (sits behind image) */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/30 rounded-full blur-3xl pointer-events-none z-0" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-lg md:text-4xl font-bold mb-3">
              {t('home.trendingCulinary.trending')} <span className="text-(--yellow-umkm)">{t('home.trendingCulinary.today')} 🔥</span>
            </h2>
            <h3 className="text-base md:text-3xl font-bold my-3">{trendingCulinary.name}</h3>
            {(() => {
              const longText = trendingCulinary.story || `${trendingCulinary.name} adalah salah satu Culinary terbaik di ${trendingCulinary.regency}. Dengan cita rasa yang khas dan pelayanan yang ramah, tempat ini menjadi favorit banyak pelanggan. Dikelola oleh ${trendingCulinary.owner}, tempat ini terus berkembang dan memberikan kontribusi positif bagi ekonomi lokal.`;

              const words = longText.trim().split(/\s+/).filter(Boolean);
              const display = words.length > 50 ? words.slice(0, 50).join(' ') + ' ...selanjutnya' : longText;

              return <p className="text-black my-4 text-justify text-xs md:text-base">{display}</p>;
            })()}
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
              <Link
                href="/map"
                className="group w-full sm:w-1/2 flex items-center justify-between gap-3 bg-black text-white px-4 md:px-6 py-3 rounded-full hover:bg-white hover:outline-black hover:outline-2 transition-colors"
              >
                <p className="group-hover:text-black font-medium transition-colors text-sm md:text-base whitespace-nowrap">{t('home.trendingCulinary.seeInMap')}</p>
                <div className="bg-transparent p-1 rounded-full outline-1 outline-white group-hover:bg-black group-hover:outline-none transition-colors shrink-0">
                  <div className="bg-white p-1 rounded-full group-hover:bg-black transition-colors">
                    <FaArrowRight className="w-3 h-auto text-black group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
              <Link
                href={`/culinary/${trendingCulinary.slug}`}
                className="group w-full sm:w-1/2 flex items-center justify-between gap-3 bg-white text-white px-4 md:px-6 py-3 rounded-full outline-2 outline-black hover:bg-black transition-colors"
              >
                <p className="text-black group-hover:text-white font-medium transition-colors text-sm md:text-base whitespace-nowrap">{t('home.trendingCulinary.seeDetails')}</p>
                <div className="bg-transparent p-1 rounded-full outline-1 outline-black group-hover:bg-white group-hover:outline-none transition-colors shrink-0">
                  <div className="bg-black p-1 rounded-full group-hover:bg-white transition-colors">
                    <FaArrowRight className="w-3 h-auto text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* BERITA UMKM */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl md:text-4xl font-bold mb-6">
          {t('general.news')} <span className="text-(--yellow-umkm)">{t('general.culinary')}</span> {t('general.latest')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[newsImage, newsImage, newsImage].map((img, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={img}
                alt="berita"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-(--yellow-umkm) text-xs mb-1">
                  15 September 2025 – Sampang
                </p>
                <h3 className="font-semibold mb-2 text-sm md:text-base">
                  Bazar Kuliner Sampang 2025 Resmi Dibuka
                </h3>
                <button className="text-(--yellow-umkm) hover:underline text-xs md:text-sm">
                  Baca Selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}