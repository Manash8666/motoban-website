"use client";

import Link from "next/link";
import { Mic, MessageSquareShare, Users, Layers, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    num: "01",
    title: "AI Voice & Speech Biller",
    desc: "Speak naturally into your device. MechBillerAI maps spoken part names and labor rates directly to verified HSN codes.",
    icon: Mic,
  },
  {
    num: "02",
    title: "WhatsApp Estimates & UPI",
    desc: "Send digital estimates directly to vehicle owners. Customers approve line items with 1 click and pay via dynamic QR codes.",
    icon: MessageSquareShare,
  },
  {
    num: "03",
    title: "Mechanic Bay & Payroll",
    desc: "Track live status for each workshop ramp. Calculate daily mechanic commissions, incentives, and labor splits automatically.",
    icon: Users,
  },
  {
    num: "04",
    title: "50k+ Spares Matrix & POS",
    desc: "Preloaded catalog of BS3, BS4 & BS6 spare parts. Barcode label generator, FIFO purchasing, and raw thermal ESC/POS printing.",
    icon: Layers,
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="relative bg-[#0B0F19] text-white py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight">
              Platform Features
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 text-sm text-slate-400 max-w-sm leading-relaxed">
            Eliminating paper friction with atomic database performance and zero-training simplicity.
          </p>
        </div>

        {/* 4-Column Bordered Grid (Geekfolio .item-bord clone) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative p-8 sm:p-10 border-r border-b border-white/10 bg-[#0B0F19] hover:bg-[#151D2F] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-[#C9F31D] transition-colors">
                      {item.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#1C263D] border border-white/10 flex items-center justify-center group-hover:border-[#C9F31D] group-hover:shadow-lime-glow transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#C9F31D]" />
                    </div>
                  </div>

                  <h3 className="font-syne font-bold text-xl text-white mb-4 group-hover:text-[#C9F31D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-10">
                    {item.desc}
                  </p>
                </div>

                {/* Geekfolio Arrow Link */}
                <Link
                  href="/features"
                  className="inline-flex items-center space-x-3 text-xs uppercase font-syne font-bold tracking-widest text-slate-300 group-hover:text-white pt-6 border-t border-white/5"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1C263D] border border-white/10 flex items-center justify-center group-hover:bg-[#C9F31D] group-hover:text-[#0B0F19] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span>Read More</span>
                </Link>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9F31D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
