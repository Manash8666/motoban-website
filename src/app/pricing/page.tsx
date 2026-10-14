"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, HelpCircle, ChevronDown, ChevronUp, Calculator, ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import GarageProfitCalculator from "@/components/pricing/GarageProfitCalculator";

const comparisonFeatures = [
  { name: "Monthly Active Job Cards", starter: "50 / mo", pro: "Unlimited", enterprise: "Unlimited Multi-Branch" },
  { name: "AI Voice-to-Invoice Biller (Speech NLP)", starter: "—", pro: "Unlimited (Hindi & English)", enterprise: "Unlimited + Custom Accents" },
  { name: "Offline-First Desktop PWA (IndexedDB)", starter: "Basic", pro: "Full Offline Suite", enterprise: "Full Offline Suite" },
  { name: "Mobile Mechanic Bay Companion App", starter: "—", pro: "Included", enterprise: "Included (Unlimited Staff)" },
  { name: "58mm & 80mm ESC/POS Thermal Printing", starter: "Standard", pro: "Silent Raw Byte Print", enterprise: "Custom Receipt Designer" },
  { name: "WhatsApp Cloud Job Card & Invoices", starter: "—", pro: "Included (Cloud API)", enterprise: "Dedicated Verified WABA" },
  { name: "Dynamic UPI QR Payment on Bill", starter: "Static", pro: "Auto-Reconciled Dynamic QR", enterprise: "Payment Gateway Webhooks" },
  { name: "Preloaded Spares Parts Database", starter: "500 Basic SKUs", pro: "50,000+ BS3/4/6 Matrix", enterprise: "Full OEM Matrix + Custom" },
  { name: "Barcode Label Generator & Scanning", starter: "—", pro: "Included", enterprise: "Included + RFID Ready" },
  { name: "Mechanic Commission & Incentive Splits", starter: "—", pro: "Automated Daily Splits", enterprise: "Advanced Multi-Tier Payroll" },
  { name: "FIFO Inventory Batch & Purchase Orders", starter: "—", pro: "Included", enterprise: "Auto Vendor Reorders" },
  { name: "Low-Stock SMS/WhatsApp Alerts", starter: "—", pro: "Included", enterprise: "Real-time Multi-Warehouse" },
  { name: "GSTR-1 & GSTR-3B Tax Filing Exports", starter: "Basic CSV", pro: "1-Click Excel & JSON", enterprise: "Direct GSTN API Sync" },
  { name: "Customer WhatsApp Service Reminders (KM-based)", starter: "—", pro: "Automated Triggers", enterprise: "Custom Broadcast Campaigns" },
  { name: "Inspection Dent/Scratch Photos (4 Angles)", starter: "—", pro: "Unlimited Cloud Storage", enterprise: "Unlimited Cloud Storage" },
  { name: "Multi-Ramp Live Workshop Kanban", starter: "—", pro: "Included (Up to 8 Bays)", enterprise: "Unlimited Bays & Branches" },
  { name: "Custom Workshop Domain & Branding", starter: "—", pro: "—", enterprise: "Full White-Label Included" },
  { name: "Data Import from Excel/Old Software", starter: "Self-Serve Guide", pro: "Assisted Migration", enterprise: "Dedicated Database Engineer" },
  { name: "Customer Support SLA", starter: "Community Discord", pro: "Priority WhatsApp (2h)", enterprise: "Dedicated VIP Account Mgr" },
  { name: "Hardware Setup Consultation", starter: "—", pro: "Remote Video Call", enterprise: "Onsite / Remote Technician" },
];

const faqs = [
  {
    q: "How does the offline mode work if the workshop internet goes down?",
    a: "MotoBan uses a browser-level IndexedDB database engine. Every time you create a job card, add spare parts, or print a thermal receipt, it saves locally to your computer's SSD. The second your internet reconnects, all records sync seamlessly to the cloud without creating duplicate bill numbers or overwriting data.",
  },
  {
    q: "Can I use MotoBan for both Two-Wheelers and Four-Wheelers?",
    a: "Yes! The spare parts catalogue includes 50,000+ cross-referenced items covering motorcycles, scooters (Hero, Honda, Bajaj, TVS, Yamaha, Royal Enfield, KTM) as well as passenger cars (Maruti, Hyundai, Tata, Mahindra). You can also add your own custom SKU items in seconds.",
  },
  {
    q: "Do I need to buy expensive computers or special printers?",
    a: "No! MotoBan runs on any existing Windows PC, laptop, Android tablet, iPad, or smartphone. For billing receipts, it connects natively to any standard 58mm or 80mm USB, Bluetooth, or Network thermal printer (such as TVS, Epson, Posiflex, BluPrints, or generic ESC/POS printers).",
  },
  {
    q: "How does the AI Voice Biller understand garage slang in India?",
    a: "HybridStudioZ is specially trained on real workshop vocabulary across India. Words like 'shocker', 'clutch katora', 'chakka bearing', 'side stand spring', and 'motul 10w40' are mapped phonetically directly into standardized HSN codes and inventory items without requiring formal mechanical English.",
  },
  {
    q: "Can I migrate my existing customer and parts data from Excel or Tally?",
    a: "Absolutely. MotoBan has a 1-click Excel CSV import tool. On Garage Pro and Enterprise plans, our onboarding engineers will format, clean, and import your existing vehicle history, supplier records, and inventory at zero extra charge.",
  },
  {
    q: "Is there any per-invoice fee or payment gateway commission?",
    a: "Never. You pay only the flat subscription fee (or lifetime license). Customer UPI payments go 100% directly from the customer’s phone into your own workshop bank account via your current QR code.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly" | "lifetime">("yearly");

  // ROI Calculator states
  const [bikesPerDay, setBikesPerDay] = useState(25);
  const [leakagePerBike, setLeakagePerBike] = useState(120);

  // ROI Math: (Bikes * leakage * 26 days/mo)
  const monthlyRecovered = bikesPerDay * leakagePerBike * 26;
  const annualRecovered = monthlyRecovered * 12;
  const softwareCostAnnual = billingCycle === "yearly" ? 7999 : 999 * 12;
  const netRoiRatio = Math.round(annualRecovered / softwareCostAnnual);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative pt-28 pb-20 bg-[#0B0F19] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C9F31D]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold">
            Transparent Pricing Plans
          </span>
        </div>
        <h1 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight mb-6">
          Affordable For Every Shutter. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9F31D] via-white to-[#FF5E14]">
            Profitable From Day 1.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
          Choose a monthly subscription, discounted annual billing, or lock in a lifetime license. No hidden fees or hardware lock-in.
        </p>

        {/* GEO / AEO Quick Answer Box */}
        <aside
          aria-label="Quick Answer Summary"
          className="max-w-4xl mx-auto mt-8 p-5 rounded-2xl bg-[#1C263D]/80 border border-[#C9F31D]/40 text-left"
        >
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#C9F31D] mb-1.5">
            <Sparkles className="w-4 h-4 text-[#C9F31D]" />
            <span>TL;DR — Quick Pricing Summary for Garages</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong>MotoBan (MechBillerAI)</strong> offers transparent pricing with zero hardware lock-in: a <strong>Free Starter Tier</strong> for single-bay testing, a <strong>₹999/month</strong> (or ₹7,999/year) <strong>Garage Pro</strong> plan with unlimited job cards, 15-second AI voice billing, and 50,000+ BS6 spares, or a <strong>₹14,999 one-time Lifetime License</strong> with perpetual offline PWA access and zero recurring fees.
          </p>
        </aside>

        {/* Toggle */}
        <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#151D2F] border border-white/10">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2.5 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              billingCycle === "monthly"
                ? "bg-[#1C263D] text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`relative px-6 py-2.5 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              billingCycle === "yearly"
                ? "bg-[#C9F31D] text-[#0B0F19] shadow-lime-glow font-extrabold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Annual (Save 33%)</span>
          </button>
          <button
            onClick={() => setBillingCycle("lifetime")}
            className={`px-6 py-2.5 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              billingCycle === "lifetime"
                ? "bg-[#E5C07B] text-[#0B0F19] shadow-md font-extrabold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Lifetime License
          </button>
        </div>
      </div>

      {/* 3 Main Tiers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Starter */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-syne font-bold text-xs uppercase tracking-widest text-slate-400">Tier 01</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">Starter</span>
              </div>
              <h3 className="font-syne font-extrabold text-2xl text-white mb-2">PitStop Starter</h3>
              <p className="text-xs text-slate-400 mb-6">For small individual motorcycle workshops.</p>
              
              <div className="flex items-baseline space-x-1 mb-6 pb-6 border-b border-white/10 font-mono">
                <span className="text-4xl font-extrabold text-white">₹0</span>
                <span className="text-xs text-slate-400">/ Free Forever</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#10B981]" /><span>50 Job Cards / Month</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#10B981]" /><span>Standard GST Invoicing</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#10B981]" /><span>58mm Thermal Printing</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#10B981]" /><span>Single Device Login</span></li>
              </ul>
            </div>
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#151D2F] border border-white/10 text-center font-syne font-bold text-xs uppercase tracking-wider text-white hover:bg-[#1C263D] transition-colors"
            >
              Start Free
            </a>
          </div>

          {/* Garage Pro (Highlighted) */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1C263D] to-[#151D2F] border-2 border-[#C9F31D] shadow-lime-glow flex flex-col justify-between transform lg:-translate-y-4">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C9F31D] text-[#0B0F19] font-syne font-black text-[10px] uppercase tracking-widest shadow-md">
              Most Popular • Complete Suite
            </div>
            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="font-syne font-bold text-xs uppercase tracking-widest text-[#C9F31D]">Tier 02</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF5E14]/20 text-[#FF5E14] font-bold">Recommended</span>
              </div>
              <h3 className="font-syne font-black text-2xl text-white mb-2">Garage Pro</h3>
              <p className="text-xs text-slate-300 mb-6">Unlimited billing, voice AI, offline sync, and spares matrix.</p>

              <div className="flex items-baseline space-x-1 mb-6 pb-6 border-b border-white/10 font-mono">
                {billingCycle === "monthly" && (
                  <>
                    <span className="text-4xl font-extrabold text-[#C9F31D]">₹999</span>
                    <span className="text-xs text-slate-400">/ month</span>
                  </>
                )}
                {billingCycle === "yearly" && (
                  <>
                    <span className="text-4xl font-extrabold text-[#C9F31D]">₹7,999</span>
                    <span className="text-xs text-slate-400">/ year (₹666/mo)</span>
                  </>
                )}
                {billingCycle === "lifetime" && (
                  <>
                    <span className="text-4xl font-extrabold text-[#C9F31D]">₹14,999</span>
                    <span className="text-xs text-slate-400">/ One-time Lifetime</span>
                  </>
                )}
              </div>

              <ul className="space-y-3 text-xs text-slate-200 mb-8 font-medium">
                <li className="flex items-center space-x-2 text-white"><Check className="w-4 h-4 text-[#C9F31D]" /><span>Unlimited Job Cards & GST Bills</span></li>
                <li className="flex items-center space-x-2 text-[#C9F31D] font-bold"><Sparkles className="w-4 h-4 text-[#C9F31D]" /><span>AI Voice Biller (Speech NLP)</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#C9F31D]" /><span>Offline PWA + Mobile Companion</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#C9F31D]" /><span>WhatsApp Cloud Estimates & UPI QR</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#C9F31D]" /><span>50,000+ BS3/4/6 Spares Matrix</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#C9F31D]" /><span>Mechanic Commission Payroll</span></li>
              </ul>
            </div>
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-[#C9F31D] text-[#0B0F19] text-center font-syne font-black text-xs uppercase tracking-wider shadow-lime-glow hover:bg-white transition-colors"
            >
              Get Garage Pro
            </a>
          </div>

          {/* Enterprise */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-syne font-bold text-xs uppercase tracking-widest text-[#E5C07B]">Tier 03</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E5C07B]/20 text-[#E5C07B]">Chains & Multi-Bay</span>
              </div>
              <h3 className="font-syne font-extrabold text-2xl text-white mb-2">Multi-Bay Enterprise</h3>
              <p className="text-xs text-slate-400 mb-6">Multi-branch franchises, custom domain, and white-labeling.</p>

              <div className="flex items-baseline space-x-1 mb-6 pb-6 border-b border-white/10 font-mono">
                <span className="text-4xl font-extrabold text-[#E5C07B]">₹24,999</span>
                <span className="text-xs text-slate-400">/ One-time Lifetime</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#E5C07B]" /><span>Multi-Branch Stock Transfers</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#E5C07B]" /><span>Custom Workshop Domain</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#E5C07B]" /><span>Dedicated Remote / Onsite Setup</span></li>
                <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#E5C07B]" /><span>Direct Phone Support: {SITE_CONFIG.phone}</span></li>
              </ul>
            </div>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#151D2F] border border-white/10 text-center font-syne font-bold text-xs uppercase tracking-wider text-white hover:border-[#E5C07B] hover:text-[#E5C07B] transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact for Enterprise</span>
            </a>
          </div>

        </div>
      </div>

      {/* VIRAL PRODUCT-LED GROWTH: GARAGE REVENUE LEAKAGE CALCULATOR */}
      <GarageProfitCalculator />

      {/* 20-ROW FEATURE COMPARISON TABLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-2">
            Detailed Feature Comparison
          </h2>
          <p className="text-xs text-slate-400">Compare exact limits, integrations, and capabilities across all 3 tiers.</p>
        </div>

        <div className="glass-panel rounded-3xl border border-white/10 overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#151D2F] border-b border-white/10 text-slate-300 uppercase font-syne tracking-wider text-[11px]">
                <th className="py-4 px-6 font-bold">Capability / Feature</th>
                <th className="py-4 px-6 font-bold text-slate-400">Starter</th>
                <th className="py-4 px-6 font-bold text-[#C9F31D]">Garage Pro</th>
                <th className="py-4 px-6 font-bold text-[#E5C07B]">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-6 text-white font-sans font-medium">{row.name}</td>
                  <td className="py-3 px-6 text-slate-400">{row.starter}</td>
                  <td className="py-3 px-6 text-[#C9F31D] font-bold">{row.pro}</td>
                  <td className="py-3 px-6 text-[#E5C07B] font-bold">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQS ACCORDION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#E5C07B] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-5 text-left flex justify-between items-center space-x-4 hover:bg-white/[0.02]"
                >
                  <span className="font-syne font-bold text-sm text-white">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
