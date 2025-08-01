"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "About us", href: "/about" },
    // { label: "Services", href: "/services" },
    // { label: "Insights", href: "/insights" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="px-6 py-6 md:py-8 md:px-12 lg:px-16 xl:px-20 bg-white sticky top-0 z-50 border-b border-gray-100">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_text.svg"
            alt="Ahana Studios Logo"
            width={0}
            height={0}
            sizes="200vw"
            className="w-48 h-auto mr-3"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-12">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                isActive(item.href)
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.label}
              <span 
                className={`absolute -bottom-1 left-0 h-px bg-black transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
          <button className="bg-black text-white px-6 py-2.5 text-sm font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
            Start Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 group p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-100"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-black text-white px-6 py-2.5 text-sm font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 self-start">
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 