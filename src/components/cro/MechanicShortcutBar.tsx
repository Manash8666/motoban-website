"use client";

import React, { useState, useEffect } from "react";
import { Keyboard, X, Sparkles, ExternalLink, Send, Wrench, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function MechanicShortcutBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in form inputs
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // 'K' or 'k': Toggle Shortcut Modal
      if (e.key === "k" || e.key === "K") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      // 'F2' or '1': Jump to Live Mini-POS Sandbox
      if (e.key === "F2" || e.key === "1") {
        e.preventDefault();
        setLastAction("Triggered F2: Jump to Mini-POS Sandbox");
        const el = document.getElementById("live-pos-sandbox");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => setLastAction(null), 2500);
      }

      // 'F4' or '2': Trigger Voice Billing Simulation
      if (e.key === "F4" || e.key === "2") {
        e.preventDefault();
        setLastAction("Triggered F4: Voice Speech-to-GST Simulation");
        const el = document.getElementById("live-pos-sandbox");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => setLastAction(null), 2500);
      }

      // 'D' or 'd': Open Demo Cloud App
      if (e.key === "d" || e.key === "D") {
        e.preventDefault();
        setLastAction("Opening MotoBan Cloud App (D)...");
        window.open(SITE_CONFIG.appUrl, "_blank");
        setTimeout(() => setLastAction(null), 2000);
      }

      // 'W' or 'w': Open WhatsApp Founder Support
      if (e.key === "w" || e.key === "W") {
        e.preventDefault();
        setLastAction("Opening WhatsApp Founder Hotline (W)...");
        window.open(SITE_CONFIG.whatsappUrl, "_blank");
        setTimeout(() => setLastAction(null), 2000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Toast Notification when a key is pressed */}
      {lastAction && (
        <div className="fixed bottom-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-mono text-xs font-bold shadow-2xl animate-fade-in">
          <Zap className="w-4 h-4 text-[#0B0F19]" />
          {lastAction}
        </div>
      )}

      {/* Floating Pill on bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0E1526]/90 border border-white/10 hover:border-[#C9F31D]/50 text-gray-400 hover:text-white backdrop-blur-md shadow-xl text-xs font-mono transition-all group"
        >
          <Keyboard className="w-3.5 h-3.5 text-[#C9F31D] group-hover:rotate-12 transition-transform" />
          <span>Mechanic Hotkeys</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-300 font-bold">
            K
          </kbd>
        </button>
      </div>

      {/* Hotkeys Helper Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#0E1526] p-6 shadow-2xl text-white">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-[#C9F31D]" />
              <h3 className="text-lg font-syne font-bold">Workshop Mechanic Hotkeys</h3>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Real counter mechanics bill 3x faster using native keyboard shortcuts:
            </p>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-gray-300">Jump to Mini-POS Sandbox</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 rounded bg-[#C9F31D] text-[#0B0F19] font-bold">F2</kbd>
                  <span className="text-gray-500">or</span>
                  <kbd className="px-2 py-1 rounded bg-white/10 text-white font-bold">1</kbd>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-gray-300">Simulate Speech-to-GST AI</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 rounded bg-[#2563EB] text-white font-bold">F4</kbd>
                  <span className="text-gray-500">or</span>
                  <kbd className="px-2 py-1 rounded bg-white/10 text-white font-bold">2</kbd>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-gray-300">Launch Live Cloud App</span>
                <kbd className="px-2 py-1 rounded bg-white/10 text-white font-bold">D</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-gray-300">WhatsApp Founder Hotline</span>
                <kbd className="px-2 py-1 rounded bg-[#25D366] text-[#0B0F19] font-bold">W</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-gray-300">Toggle this Shortcut Menu</span>
                <kbd className="px-2 py-1 rounded bg-white/10 text-white font-bold">K</kbd>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-xs"
              >
                Got It (Close Menu)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
