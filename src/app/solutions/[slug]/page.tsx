import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Wrench,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  HelpCircle,
  FileText,
  Layers,
  ChevronRight,
  Send,
} from "lucide-react";
import { SOLUTIONS_DATA, SolutionPageData } from "@/lib/solutionsData";
import { SITE_CONFIG } from "@/lib/constants";

interface Props {
  params: {
    slug: string;
  };
}

// Next.js Static Param Generation for 100% Pre-rendered Programmatic SEO
export async function generateStaticParams() {
  return Object.keys(SOLUTIONS_DATA).map((slug) => ({
    slug,
  }));
}

// Programmatic Metadata Generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = SOLUTIONS_DATA[params.slug];
  if (!data) return {};

  const pageUrl = `https://motoban.in/solutions/${data.slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: pageUrl,
      siteName: "MotoBan",
      type: "article",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default function SolutionDetailPage({ params }: Props) {
  const data = SOLUTIONS_DATA[params.slug];
  if (!data) {
    notFound();
  }

  // Segment JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": `MotoBan — ${data.title}`,
        "applicationCategory": "BusinessApplication, PointOfSaleApplication",
        "operatingSystem": "Web, Windows, macOS, Android, iOS (PWA)",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "540",
        },
        "description": data.metaDescription,
        "url": `https://motoban.in/solutions/${data.slug}`,
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      },
    ],
  };

  return (
    <article className="min-h-screen bg-[#0B0F19] text-[#E2E8F0] pt-28 pb-20 selection:bg-[#C9F31D] selection:text-[#0B0F19]">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section with Ambient Lights */}
      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9F31D]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF5E14]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/features" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#C9F31D] truncate">{data.badge}</span>
        </nav>

        {/* Segment Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9F31D]/10 border border-[#C9F31D]/30 text-[#C9F31D] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          {data.badge}
        </div>

        {/* H1 SEO Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl">
          {data.heroHeadline}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
          {data.heroSubheadline}
        </p>

        {/* Target Audience Tag */}
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="text-gray-500 uppercase tracking-wider">Engineered For:</span>
          <span className="text-gray-300 font-sans font-medium">{data.targetAudience}</span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`${SITE_CONFIG.appUrl}?utm_source=solution-${data.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-sm hover:shadow-lime-glow hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Launch Free Sandbox Now
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={`https://wa.me/916359635416?text=${encodeURIComponent(
              `Hello MotoBan team! I am interested in MotoBan for my workshop (${data.title}). Please guide me.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-syne font-bold text-sm border border-white/10 transition-colors"
          >
            <Send className="w-4 h-4 text-[#25D366]" />
            Book 1-on-1 Demo via WhatsApp
          </a>
        </div>

        {/* Key Metrics Strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.keyStats.map((st, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#0E1526]/80 border border-white/10 backdrop-blur-md shadow-lg"
            >
              <span className="text-xs font-mono uppercase text-gray-400 block tracking-wider">
                {st.label}
              </span>
              <span className="text-3xl font-syne font-extrabold text-[#C9F31D] block mt-1">
                {st.value}
              </span>
              <span className="text-xs text-gray-400 mt-1 block font-mono">{st.detail}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Pain Points vs. Solutions Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14] text-xs font-mono uppercase tracking-widest mb-2">
            Eliminate Floor Friction
          </div>
          <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-white tracking-tight">
            Common Workshop Headaches vs. The MotoBan Fix
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Why conventional accounting software fails modern mechanic floors — and how MotoBan automates the pain away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.painPoints.map((pt, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#0E1526]/60 p-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF5E14] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
                  Pain Point #{idx + 1}
                </div>
                <p className="text-sm text-gray-300 font-medium leading-relaxed mb-4">
                  &ldquo;{pt.problem}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  MotoBan Automation
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">{pt.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preloaded Spares SKU Preview for this Segment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#111A30] to-[#0E1526] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono text-[#C9F31D] uppercase tracking-wider block">
                50,000+ Preloaded Master Database
              </span>
              <h3 className="text-2xl font-syne font-bold text-white mt-1">
                Sample Preloaded Spares & HSN Codes for {data.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Zero manual typing required. Search or scan barcode to add these parts in 1 second with pre-configured GST rates.
              </p>
            </div>
            <Link
              href="/features#spares-database"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9F31D] hover:underline"
            >
              Explore Full 50k Spares Matrix
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 text-[11px] bg-black/40">
                  <th className="py-2.5 px-3">Part Description</th>
                  <th className="py-2.5 px-3">OE / OES SKU</th>
                  <th className="py-2.5 px-3">HSN Code</th>
                  <th className="py-2.5 px-3 text-right">Standard MRP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.sampleParts.map((sp, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-2.5 px-3 text-white font-sans font-medium">{sp.name}</td>
                    <td className="py-2.5 px-3 text-gray-400">{sp.sku}</td>
                    <td className="py-2.5 px-3 text-[#10B981]">{sp.hsn}</td>
                    <td className="py-2.5 px-3 text-right text-[#C9F31D] font-bold">{sp.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-widest mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9F31D]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-syne font-extrabold text-white">
            Questions Workshop Owners Ask About {data.title}
          </h2>
        </div>

        <div className="space-y-4">
          {data.faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-[#0E1526]/70 p-5 hover:border-white/20 transition-colors"
            >
              <h3 className="text-base font-syne font-bold text-white flex items-start gap-2">
                <span className="text-[#C9F31D] font-mono">Q{i + 1}.</span>
                {f.question}
              </h3>
              <p className="mt-2 text-sm text-gray-300 font-sans leading-relaxed pl-6">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-[#C9F31D]/30 bg-gradient-to-r from-[#111A30] via-[#0E1526] to-[#1A1224] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9F31D]/15 rounded-full blur-[120px] pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl font-syne font-extrabold text-white tracking-tight">
            Ready to Upgrade Your Workshop to MotoBan?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Join hundreds of workshops across India. Start with the free tier today or get personalized setup help for your garage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${SITE_CONFIG.appUrl}?source=solution-bottom`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-sm hover:shadow-lime-glow hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Open Live MotoBan App
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-syne font-bold text-sm border border-white/10 transition-colors"
            >
              View Transparent Pricing (From ₹0)
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
