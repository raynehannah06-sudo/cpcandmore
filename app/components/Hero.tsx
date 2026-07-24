"use client";

import Image from "next/image";
import { MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] overflow-hidden pt-16"
    >
      {/* Diagonal hazard-stripe accent */}
      <div className="absolute inset-0 opacity-[0.04] hazard-stripe pointer-events-none" />

      {/* Red side bar accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d11a1a]" />

      {/* Grid overlay for industrial texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Service area badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[#d11a1a]/50 bg-[#d11a1a]/10">
              <MapPin size={14} className="text-[#d11a1a]" />
              <span className="text-[#d11a1a] text-xs font-bold tracking-[0.2em] uppercase">
                Georgia, Florida &amp; Surrounding Areas
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-white mb-6">
              Built for the{" "}
              <span className="text-[#d11a1a]">Toughest</span>{" "}
              Commercial Jobs
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Hood &amp; exhaust cleaning, grease trap service, pressure washing,
              and full facility maintenance — NFPA 96 compliant, documented, and
              done right the first time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-[#d11a1a] hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d11a1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                Request Service
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="px-8 py-4 border border-white/30 hover:border-white text-white font-black uppercase tracking-widest text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                View Services
              </button>
            </div>

            {/* Trust markers */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-gray-500 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#d11a1a] inline-block" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#d11a1a] inline-block" />
                NFPA 96 Compliant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#d11a1a] inline-block" />
                Service Reports Provided
              </span>
            </div>
          </div>

          {/* Logo / visual */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#d11a1a]/30 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#d11a1a]/10 scale-125" />
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center bg-[#1a1a1a] rounded-full border border-[#2a2a2a]">
                <Image
                  src="/logo.png"
                  alt="Commercial Pro Clean — Shield logo"
                  width={280}
                  height={280}
                  className="object-contain p-8 translate-x-3 lg:translate-x-5"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-[#d11a1a] transition-colors animate-bounce focus:outline-none"
        aria-label="Scroll to services"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
