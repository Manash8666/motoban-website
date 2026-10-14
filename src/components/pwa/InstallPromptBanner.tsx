"use client";

import React, { useState, useEffect } from "react";
import {
  Laptop,
  Smartphone,
  Globe,
  Download,
  ExternalLink,
  Zap,
  CheckCircle2,
  HardDrive,
  WifiOff,
  Keyboard,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function InstallPromptBanner() {
  const [detectedOs, setDetectedOs] = useState<"Windows" | "macOS" | "Android" | "iOS" | "Web">("Windows");
  const [activeTab, setActiveTab] = useState<"desktop" | "cloud" | "mobile">("desktop");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.includes("win")) {
        setDetectedOs("Windows");
        setActiveTab("desktop");
      } else if (userAgent.includes("mac")) {
        setDetectedOs("macOS");
        setActiveTab("desktop");
      } else if (userAgent.includes("android")) {
        setDetectedOs("Android");
        setActiveTab("mobile");
      } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
        setDetectedOs("iOS");
        setActiveTab("mobile");
      } else {
        setDetectedOs("Web");
        setActiveTab("cloud");
      }
    }
  }, []);

  return (
    <section className="relative my-12 rounded-3xl border border-white/10 bg-[#0E1526]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-[#C9F31D]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono uppercase tracking-widest mb-2">
            <WifiOff className="w-3.5 h-3.5" />
            100% Offline-First Multi-Device Ecosystem
          </div>
          <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white">
            Run MotoBan on Your Desktop, Tablet, or Counter
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Detected OS: <span className="text-[#C9F31D] font-mono font-bold">{detectedOs}</span>. Works as an offline Windows/Mac desktop app or zero-install cloud POS.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/40 border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab("desktop")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === "desktop"
                ? "bg-[#C9F31D] text-[#0B0F19] shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Laptop className="w-4 h-4" />
            Desktop POS (PWA)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("cloud")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === "cloud"
                ? "bg-[#C9F31D] text-[#0B0F19] shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Globe className="w-4 h-4" />
            Cloud SaaS
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("mobile")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === "mobile"
                ? "bg-[#C9F31D] text-[#0B0F19] shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Mobile App
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="mt-6">
        {activeTab === "desktop" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-lg font-syne font-bold text-white flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-[#C9F31D]" />
                Windows & Mac Native Offline PWA Installation
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Install MotoBan straight from your browser. Launches in a dedicated fullscreen desktop window with direct ESC/POS USB thermal printer support and offline IndexedDB data storage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300 pt-1">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Zero Internet Required for Bills
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Instant F2 Hotkey Fast Bill
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Automatic Background Cloud Sync
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> 58mm/80mm Silent Thermal Print
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-sm hover:shadow-lime-glow transition-all"
              >
                <Download className="w-4 h-4" />
                Install Desktop PWA (1-Click)
              </a>
              <span className="text-[11px] font-mono text-gray-400 text-center">
                Click &ldquo;Install&rdquo; in browser address bar (Chrome/Edge/Brave)
              </span>
            </div>
          </div>
        )}

        {activeTab === "cloud" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-lg font-syne font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#2563EB]" />
                Instant Cloud Browser Terminal (Zero Setup)
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Log in from any device anywhere in the world. Ideal for multi-branch workshop owners, accountant tax audits, and remote revenue monitoring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300 pt-1">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Real-time Multi-Branch Analytics
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Automated GST GSTR-1 Excel Export
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2563EB] text-white font-syne font-bold text-sm hover:bg-[#1D4ED8] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Launch Cloud Web POS
              </a>
            </div>
          </div>
        )}

        {activeTab === "mobile" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-lg font-syne font-bold text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#FF5E14]" />
                Floor Technician Companion (Android & iOS)
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Equip mechanics with tablet or phone job cards. Take 4-angle vehicle intake photos, scan registration plates via camera OCR, and send customer WhatsApp delivery notes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300 pt-1">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Camera Scratch & Dent Capture
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Digital Customer Sign-Off
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FF5E14] text-white font-syne font-bold text-sm hover:bg-[#E04B05] transition-all"
              >
                Launch Mobile App (PWA)
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
