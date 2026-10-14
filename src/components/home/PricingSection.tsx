"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly" | "lifetime">("yearly");

  return (
    <section className="relative py-28 bg-[#0B0F19] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
            <span>Honest Transparent Pricing</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight mb-6">
            Invest in Speed. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#C9F31D]">
              Recover Cost on Day 1.
            </span>
          </h2>
          <p className="text-slate-400 text-sm">
            Zero hidden charges. No per-invoice commission fees. Keep 100% of your garage earnings.
          </p>

          {/* Billing Toggle (Monthly / Annual / Lifetime) */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#151D2F] border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#1C263D] text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative px-5 py-2 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
                billingCycle === "yearly"
                  ? "bg-[#C9F31D] text-[#0B0F19] shadow-lime-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual</span>
              <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-[#FF5E14] text-white font-mono">
                Save 33%
              </span>
            </button>
            <button
              onClick={() => setBillingCycle("lifetime")}
              className={`px-5 py-2 rounded-full font-syne text-xs uppercase tracking-wider font-bold transition-all ${
                billingCycle === "lifetime"
                  ? "bg-[#E5C07B] text-[#0B0F19] shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Lifetime License
            </button>
          </div>
        </div>

        {/* 3-Column Card Layout (cloning Geekfolio team-box) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: PitStop Starter */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-syne font-bold text-xs uppercase tracking-widest text-slate-400">
                  Tier 01
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  Starter Garages
                </span>
              </div>

              <h3 className="font-syne font-extrabold text-2xl text-white mb-2">
                PitStop Starter
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Perfect for single-shutter workshops starting their digital journey.
              </p>

              <div className="flex items-baseline space-x-1 mb-8 pb-6 border-b border-white/10 font-mono">
                <span className="text-4xl font-extrabold text-white">₹0</span>
                <span className="text-xs text-slate-400">/ Free Forever</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Up to 50 Job Cards / month</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Basic GST & Thermal POS Invoices</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Single Device Login</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>500 Standard Spare Parts Catalog</span>
                </li>
                <li className="flex items-center space-x-2.5 text-slate-400">
                  <span className="w-4 h-4 shrink-0 text-center">•</span>
                  <span>Community Discord Support</span>
                </li>
              </ul>
            </div>

            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-[#151D2F] border border-white/10 text-center font-syne font-bold text-xs uppercase tracking-wider text-white hover:bg-[#1C263D] transition-colors"
            >
              Get Started Free
            </a>
          </div>

          {/* Tier 2: Garage Pro (Highlighted in Neon Lime & Garage Orange) */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1C263D] to-[#151D2F] border-2 border-[#C9F31D] flex flex-col justify-between shadow-lime-glow transform lg:-translate-y-4">
            {/* Top Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C9F31D] text-[#0B0F19] font-syne font-black text-[10px] uppercase tracking-widest shadow-md">
              Most Popular • Workshop Choice
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="font-syne font-bold text-xs uppercase tracking-widest text-[#C9F31D]">
                  Tier 02
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#FF5E14]/20 border border-[#FF5E14]/30 text-[#FF5E14] font-bold">
                  All AI Modules
                </span>
              </div>

              <h3 className="font-syne font-black text-2xl text-white mb-2">
                Garage Pro
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                For busy 2-wheeler and 4-wheeler garages wanting maximum speed and zero leakage.
              </p>

              <div className="flex items-baseline space-x-1 mb-8 pb-6 border-b border-white/10 font-mono">
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

              <ul className="space-y-3.5 text-xs text-slate-200 mb-8">
                <li className="flex items-center space-x-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>Unlimited Job Cards & GST Bills</span>
                </li>
                <li className="flex items-center space-x-2.5 text-[#C9F31D] font-bold">
                  <Sparkles className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>AI Voice Biller (Natural Hindi/English)</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>WhatsApp Cloud Automation & UPI Links</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>100% Offline PWA + Mobile Sync</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>50,000+ BS3/4/6 Spares Matrix & Barcodes</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#C9F31D] shrink-0" />
                  <span>Mechanic Bay & Commission Tracking</span>
                </li>
              </ul>
            </div>

            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#C9F31D] text-[#0B0F19] text-center font-syne font-black text-xs uppercase tracking-wider shadow-lime-glow hover:scale-105 transition-all duration-300"
            >
              Launch Garage Pro Now
            </a>
          </div>

          {/* Tier 3: Multi-Bay Enterprise */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-syne font-bold text-xs uppercase tracking-widest text-[#E5C07B]">
                  Tier 03
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#E5C07B]/20 border border-[#E5C07B]/30 text-[#E5C07B]">
                  Chains & Multi-Bay
                </span>
              </div>

              <h3 className="font-syne font-extrabold text-2xl text-white mb-2">
                Multi-Bay Enterprise
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Custom setups, multi-branch inventory, and dedicated white-label for franchise workshops.
              </p>

              <div className="flex items-baseline space-x-1 mb-8 pb-6 border-b border-white/10 font-mono">
                <span className="text-4xl font-extrabold text-[#E5C07B]">₹24,999</span>
                <span className="text-xs text-slate-400">/ One-time License</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#E5C07B] shrink-0" />
                  <span>Multi-Branch Inventory & Stock Transfers</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#E5C07B] shrink-0" />
                  <span>Mechanic Payroll & Performance Splits</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#E5C07B] shrink-0" />
                  <span>Custom Workshop Domain & White-label</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#E5C07B] shrink-0" />
                  <span>Dedicated Onsite / Remote Onboarding</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#E5C07B] shrink-0" />
                  <span>Direct WhatsApp VIP Engineer Support</span>
                </li>
              </ul>
            </div>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-[#151D2F] border border-white/10 text-center font-syne font-bold text-xs uppercase tracking-wider text-white hover:border-[#E5C07B] hover:text-[#E5C07B] transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact for Enterprise</span>
            </a>
          </div>

        </div>

        {/* Comparison Page Link */}
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center space-x-2 text-xs font-syne font-bold uppercase tracking-widest text-slate-400 hover:text-[#C9F31D] transition-colors"
          >
            <span>View Full 20-Feature Comparison & ROI Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
