"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Compliance", href: "#compliance" },
  { label: "Schedule", href: "#schedule" },
  { label: "Industries", href: "#industries" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    // Small delay to let mobile menu close before scroll
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-[#0a0a0a] shadow-lg shadow-black/40" : "bg-[#0a0a0a]/95"
      }`}
    >
      {/* Red top accent bar */}
      <div className="h-1 bg-[#d11a1a]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNav("#hero")} className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Commercial Pro Clean logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <div className="leading-tight">
              <span className="block text-white font-black text-sm tracking-widest uppercase">
                Commercial Pro
              </span>
              <span className="block text-[#d11a1a] font-bold text-xs tracking-widest uppercase">
                Clean
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-gray-300 hover:text-white text-sm font-semibold tracking-wider uppercase transition-colors duration-150 focus:outline-none focus-visible:underline"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="ml-4 px-4 py-2 bg-[#d11a1a] hover:bg-red-700 text-white text-sm font-black uppercase tracking-widest transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d11a1a]"
            >
              Request Service
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d11a1a]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a]">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-gray-300 hover:text-white py-3 text-sm font-semibold tracking-wider uppercase border-b border-[#1a1a1a] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-3 px-4 py-3 bg-[#d11a1a] hover:bg-red-700 text-white text-sm font-black uppercase tracking-widest transition-colors text-center"
            >
              Request Service
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
