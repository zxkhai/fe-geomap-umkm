import Link from "next/link";
import { FaArrowRight, FaRegUserCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-18 px-10 flex flex-col items-center overflow-hidden">
      {/* Circle Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center w-[800px] h-[800px]">
          <div className="absolute border-2 border-gray-500 rounded-full w-[800px] h-[800px]" />
          <div className="absolute border-2 border-gray-500 rounded-full w-[600px] h-[600px]" />
          <div className="absolute border-2 border-gray-500 rounded-full w-[400px] h-[400px]" />
          <div className="absolute border-2 border-gray-500 rounded-full w-[300px] h-[300px]" />
        </div>
      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-3 gap-7 text-white z-10">
        {/* Kiri */}
        <div className="md:text-left">
          <h2 className="text-xl font-bold">
            GEO <span className="text-[var(--yellow-umkm)]">KULINER</span>
          </h2>
          <p className="mt-3 text-sm">
            Satu peta, ribuan rasa untuk dijelajahi. Dukung UMKM dan banggakan rasa asli.
          </p>
          <Link href='/admin-login' className="inline-block mt-4 border px-4 py-2 rounded-full hover:bg-[var(--yellow-umkm)] hover:text-black transition-colors">
            <p className="flex items-center gap-2 text-sm font-medium">
              Login Admin
              <FaRegUserCircle className="h-6 w-auto" />
            </p>
          </Link>
        </div>

        {/* Tengah */}
        <div className=" text-center">
          <h3 className="font-bold mb-2">Hubungi Kami</h3>
          <p className="text-sm my-4">
            Ada pertanyaan atau masukan? Kami ingin mendengarnya dari Anda.
          </p>
          <div className="flex bg-[var(--yellow-umkm)] rounded-full overflow-hidden max-w-full items-center outline-3 outline-white">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow px-3 py-2 font-medium text-white placeholder-white outline-none max-w-[85%]"
              style={{ flexBasis: "0" }}
            />
            <button className="bg-[var(--yellow-umkm)] outline-2 outline-white p-1 rounded-full text-[var(--yellow-umkm)] hover:cursor-pointer transition-colors hover:bg-white hover:outline-none">
              <div className="bg-white p-1 rounded-full text-[var(--yellow-umkm)] transition-colors outline-none">
                <FaArrowRight 
                  className="w-2.5 h-auto"
                />
              </div>
            </button>
          </div>
      </div>

        {/* Kanan */}
        <div className="text-center">
          <h3 className="font-bold mb-2">Tautan Cepat</h3>
          <ul className="space-y-2 text-sm mt-4">
            <li><Link className="hover:text-[var(--yellow-umkm)] transition-colors" href="/">Beranda</Link></li>
            <li><Link className="hover:text-[var(--yellow-umkm)] transition-colors" href="/map">MAP</Link></li>
            <li><Link className="hover:text-[var(--yellow-umkm)] transition-colors" href="/umkm">UMKM</Link></li>
            <li><Link className="hover:text-[var(--yellow-umkm)] transition-colors" href="/about">Tentang</Link></li>
          </ul>
        </div>
      </div>

      <p className="relative text-center text-gray-500 text-xs mt-10 z-10">
        © 2025 GEO KULINER. All rights reserved.
      </p>
    </footer>
  );
}