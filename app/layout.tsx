import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commercial Pro Clean & More, LLC | Commercial Cleaning — Valdosta, GA",
  description:
    "NFPA 96 & IKECA compliant hood cleaning, grease trap service, pressure washing, and commercial facility cleaning serving the Florida–Georgia line region from Valdosta, GA.",
  keywords: [
    "commercial hood cleaning",
    "grease trap service",
    "pressure washing",
    "Valdosta GA",
    "NFPA 96",
    "IKECA",
    "kitchen exhaust cleaning",
    "commercial cleaning",
    "Florida Georgia",
  ],
  openGraph: {
    title: "Commercial Pro Clean & More, LLC",
    description:
      "Professional commercial cleaning — hood & exhaust, grease traps, pressure washing, and more. Serving the FL–GA line from Valdosta, GA.",
    url: "https://www.cpcandmore.com",
    siteName: "Commercial Pro Clean & More",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Commercial Pro Clean & More, LLC",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://www.cpcandmore.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
