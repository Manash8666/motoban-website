"use client";

import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Github,
  MessageSquare,
  Wrench,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F19] text-slate-300 border-t border-white/10 overflow-hidden">
      {/* Background glow and dot matrix */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#C9F31D]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-2xl bg-[#1C263D] border border-white/10 flex items-center justify-center group-hover:border-[#C9F31D] group-hover:shadow-lime-glow transition-all duration-300">
                <Wrench className="w-6 h-6 text-[#C9F31D]" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-syne font-black text-2xl tracking-tight text-white">
                    MotoBan
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase font-bold rounded-full bg-[#C9F31D]/20 text-[#C9F31D] border border-[#C9F31D]/30">
                    SaaS + PWA
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400">Powered by HybridStudioZ</p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The next-generation workshop operating system for motorcycle and automotive garages.
              AI voice billing, digital job cards, 50,000+ spare parts SKU matrix, and 100% offline-first resilience.
            </p>

            {/* Flagship Production Partner Badge */}
            <div className="pt-1">
              <a
                href="https://motofit2.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#C9F31D]/10 border border-[#C9F31D]/30 text-[#C9F31D] text-xs font-mono hover:bg-[#C9F31D]/20 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#C9F31D] animate-pulse" />
                <span>Flagship: MotoFit 2 (Nigam Nagar, Chandkheda)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/25 transition-colors text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Support</span>
              </a>
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#1C263D] border border-white/10 text-white hover:border-[#C9F31D] transition-colors text-xs font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h6 className="font-syne font-bold text-xs uppercase tracking-widest text-[#C9F31D]">
              Navigation
            </h6>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#C9F31D] transition-colors flex items-center space-x-1.5"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE_CONFIG.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#C9F31D] transition-colors flex items-center space-x-1"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h6 className="font-syne font-bold text-xs uppercase tracking-widest text-[#FF5E14]">
              Workshop HQ
            </h6>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                <span>Chandkheda, Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C9F31D] shrink-0" />
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="hover:text-white transition-colors font-mono font-medium"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a
                  href={SITE_CONFIG.emailHref}
                  className="hover:text-white transition-colors font-mono font-medium"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>GST Registered & HSN Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Zap className="w-4 h-4 text-[#C9F31D]" />
                <span>Thermal ESC/POS 58mm/80mm Ready</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter / Demo Request (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h6 className="font-syne font-bold text-xs uppercase tracking-widest text-[#E5C07B]">
              Onboarding Demo
            </h6>
            <p className="text-xs text-slate-400">
              Get an instant workshop demo and preloaded spare parts catalogue for your garage.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(SITE_CONFIG.whatsappUrl, "_blank");
              }}
              className="space-y-2"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Phone or WhatsApp"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151D2F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#C9F31D] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Submit Demo Request"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#C9F31D] text-[#0B0F19] hover:bg-white transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="block text-[11px] text-slate-400">
                Zero spam. Connects directly to our onboarding team.
              </span>
            </form>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} MotoBan.</span>
            <span className="text-slate-400">•</span>
            <span>All rights reserved.</span>
            <span className="text-slate-400">•</span>
            <span>Powered by HybridStudioZ.</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[11px]">System Status: Operational</span>
            </span>
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9F31D] transition-colors flex items-center space-x-1"
            >
              <span>Launch App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
