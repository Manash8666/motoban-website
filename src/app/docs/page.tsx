"use client";

import { useState } from "react";
import {
  Terminal,
  BookOpen,
  Laptop,
  Printer,
  Keyboard,
  ExternalLink,
  Copy,
  Check,
  Code2,
  FileText,
  ShieldAlert,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const sections = [
  { id: "quickstart", title: "1. Quickstart (Cloud SaaS)", icon: BookOpen },
  { id: "offline-pwa", title: "2. Offline PWA & Mobile Install", icon: Laptop },
  { id: "self-hosting", title: "3. Developer Self-Hosting", icon: Terminal },
  { id: "thermal-printer", title: "4. Thermal Printer & Barcode Setup", icon: Printer },
  { id: "shortcuts", title: "5. Keyboard Shortcuts Cheat Sheet", icon: Keyboard },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("quickstart");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="relative pt-28 pb-20 bg-[#0B0F19] text-white min-h-screen">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#C9F31D]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold">
              Documentation & Guides
            </span>
          </div>
          <h1 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            MotoBan Documentation & Setup
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Everything you need to launch the cloud web app, configure offline PWA stores, self-host via Git, and set up workshop thermal printers.
          </p>
        </div>

        {/* Sidebar + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Nav (3 cols) */}
          <aside className="lg:col-span-3 sticky top-28 glass-panel p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 pb-2 block">
              Documentation Guide
            </span>
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSection(sec.id);
                    document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs font-syne uppercase tracking-wider text-left transition-colors ${
                    isActive
                      ? "bg-[#C9F31D] text-[#0B0F19] font-bold shadow-sm"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{sec.title}</span>
                </button>
              );
            })}

            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href={SITE_CONFIG.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#151D2F] border border-white/10 text-xs text-white hover:border-[#C9F31D] transition-colors font-mono"
              >
                <span>Launch Cloud App</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C9F31D]" />
              </a>
            </div>
          </aside>

          {/* Main Content (9 cols) */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* 1. Quickstart (Cloud SaaS) */}
            <section id="quickstart" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C9F31D]/15 flex items-center justify-center text-[#C9F31D]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">1. Quickstart (Cloud SaaS)</h2>
                  <p className="text-xs text-slate-400">Launch in under 60 seconds with sample garage data</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The fastest way to test MotoBan is through the cloud sandbox at{" "}
                <a
                  href={SITE_CONFIG.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9F31D] font-mono underline"
                >
                  {SITE_CONFIG.demoUrl}
                </a>
                . The sandbox comes preloaded with 200+ popular motorcycle parts and sample job cards.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 text-xs">
                  <h4 className="font-syne font-bold text-white text-sm">Step 1: Open Cloud Dashboard</h4>
                  <p className="text-slate-400">
                    Visit <code className="text-[#C9F31D] font-mono">https://mechbillerai.vercel.app/</code> on your computer or tablet.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 text-xs">
                  <h4 className="font-syne font-bold text-white text-sm">Step 2: Create First Job Card</h4>
                  <p className="text-slate-400">
                    Click <strong>"New Job Card"</strong> (or press hotkey <code className="text-[#C9F31D] font-mono">F2</code>). Enter vehicle registration, customer mobile number, and odometer reading.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 text-xs">
                  <h4 className="font-syne font-bold text-white text-sm">Step 3: Test AI Voice Biller</h4>
                  <p className="text-slate-400">
                    Tap the microphone icon and say: <em>"Add Motul 10W40 oil, front brake pad, and 300 labor"</em>. The bill will populate instantly.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Installing the Offline PWA & Mobile App */}
            <section id="offline-pwa" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E14]/15 flex items-center justify-center text-[#FF5E14]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">2. Offline PWA & Mobile Companion Install</h2>
                  <p className="text-xs text-slate-400">Install as a standalone native app on Windows, Mac, Android, and iOS</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/5 space-y-3">
                  <span className="font-syne font-bold text-sm text-[#C9F31D] block">Windows / macOS Desktop PWA</span>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Open Chrome or Microsoft Edge.</li>
                    <li>Navigate to <code className="text-[#C9F31D] font-mono">https://mechbillerai.vercel.app/</code>.</li>
                    <li>Click the <strong>Install Icon (⊕)</strong> in the browser URL bar.</li>
                    <li>MotoBan will install as a native desktop window with high-performance local IndexedDB caching.</li>
                  </ol>
                </div>

                <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/5 space-y-3">
                  <span className="font-syne font-bold text-sm text-[#FF5E14] block">Android & iOS Workshop Tablets</span>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Open Chrome on Android or Safari on iPad/iPhone.</li>
                    <li>Tap the browser options menu (or Share icon on iOS).</li>
                    <li>Select <strong>"Add to Home Screen"</strong>.</li>
                    <li>Enables camera access for job card photo capture and offline barcode scanning.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 3. Developer Self-Hosting (HybridStudioZ Engine) */}
            <section id="self-hosting" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/15 flex items-center justify-center text-[#2563EB]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">3. Developer Self-Hosting (HybridStudioZ Engine)</h2>
                  <p className="text-xs text-slate-400">Clone and deploy your own private MotoBan instance powered by HybridStudioZ</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Want to run MotoBan on your own private cloud or local workshop mini-server? The underlying engine is <strong>HybridStudioZ</strong>, battle-tested in high-throughput production by our flagship partner <a href="https://motofit2.in" target="_blank" rel="noopener noreferrer" className="text-[#C9F31D] underline font-bold">MotoFit 2</a> in Nigam Nagar, Chandkheda, Ahmedabad running the Full Version. Clone the repository:
              </p>

              {/* Terminal Block 1: Clone */}
              <div className="relative bg-[#0B0F19] rounded-2xl border border-white/10 p-4 font-mono text-xs">
                <div className="flex justify-between items-center text-slate-400 mb-2 pb-2 border-b border-white/5">
                  <span>bash — Clone Repository</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "git clone https://github.com/Manash8666/mechbillerai.git\ncd mechbillerai\nnpm install",
                        "git-clone"
                      )
                    }
                    className="flex items-center space-x-1 hover:text-[#C9F31D]"
                  >
                    {copiedCode === "git-clone" ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode === "git-clone" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-[#C9F31D] overflow-x-auto">
{`git clone https://github.com/Manash8666/mechbillerai.git
cd mechbillerai
npm install`}
                </pre>
              </div>

              {/* Terminal Block 2: Environment Variables */}
              <div className="relative bg-[#0B0F19] rounded-2xl border border-white/10 p-4 font-mono text-xs">
                <div className="flex justify-between items-center text-slate-400 mb-2 pb-2 border-b border-white/5">
                  <span>.env.local — Environment Setup</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `NEXT_PUBLIC_APP_NAME="MotoBan"\nNEXT_PUBLIC_WORKSHOP_NAME="My Garage"\nDATABASE_URL="postgresql://user:pass@localhost:5432/motoban"\nNEXT_PUBLIC_ENABLE_OFFLINE_SYNC=true`,
                        "env-code"
                      )
                    }
                    className="flex items-center space-x-1 hover:text-[#C9F31D]"
                  >
                    {copiedCode === "env-code" ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode === "env-code" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-slate-300 overflow-x-auto">
{`NEXT_PUBLIC_APP_NAME="MotoBan"
NEXT_PUBLIC_WORKSHOP_NAME="My Garage"
DATABASE_URL="postgresql://user:pass@localhost:5432/motoban"
NEXT_PUBLIC_ENABLE_OFFLINE_SYNC=true`}
                </pre>
              </div>

              {/* Terminal Block 3: Dev Server */}
              <div className="relative bg-[#0B0F19] rounded-2xl border border-white/10 p-4 font-mono text-xs">
                <div className="flex justify-between items-center text-slate-400 mb-2 pb-2 border-b border-white/5">
                  <span>bash — Run Local Dev</span>
                  <button
                    onClick={() => copyToClipboard("npm run dev", "npm-dev")}
                    className="flex items-center space-x-1 hover:text-[#C9F31D]"
                  >
                    {copiedCode === "npm-dev" ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode === "npm-dev" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-[#C9F31D]">npm run dev</pre>
              </div>
            </section>

            {/* 4. Thermal Printer & Barcode Setup */}
            <section id="thermal-printer" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#E5C07B]/15 flex items-center justify-center text-[#E5C07B]">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">4. Thermal Printer & Barcode Setup</h2>
                  <p className="text-xs text-slate-400">Connect 58mm & 80mm ESC/POS hardware in under 2 minutes</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <p>
                  MotoBan includes a built-in browser-based ESC/POS byte generator. You don't need proprietary driver software or third-party print spoolers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2">
                    <span className="font-syne font-bold text-white block">USB Thermal Printers</span>
                    <p className="text-slate-400">
                      Plug in via USB. In MotoBan Settings &gt; Hardware, select <strong>"Connect USB ESC/POS"</strong>. Grant Chrome WebUSB permission once and enable silent printing.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2">
                    <span className="font-syne font-bold text-white block">Bluetooth Thermal Printers</span>
                    <p className="text-slate-400">
                      Pair the thermal printer with your tablet or phone. In MotoBan Mobile, select <strong>"Bluetooth Printer"</strong> for wire-free printing at the ramp.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Keyboard Shortcuts Cheat Sheet */}
            <section id="shortcuts" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center text-[#10B981]">
                  <Keyboard className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">5. Keyboard Shortcuts Cheat Sheet</h2>
                  <p className="text-xs text-slate-400">Speed up workshop cashier billing with zero mouse dependency</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "F2", action: "Create New Job Card" },
                  { key: "F4", action: "Add Spare Part to Current Bill" },
                  { key: "F7", action: "Add Labor / Mechanic Service" },
                  { key: "Ctrl + Space", action: "Trigger AI Voice Biller Mic" },
                  { key: "Ctrl + P", action: "Instant Thermal Print (ESC/POS)" },
                  { key: "Alt + W", action: "Send Bill & UPI Link via WhatsApp" },
                  { key: "F9", action: "Save Invoice & Mark Delivered" },
                  { key: "Esc", action: "Close Modal / Cancel Prompt" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#151D2F] border border-white/5 flex items-center justify-between font-mono text-xs"
                  >
                    <span className="text-slate-300">{item.action}</span>
                    <kbd className="px-2.5 py-1 rounded bg-[#0B0F19] border border-white/10 text-[#C9F31D] font-bold">
                      {item.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
