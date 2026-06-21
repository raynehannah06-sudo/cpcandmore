import { ReactNode } from "react";

interface SectionProps {
  id: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, dark = false, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${dark ? "bg-[#0a0a0a] text-white" : "bg-white text-[#0a0a0a]"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="mb-12 lg:mb-16">
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#d11a1a]" />
          <span className="text-[#d11a1a] text-xs font-black uppercase tracking-[0.25em]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tight ${
          light ? "text-white" : "text-[#0a0a0a]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${light ? "text-gray-400" : "text-[#6b7280]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
