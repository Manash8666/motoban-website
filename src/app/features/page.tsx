"use client";

import { useState } from "react";
import {
  Mic,
  Laptop,
  Smartphone,
  Cloud,
  Play,
  Printer,
  Scan,
  Monitor,
  Tablet,
  Sparkles,
  Scale,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import LivePosSandbox from "@/components/sandbox/LivePosSandbox";

// Sample voice prompts for the simulator
const samplePrompts = [
  {
    id: 1,
    title: "Pulsar 150 Rush Job",
    prompt: "Add Pulsar 150 rear shocker, clutch cable, Motul 10W40 oil, and ₹450 labor",
    items: [
      { name: "Rear Shock Absorber (Endurance)", hsn: "8714", price: 1250, qty: 1, type: "part" },
      { name: "Clutch Cable Assembly", hsn: "8714", price: 180, qty: 1, type: "part" },
      { name: "Motul 3100 4T 10W40 (1L)", hsn: "2710", price: 420, qty: 1, type: "part" },
      { name: "Suspension & Clutch Labor", hsn: "9987", price: 450, qty: 1, type: "labor" },
    ],
  },
  {
    id: 2,
    title: "Activa 6G General Service",
    prompt: "Activa 6G full general service, front brake shoes, Uno Minda air filter, ₹350 labor",
    items: [
      { name: "Front Brake Shoe Set (KBX)", hsn: "8714", price: 240, qty: 1, type: "part" },
      { name: "Uno Minda Air Filter Element", hsn: "8421", price: 195, qty: 1, type: "part" },
      { name: "Engine Oil 10W30 Activa OEM", hsn: "2710", price: 380, qty: 1, type: "part" },
      { name: "General Service Periodic Labor", hsn: "9987", price: 350, qty: 1, type: "labor" },
    ],
  },
  {
    id: 3,
    title: "Classic 350 Drivetrain Overhaul",
    prompt: "Classic 350 chain sprocket kit, engine flush, Motul 15W50 synthetic, ₹600 labor",
    items: [
      { name: "Rolon Brass Chain Sprocket Kit", hsn: "8714", price: 2450, qty: 1, type: "part" },
      { name: "Liqui Moly Engine Flush Plus", hsn: "3811", price: 350, qty: 1, type: "part" },
      { name: "Motul 7100 4T 15W50 Synthetic", hsn: "2710", price: 920, qty: 2.5, type: "part" },
      { name: "Drivetrain & Sprocket Labor", hsn: "9987", price: 600, qty: 1, type: "labor" },
    ],
  },
];

const pipelineStages = [
  { step: "01", name: "Check-In & Gate Pass", desc: "Scan number plate or QR, log odometer & fuel level, capture 4 dent photos." },
  { step: "02", name: "Diagnosis & Inspection", desc: "Mechanic marks checklist (brakes, battery, electricals, tyre depth)." },
  { step: "03", name: "Waiting For Spares", desc: "Auto-reserve parts from inventory or create vendor purchase order." },
  { step: "04", name: "On Ramp (Work in Progress)", desc: "Live timer tracks mechanic hours; extra parts flagged to owner on WhatsApp." },
  { step: "05", name: "Ready for Delivery", desc: "Quality test drive checklist approved; final invoice and UPI link generated." },
  { step: "06", name: "Delivered & Feedback", desc: "Gate pass printed, WhatsApp review link sent, next service KM scheduled." },
];

export default function FeaturesPage() {
  const [activePlatform, setActivePlatform] = useState<"cloud" | "desktop" | "mobile">("cloud");
  const [selectedPrompt, setSelectedPrompt] = useState(samplePrompts[0]);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = (promptObj: typeof samplePrompts[0]) => {
    setSelectedPrompt(promptObj);
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 600);
  };

  // Calculations
  const subtotal = selectedPrompt.items.reduce((acc, curr) => acc + curr.price * (curr.qty || 1), 0);
  const gstRate = 0.18;
  const gstAmount = subtotal * gstRate;
  const total = subtotal + gstAmount;

  return (
    <div className="relative pt-28 pb-20 bg-[#0B0F19] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C9F31D]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold">
            Platform Capabilities & Architecture
          </span>
        </div>
        <h1 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight mb-6">
          The Full Stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9F31D] via-white to-[#FF5E14]">
            Garage Operating System
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
          Explore the modular technology powering MotoBan — from multilingual speech recognition and offline IndexedDB databases to ESC/POS thermal printing.
        </p>

        {/* GEO / AEO Quick Answer Box */}
        <aside
          aria-label="Quick Answer Summary"
          className="max-w-4xl mx-auto mt-8 p-5 rounded-2xl bg-[#1C263D]/80 border border-[#C9F31D]/40 text-left"
        >
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#C9F31D] mb-1.5">
            <Sparkles className="w-4 h-4 text-[#C9F31D]" />
            <span>TL;DR — What Makes MotoBan #1 For Workshops?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong>MotoBan (MechBillerAI)</strong> replaces slow paper registers with a <strong>15-second AI voice billing pipeline</strong> trained on Indian garage dialect. It runs <strong>100% offline via an IndexedDB Progressive Web App</strong>, includes <strong>50,000+ preloaded BS3/BS4/BS6 spare parts</strong>, silent <strong>58mm/80mm ESC/POS thermal printing</strong>, and automatic <strong>WhatsApp estimates with zero-fee direct UPI QR codes</strong>.
          </p>
        </aside>

        {/* Platform Switcher */}
        <div className="mt-10 inline-flex p-1.5 rounded-2xl bg-[#151D2F] border border-white/10">
          <button
            onClick={() => setActivePlatform("cloud")}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              activePlatform === "cloud"
                ? "bg-[#2563EB] text-white shadow-cobalt-glow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Cloud className="w-4 h-4" />
            <span>Cloud SaaS Web</span>
          </button>
          <button
            onClick={() => setActivePlatform("desktop")}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              activePlatform === "desktop"
                ? "bg-[#C9F31D] text-[#0B0F19] shadow-lime-glow font-extrabold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Laptop className="w-4 h-4" />
            <span>Offline Desktop PWA</span>
          </button>
          <button
            onClick={() => setActivePlatform("mobile")}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-syne text-xs uppercase tracking-wider font-bold transition-all ${
              activePlatform === "mobile"
                ? "bg-[#FF5E14] text-white shadow-orange-glow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile Companion App</span>
          </button>
        </div>
      </div>

      {/* Platform Switcher Details Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          {activePlatform === "cloud" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">Multi-Branch Web Central</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Access live financials, consolidated GST reports, and mechanic commission logs from any browser in the world. Real-time updates via WebSockets.
                </p>
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">Automated Cloud Backups</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every invoice and job card is mirrored to encrypted cloud storage every few seconds. Never fear a damaged workshop hard drive.
                </p>
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">Instant Staff Permissions</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Role-based access controls for cashier, service advisor, mechanic, and workshop owner. Hide purchase prices from technicians.
                </p>
              </div>
            </div>
          )}

          {activePlatform === "desktop" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-syne font-bold text-lg text-[#C9F31D] mb-2">Zero-Internet IndexedDB</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Installed directly on Windows or macOS via Chrome/Edge PWA. Works 100% offline with zero latency during intense morning garage queues.
                </p>
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">Direct Hardware Access</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Native WebHID and WebSerial support for USB barcode scanners and 58mm/80mm ESC/POS thermal printers with raw silent printing.
                </p>
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">Keyboard Billing Hotkeys</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Press F2 for New Job Card, F4 to Add Spare Part, and Ctrl+P to Print. Built so you don't even need to touch the mouse.
                </p>
              </div>
            </div>
          )}

          {activePlatform === "mobile" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-syne font-bold text-lg text-[#FF5E14] mb-2">Ramp Inspection & Photos</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Snap dent and scratch photos directly with your phone camera while checking in vehicles. Automatically attaches to customer WhatsApp estimate.
                </p>
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">Mechanic Bay View</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mechanics view only their assigned bikes, checklist of tasks, and can mark work as finished to notify the front desk immediately.
                </p>
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">Digital Gate Pass Scanner</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Security guards at the gate scan the customer invoice QR to verify payment settlement before rolling the motorcycle out.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FULL LIVE MINI-POS SANDBOX TERMINAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <LivePosSandbox />
      </div>

      {/* SECTION 1: INTERACTIVE AI VOICE-TO-INVOICE SIMULATOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1C263D] to-[#151D2F] border-2 border-[#C9F31D] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9F31D]/10 blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-2">
              <Mic className="w-4 h-4" />
              <span>Interactive Simulator</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-3">
              AI Voice & Natural Language Biller
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Click any sample garage prompt below to simulate voice dictation and watch HybridStudioZ parse items, HSN codes, and GST in real-time.
            </p>
          </div>

          {/* Sample Prompts Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {samplePrompts.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSimulate(p)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedPrompt.id === p.id
                    ? "bg-[#C9F31D] text-[#0B0F19] border-[#C9F31D] shadow-lime-glow font-bold"
                    : "bg-[#0B0F19]/60 text-slate-300 border-white/10 hover:border-[#C9F31D]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-syne text-xs uppercase tracking-wider">{p.title}</span>
                  <Play className={`w-3.5 h-3.5 ${selectedPrompt.id === p.id ? "fill-[#0B0F19]" : "fill-slate-400"}`} />
                </div>
                <p className="text-[11px] font-mono line-clamp-2 opacity-90">
                  "{p.prompt}"
                </p>
              </button>
            ))}
          </div>

          {/* Voice Waveform & Simulated Output */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Spoken Prompt & Parsing status (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                  Simulated Spoken Input
                </span>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF5E14]/20 border border-[#FF5E14] flex items-center justify-center text-[#FF5E14] shrink-0 animate-pulse">
                    <Mic className="w-5 h-5" />
                  </div>
                  <p className="font-mono text-xs text-slate-200 italic">
                    "{selectedPrompt.prompt}"
                  </p>
                </div>

                {/* Animated Audio Bars */}
                <div className="flex items-center space-x-1.5 pt-2">
                  {[20, 45, 80, 30, 65, 95, 40, 70, 85, 30, 50, 75, 90, 40].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 bg-[#C9F31D] rounded-full transition-all duration-300"
                      style={{ height: isSimulating ? `${(h * 1.2) % 32 + 8}px` : "12px" }}
                    />
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2 text-xs font-mono">
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 block font-bold">
                  ✓ NLP Entities Extracted
                </span>
                <div className="flex justify-between text-slate-300">
                  <span>Part Line Items:</span>
                  <span className="text-[#C9F31D] font-bold">{selectedPrompt.items.filter(i => i.type === "part").length} identified</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Labor SAC Rate:</span>
                  <span className="text-[#C9F31D] font-bold">₹{selectedPrompt.items.find(i => i.type === "labor")?.price || 0} mapped</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>HSN Match Confidence:</span>
                  <span className="text-emerald-400 font-bold">99.4% Verified</span>
                </div>
              </div>
            </div>

            {/* Right: Live GST Invoice Draft Output (7 cols) */}
            <div className="lg:col-span-7 bg-[#0B0F19] p-6 rounded-2xl border border-white/10 font-mono text-xs">
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-white/10">
                <div>
                  <span className="font-syne font-bold text-sm text-white block">Auto-Generated GST Invoice</span>
                  <span className="text-[10px] text-slate-400">Invoice #MB-2026-08412 • Ready in 15s</span>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                  Ready to Print
                </span>
              </div>

              {/* Table */}
              <div className="space-y-2 pb-4 border-b border-white/10">
                {selectedPrompt.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center text-[11px] py-1">
                    <div>
                      <span className="text-white font-medium block">{item.name}</span>
                      <span className="text-[10px] text-slate-400">HSN/SAC: {item.hsn} • Qty: {item.qty || 1}</span>
                    </div>
                    <span className="text-[#C9F31D] font-bold">₹{item.price * (item.qty || 1)}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="pt-3 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-400">
                  <span>Taxable Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>CGST (9%) + SGST (9%):</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#C9F31D] font-bold text-base pt-2 border-t border-white/10 font-syne">
                  <span>Grand Total (Net Payable):</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={SITE_CONFIG.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-xs uppercase tracking-wider text-center shadow-lime-glow hover:bg-white transition-colors"
                >
                  Test In Live Sandbox
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* SECTION 2: JOB CARD LIFECYCLE PIPELINE (KANBAN VIEW) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#FF5E14] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
            <span>End-to-End Workflow</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight mb-4">
            Job Card Lifecycle Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From the minute the bike rolls onto the workshop floor to final gate pass release.
          </p>
        </div>

        {/* 6 Pipeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pipelineStages.map((st) => (
            <div
              key={st.step}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#C9F31D]/40 transition-all duration-300 relative group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-3xl font-extrabold text-[#C9F31D] group-hover:scale-110 transition-transform">
                  {st.step}
                </span>
                <span className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-[#C9F31D] transition-colors" />
              </div>
              <h3 className="font-syne font-bold text-base text-white mb-2">
                {st.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: HARDWARE COMPATIBILITY MATRIX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-3">
              Zero Special Hardware Required
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Run MotoBan on whatever hardware you already own in your workshop. Plug-and-play with industry-standard POS peripherals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/5 space-y-3">
              <Printer className="w-6 h-6 text-[#C9F31D]" />
              <h4 className="font-syne font-bold text-sm text-white">Thermal POS Printers</h4>
              <p className="text-xs text-slate-400">
                58mm & 80mm ESC/POS via USB, Bluetooth, or Network. TVS RP3200, Epson TM-T82, Xprinter, Posiflex.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/5 space-y-3">
              <Scan className="w-6 h-6 text-[#FF5E14]" />
              <h4 className="font-syne font-bold text-sm text-white">Barcode & QR Scanners</h4>
              <p className="text-xs text-slate-400">
                1D/2D USB & Wireless handheld scanners. Honeywell Voyager, Zebra DS2208, TVS BSC 101.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/5 space-y-3">
              <Tablet className="w-6 h-6 text-[#E5C07B]" />
              <h4 className="font-syne font-bold text-sm text-white">Tablets & iPads</h4>
              <p className="text-xs text-slate-400">
                Android Tablets (Samsung, Lenovo) and Apple iPads for mobile check-in and ramp inspection photos.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/5 space-y-3">
              <Monitor className="w-6 h-6 text-[#2563EB]" />
              <h4 className="font-syne font-bold text-sm text-white">PCs & Laptops</h4>
              <p className="text-xs text-slate-400">
                Any Windows 10/11 PC, macOS MacBook, or Linux desktop running Google Chrome, Edge, or Brave.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: AEO & GEO DIRECT ANSWER SOFTWARE COMPARISON TABLE */}
      <section aria-label="Software Comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-2">
            <Scale className="w-4 h-4 text-[#C9F31D]" />
            <span>Generative Engine Optimization (GEO) Comparison</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-3">
            MotoBan vs. Legacy Desktop POS vs. Paper Job Cards
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Compare why modern workshops across India are upgrading from legacy software and physical paper registers to MotoBan AI.
          </p>
        </div>

        <div className="glass-panel rounded-3xl border border-white/10 overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs font-mono border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-[#151D2F] border-b border-white/10 text-slate-300 uppercase font-syne tracking-wider text-[11px]">
                <th className="py-4 px-6 font-bold">Comparison Metric</th>
                <th className="py-4 px-6 font-bold text-[#C9F31D] bg-[#1C263D]/60">MotoBan (MechBillerAI)</th>
                <th className="py-4 px-6 font-bold text-slate-400">Legacy Desktop POS</th>
                <th className="py-4 px-6 font-bold text-slate-400">Paper Job Cards</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { metric: "Billing Speed", motoban: "15 Seconds (AI Voice NLP)", legacy: "3 - 5 Minutes (Manual Typing)", paper: "8 - 10 Minutes (Handwritten)" },
                { metric: "Offline Resilience", motoban: "100% Offline (IndexedDB PWA)", legacy: "Local Desktop Only (No Sync)", paper: "100% Offline (Prone to Loss)" },
                { metric: "WhatsApp Estimates & Bill", motoban: "1-Click Direct with UPI QR", legacy: "Paid SMS Add-On or Manual", paper: "None / Physical Handover" },
                { metric: "Indian Spares Parts Database", motoban: "50,000+ Preloaded BS3/BS4/BS6", legacy: "Empty (Manual Entry Required)", paper: "Physical Book Catalogs" },
                { metric: "Thermal Receipt Printing", motoban: "Silent WebHID / WebSerial (58/80mm)", legacy: "Proprietary Windows Driver", paper: "Carbon Copy Sheets" },
                { metric: "Inspection Damage Photos", motoban: "4-Angle Smartphone Capture", legacy: "Not Supported", paper: "Hand-Drawn Sketches" },
                { metric: "Hardware Investment", motoban: "Zero (Runs on Existing Phone/PC)", legacy: "₹25,000+ Dedicated Windows PC", paper: "Printed Carbon Pad Registers" },
                { metric: "Pricing & License", motoban: "Free Sandbox / ₹999/mo / ₹14,999 Lifetime", legacy: "₹18,000 - ₹35,000 + Annual AMC", paper: "₹2,500/month recurring printing" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-6 font-sans font-medium text-white">{row.metric}</td>
                  <td className="py-3.5 px-6 font-bold text-[#C9F31D] bg-[#1C263D]/30">{row.motoban}</td>
                  <td className="py-3.5 px-6 text-slate-400">{row.legacy}</td>
                  <td className="py-3.5 px-6 text-slate-400">{row.paper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: PROGRAMMATIC SEO LANDING MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
            <Wrench className="w-3.5 h-3.5 text-[#C9F31D]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold">
              Programmatic SEO Workshop Matrix
            </span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            Engineered For Every Workshop Speciality
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            From single-bay two-wheeler garages to multi-ramp computerized detailing centers and retail spare parts counters.
          </p>
        </div>

        <div className="space-y-8">
          {/* Card 1: Two-Wheeler Workshops */}
          <div id="two-wheeler-workshops" className="p-8 rounded-3xl bg-[#151D2F] border border-white/10 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-[#C9F31D]/10 border border-[#C9F31D]/30 text-[#C9F31D] font-mono text-[11px] font-bold uppercase">
                  Specialty 01 • Two-Wheeler & Superbike Garages
                </span>
                <h3 className="font-syne font-black text-2xl text-white">
                  Motorcycle & Scooter Service Centers (BS3, BS4 & BS6)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tailored for Royal Enfield, Hero MotoCorp, Bajaj Auto, Honda 2Wheelers, TVS Motor, Yamaha, and KTM specialists. Generate quick-lube oil change invoices in 10 seconds, maintain tappet setting logs, and track chain sprocket maintenance intervals automatically.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">50,000+ Preloaded Bike SKUs</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">Fast Thermal POS Invoices</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-[#C9F31D]">WhatsApp Pickup Alerts</span>
                </div>
              </div>
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-3 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center space-x-2">
                <span>Onboard 2-Wheeler Garage</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Car Service Centers */}
          <div id="car-service-centers" className="p-8 rounded-3xl bg-[#151D2F] border border-white/10 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/40 text-[#2563EB] font-mono text-[11px] font-bold uppercase">
                  Specialty 02 • Multi-Brand 4-Wheeler Garages
                </span>
                <h3 className="font-syne font-black text-2xl text-white">
                  Multi-Brand Car & SUV Diagnostic Service Hubs
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Comprehensive 4-angle tablet vehicle check-in with fuel meter logging, dent/scratch marking, technician ramp assignment, and multi-bay Kanban boards for Maruti Suzuki, Hyundai, Tata Motors, Mahindra, and German luxury vehicles.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">Dent Photo Storage</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">Multi-Ramp Live Kanban</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-[#2563EB]">OBD-II Diagnostic Job Cards</span>
                </div>
              </div>
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-3 rounded-xl bg-[#2563EB] text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#3b82f6] transition-colors flex items-center space-x-2">
                <span>Onboard Car Center</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Detailing Studios */}
          <div id="detailing-studios" className="p-8 rounded-3xl bg-[#151D2F] border border-white/10 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/40 text-[#E5C07B] font-mono text-[11px] font-bold uppercase">
                  Specialty 03 • Aesthetic & Surface Care
                </span>
                <h3 className="font-syne font-black text-2xl text-white">
                  Ceramic Coating, PPF & Detailing Studios
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pre-inspection gloss and swirl mark photo documentation, warranty certificate generation with QR verification, and automated annual ceramic maintenance inspection reminders.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">Warranty Card QR</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">Before / After Gallery</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-[#E5C07B]">PPF Maintenance Schedule</span>
                </div>
              </div>
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-3 rounded-xl bg-[#E5C07B] text-[#0B0F19] font-syne font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center space-x-2">
                <span>Onboard Detailing Studio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4: Spare Parts Dealers */}
          <div id="spare-parts-dealers" className="p-8 rounded-3xl bg-[#151D2F] border border-white/10 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-[#FF5E14]/15 border border-[#FF5E14]/40 text-[#FF5E14] font-mono text-[11px] font-bold uppercase">
                  Specialty 04 • Retail Counters
                </span>
                <h3 className="font-syne font-black text-2xl text-white">
                  Auto Spare Parts Retailers & Wholesalers
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rapid counter POS billing with 1D/2D barcode scanning, wholesale credit ledgers (Udhar khata), supplier purchase order reconciliation, and low-inventory auto-reordering.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">Barcode Scanning</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">Wholesale Udhar Ledger</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-[#FF5E14]">GSTR-1 JSON Export</span>
                </div>
              </div>
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-3 rounded-xl bg-[#FF5E14] text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#ff7a3d] transition-colors flex items-center space-x-2">
                <span>Onboard Spare Counter</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 5: EV Service Hubs */}
          <div id="ev-service-hubs" className="p-8 rounded-3xl bg-[#151D2F] border border-white/10 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] font-mono text-[11px] font-bold uppercase">
                  Specialty 05 • Electric Mobility
                </span>
                <h3 className="font-syne font-black text-2xl text-white">
                  EV Two-Wheeler & Battery Service Centers
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Battery health percentage (SOH) tracking, BMS cell diagnostic logs, hub motor winding repair job cards, and charger serial number tracking for Ola, Ather, TVS iQube, and Chetak.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">Battery SOH Tracking</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-slate-300">BMS Diagnostic Logs</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-[#10B981]">EV Firmware Checklists</span>
                </div>
              </div>
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-3 rounded-xl bg-[#10B981] text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#059669] transition-colors flex items-center space-x-2">
                <span>Onboard EV Hub</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
