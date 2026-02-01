import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/Footer";
import StructuredData from "@/components/shared/StructuredData";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mountain View | Luxury Real Estate & Gated Communities in Egypt",
  description:
    "Mountain View is a leading private property developer in Egypt, specializing in first-tier residences and luxury resorts. Discover our projects across East and West Cairo, the Red Sea, and North Coast.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "Mountain View Egypt",
    "Mountain View Projects",
    "Real Estate Egypt",
    "Luxury Gated Communities",
    "Mountain View North Coast",
    "Mountain View iCity",
    "Mountain View Ras El Hikma",
    "Mountain View Hyde Park",
    "Mountain View October",
    "Mountain View New Cairo",
    "Property Development Egypt",
    "Luxury Villas Egypt",
    "Mountain View Chillout Park",
  ],
  authors: [{ name: "Mountain View" }],
  creator: "Mountain View",
  publisher: "Mountain View",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    title: "Mountain View | Luxury Real Estate & Gated Communities in Egypt",
    description:
      "Leading developer of luxury residences and resorts in Egypt. Inspired by happiness, driven by innovation.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Mountain View",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/logos/logo-blue.png",
        width: 1200,
        height: 630,
        alt: "Mountain View - Inspired by Happiness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountain View | Luxury Real Estate & Gated Communities in Egypt",
    description:
      "Leading developer of luxury residences and resorts in Egypt. Inspired by happiness, driven by innovation.",
    images: ["/assets/images/logos/logo-blue.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`
            /* Ensure all content is visible when JavaScript is disabled */
            * {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body className={`${roboto.variable} antialiased font-sans`}>
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
