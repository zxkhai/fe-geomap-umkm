import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Culinary } from "@/lib/culinary/culinary.type";
import { IoLocation } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { culinaryService } from "@/lib/culinary/culinary.service";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CulinaryDetailPage() {
  const router = useRouter();
  const { slug } = router.query; // Slug from URL
  const [culinary, setCulinary] = useState<Culinary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { t } = useLanguage();

  useEffect(() => {
    if (!slug || typeof slug !== 'string') return;

    const fetchCulinaryDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch Culinary by slug
        const result = await culinaryService.getBySlug(slug);
        
        if (result.success && result.data) {
          setCulinary(result.data);
        } else {
          setError(result.error || "Culinary tidak ditemukan");
        }
      } catch (err) {
        console.error("Error fetching Culinary detail:", err);
        setError("Gagal memuat data Culinary");
      } finally {
        setLoading(false);
      }
    };

    fetchCulinaryDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !culinary) {
    return (
      <div className="text-center py-20 text-gray-500">
        {error || "Culinary tidak ditemukan."}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10">
      <div>
        <Image
          src={culinary.product_pict ?? "/placeholder.png"}
          alt={culinary.name}
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{culinary.name}</h1>
        <div className="flex text-(--yellow-umkm) items-center gap-2 text-sm mb-6">
          <IoLocation />
          <p>
            {culinary.regency} / {culinary.classification || culinary.type || "Culinary"}
          </p>
        </div>

        {culinary.story && (
          <>
            <h2 className="font-semibold mb-2">{t('detail.history')}</h2>
            <p className="text-gray-700 mb-4 text-justify">{culinary.story}</p>
          </>
        )}

        <h2 className="font-semibold mb-2">{t('detail.owner')}</h2>
        <p className="text-gray-700 mb-4">{culinary.owner}</p>

        <h2 className="font-semibold mb-2">{t('detail.address')}</h2>
        <p className="text-gray-700 mb-4">{culinary.address}</p>

        <h2 className="font-semibold mb-2">{t('detail.contact')}</h2>
        <p className="text-gray-700 mb-4 flex items-center gap-2">
          <BsTelephone /> {culinary.phone}
        </p>

        {culinary.year && (
          <>
            <h2 className="font-semibold mb-2">{t('detail.year')}</h2>
            <p className="text-gray-700 mb-4">{culinary.year}</p>
          </>
        )}

        {culinary.payment && (
          <>
            <h2 className="font-semibold mb-2">{t('detail.payment')}</h2>
            <p className="text-gray-700 mb-4">{culinary.payment}</p>
          </>
        )}

        {culinary.order && (
          <>
            <h2 className="font-semibold mb-2">{t('detail.order')}</h2>
            <p className="text-gray-700 mb-6">{culinary.order}</p>
          </>
        )}

        {culinary.medsos && culinary.medsos.length > 0 && (
          <>
            <h2 className="font-semibold mb-2">{t('detail.socialMedia')}</h2>
            <div className="flex flex-col gap-2 mb-6">
              {culinary.medsos.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  <span className="font-medium">{social.platform}:</span>
                  <span>@{social.username}</span>
                </a>
              ))}
            </div>
          </>
        )}

        <a
          href={`tel:${culinary.phone}`}
          className="group w-full flex items-center justify-between gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:outline-black hover:outline-2 transition-colors"
        >
          <p className="group-hover:text-black font-medium transition-colors">{t('detail.call')}</p>
          <div className="bg-transparent p-1 rounded-full outline-1 outline-white group-hover:bg-black group-hover:outline-none transition-colors">
            <div className="bg-white p-1 rounded-full group-hover:bg-black transition-colors">
              <FaArrowRight className="w-3 h-auto text-black group-hover:text-white transition-colors" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}