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
  Sparkles,
  QrCode,
  Globe,
  UploadCloud,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import InstallPromptBanner from "@/components/pwa/InstallPromptBanner";

const sections = [
  { id: "quickstart", title: "1. Quickstart & 15-Day Trial", icon: BookOpen },
  { id: "sow-gemini", title: "2. Scope of Work & Gemini AI", icon: Sparkles },
  { id: "standee-qr", title: "3. Standee UPI QR Code Setup", icon: QrCode },
  { id: "subdomains", title: "4. Free Garage Subdomain (*.motoban.in)", icon: Globe },
  { id: "migration", title: "5. Vyapar & Excel Universal Import", icon: UploadCloud },
  { id: "android-app", title: "6. Android Mobile App (v1.0.0)", icon: Smartphone },
  { id: "offline-pwa", title: "7. Offline PWA & Desktop Install", icon: Laptop },
  { id: "thermal-printer", title: "8. Thermal Printer & Barcode Setup", icon: Printer },
  { id: "self-hosting", title: "9. Developer Self-Hosting", icon: Terminal },
  { id: "shortcuts", title: "10. Keyboard Shortcuts Cheat Sheet", icon: Keyboard },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("quickstart");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    void navigator.clipboard.writeText(text);
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
              Documentation & Guides • Version {SITE_CONFIG.version}
            </span>
          </div>
          <h1 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            MotoBan Documentation & Setup Manual
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Everything you need to launch the cloud app, draft Scope of Work (SOW) bills with Gemini AI, upload your UPI standee, configure subdomains, and run offline on Android and desktop.
          </p>

          {/* GEO / AEO Quick Answer Box */}
          <aside
            aria-label="Quick Answer Summary"
            className="max-w-4xl mt-6 p-5 rounded-2xl bg-[#1C263D]/80 border border-[#C9F31D]/40 text-left shadow-xl"
          >
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#C9F31D] mb-1.5">
              <Sparkles className="w-4 h-4 text-[#C9F31D]" />
              <span className="text-[#C9F31D] font-bold">TL;DR — Technical Architecture Summary</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              <strong>MotoBan (MechBillerAI v1.0.0)</strong> is an enterprise dual-platform architecture: a <strong>Next.js 15 App Router web application</strong> with Prisma ORM and SQLite/Turso database, coupled with a <strong>React Native / Expo 57 Android mobile app</strong>. Features include <strong>Gemini AI Scope of Work (SOW) auto-explanations</strong>, real counter <strong>UPI standee QR image rendering</strong>, multi-tenant <strong>dynamic subdomains (*.motoban.in)</strong>, and silent <strong>58mm/80mm ESC/POS thermal printing</strong>.
            </p>
          </aside>
        </div>

        {/* Sidebar + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Nav (3 cols) */}
          <aside className="lg:col-span-3 sticky top-28 glass-panel p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 pb-2 block">
              Documentation Index
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

            <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
              <a
                href={SITE_CONFIG.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#151D2F] border border-white/10 text-xs text-white hover:border-[#C9F31D] transition-colors font-mono"
              >
                <span>Launch Cloud App</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C9F31D]" />
              </a>
              <a
                href={SITE_CONFIG.githubRepoEngine}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#151D2F] border border-white/10 text-xs text-white hover:border-purple-400 transition-colors font-mono"
              >
                <span>Engine GitHub Repo</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
              </a>
            </div>
          </aside>

          {/* Main Content (9 cols) */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* 1. Quickstart & 15-Day Trial */}
            <section id="quickstart" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C9F31D]/15 flex items-center justify-center text-[#C9F31D]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">1. Quickstart & 15-Day Free Trial</h2>
                  <p className="text-xs text-slate-400">Launch in under 60 seconds with zero credit card required</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The fastest way to test MotoBan is through our unrestricted cloud sandbox and 15-day free trial at{" "}
                <a
                  href={SITE_CONFIG.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9F31D] font-mono underline font-bold"
                >
                  {SITE_CONFIG.demoUrl}
                </a>. The instance comes loaded with real workshop parts, job card workflows, and customer templates verified at our flagship partner garage <strong>MotoFit 2</strong> in Ahmedabad.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 text-xs">
                  <h4 className="font-syne font-bold text-white text-sm">Step 1: Open Cloud POS</h4>
                  <p className="text-slate-400">
                    Navigate to <code className="text-[#C9F31D] font-mono">https://mechbillerai.vercel.app/</code> on any smartphone, tablet, or PC.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 text-xs">
                  <h4 className="font-syne font-bold text-white text-sm">Step 2: 15-Sec Intake</h4>
                  <p className="text-slate-400">
                    Click <strong>"New Job Card"</strong> (Hotkey <code className="text-[#C9F31D] font-mono">F2</code>). Capture number plate, odometer KM, and 4 dent photos.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 text-xs">
                  <h4 className="font-syne font-bold text-white text-sm">Step 3: Speech Billing</h4>
                  <p className="text-slate-400">
                    Tap the microphone and dictate items in Hindi or English: <em>"Hero Splendor oil change, spark plug, brake pad, ₹300 labor"</em>.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Scope of Work (SOW) & Gemini AI Auto-Explainer */}
            <section id="sow-gemini" className="glass-panel p-8 rounded-3xl border border-blue-500/30 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">2. Scope of Work (SOW) & Gemini AI Auto-Explainer</h2>
                  <p className="text-xs text-slate-400">Turn cryptic part numbers into clear customer explanations with zero manual typing</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Most customer bill disputes happen because vehicle owners do not understand why a mechanic changed a specific gasket, flush, or brake fluid. MotoBan solves this with <strong>Scope of Work (SOW) Bills</strong> powered by <strong>Google Gemini AI</strong>.
              </p>

              <div className="p-5 rounded-2xl bg-[#0E1526] border border-blue-500/20 space-y-3 text-xs">
                <span className="font-syne font-bold text-sm text-blue-400 block">How Gemini SOW Auto-Drafting Works:</span>
                <ol className="list-decimal list-inside space-y-2 text-slate-300">
                  <li>When creating a bill, toggle between <strong>Standard GST Tax Invoice</strong> and <strong>Scope of Work (SOW)</strong> mode.</li>
                  <li>Click <strong>"Auto-Explain with Gemini AI"</strong>.</li>
                  <li>Gemini instantly writes customer-friendly technical justifications for each line item (e.g., explaining why throttle body cleaning prevents stalling and increases fuel mileage).</li>
                  <li>Dispatch the transparent SOW estimate to the customer via WhatsApp before disassembly to lock in customer consent.</li>
                </ol>
              </div>
            </section>

            {/* 3. Standee UPI QR Code Setup */}
            <section id="standee-qr" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center text-[#10B981]">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">3. Standee UPI QR Code Setup (GPay / PhonePe / Paytm)</h2>
                  <p className="text-xs text-slate-400">Render your actual counter payment standee QR code directly on printed & digital receipts</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You never have to pay payment gateway transaction cuts (1.5% - 2%) or buy proprietary card machines. MotoBan embeds your genuine counter UPI standee QR code on all bills:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2">
                  <h4 className="font-syne font-bold text-white text-sm">How to Upload Your Standee QR</h4>
                  <p className="text-slate-300">
                    1. Go to <strong>Settings ➔ Workshop Profile ➔ Payment QR</strong>.<br />
                    2. Take a photo or upload your existing Google Pay, PhonePe, Paytm, or BHIM standee.<br />
                    3. MotoBan crops and verifies the QR payload.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2">
                  <h4 className="font-syne font-bold text-white text-sm">Receipt & Thermal Auto-Inclusion</h4>
                  <p className="text-slate-300">
                    When an invoice or thermal slip is spooled, the standee QR prints at the receipt footer with the exact invoice total. Customers scan and pay directly into your personal bank account.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Free Garage Subdomain */}
            <section id="subdomains" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#E5C07B]/15 flex items-center justify-center text-[#E5C07B]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">4. Free Garage Subdomain (*.motoban.in)</h2>
                  <p className="text-xs text-slate-400">Automated multi-tenant web portals for vehicle owners & live ramp tracking</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every workshop on Annual Pro or Lifetime plans automatically receives a dedicated subdomain (e.g. <code className="text-[#C9F31D] font-mono">https://motofit2.motoban.in</code>) with zero DNS configuration required:
              </p>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span><strong>Live Customer Bay Portal:</strong> Customers can check real-time repair progress, stage milestones, and technician comments.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span><strong>Digital Service History:</strong> Vehicle owners can view past invoices, replaced parts, and inspection dent photos.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span><strong>GoDaddy & Cloudflare Wildcard Support:</strong> Multi-tenant routing engineered via Next.js Middleware and Vercel Edge.</span>
                </li>
              </ul>
            </section>

            {/* 5. Vyapar & Excel Universal Import */}
            <section id="migration" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E14]/15 flex items-center justify-center text-[#FF5E14]">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">5. Universal 1-Click Migration (Vyapar, Excel & CSV)</h2>
                  <p className="text-xs text-slate-400">Migrate your entire customer book and spares inventory in under 60 seconds</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Switching from old software like Vyapar, Tally, or Excel shouldn't mean retyping thousands of parts. MotoBan includes a serverless universal parser:
              </p>

              <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 text-xs">
                <h4 className="font-syne font-bold text-white text-sm">3-Step Migration Process:</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>In your existing software (e.g. Vyapar), export your Item List or Parties List as an Excel (.xlsx) or CSV file.</li>
                  <li>In MotoBan, navigate to <strong>Settings ➔ Universal Data Import</strong> and drag in the spreadsheet.</li>
                  <li>Review the mapped columns (Name, HSN, Sale Price, Current Stock, GST %) in the visual commit table and click <strong>"Import All Records"</strong>.</li>
                </ol>
              </div>
            </section>

            {/* 6. Android Mobile App (v1.0.0) */}
            <section id="android-app" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">6. Android Mobile Companion App (v1.0.0)</h2>
                  <p className="text-xs text-slate-400">Native React Native & Expo 57 on-the-floor mechanic application (EAS Build APK & AAB)</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For mechanics operating directly under hydraulic lifts or in greasy driveway bays, MotoBan provides a native companion Android app located in the <code className="text-[#C9F31D] font-mono">/mobile</code> directory of the repository:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2">
                  <h4 className="font-syne font-bold text-white text-sm">Key Mobile Capabilities</h4>
                  <ul className="space-y-1.5 text-slate-300">
                    <li>• Instant camera barcode scanning for spare boxes.</li>
                    <li>• 4-angle vehicle dent and scratch photo capture.</li>
                    <li>• Bluetooth ESC/POS portable thermal printing.</li>
                    <li>• Offline AsyncStorage caching for low-signal garage basements.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2">
                  <h4 className="font-syne font-bold text-white text-sm">Building the Android APK</h4>
                  <pre className="text-[11px] font-mono text-[#C9F31D] overflow-x-auto p-2 bg-black/40 rounded-lg">
{`cd mobile
npm install
npm run build:apk`}
                  </pre>
                  <p className="text-[11px] text-slate-400">Generates standalone release APK via Expo Application Services (EAS Build).</p>
                </div>
              </div>
            </section>

            {/* 7. Offline PWA & Desktop Install */}
            <section id="offline-pwa" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E14]/15 flex items-center justify-center text-[#FF5E14]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">7. Offline PWA & Desktop Install</h2>
                  <p className="text-xs text-slate-400">Install as a standalone native app on Windows, macOS, Android, and iOS</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/5 space-y-3">
                  <span className="font-syne font-bold text-sm text-[#C9F31D] block">Windows / macOS Desktop PWA</span>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Open Google Chrome or Microsoft Edge.</li>
                    <li>Navigate to <code className="text-[#C9F31D] font-mono">https://mechbillerai.vercel.app/</code>.</li>
                    <li>Click the <strong>Install Icon (⊕)</strong> in the URL bar.</li>
                    <li>MotoBan will install as a native desktop window with high-performance local IndexedDB caching.</li>
                  </ol>
                </div>

                <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/5 space-y-3">
                  <span className="font-syne font-bold text-sm text-[#FF5E14] block">Android & iOS Workshop Tablets</span>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Open Chrome on Android or Safari on iPad/iPhone.</li>
                    <li>Tap options menu ➔ <strong>"Add to Home Screen"</strong>.</li>
                    <li>Enables camera access for job card photo capture and offline barcode scanning.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 8. Thermal Printer & Barcode Setup */}
            <section id="thermal-printer" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center text-[#10B981]">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">8. Thermal Printer & Barcode Setup (58mm / 80mm)</h2>
                  <p className="text-xs text-slate-400">Direct ESC/POS byte streaming via USB, Bluetooth, and LAN with zero printer drivers</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                MotoBan communicates directly with thermal printers using the industry-standard ESC/POS byte sequence. No clunky manufacturer driver installations or print dialogs are required.
              </p>

              <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 text-xs space-y-2">
                <h4 className="font-syne font-bold text-white text-sm">Supported Printer Hardware:</h4>
                <p className="text-slate-300">
                  • <strong>58mm (2-inch, 384 dots):</strong> Everycom, Bluprints, TVS RP-3200, Posiflex, generic Bluetooth mini-printers.<br />
                  • <strong>80mm (3-inch, 576 dots):</strong> Epson TM-T82, Star Micronics TSP143, TVS RP-80, Citizen, Bixolon.<br />
                  • <strong>Auto-cutter pulse:</strong> Sends <code className="text-[#C9F31D] font-mono">1D 56 42 0A</code> after invoice footer.
                </p>
              </div>
            </section>

            {/* 9. Developer Self-Hosting */}
            <section id="self-hosting" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/15 flex items-center justify-center text-[#2563EB]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">9. Developer Self-Hosting (HybridStudioZ Engine)</h2>
                  <p className="text-xs text-slate-400">Clone and deploy your own private MotoBan instance powered by HybridStudioZ</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                The underlying engine is <strong>HybridStudioZ</strong>, battle-tested in high-throughput production by our flagship partner <a href="https://motofit2.in" target="_blank" rel="noopener noreferrer" className="text-[#C9F31D] underline font-bold">MotoFit 2</a> in Ahmedabad. Clone the repository:
              </p>

              {/* Terminal Block: Clone */}
              <div className="relative bg-[#0B0F19] rounded-2xl border border-white/10 p-4 font-mono text-xs">
                <div className="flex justify-between items-center text-slate-400 mb-2 pb-2 border-b border-white/5">
                  <span>bash — Clone Repository</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "git clone https://github.com/Manash8666/mechbillerai.git\ncd mechbillerai\nnpm install\nnpm run db:push\nnpm run dev",
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
npm install
npm run db:push
npm run dev`}
                </pre>
              </div>
            </section>

            {/* 10. Keyboard Shortcuts */}
            <section id="shortcuts" className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#E5C07B]/15 flex items-center justify-center text-[#E5C07B]">
                  <Keyboard className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-xl text-white">10. Keyboard Shortcuts & Mechanic Hotkeys</h2>
                  <p className="text-xs text-slate-400">Lightning-fast billing without touching the mouse</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#151D2F] text-slate-400 border-b border-white/10">
                    <tr>
                      <th className="p-3.5">Hotkey</th>
                      <th className="p-3.5">Action Trigger</th>
                      <th className="p-3.5">Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    <tr>
                      <td className="p-3.5 font-bold text-[#C9F31D]">F2</td>
                      <td className="p-3.5">Open New Vehicle Job Card Modal</td>
                      <td className="p-3.5">Global</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#C9F31D]">ALT + B</td>
                      <td className="p-3.5">Focus Spare Parts Search Bar</td>
                      <td className="p-3.5">Billing Terminal</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#C9F31D]">ALT + V</td>
                      <td className="p-3.5">Toggle Speech-to-GST Voice Microphone</td>
                      <td className="p-3.5">Active Job Card</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#C9F31D]">F8</td>
                      <td className="p-3.5">Finalize Bill & Trigger Thermal Print</td>
                      <td className="p-3.5">POS Checkout</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#C9F31D]">ESC</td>
                      <td className="p-3.5">Close Active Modal / Cancel Operation</td>
                      <td className="p-3.5">Global</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

        </div>

      </div>

      {/* PWA Install Banner */}
      <InstallPromptBanner />
    </div>
  );
}
