import {
  Flame,
  Droplets,
  Truck,
  Building2,
  Shield,
  Car,
  Waves,
  LayoutGrid,
  Phone,
  Mail,
  Globe,
  MapPin,
  FileCheck,
  Award,
  ClipboardCheck,
  Wrench,
  RefreshCw,
} from "lucide-react";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import Section, { SectionHeading } from "@/app/components/Section";
import ServiceCard from "@/app/components/ServiceCard";
import ScheduleTable from "@/app/components/ScheduleTable";
import ContactForm from "@/app/components/ContactForm";

// ─── Services ────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Flame,
    title: "Hood & Exhaust Cleaning",
    description:
      "Full kitchen exhaust system cleaning — hood, filters, ductwork, and rooftop fan. NFPA 96 compliant with service report and inspection sticker provided.",
  },
  {
    icon: Droplets,
    title: "Grease Trap Service",
    description:
      "Scheduled grease trap pumping and cleaning to prevent FOG buildup, eliminate odors, and keep you compliant with local grease ordinances.",
  },
  {
    icon: Waves,
    title: "Pressure Washing",
    description:
      "High-pressure cleaning for concrete, asphalt, building exteriors, dumpster pads, and drive-throughs. Removes grease, grime, and biological buildup.",
  },
  {
    icon: Truck,
    title: "Trailer Cleaning",
    description:
      "Interior and exterior trailer washing for food-service and commercial fleets. We remove grease, residue, and odors to keep your equipment road-ready.",
  },
  {
    icon: Building2,
    title: "Building Washing",
    description:
      "Soft-wash and pressure-wash services for commercial building facades, storefronts, and parking structures. Restore curb appeal and protect your asset.",
  },
  {
    icon: LayoutGrid,
    title: "Gated Community Maintenance",
    description:
      "Common area pressure washing, entryway cleaning, and surface maintenance for HOAs and gated communities — keeping shared spaces presentable year-round.",
  },
  {
    icon: Car,
    title: "Car Dealership Lot Cleaning",
    description:
      "Lot washing, curb cleaning, and showroom approach maintenance for auto dealerships. A clean lot reflects the quality of what you sell.",
  },
  {
    icon: Shield,
    title: "Car Wash Facility Cleaning",
    description:
      "Deep cleaning for car wash bays, equipment areas, and surrounding hardscapes. We handle the grime so your facility stays in top operating condition.",
  },
  {
    icon: Wrench,
    title: "Facility Maintenance",
    description:
      "Ongoing maintenance programs for commercial facilities — scheduled visits, equipment checks, and upkeep that keeps your operation running without interruption.",
  },
  {
    icon: RefreshCw,
    title: "Weekly Filter Exchange",
    description:
      "Regular hood filter swaps on a weekly schedule. Clean filters mean better airflow, reduced fire risk, and fewer deep-clean intervals — a simple service that pays for itself.",
  },
];

// ─── Industries ──────────────────────────────────────────────────────────────

const industries = [
  {
    icon: Flame,
    label: "Restaurants & Food Service",
    desc: "From QSRs to full-service dining — we keep your kitchen exhaust system clean and code-compliant.",
  },
  {
    icon: Building2,
    label: "Hotels & Hospitality",
    desc: "Kitchen exhaust, grease trap, and exterior cleaning for hotel restaurants and banquet facilities.",
  },
  {
    icon: Car,
    label: "Car Dealerships",
    desc: "Lot cleaning, building wash, and bay maintenance that reflects your brand's professional image.",
  },
  {
    icon: Waves,
    label: "Car Wash Facilities",
    desc: "Bay deep-cleans, equipment area washdowns, and exterior surface maintenance.",
  },
  {
    icon: LayoutGrid,
    label: "Gated Communities & HOAs",
    desc: "Scheduled common-area pressure washing to maintain property values and resident satisfaction.",
  },
  {
    icon: Building2,
    label: "Commercial Property Managers",
    desc: "Multi-site service contracts with consistent scheduling and documentation for each location.",
  },
  {
    icon: Truck,
    label: "Fleet & Trailer Operations",
    desc: "Trailer interiors, bays, and vehicle exteriors — cleaned to health and DOT standards.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1 · Hero */}
        <Hero />

        {/* 2 · Services */}
        <Section id="services" dark>
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            subtitle="From the kitchen exhaust to the parking lot — we cover every cleaning need your commercial facility has."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </Section>

        {/* 3 · Compliance */}
        <Section id="compliance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Code Compliance"
                title="We Don't Just Clean. We Document."
                subtitle="Regulatory compliance isn't an afterthought — it's built into every job we run."
              />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#0a0a0a] font-black">NFPA 96</strong> — the National Fire
                  Protection Association&apos;s Standard for Ventilation Control and Fire Protection of
                  Commercial Cooking Operations — sets the minimum requirements for kitchen exhaust
                  cleaning in the United States. Violations can result in failed inspections, voided
                  insurance policies, and facility shutdowns.
                </p>
                <p>
                  <strong className="text-[#0a0a0a] font-black">IKECA</strong> (International Kitchen
                  Exhaust Cleaning Association) standards go further, providing best-practice guidelines
                  for cleaning procedures, crew training, and documentation. We align our work to both.
                </p>
                <p>
                  Every service call ends with a{" "}
                  <strong className="text-[#0a0a0a] font-black">written service report</strong> detailing
                  areas cleaned, access points, deficiencies noted, and a dated inspection sticker affixed
                  to the hood. Your records are clean — literally and on paper.
                </p>
              </div>
            </div>

            {/* Compliance cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: FileCheck,
                  title: "NFPA 96 Compliant",
                  desc: "All hood and exhaust work meets or exceeds NFPA 96 standards for grease removal and fire prevention.",
                },
                {
                  icon: Award,
                  title: "IKECA Standards",
                  desc: "We follow IKECA best practices for cleaning procedures, worker safety, and quality documentation.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Service Reports & Stickers",
                  desc: "Every job includes a detailed service report and a dated inspection sticker for your records and insurance needs.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 items-start p-5 border border-gray-200 hover:border-[#d11a1a]/40 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#d11a1a]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#d11a1a]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-wide text-sm text-[#0a0a0a] mb-1">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}

              <div className="hazard-stripe h-3 mt-2 opacity-30" />
            </div>
          </div>
        </Section>

        {/* 4 · Schedule */}
        <Section id="schedule" dark>
          <SectionHeading
            eyebrow="Cleaning Frequency"
            title="How Often Do You Need Service?"
            subtitle="NFPA 96 mandates cleaning intervals based on cooking volume and fuel type. Use this guide to determine your facility's schedule."
            light
          />
          <ScheduleTable />
        </Section>

        {/* 5 · Industries */}
        <Section id="industries">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Industries We Work In"
            subtitle="We've built our service offerings around the real-world needs of commercial operations across the FL–GA line."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group flex gap-4 items-start p-5 border border-gray-200 hover:border-[#d11a1a]/50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#0a0a0a] group-hover:bg-[#d11a1a] transition-colors duration-200 flex items-center justify-center">
                  <Icon size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-wide text-sm text-[#0a0a0a] mb-1.5">
                    {label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 6 · Contact */}
        <Section id="contact" dark>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Get In Touch"
                title="Request a Service Quote"
                subtitle="Fill out the work order form and we'll follow up within 1 business day."
                light
              />

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="text-[#d11a1a] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+12295310818"
                      className="text-white hover:text-[#d11a1a] transition-colors text-sm"
                    >
                      (229) 531-0818
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="text-[#d11a1a] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:raynehannah06@gmail.com"
                      className="text-white hover:text-[#d11a1a] transition-colors text-sm"
                    >
                      raynehannah06@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe
                    size={18}
                    className="text-[#d11a1a] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-0.5">
                      Website
                    </p>
                    <a
                      href="https://www.cpcandmore.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#d11a1a] transition-colors text-sm"
                    >
                      www.cpcandmore.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-[#d11a1a] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-0.5">
                      Service Area
                    </p>
                    <p className="text-white text-sm">
                      Georgia, Florida &amp; Surrounding Areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 hazard-stripe h-2 opacity-40" />
            </div>

            {/* Form panel */}
            <div className="lg:col-span-3 bg-[#1a1a1a] border border-[#2a2a2a] p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
