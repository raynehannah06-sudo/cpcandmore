import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Compliance", href: "#compliance" },
  { label: "Schedule", href: "#schedule" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      {/* Red top line */}
      <div className="h-1 bg-[#d11a1a]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Commercial Pro Clean & More logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="leading-tight">
                <span className="block text-white font-black text-sm tracking-widest uppercase">
                  Commercial Pro
                </span>
                <span className="block text-[#d11a1a] font-bold text-xs tracking-widest uppercase">
                  Clean &amp; More, LLC
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Professional commercial cleaning serving the Florida–Georgia line
              region from Valdosta, GA.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 border border-[#2a2a2a] text-xs text-gray-500 font-bold uppercase tracking-widest">
              Licensed &amp; Insured
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#d11a1a] text-sm font-semibold uppercase tracking-wider transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-500">
              <li>
                <span className="text-gray-600 font-bold uppercase tracking-wider text-xs block">Phone</span>
                <a href="tel:+12295310818" className="hover:text-[#d11a1a] transition-colors">
                  (229) 531-0818
                </a>
              </li>
              <li className="mt-2">
                <span className="text-gray-600 font-bold uppercase tracking-wider text-xs block">Email</span>
                <a href="mailto:cpc@cpcandmore.com" className="hover:text-[#d11a1a] transition-colors">
                  cpc@cpcandmore.com
                </a>
              </li>
              <li className="mt-2">
                <span className="text-gray-600 font-bold uppercase tracking-wider text-xs block">Website</span>
                <a
                  href="https://www.cpcandmore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d11a1a] transition-colors"
                >
                  www.cpcandmore.com
                </a>
              </li>
              <li className="mt-2">
                <span className="text-gray-600 font-bold uppercase tracking-wider text-xs block">Service Area</span>
                <span>Georgia, Florida &amp; Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {year} Commercial Pro Clean &amp; More, LLC. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#d11a1a] inline-block" />
            Licensed &amp; Insured
            <span className="w-1.5 h-1.5 bg-[#d11a1a] inline-block" />
            Valdosta, GA
          </p>
        </div>
      </div>
    </footer>
  );
}
