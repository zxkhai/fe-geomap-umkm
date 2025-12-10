import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaTimes } from "react-icons/fa";

interface PopSlideDetailProps {
  isOpen: boolean;
  onClose: () => void;
  umkm: {
    name: string;
    location: string;
    story: string;
    address: string;
    phone: string;
    image: string;
    slug?: string;
  } | null;
}

export default function PopSlideDetail({ isOpen, onClose, umkm }: PopSlideDetailProps) {
  if (!umkm) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-[1000] ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-[1001] overflow-y-auto transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Detail Kuliner</h2>
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
              src={umkm.image}
              alt={umkm.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Name and Location */}
          <div>
            <h3 className="text-xl font-bold mb-1">{umkm.name}</h3>
            <p className="text-[var(--yellow-umkm)] text-sm flex items-center gap-1">
              <FaMapMarkerAlt className="w-3 h-3" />
              {umkm.location}
            </p>
          </div>

          {/* History Section */}
          <div>
            <h4 className="font-bold mb-2">Sejarah</h4>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              {(() => {
                const words = umkm.story.trim().split(/\s+/).filter(Boolean);
                const truncated = words.length > 50 ? words.slice(0, 50).join(' ') + '...' : umkm.story;
                return truncated;
              })()}
            </p>
            {umkm.slug && umkm.story.trim().split(/\s+/).filter(Boolean).length > 50 && (
              <Link href={`/umkm/${umkm.slug}`} className="text-sm text-[var(--yellow-umkm)] hover:underline mt-1 inline-block">
                Baca selengkapnya
              </Link>
            )}
          </div>

          {/* Address Section */}
          <div>
            <h4 className="font-bold mb-2">Alamat</h4>
            <p className="text-sm text-gray-700 flex items-start gap-2">
              <FaMapMarkerAlt className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
              <span>{umkm.address}</span>
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-2">Kontak</h4>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              <FaPhoneAlt className="w-4 h-4 text-green-600" />
              <a href={`tel:${umkm.phone}`} className="hover:underline">
                {umkm.phone}
              </a>
            </p>
          </div>

          {/* Photo Section */}
          <div>
            <h4 className="font-bold mb-2">Photo</h4>
            {/* Add more photos here if needed */}
          </div>

        <Link
          href="/map"
          className="group w-full flex items-center justify-between gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:outline-black hover:outline-2 transition-colors"
        >
          <p className="group-hover:text-black font-medium transition-colors">Hubungi</p>
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