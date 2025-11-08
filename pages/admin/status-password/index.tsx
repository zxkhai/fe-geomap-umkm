import { passwordImage } from "@/assets";
import Link from "next/link";

export default function StatusPasswordPage() {
  return (
    <div
      className="w-full h-[600px] flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${typeof passwordImage === 'string' ? passwordImage : passwordImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-5">
          Password <span className="text-[var(--yellow-umkm)]">Baru</span> Sukses
        </h1>

        <p className="text-black mb-6 text-sm">
          Password berhasil diubah, silahkan login dengan password baru Anda.
        </p>

        <Link href={"/admin/login"} className="block w-full bg-black text-white font-medium py-3 rounded-full hover:bg-[var(--yellow-umkm)] hover:text-black transition-colors hover:cursor-pointer text-center">
          Login
        </Link>
      </div>
    </div>
  );
}