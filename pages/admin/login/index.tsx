import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { adminLoginImage } from "@/assets";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function LoginPage() {
  
  const [showPassword, setShowPassword] = useState(false);

  return (
  <>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 px-6 pb-16">

      {/* Left: Form column (larger) */}
      <div className="w-full md:w-3/5 flex items-center justify-center">
        <form className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Hallo <span className="text-[var(--yellow-umkm)]">Admin</span></h2>
          <p className="text-center mb-6">Silakan masuk menggunakan username dan password Anda.</p>

          <div className="mb-6">
            <input type="text" name="username" placeholder="Username" className="border border-gray-500 rounded-full p-3 w-full pl-10 outline-none" />
          </div>

          <div className="mb-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="border border-gray-500 rounded-full p-3 w-full pr-12 pl-10 outline-none"
            />
            <button
              type="button"
              aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
              onClick={() => setShowPassword((pass) => !pass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 p-1 hover:cursor-pointer"
            >
              {showPassword ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
            </button>
          </div>

          <div className="text-right mb-6">
            <Link href="/admin/forgot-password" className="text-sm text-black font-bold">Lupa Password?</Link>
          </div>

          <button 
            type="submit" 
            className="hover:bg-[var(--yellow-umkm)] bg-black hover:text-black text-white font-semibold py-3 px-6 rounded-full w-full hover:cursor-pointer">
              Login
          </button>
        </form>
      </div>

      {/* Right: Image column (smaller) */}
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <div className="w-full h-64 md:h-[520px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={adminLoginImage}
            alt="Admin Login"
            width={800}
            height={520}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </>
  )
}