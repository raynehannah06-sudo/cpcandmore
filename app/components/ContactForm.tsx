"use client";

import { useState, useEffect, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  facilityType: string;
  message: string;
}

const SERVICES = [
  "Commercial Hood & Exhaust Cleaning",
  "Grease Trap Service",
  "Pressure Washing",
  "Trailer Cleaning",
  "Building Washing",
  "Gated Community Maintenance",
  "HOA Service",
  "Car Dealership Lot Cleaning",
  "Car Wash Facility Cleaning",
  "Other / General Inquiry",
];

const FACILITY_TYPES = [
  "Restaurant / Food Service",
  "Hotel / Hospitality",
  "Car Dealership",
  "Car Wash Facility",
  "Gated Community / HOA",
  "Commercial Property",
  "Fleet / Trailer Operations",
  "Other",
];

const EMPTY: FormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  facilityType: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1.5">
      {children}
      {required && <span className="text-[#d11a1a] ml-1">*</span>}
    </label>
  );
}

const inputClass =
  "w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#d11a1a] transition-colors duration-150";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>("idle");
  // Work order number — generated client-side after mount to avoid SSR
  // hydration mismatch (Date.now() differs between server and client render).
  const [orderNo, setOrderNo] = useState<string>("------");

  useEffect(() => {
    setOrderNo(Date.now().toString().slice(-6));
  }, []);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.service) e.service = "Please select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-[#d11a1a]" />
        <h3 className="text-white font-black uppercase text-2xl tracking-wide">Request Received</h3>
        <p className="text-gray-400 max-w-sm">
          We&apos;ll review your service request and follow up within 1 business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2 border border-[#d11a1a] text-[#d11a1a] text-sm font-black uppercase tracking-widest hover:bg-[#d11a1a] hover:text-white transition-colors"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Service request form">
      {/* Work-order header stripe */}
      <div className="bg-[#d11a1a] px-4 py-2 mb-6 flex items-center gap-3">
        <span className="text-white font-black uppercase tracking-[0.2em] text-xs">
          Work Order Request
        </span>
        <div className="flex-1 h-px bg-white/30" />
        <span className="text-white/60 text-xs font-mono">CPC-{orderNo}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <FieldLabel htmlFor="name" required>Full Name</FieldLabel>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={set("name")}
            placeholder="John Smith"
            className={inputClass}
            aria-describedby={errors.name ? "name-err" : undefined}
          />
          {errors.name && <p id="name-err" className="text-[#d11a1a] text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Company */}
        <div>
          <FieldLabel htmlFor="company">Company / Facility</FieldLabel>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={set("company")}
            placeholder="Smith's Restaurant"
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <FieldLabel htmlFor="phone" required>Phone Number</FieldLabel>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="(229) 555-0100"
            className={inputClass}
            aria-describedby={errors.phone ? "phone-err" : undefined}
          />
          {errors.phone && <p id="phone-err" className="text-[#d11a1a] text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <FieldLabel htmlFor="email" required>Email Address</FieldLabel>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            placeholder="john@example.com"
            className={inputClass}
            aria-describedby={errors.email ? "email-err" : undefined}
          />
          {errors.email && <p id="email-err" className="text-[#d11a1a] text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Service */}
        <div>
          <FieldLabel htmlFor="service" required>Service Needed</FieldLabel>
          <select
            id="service"
            value={form.service}
            onChange={set("service")}
            className={`${inputClass} appearance-none cursor-pointer`}
            aria-describedby={errors.service ? "service-err" : undefined}
          >
            <option value="">— Select a service —</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p id="service-err" className="text-[#d11a1a] text-xs mt-1">{errors.service}</p>}
        </div>

        {/* Facility type */}
        <div>
          <FieldLabel htmlFor="facilityType">Facility Type</FieldLabel>
          <select
            id="facilityType"
            value={form.facilityType}
            onChange={set("facilityType")}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="">— Select type —</option>
            {FACILITY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="message">Additional Details</FieldLabel>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={set("message")}
            placeholder="Describe the scope of work, any access requirements, or questions..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 text-[#d11a1a] text-sm">
          <AlertCircle size={16} />
          <span>Submission failed. Please try again or contact us directly.</span>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-gray-600 text-xs">Fields marked <span className="text-[#d11a1a]">*</span> are required.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex items-center gap-2 px-8 py-3 bg-[#d11a1a] hover:bg-red-700 disabled:opacity-60 text-white font-black uppercase tracking-widest text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d11a1a]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              Submit Request
            </>
          )}
        </button>
      </div>
    </form>
  );
}
