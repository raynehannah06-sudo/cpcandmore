import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Real before/after job photos. Add more pairs to this array as you collect
// them (drop the files in /public/work and reference them below).
const items = [
  {
    before: "/work/hood-before.jpg",
    after: "/work/hood-after.jpg",
    caption: "Kitchen Hood & Exhaust",
    blurb:
      "Grease-caked hood, filters, and plenum stripped back to bare, code-ready stainless — documented and inspection-ready.",
  },
];

export default function Work() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8">
      {items.map((item) => (
        <article key={item.caption} className="border border-[#2a2a2a]">
          <div className="relative flex">
            {/* Before */}
            <div className="relative w-1/2 aspect-[4/3] overflow-hidden">
              <Image
                src={item.before}
                alt={`${item.caption} — before cleaning`}
                fill
                sizes="(max-width: 1024px) 50vw, 400px"
                className="object-cover"
              />
              <span className="absolute bottom-0 left-0 bg-[#1a1a1a] text-white text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5">
                Before
              </span>
            </div>

            {/* Divider */}
            <div className="w-1 bg-[#d11a1a] relative z-10" />

            {/* After */}
            <div className="relative w-1/2 aspect-[4/3] overflow-hidden">
              <Image
                src={item.after}
                alt={`${item.caption} — after cleaning`}
                fill
                sizes="(max-width: 1024px) 50vw, 400px"
                className="object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-[#d11a1a] text-white text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5">
                After
              </span>
            </div>

            {/* Center arrow badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#d11a1a] border-2 border-[#0a0a0a] flex items-center justify-center">
              <ArrowRight size={24} className="text-white" aria-hidden="true" />
            </div>
          </div>

          {/* Caption */}
          <div className="p-6">
            <h3 className="text-white font-black uppercase tracking-wide text-lg mb-1.5">
              {item.caption}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.blurb}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
