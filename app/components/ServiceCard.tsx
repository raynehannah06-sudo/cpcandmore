import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="group relative bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#d11a1a]/60 transition-all duration-200 p-6">
      {/* Red corner accent */}
      <div className="absolute top-0 left-0 w-6 h-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[24px] border-t-[#d11a1a] border-r-[24px] border-r-transparent" />
      </div>

      <div className="mb-4 w-12 h-12 flex items-center justify-center bg-[#d11a1a]/10 group-hover:bg-[#d11a1a]/20 transition-colors duration-200">
        <Icon size={24} className="text-[#d11a1a]" aria-hidden="true" />
      </div>

      <h3 className="text-white font-black uppercase tracking-wide text-base mb-2 leading-snug">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </article>
  );
}
