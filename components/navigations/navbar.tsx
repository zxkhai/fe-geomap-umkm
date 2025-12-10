"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isEnglish, setIsEnglish] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Map", href: "/map" },
    { name: "Kuliner", href: "/culinary" },
    { name: "Tentang", href: "/about" },
  ];

  return (
    <nav className="w-full bg-white drop-shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg text-gray-700 font-bold">
          GEO <span className="text-[var(--yellow-umkm)]">KULINER</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                pathname == link.href
                  ? "text-[var(--yellow-umkm)] font-bold border-b-2 border-[var(--yellow-umkm)]"
                  : "text-gray-500 font-medium hover:text-[var(--yellow-umkm)]"
              } transition pb-1`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Language Switcher - Desktop */}
        <div
          onClick={toggleLanguage}
          className="hidden md:flex relative items-center w-24 h-9 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300"
        >
          {/* Background */}
          <div className={`absolute inset-0 flex items-center justify-${isEnglish ? "end" : "start"} px-1`}>
            <div
              className={`w-[65%] h-7 bg-[var(--yellow-umkm)] rounded-full transition-transform duration-300 ease-in-out ${
                isEnglish ? "translate-x-[5%]" : "translate-x-0"
              }`}
            ></div>
          </div>

          {/* Content */}
          <div className="relative flex items-center justify-between w-full px-2 z-10 text-gray-800 font-medium">
            <div className="flex items-center gap-1">
              {!isEnglish && (
                <>
                  <p className="text-xs font-medium">IND</p>
                  <Image
                    src="/flags/id.png"
                    alt="ID Flag"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/eng.png"
                    alt="UK Flag"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </>
              )}
              {isEnglish && (
                <>
                  <Image
                    src="/flags/id.png"
                    alt="ID Flag"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/eng.png"
                    alt="UK Flag"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  <p className="text-xs font-medium">ENG</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white drop-shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={`block py-2 ${
                pathname == link.href
                  ? "text-[var(--yellow-umkm)] font-bold border-l-4 border-[var(--yellow-umkm)] pl-3"
                  : "text-gray-500 font-medium hover:text-[var(--yellow-umkm)] pl-3"
              } transition`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-gray-200">
            <div
              onClick={toggleLanguage}
              className="relative flex items-center w-24 h-9 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300 mx-auto"
            >
              {/* Background */}
              <div className={`absolute inset-0 flex items-center justify-${isEnglish ? "end" : "start"} px-1`}>
                <div
                  className={`w-[65%] h-7 bg-[var(--yellow-umkm)] rounded-full transition-transform duration-300 ease-in-out ${
                    isEnglish ? "translate-x-[5%]" : "translate-x-0"
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative flex items-center justify-between w-full px-2 z-10 text-gray-800 font-medium">
                <div className="flex items-center gap-1">
                  {!isEnglish && (
                    <>
                      <p className="text-xs font-medium">IND</p>
                      <Image
                        src="/flags/id.png"
                        alt="ID Flag"
                        width={25}
                        height={25}
                        className="rounded-full"
                      />
                      <Image
                        src="/flags/eng.png"
                        alt="UK Flag"
                        width={25}
                        height={25}
                        className="rounded-full"
                      />
                    </>
                  )}
                  {isEnglish && (
                    <>
                      <Image
                        src="/flags/id.png"
                        alt="ID Flag"
                        width={25}
                        height={25}
                        className="rounded-full"
                      />
                      <Image
                        src="/flags/eng.png"
                        alt="UK Flag"
                        width={25}
                        height={25}
                        className="rounded-full"
                      />
                      <p className="text-xs font-medium">ENG</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}