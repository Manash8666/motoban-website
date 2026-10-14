import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "MotoBan — AI-Powered Garage Billing, Job Cards & Spares Matrix",
  description:
    "Next-generation workshop operating system powered by HybridStudioZ. 15-second AI voice GST billing, digital job cards, 50,000+ BS3/BS4/BS6 spares matrix, and 100% offline-first PWA resilience.",
  keywords: [
    "Garage Billing Software",
    "Motorcycle Workshop Software",
    "AI Voice Billing",
    "Digital Job Card",
    "HybridStudioZ",
    "MotoBan",
    "MotoFit 2",
    "Thermal POS Printing",
    "Offline PWA Garage",
    "Automotive Spares Inventory",
  ],
  authors: [{ name: "MotoBan Engineering Team" }],
  openGraph: {
    title: "MotoBan — AI-Powered Garage Billing & Workshop OS",
    description:
      "Generate GST invoices in 15 seconds with voice. Works 100% offline on desktop & mobile.",
    url: "https://mechbillerai.vercel.app/",
    siteName: "MotoBan",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-[#E2E8F0] antialiased selection:bg-[#C9F31D] selection:text-[#0B0F19]">
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
