import { foodOneImage, heroAbout, leftsideAbout, rightsideAbout } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>  
      {/* HERO SECTION */}
      <section
        className="w-full h-[540px] px-4 items-center flex"
        style={{
          backgroundImage: `url(${typeof heroAbout === 'string' ? heroAbout : heroAbout.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl px-12 flex-col text-white">
          <p className="font-bold text-5xl my-2">Tentang</p>
          <p className="text-[var(--yellow-umkm)] font-semibold text-5xl my-2">GeoKuliner</p>
          <p className="max-w-xl text-xl my-8">Platform digital resmi dari Dinas Pariwisata Kabupaten Pamekasan & Sampang yang hadir untuk mendukung perkembangan UMKM lokal agar semakin maju, dikenal luas, dan berdaya saing di era digital.</p>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Visi & <span className="text-[var(--yellow-umkm)]">Misi</span>
        </h2>

        <div className="bg-gray-200 rounded-2xl p-6 text-center mb-8 text-lg">
          <h3 className="font-semibold mb-2">Visi</h3>
          <p>
            Mewujudkan UMKM lokal yang berdaya saing, inovatif, dan berkelanjutan melalui teknologi digital.
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
              className="bg-gray-200 rounded-2xl p-6 shadow-sm text-center text-lg"
            >
              <h4 className="text-[var(--yellow-umkm)] font-semibold mb-2">Misi</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-3"> 
          {[...Array(8)].map((_, i) => (
            <Image
              key={i}
              src={foodOneImage}
              alt="kuliner"
              width={500}
              height={400}
              className="rounded-2xl object-cover aspect-[4/3]"
            />
          ))}
        </div>
      </section>

      {/* MENGAPA GEOMAPS HADIR */}
      <section className="relative max-w-full mx-auto px-6 py-20 overflow-hidden">
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
              <span className="block">"Mengapa</span>
              <span className="block text-[var(--yellow-umkm)]">Geomaps UMKM</span>
              <span className="block">Hadir?"</span>
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
                    <p>Memperkenalkan produk UMKM unggulan daerah.</p>
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
                    <p>Menjadikan UMKM sebagai ikon wisata dan budaya daerah.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Title */}
            <div className="flex justify-center py-4">
              <h2 className="text-center text-4xl xl:text-5xl font-bold leading-tight">
                <span className="block">"Mengapa</span>
                <span className="block text-[var(--yellow-umkm)]">Geomaps UMKM</span>
                <span className="block">Hadir?"</span>
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
                    <p>Membuka akses pasar lebih luas bagi UMKM.</p>
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
                    <p>Mendukung pertumbuhan ekonomi lokal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Simple grid */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -left-4 sm:-left-6 top-0 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-extrabold text-2xl sm:text-3xl z-10">
                  1
                </div>
                <div className="bg-white rounded-2xl p-4 pt-6 text-base sm:text-lg text-center leading-tight shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <p>Memperkenalkan produk UMKM unggulan daerah</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -left-4 sm:-left-6 top-0 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-extrabold text-2xl sm:text-3xl z-10">
                  2
                </div>
                <div className="bg-white rounded-2xl p-4 pt-6 text-base sm:text-lg text-center leading-tight shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <p>Membuka akses pasar lebih luas bagi UMKM.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -left-4 sm:-left-6 top-0 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-extrabold text-2xl sm:text-3xl z-10">
                  3
                </div>
                <div className="bg-white rounded-2xl p-4 pt-6 text-base sm:text-lg text-center leading-tight shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <p>Mendukung pertumbuhan ekonomi lokal.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -left-4 sm:-left-6 top-0 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-extrabold text-2xl sm:text-3xl z-10">
                  4
                </div>
                <div className="bg-white rounded-2xl p-4 pt-6 text-base sm:text-lg text-center leading-tight shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <p>Menjadikan UMKM sebagai ikon wisata dan budaya daerah.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AJAKAN */}
      <section className="flex flex-col justify-center items-center bg-white py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-5">
          Bersama Membangun <span className="text-[var(--yellow-umkm)]">UMKM Lokal</span>
        </h2>
        <p className="text-black mb-10 text-4xl text-center">
          “Mari dukung produk UMKM Pamekasan &amp; Sumenep dengan bangga menggunakan produk lokal.”
        </p>
        <Link
          href="/umkm"
          className="group flex items-center justify-center gap-5 bg-black text-white px-5 py-3 rounded-full hover:bg-white hover:outline-black hover:outline-2 transition-colors"
        >
          <p className="group-hover:text-black font-medium transition-colors">Jelajahi UMKM</p>
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