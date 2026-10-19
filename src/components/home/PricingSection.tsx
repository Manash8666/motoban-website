"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Building2, MessageSquare, QrCode } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import OnboardingModal from "@/components/modals/OnboardingModal";

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Annual Pro");

  const openModalWithTier = (tier: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  return (
    <section className="relative py-28 bg-[#0B0F19] text-white overflow-hidden border-b border-white/10">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C9F31D]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
            <span>Official Production Pricing • Version {SITE_CONFIG.version}</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight mb-6">
            Invest in Speed. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#C9F31D]">
              Recover Cost on Day 1.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Start with our 15-Day Free Trial. Upgrade anytime to unlock unlimited daily job cards, GST tax invoices, Gemini AI SOW auto-explanations, and Android mobile sync.
          </p>
        </div>

        {/* 15-Day Free Trial Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-3xl bg-[#151D2F] border border-[#10B981]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-[#10B981]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-start gap-4 z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
              <Zap className="w-6 h-6 text-[#10B981]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-syne font-bold text-white">15-Day Unrestricted Free Trial</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 uppercase tracking-wider">
                  100% Free
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Zero credit card required. Test 15-second speech billing, thermal receipt printing, and the mobile Android app directly on your workshop floor.
              </p>
            </div>
          </div>

          <a
            href={SITE_CONFIG.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#C9F31D] text-[#0B0F19] text-xs font-syne font-black rounded-2xl hover:bg-[#d8f844] hover:shadow-lime-glow transition-all whitespace-nowrap shrink-0 uppercase tracking-wider z-10"
          >
            Start 15-Day Free Trial →
          </a>
        </div>

        {/* 4 Pricing Cards Grid (Synced with mechbillerai) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          
          {/* Card 1: Monthly Plan */}
          <div className="bg-[#151D2F] rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-[#E5C07B]/40 transition-all duration-300">
            <div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Month-to-Month</span>
              <h4 className="text-xl font-syne font-extrabold text-white mt-1">Monthly Plan</h4>
              <p className="text-xs text-slate-400 mt-1">Flexible garage billing with zero lock-in</p>
              
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
                  <span>Full GST & Scope of Work (SOW) Bills</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Standee UPI QR Code on Receipts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>1-Tap WhatsApp Receipt Dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Thermal Printer 58mm/80mm Sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Up to 5 Staff User Accounts</span>
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

          {/* Card 2: Quarterly Plan */}
          <div className="bg-[#151D2F] rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-blue-400/40 transition-all duration-300 relative">
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
                  <span>Android App v1.0.0 APK Companion</span>
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

          {/* Card 4: One-Time Lifetime License */}
          <div className="bg-[#151D2F] rounded-3xl p-6 border border-purple-500/30 flex flex-col justify-between hover:border-purple-400/50 transition-all duration-300 relative">
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

        {/* Add-ons Row (From mechbillerai) */}
        <div className="max-w-4xl mx-auto p-6 rounded-3xl bg-[#151D2F]/80 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9F31D] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-syne font-bold text-white">Multi-Location / Franchise Branch</h5>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Centralized reporting, shared vehicle service history, and stock transfers across workshop branches.
              </p>
              <span className="text-[10px] font-mono font-bold text-[#E5C07B] mt-1.5 block">+₹499/mo per additional bay</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10B981] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-syne font-bold text-white">Dedicated WhatsApp Business API Gateway</h5>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Send green-tick verified customer bills, service feedback surveys, and automated KM service reminders.
              </p>
              <span className="text-[10px] font-mono font-bold text-[#10B981] mt-1.5 block">Zero markup on official Meta rates</span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Tested & Certified at MotoFit 2 Workshop, Ahmedabad</span>
          </div>
          <div className="flex items-center gap-2">
            <QrCode className="w-4 h-4 text-[#C9F31D]" />
            <span>Direct UPI Payments — Zero Gateway Fee Deduction</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Full EULA Dual-Licensing Compliance</span>
          </div>
        </div>

      </div>

      {/* Onboarding Dialog */}
      <OnboardingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPlan={selectedTier}
      />
    </section>
  );
}
