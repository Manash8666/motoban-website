import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import TelemetryBeacon from "@/components/analytics/TelemetryBeacon";
import JsonLdSchema from "@/components/seo/JsonLdSchema";
import ViralFloatingBar from "@/components/layout/ViralFloatingBar";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motoban.in"),
  title: {
    default: "MotoBan — #1 AI Garage Billing, Job Card & Spares POS App India",
    template: "%s | MotoBan — #1 AI Garage Billing, Job Card & Spares POS App",
  },
  description:
    "India's #1 AI-powered motorcycle & auto garage billing software. 15-second voice GST billing, digital job cards, 50,000+ BS3/BS4/BS6 spares matrix, 100% offline PWA, and instant WhatsApp invoices with UPI QR codes.",
  applicationName: "MotoBan (MechBillerAI)",
  authors: [{ name: "HybridStudioZ Engineering Team", url: "https://motoban.in" }],
  generator: "Next.js",
  keywords: [
    "garage billing software India",
    "two wheeler workshop management app",
    "motorcycle job card maker",
    "BS6 spare parts inventory POS",
    "GST billing app for mechanics",
    "WhatsApp garage invoice software",
    "offline auto repair billing software",
    "MotoBan",
    "MechBillerAI",
    "HybridStudioZ",
    "MotoFit 2",
    "bike repair estimate maker",
    "thermal receipt printer app for garage",
    "mechanic job card app",
    "two wheeler garage billing software",
    "car service invoice generator",
  ],
  creator: "HybridStudioZ",
  publisher: "HybridStudioZ",
  alternates: {
    canonical: "https://motoban.in",
    languages: {
      "en-IN": "https://motoban.in",
    },
  },
  openGraph: {
    title: "MotoBan — #1 AI Garage Billing, Job Card & Spares POS App",
    description:
      "Generate GST invoices in 15 seconds with voice. Works 100% offline on desktop & mobile with 50,000+ preloaded BS6 spare parts.",
    url: "https://motoban.in",
    siteName: "MotoBan",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MotoBan — AI Garage Billing & Spares POS App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MotoBan — #1 AI Garage Billing & Workshop OS",
    description:
      "15-second AI voice billing, digital job cards, 50,000+ spares matrix, and 100% offline PWA for Indian garages.",
    images: ["/opengraph-image"],
    creator: "@HybridStudioZ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
        <JsonLdSchema />
      </head>
      <body
        className={`${syne.variable} ${jakarta.variable} ${jetbrains.variable} bg-[#0B0F19] text-[#E2E8F0] antialiased selection:bg-[#C9F31D] selection:text-[#0B0F19] font-sans`}
      >
        <TelemetryBeacon source="motoban-website" />
        <ViralFloatingBar />
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
          <ScrollProgressButton />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
