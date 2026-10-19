"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, HelpCircle, ChevronDown, ChevronUp, Calculator, ArrowRight, ShieldCheck, Zap, Building2, MessageSquare, QrCode } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import GarageProfitCalculator from "@/components/pricing/GarageProfitCalculator";
import OnboardingModal from "@/components/modals/OnboardingModal";

const comparisonFeatures = [
  { name: "Monthly Active Job Cards", monthly: "Unlimited", quarterly: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "Scope of Work (SOW) Estimates & Bills", monthly: "Included", quarterly: "Included", annual: "Included", lifetime: "Included" },
  { name: "Gemini AI SOW Technical Explanations", monthly: "50 / mo", quarterly: "200 / mo", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "AI Speech-to-GST Voice Biller", monthly: "Hindi & English", quarterly: "Hindi & English", annual: "Unlimited Dialects", lifetime: "Unlimited Dialects" },
  { name: "Free Garage Subdomain (*.motoban.in)", monthly: "—", quarterly: "—", annual: "Included Free", lifetime: "Included Free" },
  { name: "Personal Standee UPI QR Code on Bills", monthly: "Included", quarterly: "Included", annual: "Included", lifetime: "Included" },
  { name: "Android Mobile App (v1.0.0 APK & AAB)", monthly: "Included", quarterly: "Included", annual: "Included", lifetime: "Included" },
  { name: "Offline-First Desktop PWA (IndexedDB)", monthly: "Full Offline", quarterly: "Full Offline", annual: "Full Offline", lifetime: "Full Offline" },
  { name: "Universal Data Import (Vyapar / Excel / CSV)", monthly: "Standard CSV", quarterly: "Assisted", annual: "1-Click AI Parser", lifetime: "1-Click AI Parser" },
  { name: "58mm & 80mm ESC/POS Thermal Printing", monthly: "Raw Byte Spool", quarterly: "Raw Byte Spool", annual: "Custom Designer", lifetime: "Custom Designer" },
  { name: "WhatsApp Job Card & Invoices", monthly: "Cloud Dispatch", quarterly: "Automated Triggers", annual: "Dedicated API", lifetime: "Dedicated API" },
  { name: "50,000+ Preloaded BS3/4/6 Spares Matrix", monthly: "Full Matrix", quarterly: "Full Matrix", annual: "Full Matrix + OEM", lifetime: "Full Matrix + OEM" },
  { name: "Inspection Dent/Scratch Photos (4 Angles)", monthly: "Up to 500 cars", quarterly: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
  { name: "Staff User Accounts", monthly: "Up to 3", quarterly: "Up to 5", annual: "Up to 10", lifetime: "Up to 5 (Expandable)" },
  { name: "Hardware Locked License Protection", monthly: "—", quarterly: "—", annual: "Included", lifetime: "Perpetual Key" },
  { name: "Customer Support SLA", monthly: "Email & Discord", quarterly: "WhatsApp (4h)", annual: "Priority WhatsApp (1h)", lifetime: "VIP Priority" },
];

const faqs = [
  {
    q: "How does the 15-Day Free Trial work? Do I need a credit card?",
    a: "No credit card or payment info is required. You get instantaneous unrestricted access to the MotoBan Web App and Android companion app. Create real job cards, test speech-to-GST billing, print thermal receipts, and experience the workflow on your shop floor for a full 15 days.",
  },
  {
    q: "What is a Scope of Work (SOW) bill and how does Gemini AI help?",
    a: "Unlike a bare spare parts list, a Scope of Work (SOW) bill gives vehicle owners complete transparency into why each repair is necessary. MotoBan's built-in Gemini AI engine automatically writes clear technical explanations for layman customers (e.g. why carburetor ultrasonic cleaning or brake caliper pin greasing was performed) with zero manual typing from the mechanic.",
  },
  {
    q: "Can I upload my own Google Pay / PhonePe / Paytm standee QR code?",
    a: "Yes! In MotoBan Settings, simply upload a clear photo of your counter standee QR code. MotoBan automatically crops, renders, and embeds your genuine UPI QR code directly on all thermal slips, digital PDFs, and Scope of Work invoices so customer payments go 100% straight to your own bank account.",
  },
  {
    q: "How do free subdomains (*.motoban.in) work for my workshop?",
    a: "On Annual Pro and Lifetime plans, MotoBan automatically provisions a dedicated branded subdomain (e.g., https://motofit2.motoban.in). Customers can visit your subdomain to track real-time bay status, view vehicle inspection dent photos, and download past service histories.",
  },
  {
    q: "Can I migrate my existing customer and parts data from Vyapar or Excel?",
    a: "Yes! MotoBan features a Universal 1-Click Migration Engine. Simply upload your Vyapar export or Excel/CSV spreadsheet. The system reviews, maps, and imports all your customer contacts, vehicle numbers, and inventory in under 60 seconds.",
  },
  {
    q: "What is the difference between Annual Pro and the Lifetime License?",
    a: "Annual Pro (₹899/mo, billed yearly at ₹10,788) includes continuous cloud sync, free subdomains, and ongoing server updates. The Lifetime License (₹15,999 one-time) gives you permanent commercial ownership, 2 years of guaranteed feature drops, zero recurring monthly/annual fees, and hardware-locked license security.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "yearly" | "lifetime">("yearly");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Annual Pro");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openModalWithTier = (tier: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  return (
    <div className="relative pt-28 pb-20 bg-[#0B0F19] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C9F31D]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold">
            Transparent Pricing • Version {SITE_CONFIG.version}
          </span>
        </div>
        <h1 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight mb-6">
          Affordable For Every Shutter. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9F31D] via-white to-[#FF5E14]">
            Profitable From Day 1.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
          Start with a 15-Day Free Trial. Choose flexible monthly billing, discounted annual plans, or claim a perpetual Lifetime License. Zero per-invoice commissions.
        </p>

        {/* GEO / AEO Quick Answer Box */}
        <aside
          aria-label="Quick Answer Summary"
          className="max-w-4xl mx-auto mt-8 p-5 rounded-3xl bg-[#1C263D]/80 border border-[#C9F31D]/40 text-left shadow-xl"
        >
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#C9F31D] mb-1.5">
            <Sparkles className="w-4 h-4 text-[#C9F31D]" />
            <span>TL;DR — Official MotoBan Pricing Overview</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong>MotoBan (MechBillerAI v1.0.0)</strong> delivers zero hardware lock-in garage software: an unrestricted <strong>15-Day Free Trial</strong>, a <strong>₹1,299/month</strong> Monthly Plan, a discounted <strong>₹1,099/mo (₹3,297/quarter)</strong> Quarterly Plan, the most popular <strong>₹899/mo (₹10,788/year) Annual Pro</strong> with a free subdomain, and a <strong>₹15,999 One-Time Lifetime License</strong> with perpetual commercial ownership and zero recurring fees.
          </p>
        </aside>

        {/* 15-Day Free Trial Banner */}
        <div className="max-w-4xl mx-auto mt-10 p-6 rounded-3xl bg-[#151D2F] border border-[#10B981]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
              <Zap className="w-6 h-6 text-[#10B981]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-syne font-bold text-white">15-Day Free Trial (Full Features)</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 uppercase tracking-wider">
                  Zero Cost
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Experience 15-second speech billing, Scope of Work (SOW) auto-drafting, standee QR uploads, and Android companion sync.
              </p>
            </div>
          </div>
          <a
            href={SITE_CONFIG.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#C9F31D] text-[#0B0F19] text-xs font-syne font-black rounded-2xl hover:bg-[#d8f844] hover:shadow-lime-glow transition-all whitespace-nowrap shrink-0 uppercase tracking-wider"
          >
            Start 15-Day Free Trial →
          </a>
        </div>

        {/* Cycle Switcher */}
        <div className="mt-12 inline-flex p-1.5 rounded-full bg-[#151D2F] border border-white/10">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2.5 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              billingCycle === "monthly" ? "bg-[#1C263D] text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("quarterly")}
            className={`px-5 py-2.5 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              billingCycle === "quarterly" ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Quarterly (-15%)
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`relative px-5 py-2.5 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              billingCycle === "yearly" ? "bg-[#C9F31D] text-[#0B0F19] shadow-lime-glow" : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Annual Pro</span>
            <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-[#FF5E14] text-white font-mono">
              Save 31%
            </span>
          </button>
          <button
            onClick={() => setBillingCycle("lifetime")}
            className={`px-5 py-2.5 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              billingCycle === "lifetime" ? "bg-purple-600 text-white shadow-md font-extrabold" : "text-slate-400 hover:text-white"
            }`}
          >
            Lifetime License
          </button>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Monthly */}
          <div className={`bg-[#151D2F] rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 ${
            billingCycle === "monthly" ? "border-white/40 shadow-xl" : "border-white/10"
          }`}>
            <div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Month-to-Month</span>
              <h4 className="text-xl font-syne font-extrabold text-white mt-1">Monthly Plan</h4>
              <p className="text-xs text-slate-400 mt-1">Maximum flexibility for dynamic workshops</p>
              
              <div className="mt-4 pb-4 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono">₹1,299</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 mt-0.5 block">Billed monthly</span>
              </div>

              <ul className="mt-5 space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Unlimited Daily Job Cards</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Scope of Work (SOW) & GST Bills</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Standee UPI QR Code on Receipts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>1-Tap WhatsApp Bill Dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Thermal 58mm/80mm ESC/POS Sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Up to 3 Staff User Accounts</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => openModalWithTier("Monthly Plan (₹1,299/mo)")}
              className="mt-6 w-full py-3 text-center text-xs font-syne font-bold bg-[#1C263D] hover:bg-white/10 text-white border border-white/10 rounded-2xl transition-all uppercase tracking-wider"
            >
              Choose Monthly
            </button>
          </div>

          {/* Card 2: Quarterly */}
          <div className={`bg-[#151D2F] rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 relative ${
            billingCycle === "quarterly" ? "border-blue-400 shadow-xl" : "border-white/10"
          }`}>
            <div className="absolute -top-3 right-5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/40">
              Save 15%
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider block">Quarterly</span>
              <h4 className="text-xl font-syne font-extrabold text-white mt-1">Quarterly Plan</h4>
              <p className="text-xs text-slate-400 mt-1">₹3,297 billed every 3 months</p>

              <div className="mt-4 pb-4 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono">₹1,099</span>
                  <span className="text-xs text-slate-400">/ mo effective</span>
                </div>
                <span className="text-[11px] font-mono text-blue-400 mt-0.5 block">Save ₹600 vs monthly</span>
              </div>

              <ul className="mt-5 space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2 font-medium text-white">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Everything in Monthly Plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Automated WhatsApp Reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>4-Sided Dent Photo Shield</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>50,000+ BS6 Spares Catalog</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Android App v1.0.0 Companion</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => openModalWithTier("Quarterly Plan (₹1,099/mo)")}
              className="mt-6 w-full py-3 text-center text-xs font-syne font-bold bg-[#1C263D] hover:bg-blue-500/20 text-white border border-blue-400/30 rounded-2xl transition-all uppercase tracking-wider"
            >
              Choose Quarterly
            </button>
          </div>

          {/* Card 3: Annual Pro (Featured) */}
          <div className="bg-gradient-to-b from-[#1C263D] to-[#151D2F] rounded-3xl p-6 border-2 border-[#C9F31D] flex flex-col justify-between shadow-lime-glow relative transform lg:-translate-y-3">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-syne font-black bg-[#C9F31D] text-[#0B0F19] uppercase tracking-widest shadow-md">
              ★ Best Value • Save 31%
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold text-[#C9F31D] uppercase tracking-wider block mt-1">Yearly Access</span>
              <h4 className="text-xl font-syne font-extrabold text-white mt-1">Annual Pro</h4>
              <p className="text-xs text-slate-300 mt-1">₹10,788 billed yearly (Just ₹29/day)</p>

              <div className="mt-4 pb-4 border-b border-[#C9F31D]/20">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#C9F31D] font-mono">₹899</span>
                  <span className="text-xs text-slate-300">/ mo effective</span>
                </div>
                <span className="text-[11px] font-mono text-[#C9F31D] mt-0.5 block">Save ₹4,800 vs monthly</span>
              </div>

              <ul className="mt-5 space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2 font-semibold text-white">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>Everything in Quarterly Plan</span>
                </li>
                <li className="flex items-center gap-2 text-[#C9F31D] font-bold">
                  <Sparkles className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>Gemini AI Scope of Work Auto-Explainer</span>
                </li>
                <li className="flex items-center gap-2 text-white font-medium">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>Free Custom Subdomain (.motoban.in)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>Vyapar / Excel 1-Click Migration Engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>Multi-Bay Live Kanban Board</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>Priority WhatsApp VIP Support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => openModalWithTier("Annual Pro (₹899/mo)")}
              className="mt-6 w-full py-3.5 text-center text-xs font-syne font-black bg-[#C9F31D] hover:bg-[#d8f844] text-[#0B0F19] rounded-2xl shadow-lime-glow transition-all uppercase tracking-wider"
            >
              Get Annual Pro →
            </button>
          </div>

          {/* Card 4: Lifetime License */}
          <div className={`bg-[#151D2F] rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 relative ${
            billingCycle === "lifetime" ? "border-purple-400 shadow-xl" : "border-purple-500/30"
          }`}>
            <div className="absolute -top-3 right-5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
              Perpetual
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider block">One-Time License</span>
              <h4 className="text-xl font-syne font-extrabold text-white mt-1">Lifetime License</h4>
              <p className="text-xs text-slate-400 mt-1">Full commercial ownership with 2 years updates</p>

              <div className="mt-4 pb-4 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono">₹15,999</span>
                  <span className="text-xs text-slate-400">one-time</span>
                </div>
                <span className="text-[11px] font-mono text-purple-400 mt-0.5 block">Commercial Lifetime Ownership</span>
              </div>

              <ul className="mt-5 space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2 font-medium text-white">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>100% Commercial Lifetime Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>2 Years Guaranteed Feature Drops</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Up to 5 Staff User Accounts</span>
                </li>
                <li className="flex items-center gap-2 font-bold text-purple-300">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Zero Monthly or Yearly Subscriptions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Hardware Locked License Backup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Assisted Onboarding Call</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => openModalWithTier("Lifetime License (₹15,999)")}
              className="mt-6 w-full py-3 text-center text-xs font-syne font-bold bg-purple-600 hover:bg-purple-500 text-white rounded-2xl transition-all shadow-md uppercase tracking-wider"
            >
              Claim Lifetime License
            </button>
          </div>

        </div>

        {/* Enterprise Multi-Bay Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-[#151D2F] border border-[#E5C07B]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5C07B]">
              Multi-Bay / Franchise Enterprise Tier
            </span>
            <h3 className="text-2xl font-syne font-extrabold text-white mt-1">
              Have 3+ Branches or 10+ Mechanical Ramps?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Unlock centralized multi-branch inventory transfers, custom domain SSL, consolidated owner dashboards, technician incentive payroll splits, and direct ERP integrations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="text-right sm:text-left">
              <span className="text-3xl font-extrabold text-[#E5C07B] font-mono">₹39,999</span>
              <span className="text-xs text-slate-400 block">/ One-time License</span>
            </div>
            <button
              onClick={() => openModalWithTier("Multi-Bay Enterprise (₹39,999)")}
              className="px-6 py-3.5 rounded-2xl bg-[#E5C07B] text-[#0B0F19] font-syne font-black text-xs uppercase tracking-wider hover:bg-[#edd29b] transition-all"
            >
              Contact Enterprise Sales
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Profit & ROI Calculator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <GarageProfitCalculator />
      </div>

      {/* Feature Comparison Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-syne font-black uppercase tracking-tight text-white">
            Full Plan Feature Comparison
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Detailed breakdown of what is included in each tier
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#151D2F]/80 shadow-2xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#1C263D]/60 text-slate-300 font-syne uppercase tracking-wider">
                <th className="p-4 sm:p-5 font-bold">Feature Capability</th>
                <th className="p-4 sm:p-5 font-bold">Monthly (₹1,299)</th>
                <th className="p-4 sm:p-5 font-bold">Quarterly (₹1,099/mo)</th>
                <th className="p-4 sm:p-5 font-bold text-[#C9F31D]">Annual Pro (₹899/mo)</th>
                <th className="p-4 sm:p-5 font-bold text-purple-300">Lifetime (₹15,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-white">{row.name}</td>
                  <td className="p-4 sm:p-5">{row.monthly}</td>
                  <td className="p-4 sm:p-5">{row.quarterly}</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#C9F31D]">{row.annual}</td>
                  <td className="p-4 sm:p-5 font-semibold text-purple-300">{row.lifetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C9F31D]">
            Have Questions?
          </span>
          <h2 className="text-3xl font-syne font-black uppercase tracking-tight text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#151D2F] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-syne font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#C9F31D] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Onboarding Dialog */}
      <OnboardingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPlan={selectedTier}
      />
    </div>
  );
}
