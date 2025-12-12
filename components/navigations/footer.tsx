import Link from "next/link";
import { FaArrowRight, FaRegUserCircle } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="relative bg-black text-white py-12 md:py-18 px-4 md:px-10 flex flex-col items-center overflow-hidden">
      {/* Circle Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50 md:opacity-100">
        <div className="relative flex items-center justify-center w-100 h-100 md:w-200 md:h-200">
          <div className="absolute border-2 border-gray-500 rounded-full w-100 h-100 md:w-200 md:h-200" />
          <div className="absolute border-2 border-gray-500 rounded-full w-75 h-75 md:w-150 md:h-150" />
          <div className="absolute border-2 border-gray-500 rounded-full w-50 h-50 md:w-100 md:h-100" />
          <div className="absolute border-2 border-gray-500 rounded-full w-37.5 h-37.5 md:w-75 md:h-75" />
        </div>
      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7 text-white z-10">
        {/* Kiri */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            GEO <span className="text-(--yellow-umkm)">KULINER</span>
          </h2>
          <p className="mt-3 text-sm">
            {t('footer.tagline')}
          </p>
          <Link href='/admin/login' className="inline-block mt-4 border px-4 py-2 rounded-full hover:bg-(--yellow-umkm) hover:text-black transition-colors">
            <p className="flex items-center justify-center gap-2 text-sm font-medium">
              {t('footer.loginAdmin')}
              <FaRegUserCircle className="h-6 w-auto" />
            </p>
          </Link>
        </div>

        {/* Tengah */}
        <div className="text-center">
          <h3 className="font-bold mb-2">{t('footer.contact')}</h3>
          <p className="text-sm my-4">
            {t('footer.contactDesc')}
          </p>
          <div className="flex bg-(--yellow-umkm) rounded-full overflow-hidden w-full max-w-sm mx-auto items-center outline-3 outline-white">
            <input
              type="email"
              placeholder={t('footer.emailPlaceholder')}
              className="grow px-4 py-2 font-medium text-white placeholder-white outline-none bg-transparent text-sm"
              style={{ flexBasis: "0" }}
            />
            <button className="bg-(--yellow-umkm) outline-2 outline-white p-1 rounded-full text-(--yellow-umkm) hover:cursor-pointer transition-colors hover:bg-white hover:outline-none shrink-0 mr-2">
              <div className="bg-white p-1 rounded-full text-(--yellow-umkm) transition-colors outline-none flex items-center justify-center">
                <FaArrowRight 
                  className="w-2.5 h-auto"
                />
              </div>
            </button>
          </div>
      </div>

        {/* Kanan */}
        <div className="text-center md:text-center">
          <h3 className="font-bold mb-2">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2 text-sm mt-4">
            <li><Link className="hover:text-(--yellow-umkm) transition-colors" href="/">{t('nav.home')}</Link></li>
            <li><Link className="hover:text-(--yellow-umkm) transition-colors" href="/map">{t('nav.map')}</Link></li>
            <li><Link className="hover:text-(--yellow-umkm) transition-colors" href="/culinary">{t('general.culinary')}</Link></li>
            <li><Link className="hover:text-(--yellow-umkm) transition-colors" href="/about">{t('nav.about')}</Link></li>
          </ul>
        </div>
      </div>

      <p className="relative text-center text-gray-500 text-xs mt-10 z-10">
        © 2025 GEO KULINER. All rights reserved.
      </p>
    </footer>
  );
}