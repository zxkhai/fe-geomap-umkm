import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Kiri */}
        <div>
          <h2 className="text-xl font-semibold">
            GEO <span className="text-orange-500">KULINER</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Satu peta, ribuan rasa untuk dijelajahi. Dukung UMKM dan banggakan rasa asli.
          </p>
          <Link href='/admin-login' className="mt-4 border px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            Login Admin
          </Link>
        </div>

        {/* Tengah */}
        <div>
          <h3 className="font-semibold mb-2">Hubungi kami</h3>
          <p className="text-gray-400 text-sm mb-2">
            Ada pertanyaan atau masukan? Kami ingin mendengarnya dari Anda.
          </p>
          <div className="flex bg-white rounded-full overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow px-3 py-2 text-black outline-none"
            />
            <button className="bg-orange-500 px-4 text-white">Kirim</button>
          </div>
        </div>

        {/* Kanan */}
        <div>
          <h3 className="font-semibold mb-2">Tautan Cepat</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/map">MAP</Link></li>
            <li><Link href="/umkm">UMKM</Link></li>
            <li><Link href="/tentang">Tentang</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs mt-10">
        © 2025 GEO KULINER. All rights reserved.
      </p>
    </footer>
  );
}