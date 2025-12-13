import Head from "next/head";
import { foodOneImage, heroAbout, leftsideAbout, rightsideAbout } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <>  
      <Head>
        <title>Tentang Kami - GeoKuliner</title>
        <meta name="description" content="Kenali lebih dekat GeoKuliner, platform peta kuliner untuk mendukung UMKM lokal Pamekasan dan Sumenep." />
      </Head>
      {/* HERO SECTION */}
      <section
        className="w-full min-h-75 md:h-135 px-4 py-12 md:py-0 items-center flex"
        style={{
          backgroundImage: `url(${typeof heroAbout === 'string' ? heroAbout : heroAbout.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl px-4 md:px-12 flex-col text-white">
          <p className="font-bold text-3xl md:text-5xl my-2">{t('about.title')}</p>
          <p className="text-(--yellow-umkm) font-semibold text-3xl md:text-5xl my-2">{t('about.subtitle')}</p>
          <p className="max-w-xl text-sm md:text-xl my-4 md:my-8">{t('about.description')}</p>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
          {t('about.visionMission')}
        </h2>

        <div className="bg-gray-200 rounded-2xl p-4 md:p-6 text-center mb-6 md:mb-8 text-sm md:text-lg">
          <h3 className="font-semibold mb-2">{t('about.vision')}</h3>
          <p>
            {t('about.visionText')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            t('about.mission1'),
            t('about.mission2'),
            t('about.mission3'),
            t('about.mission4'),
          ].map((text, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-2xl p-4 md:p-6 shadow-sm text-center text-sm md:text-lg"
            >
              <h4 className="text-(--yellow-umkm) font-semibold mb-2">{t('about.mission')}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3"> 
          {[...Array(8)].map((_, i) => (
            <Image
              key={i}
              src={foodOneImage}
              alt="kuliner"
              width={500}
              height={400}
              className={`rounded-2xl object-cover aspect-4/3 ${i >= 4 ? 'hidden md:block' : ''}`}
            />
          ))}
        </div>
      </section>

      {/* MENGAPA GEOMAPS HADIR */}
      <section className="relative max-w-full mx-auto px-4 md:px-6 py-12 md:py-20 overflow-hidden">
          <Image
            src={leftsideAbout}
            alt="Left Side About"
            width={855}
            className="hidden lg:block absolute left-0 bottom-0 -ml-90 z-0 pointer-events-none select-none"
          />
          <Image
            src={rightsideAbout}
            alt="Right Side About"
            width={540}
            className="hidden lg:block absolute right-0 top-30 -mr-70 z-0 pointer-events-none select-none"
          />

        <div className="relative max-w-7xl mx-auto">
          {/* Title - Shows on mobile at top */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <h2 className="text-center text-3xl sm:text-4xl font-bold leading-tight">
              <span className="block">"{t('about.whyGeoKuliner').split(' ')[0]}</span>
              <span className="block text-(--yellow-umkm)">{t('about.whyGeoKuliner').split(' ').slice(1, 3).join(' ')}</span>
              <span className="block">{t('about.whyGeoKuliner').split(' ').slice(3).join(' ')}"</span>
            </h2>
          </div>

          {/* Desktop Layout - Cards 1 and 4 on top, Title center, Cards 2 and 3 bottom */}
          <div className="hidden lg:flex flex-col items-center gap-8">
            {/* Top Row - Cards 1 and 4 */}
            <div className="flex w-max-8xl items-center gap-16 xl:gap-96">
              {/* Card 1 - Top Left */}
              <div className="flex-1 flex justify-start">
                <div className="relative">
                  <div className="absolute -left-9 -top-3 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-3xl z-10">
                    1
                  </div>
                  <div className="bg-white w-56 rounded-2xl p-6 text-xl text-center leading-tight shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                    <p>{t('about.why1')}</p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Top Right */}
              <div className="flex-1 flex justify-end">
                <div className="relative">
                  <div className="absolute -left-9 -top-3 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-3xl z-10">
                    4
                  </div>
                  <div className="bg-white rounded-2xl w-60 p-6 text-xl text-center leading-tight shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                    <p>{t('about.why4')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Title */}
            <div className="flex justify-center py-4">
              <h2 className="text-center text-4xl xl:text-5xl font-bold leading-tight">
                <span className="block">"{t('about.whyGeoKuliner').split(' ')[0]}</span>
                <span className="block text-(--yellow-umkm)">{t('about.whyGeoKuliner').split(' ').slice(1, 3).join(' ')}</span>
                <span className="block">{t('about.whyGeoKuliner').split(' ').slice(3).join(' ')}"</span>
              </h2>
            </div>

            {/* Bottom Row - Cards 2 and 3 */}
            <div className="flex justify-center items-center w-full max-w-4xl gap-40">
              {/* Card 2 - Bottom Left */}
              <div className="flex-1 flex justify-end">
                <div className="relative">
                  <div className="absolute -left-9 -top-3 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-3xl z-10">
                    2
                  </div>
                  <div className="bg-white rounded-2xl w-64 p-6 text-xl text-center leading-tight shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                    <p>{t('about.why2')}</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Bottom Right */}
              <div className="flex-1 flex justify-start">
                <div className="relative">
                  <div className="absolute -left-9 -top-3 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-3xl z-10">
                    3
                  </div>
                  <div className="bg-white rounded-2xl w-72 p-6 text-xl text-center leading-tight shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                    <p>{t('about.why3')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Simple grid */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="flex justify-center px-4">
              <div className="relative w-full max-w-sm">
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-sm sm:text-base md:text-lg text-center leading-relaxed shadow-[0_18px_40px_rgba(0,0,0,0.35)] pt-8 sm:pt-10">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-extrabold text-2xl sm:text-3xl z-10 shadow-lg">
                    1
                  </div>
                  <p>{t('about.why1')}</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex justify-center px-4">
              <div className="relative w-full max-w-sm">
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-sm sm:text-base md:text-lg text-center leading-relaxed shadow-[0_18px_40px_rgba(0,0,0,0.35)] pt-8 sm:pt-10">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-extrabold text-2xl sm:text-3xl z-10 shadow-lg">
                    2
                  </div>
                  <p>{t('about.why2')}</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex justify-center px-4">
              <div className="relative w-full max-w-sm">
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-sm sm:text-base md:text-lg text-center leading-relaxed shadow-[0_18px_40px_rgba(0,0,0,0.35)] pt-8 sm:pt-10">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-extrabold text-2xl sm:text-3xl z-10 shadow-lg">
                    3
                  </div>
                  <p>{t('about.why3')}</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex justify-center px-4">
              <div className="relative w-full max-w-sm">
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-sm sm:text-base md:text-lg text-center leading-relaxed shadow-[0_18px_40px_rgba(0,0,0,0.35)] pt-8 sm:pt-10">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-extrabold text-2xl sm:text-3xl z-10 shadow-lg">
                    4
                  </div>
                  <p>{t('about.why4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AJAKAN */}
      <section className="flex flex-col justify-center items-center bg-white py-8 md:py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-5 text-center">
          {t('about.gatherSupport')} <span className="text-(--yellow-umkm)">{t('about.localCulinary')}</span>
        </h2>
        <p className="text-black mb-6 md:mb-10 text-lg md:text-3xl lg:text-4xl text-center px-4">
          {t('about.supportText')}
        </p>
        <Link
          href="/culinary"
          className="group flex items-center justify-center gap-3 md:gap-5 bg-black text-white px-4 md:px-5 py-2.5 md:py-3 rounded-full hover:bg-white hover:outline-black hover:outline-2 transition-colors"
        >
          <p className="group-hover:text-black font-medium transition-colors text-sm md:text-base">{t('home.hero.exploreCulinaryButton')}</p>
          <div className="bg-transparent p-1 rounded-full outline-1 outline-white group-hover:bg-black group-hover:outline-none transition-colors">
            <div className="bg-white p-1 rounded-full group-hover:bg-black transition-colors">
              <FaArrowRight className="w-3 h-auto text-black group-hover:text-white transition-colors" />
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}