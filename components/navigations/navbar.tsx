"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState("IND");

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "MAP", href: "/map" },
    { name: "UMKM", href: "/umkm" },
    { name: "Tentang", href: "/tentang" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold">
          GEO <span className="text-orange-500">KULINER</span>
        </div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                pathname == link.href
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              } transition pb-1`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div
          onClick={() => setLang(lang === "IND" ? "ENG" : "IND")}
          className="flex items-center space-x-2 border rounded-full px-3 py-1 cursor-pointer hover:shadow-md transition"
        >
          <span className="text-sm font-medium">{lang}</span>
          <Image
            src={lang === "IND" ? "/flags/id.png" : "/flags/eng.png"}
            alt="flag"
            width={20}
            height={20}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}