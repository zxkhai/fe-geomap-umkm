import { foodOneImage, heroAbout } from "@/assets";
import Image from "next/image";


export default function aboutPage() {
  return (
    <>  
      {/* HERO SECTION */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang <span className="text-orange-500">GeoKuliner</span>
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Platform digital resmi dari Dinas Pariwisata Kabupaten Pamekasan &amp;
              Sampang yang hadir untuk mendukung perkembangan UMKM lokal agar semakin
              maju, dikenal luas, dan berdaya saing di era digital.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={heroAbout}
              alt="tentang geokuliner"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Visi & <span className="text-orange-500">Misi</span>
        </h2>

        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-8">
          <h3 className="font-semibold mb-2">Visi</h3>
          <p className="text-gray-600">
            Mewujudkan UMKM lokal yang berdaya saing, inovatif, dan berkelanjutan
            melalui teknologi digital.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            "Memberikan ruang promosi bagi UMKM daerah.",
            "Menyediakan informasi yang akurat & mudah diakses.",
            "Mendorong digitalisasi dan modernisasi UMKM.",
            "Menjadi penghubung UMKM, pemerintah, dan masyarakat.",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-orange-50 text-gray-700 rounded-2xl p-6 shadow-sm text-center hover:bg-orange-100 transition"
            >
              <h4 className="text-orange-500 font-semibold mb-2">Misi</h4>
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={foodOneImage}
              alt="kuliner"
              width={250}
              height={200}
              className="rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* MENGAPA GEOMAPS HADIR */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          “Mengapa <span className="text-orange-500">Geomaps UMKM</span> Hadir?”
        </h2>

        <div className="relative grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <p>Memperkenalkan produk UMKM unggulan daerah.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <p>Membuka akses pasar lebih luas bagi UMKM.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <p>Mendukung pertumbuhan ekonomi lokal.</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                4
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <p>
                  Menjadikan UMKM sebagai ikon wisata dan budaya daerah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AJAKAN */}
      <section className="text-center bg-gray-50 py-20 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Bersama Membangun <span className="text-orange-500">UMKM Lokal</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          “Mari dukung produk UMKM Pamekasan &amp; Sampang dengan bangga
          menggunakan produk lokal.”
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Jelajahi UMKM
        </button>
      </section>
    </>
  );
}