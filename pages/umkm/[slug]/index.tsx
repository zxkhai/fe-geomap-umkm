import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { foodOneImage } from "@/assets";
import { IoLocation } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const umkmData = [
  {
    slug: "warung-soto-rujak-cak-man",
    name: "Warung Soto Rujak Cak Man",
    location: "Sumenep",
    type : "Makanan Berat",
    image: foodOneImage,
    description:
      "Warung Soto Rujak Cak Man terkenal dengan cita rasa otentik dan bahan-bahan lokal segar.",
    address: "Jl. Raya Lenteng No.12, Sumenep, Jawa Timur",
    contact: "081234567890",
    hours: "Senin – Minggu: 08.00 – 20.00",
  },
  {
    slug: "es-degan-seger-bu-wahyu",
    name: "Es Degan Seger Bu Wahyu",
    location: "Pamekasan",
    type : "Minuman",
    image: foodOneImage,
    description:
      "Es Degan Seger Bu Wahyu menyajikan kesegaran kelapa muda alami dengan sirup khas Madura.",
    address: "Jl. Niaga No.45, Pamekasan, Jawa Timur",
    contact: "085331234639",
    hours: "Setiap Hari: 09.00 – 21.00",
  },
];

export default function UmkmDetailPage() {
  const router = useRouter();
  const { slug } = router.query; // ✅ ambil slug dari router
  const umkm = umkmData.find((u) => u.slug === slug);

  if (!umkm)
    return (
      <div className="text-center py-20 text-gray-500">UMKM tidak ditemukan.</div>
    );

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10">
      <div>
        <Image
          src={umkm.image}
          alt={umkm.name}
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{umkm.name}</h1>
        <div className="flex text-[var(--yellow-umkm)] items-center gap-2 text-sm mb-6">
          <IoLocation />
          <p>
            {umkm.location} / {umkm.type}
          </p>
        </div>

        <h2 className="font-semibold mb-2">Sejarah</h2>
        <p className="text-gray-700 mb-4">{umkm.description}</p>

        <h2 className="font-semibold mb-2">Alamat</h2>
        <p className="text-gray-700 mb-4">{umkm.address}</p>

        <h2 className="font-semibold mb-2">Kontak</h2>
        <p className="text-gray-700 mb-4 flex items-center gap-2"><BsTelephone /> {umkm.contact}</p>

        <h2 className="font-semibold mb-2">Jam Operasional</h2>
        <p className="text-gray-700 mb-6">{umkm.hours}</p>

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
  );
}
