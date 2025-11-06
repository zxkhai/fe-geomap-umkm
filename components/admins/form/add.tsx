import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export const AddUmkmForm = () => {
  return (
    <div className="px-6 md:px-10 py-8 max-w-4xl text-black">

      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-xl font-semibold">Data UMKM</h1>
        <span className="text-[var(--yellow-umkm)] text-xl font-bold">Tambah</span>
      </div>

      <div className="space-y-6 ">

        {/* Nama */}
        <div>
          <label className="block mb-1 font-medium">Nama Pemilik</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Nama pemilik UMKM" />
        </div>

        {/* Kontak */}
        <div>
          <label className="block mb-1 font-medium">Kontak</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Nomor kontak" />
        </div>

        {/* Alamat */}
        <div>
          <label className="block mb-1 font-medium">Alamat</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan alamat UMKM" />
        </div>

        {/* Lokasi */}
        <div>
          <label className="block mb-1 font-medium">Lokasi</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan no. longitude dan latitude" />
        </div>

        {/* Sejarah */}
        <div>
          <label className="block mb-1 font-medium">Sejarah/Cerita Kuliner</label>
          <textarea className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan sejarah UMKM"></textarea>
        </div>

        {/* Jenis produk */}
        <div>
          <label className="block mb-1 font-medium">Jenis Produk Kuliner</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan jenis (cth: makanan berat)" />
        </div>

        {/* Foto produk */}
        <label className="block mb-1 font-medium"> Foto Produk UMKM</label>
        <label className="relative flex items-center w-full border rounded-lg px-4 py-3 cursor-pointer bg-white">
          <div className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm mr-4">
              Choose File
          </div>
          <span className="text-gray-400">Pilih foto produk UMKM</span>
              <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
              />
        </label>

        {/* Kabupaten */}
        <div>
          <label className="block mb-1 font-medium">Kabupaten</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan nama kabupaten" />
        </div>

        {/* Foto tempat */}
        <label className="block mb-1 font-medium"> Foto Tempat</label>
        <label className="relative flex items-center w-full border rounded-lg px-4 py-3 cursor-pointer bg-white">
          <div className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm mr-4">
              Choose File
          </div>
          <span className="text-gray-400">Pilih foto produk UMKM</span>
              <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
              />
        </label>

        {/* Nama umkm */}
        <div>
          <label className="block mb-1 font-medium">Nama UMKM</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan nama UMKM" />
        </div>

        {/* Tahun mulai */}
        <div>
          <label className="block mb-1 font-medium">Tahun Mulai Beroperasi</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan tahun mulai usaha" />
        </div>

        {/* Tempat */}
        <div>
          <label className="block mb-1 font-medium">Klasifikasi/Tempat</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan klasifikasi (cth: Rumah makan)" />
        </div>

        {/* Metode pemesanan */}
        <div>
          <label className="block mb-1 font-medium">Metode Pemesanan</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan metode (cth: Pesan ditempat)"/>
        </div>

        {/* Metode pembayaran */}
        <div>
          <label className="block mb-1 font-medium">Metode Pembayaran</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan metode pembayaran (cth: Tunai)" />
        </div>

        {/* Sosmed */}
        <div>
          <label className="block mb-1 font-medium">Nama Media Sosial (IG/Tiktok/FB)</label>
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Tambahkan Media sosial" />
        </div>

      </div>

      <div className="block mb-1 w-full mt-10">
        <Link href="/admin/umkm/add" className="flex items-center gap-3 bg-black text-white px-10 py-1 rounded-lg justify-center">
          Tambah
          <FaPlus />
        </Link>
      </div>
    </div>
  );
};
