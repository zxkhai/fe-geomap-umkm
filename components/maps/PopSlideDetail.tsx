import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface PopSlideDetailProps {
  isOpen: boolean;
  onClose: () => void;
  culinary: {
    name: string;
    location: string;
    story: string;
    address: string;
    phone: string;
    image: string;
    slug?: string;
  } | null;
}

export default function PopSlideDetail({ isOpen, onClose, culinary }: PopSlideDetailProps) {
  if (!culinary) return null;

  const { t } = useLanguage();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-1000 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-1001 overflow-y-auto transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">{t('detail.detailCulinary')}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Image */}
          <div className="w-full h-48 relative rounded-xl overflow-hidden">
            <Image
              src={culinary.image}
              alt={culinary.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Name and Location */}
          <div>
            <h3 className="text-xl font-bold mb-1">{culinary.name}</h3>
            <p className="text-(--yellow-umkm) text-sm flex items-center gap-1">
              <FaMapMarkerAlt className="w-3 h-3" />
              {culinary.location}
            </p>
          </div>

          {/* History Section */}
          <div>
            <h4 className="font-bold mb-2">{t('detail.history')}</h4>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              {(() => {
                const words = culinary.story.trim().split(/\s+/).filter(Boolean);
                const truncated = words.length > 50 ? words.slice(0, 50).join(' ') + '...' : culinary.story;
                return truncated;
              })()}
            </p>
            {culinary.slug && culinary.story.trim().split(/\s+/).filter(Boolean).length > 50 && (
              <Link href={`/culinary/${culinary.slug}`} className="text-sm text-(--yellow-umkm) hover:underline mt-1 inline-block">
                Baca selengkapnya
              </Link>
            )}
          </div>

          {/* Address Section */}
          <div>
            <h4 className="font-bold mb-2">{t('detail.address')}</h4>
            <p className="text-sm text-gray-700 flex items-start gap-2">
              <FaMapMarkerAlt className="w-4 h-4 mt-1 shrink-0 text-red-500" />
              <span>{culinary.address}</span>
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-2">{t('detail.contact')}</h4>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              <FaPhoneAlt className="w-4 h-4 text-green-600" />
              <a href={`tel:${culinary.phone}`} className="hover:underline">
                {culinary.phone}
              </a>
            </p>
          </div>

        <Link
          href="/map"
          className="group w-full flex items-center justify-between gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:outline-black hover:outline-2 transition-colors"
        >
          <p className="group-hover:text-black font-medium transition-colors">{t('detail.call')}</p>
          <div className="bg-transparent p-1 rounded-full outline-1 outline-white group-hover:bg-black group-hover:outline-none transition-colors">
            <div className="bg-white p-1 rounded-full group-hover:bg-black transition-colors">
              <FaArrowRight className="w-3 h-auto text-black group-hover:text-white transition-colors" />
            </div>
          </div>
        </Link>
        </div>
      </div>
    </>
  );
}