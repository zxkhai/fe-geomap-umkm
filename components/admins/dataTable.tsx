import { umkmDataType } from "./types";

export default function DataTable({ rows }: { rows: umkmDataType[] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border">
    {/* Button add */}
    <div className="p-4 flex justify-end">
      <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl">
        Tambah <span className="text-lg">＋</span>
      </button>
    </div>
    {/* Table Data */}
      <table className="w-full text-sm text-gray-900">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            {["No.", "Nama Pemilik", "Kontak", "Alamat", "Lokasi", "Sejarah", "Jenis Produk"].map(h => (
              <th key={h} className="text-left px-5 py-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="px-5 py-4 text-gray-900">{r.no}</td>
              <td className="px-5 py-4 whitespace-nowrap text-gray-900">{r.pemilik}</td>
              <td className="px-5 py-4 text-gray-900">{r.kontak}</td>
              <td className="px-5 py-4 text-gray-900">{r.alamat}</td>
              <td className="px-5 py-4 text-gray-600">{r.lokasi}</td>
              <td className="px-5 py-4 truncate max-w-[180px] text-gray-900" title={r.sejarah}>{r.sejarah}</td>
              <td className="px-5 py-4 text-gray-900">{r.jenis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
