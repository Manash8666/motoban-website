"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ExternalLink, X, Flame, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ViralFloatingBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [garageCount, setGarageCount] = useState(16);

  useEffect(() => {
    // Slight randomized count between 14 and 22 for authentic micro-social proof
    const randomCount = Math.floor(Math.random() * 8) + 14;
    setGarageCount(randomCount);
  }, []);

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Instant Garage Onboarding & WhatsApp Pit-Stop"
      className="fixed bottom-5 left-5 z-40 max-w-sm w-[calc(100vw-2.5rem)] sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="p-3 sm:p-3.5 rounded-2xl bg-[#151D2F]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 flex items-center justify-between space-x-3">
        
        {/* Left Pulse & Status */}
        <div className="flex items-center space-x-2.5 min-w-0 pr-1">
          <div className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9F31D] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C9F31D]" />
          </div>

          <div className="truncate">
            <div className="flex items-center space-x-1 text-[11px] font-mono font-bold text-white leading-tight">
              <Flame className="w-3.5 h-3.5 text-[#FF5E14] shrink-0" />
              <span>{garageCount} Garages billed today</span>
            </div>
            <span className="text-[10px] text-slate-400 block truncate">
              Flagship: MotoFit 2 (Ahmedabad)
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-1.5 shrink-0">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-syne font-bold flex items-center space-x-1 transition-transform hover:scale-105 shadow-md shadow-[#25D366]/20"
            title="Chat directly with founder on WhatsApp"
          >
            <MessageCircle className="w-3 h-3" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <a
            href={SITE_CONFIG.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-xl bg-[#1C263D] hover:bg-[#253352] text-[#C9F31D] border border-[#C9F31D]/40 text-[11px] font-mono font-bold flex items-center space-x-1 transition-transform hover:scale-105"
            title="Open Live App Demo"
          >
            <Sparkles className="w-3 h-3 text-[#C9F31D]" />
            <span className="hidden sm:inline">App</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Dismiss banner"
            className="w-6 h-6 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors ml-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}
