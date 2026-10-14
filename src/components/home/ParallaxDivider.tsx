"use client";

import { ShieldCheck, WifiOff, HardDrive, RefreshCw } from "lucide-react";

export default function ParallaxDivider() {
  return (
    <section className="relative py-36 md:py-48 bg-[#0B0F19] overflow-hidden border-y border-white/10">
      {/* Fixed Background Image Parallax (Geekfolio .back-image clone) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-40 pointer-events-none scale-105"
        style={{ backgroundImage: "url('/assets/imgs/workshop_parallax.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/60 to-[#0B0F19] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Emerald Status Pill matching Geekfolio */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 mb-8 backdrop-blur-md shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#10B981]">
            ZERO DOWNTIME ARCHITECTURE — WORKS 100% OFFLINE & ONLINE
          </span>
        </div>

        <h2 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white max-w-3xl leading-[1.1]">
          When the internet cuts out, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9F31D] via-white to-[#FF5E14]">
            your cash counter doesn’t stop.
          </span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Traditional billing software freezes when workshop broadband disconnects. MotoBan continues executing billing, barcode scans, and thermal receipt printing locally on your machine. All transactions sync automatically the second connectivity returns.
        </p>

        {/* 3 Minimal Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center space-x-3 text-left">
            <WifiOff className="w-5 h-5 text-[#FF5E14] shrink-0" />
            <div>
              <span className="font-syne font-bold text-xs text-white block">Offline First</span>
              <span className="text-[10px] text-slate-400">Local IndexedDB store</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center space-x-3 text-left">
            <HardDrive className="w-5 h-5 text-[#C9F31D] shrink-0" />
            <div>
              <span className="font-syne font-bold text-xs text-white block">Zero Data Loss</span>
              <span className="text-[10px] text-slate-400">Atomic invoice numbering</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center space-x-3 text-left">
            <RefreshCw className="w-5 h-5 text-[#2563EB] shrink-0" />
            <div>
              <span className="font-syne font-bold text-xs text-white block">Auto Background Sync</span>
              <span className="text-[10px] text-slate-400">Cloud Web & Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
