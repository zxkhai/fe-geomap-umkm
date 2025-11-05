import { passwordImage } from "@/assets";
import Link from "next/link";

export default function ForgotPasswordPage() {
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
          Lupa <span className="text-[var(--yellow-umkm)]">Password?</span>
        </h1>

        <p className="text-black mb-6 text-sm">
          Masukkan email admin untuk mengirim kode reset
        </p>

        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="Masukkan Email"
            className="w-full border border-gray-500 rounded-full px-8 py-4 text-sm outline-none"
          />
        </div>

        <button className="w-full bg-black text-white font-medium py-3 rounded-full hover:bg-[var(--yellow-umkm)] hover:text-black transition-colors hover:cursor-pointer">
          Kirim Kode
        </button>

        <p className="mt-5 text-sm text-gray-600">
          Ingat password?{" "}
          <Link href="/admin/login" className="text-black font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}