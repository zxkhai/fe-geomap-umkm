import Image from "next/image";
import {heroImage, foodOneImage, foodTwoImage, foodThreeImage, foodTrenImage, newsImage} from "@/assets";

export default function landingPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Satu Peta, Ribuan Rasa <br />
              <span className="text-orange-500">
                Kuliner Pamekasan & Sumenep
              </span>
            </h1>
            <p className="text-gray-600 mt-4">
              Temukan kuliner lokal terbaik, dari jajanan tradisional hingga makanan kekinian – semua dalam satu peta interaktif.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                Jelajahi MAP
              </button>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
                Jelajahi UMKM
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={heroImage}
              alt="kuliner hero"
              width={450}
              height={450}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <div className="border rounded-2xl py-6">
          <h3 className="text-2xl font-bold text-orange-500">200+</h3>
          <p className="text-gray-600">Pelaku UMKM telah terpetakan</p>
        </div>
        <div className="border rounded-2xl py-6">
          <h3 className="text-2xl font-bold text-orange-500">15+</h3>
          <p className="text-gray-600">Jenis kuliner tradisional & modern</p>
        </div>
        <div className="border rounded-2xl py-6">
          <h3 className="text-2xl font-bold text-orange-500">∞</h3>
          <p className="text-gray-600">Rasa yang tak terlupakan</p>
        </div>
      </section>

      {/* KULINER TERPOPULER */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Kuliner <span className="text-orange-500">Terpopuler</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* dummy data => ini nanti fetch dari API */}
          {[foodOneImage, foodTwoImage, foodThreeImage, foodOneImage].map((img, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
                <Image
                  src={img}
                  alt="kuliner"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  about="kuliner"
                />
                <div className="p-4">
                  <p className="font-semibold mb-2">Nama Kuliner</p>
                  <button className="bg-black text-white px-3 py-1 text-sm rounded-full hover:bg-gray-800">
                    Lihat UMKM
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={foodTrenImage}
            alt="trending"
            width={500}
            height={400}
            className="rounded-2xl"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Trending <span className="text-orange-500">Hari Ini 🔥</span>
          </h2>
          <h3 className="text-xl font-semibold mb-3">Rumah Makan Barokah</h3>
          <p className="text-gray-600 mb-4">
            Nasi Ramos atau yang di Pamekasan lebih dikenal dengan sebutan
            “Nasi Ramoy”, adalah sajian nasi campur khas Madura.
          </p>
          <div className="flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              Lihat di Peta
            </button>
            <button className="border border-black px-4 py-2 rounded-full hover:bg-gray-100">
              Lihat Detail
            </button>
          </div>
        </div>
      </section>

      {/* BERITA UMKM */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Berita <span className="text-orange-500">UMKM Terkini</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                <p className="text-orange-500 text-xs mb-1">
                  15 September 2025 – Sampang
                </p>
                <h3 className="font-semibold mb-2">
                  Bazar UMKM Kuliner Sampang 2025 Resmi Dibuka
                </h3>
                <button className="text-orange-500 hover:underline text-sm">
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
