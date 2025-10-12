import Image from "next/image";
import Link from "next/link";

const umkmData = [
  {
    name: "Warung Soto Rujak Cak Man",
    location: "Sumenep",
    image: "/images/soto.jpg",
    slug: "warung-soto-rujak-cak-man",
  },
  {
    name: "Es Degan Seger Bu Wahyu",
    location: "Pamekasan",
    image: "/images/es-degan.jpg",
    slug: "es-degan-seger-bu-wahyu",
  },
  // tambahkan data lainnya...
];

export default function UMKMPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Ragam Kuliner UMKM{" "}
          <span className="text-orange-500">Pamekasan & Sumenep</span>
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari daerah/makanan"
            className="w-full max-w-lg border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Grid UMKM */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {umkmData.map((item) => (
            <div
              key={item.slug}
              className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-orange-400">{item.location}</p>
                <h3 className="font-semibold mb-4">{item.name}</h3>
                <Link
                  href={`/umkm/${item.slug}`}
                  className="block text-center bg-black text-white rounded-full py-2 hover:bg-orange-500 transition"
                >
                  Lihat UMKM
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
