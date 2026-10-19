import type { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, CheckCircle2, AlertCircle, Mail, MapPin, ExternalLink, ArrowLeft, GitFork, Scale, Coins } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA) — MotoBan",
  description:
    "End User License Agreement (EULA) for MotoBan workshop software and the HybridStudioZ engine. Review terms of license, privacy, hardware usage, open-source reciprocity, and data ownership.",
};

const sections = [
  { id: "acknowledgment", title: "1. Acknowledgment & Parties" },
  { id: "grant-of-license", title: "2. Grant of License" },
  { id: "open-source-royalty", title: "3. Reciprocal Open-Source & 3x Royalty Policy" },
  { id: "restrictions", title: "4. Restrictions on Use" },
  { id: "intellectual-property", title: "5. Intellectual Property & HybridStudioZ Engine" },
  { id: "data-ownership", title: "6. Workshop Data & Customer Records" },
  { id: "voice-ai", title: "7. AI Voice Dictation & Speech Parsing" },
  { id: "hardware", title: "8. Hardware & Thermal POS Printers" },
  { id: "gst-disclaimer", title: "9. Tax, HSN & GST Compliance Disclaimer" },
  { id: "limitation", title: "10. Warranty Disclaimer & Limitation of Liability" },
  { id: "termination", title: "11. Termination & Data Portability" },
  { id: "governing-law", title: "12. Governing Law & Jurisdiction" },
  { id: "contact", title: "13. Contact & Legal Notices" },
];

export default function EulaPage() {
  return (
    <div className="relative pt-28 pb-24 bg-[#0B0F19] text-white min-h-screen">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#C9F31D]/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-[#C9F31D] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-14 pb-8 border-b border-white/10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold">
              Legal Agreement
            </span>
          </div>

          <h1 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            End User License Agreement (EULA)
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span>Product: <strong className="text-white font-bold">MotoBan</strong></span>
            <span>•</span>
            <span>Engine: <strong className="text-[#C9F31D] font-bold">HybridStudioZ</strong></span>
            <span>•</span>
            <span>Effective Date: <strong className="text-white font-bold">October 14, 2026</strong></span>
            <span>•</span>
            <span>Version: <strong className="text-white font-bold">1.0 (Official Release)</strong></span>
          </div>
        </div>

        {/* 2-Column Grid: Sticky Table of Contents + Document Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Table of Contents (4 cols) */}
          <aside className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="font-syne font-bold text-sm uppercase tracking-wider text-white mb-4 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#C9F31D]" />
                <span>Agreement Sections</span>
              </h3>
              <nav className="space-y-1.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs text-slate-400 hover:text-[#C9F31D] hover:translate-x-1 transition-all py-1"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Support Box */}
            <div className="p-5 rounded-2xl bg-[#151D2F] border border-white/10 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C9F31D] block font-bold">
                Questions or Custom Terms?
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                For enterprise multi-garage agreements or white-label inquiries, contact HybridStudioZ directly.
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-white hover:text-[#C9F31D] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </aside>

          {/* Legal Text Sections (8 cols) */}
          <main className="lg:col-span-8 space-y-10 text-slate-300 text-sm leading-relaxed">
            
            {/* Notice Callout */}
            <div className="p-5 rounded-2xl bg-[#1C263D]/80 border border-[#C9F31D]/30 flex items-start space-x-3.5">
              <AlertCircle className="w-5 h-5 text-[#C9F31D] shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <strong className="text-white font-syne font-bold uppercase tracking-wider block">
                  Important Notice Before Using MotoBan
                </strong>
                <p className="text-slate-300">
                  By accessing, browsing, downloading, installing, or operating the MotoBan web platform, offline desktop PWA, or mobile companion (collectively, the &ldquo;Software&rdquo;), you agree to be bound by the terms of this End User License Agreement. If you do not agree to these terms, do not use the Software.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="acknowledgment" className="space-y-3 pt-4 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                1. Acknowledgment &amp; Parties
              </h2>
              <p>
                This End User License Agreement (&ldquo;Agreement&rdquo; or &ldquo;EULA&rdquo;) is a binding legal contract between <strong>HybridStudioZ</strong> (&ldquo;Licensor&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), having its primary operations in Ahmedabad, Gujarat, India, and you, whether an individual mechanic, workshop manager, sole proprietorship, partnership, or corporate entity operating an automotive or two-wheeler service center (&ldquo;Licensee&rdquo;, &ldquo;User&rdquo;, &ldquo;Garage Owner&rdquo;, &ldquo;you&rdquo;).
              </p>
              <p>
                MotoBan operates on the proprietary <strong>HybridStudioZ</strong> engine. This Agreement governs your access to and use of all MotoBan applications, including cloud-hosted web dashboards, offline-first Progressive Web Apps (PWA), Android and iOS companion apps, backend synchronization APIs, speech recognition pipelines, and spare parts matrices.
              </p>
            </section>

            {/* Section 2 */}
            <section id="grant-of-license" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                2. Grant of License
              </h2>
              <p>
                Subject to your compliance with this Agreement and payment of applicable subscription or lifetime license fees, HybridStudioZ grants you a revocable, non-exclusive, non-transferable, limited license to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-slate-300">
                <li>Access and utilize the MotoBan Cloud SaaS platform on authorized desktop, tablet, and mobile browsers.</li>
                <li>Install and run the MotoBan Progressive Web Application (PWA) locally on workshop computers for offline-first resilience.</li>
                <li>Utilize the speech-to-text billing pipeline, digital job card tracking, and inventory management modules for your garage&apos;s internal business operations.</li>
                <li>Connect authorized peripheral hardware, including USB and Bluetooth ESC/POS 58mm/80mm thermal receipt printers and barcode/QR scanners.</li>
              </ul>
              <p>
                This license is granted exclusively for internal automotive workshop management and commercial garage billing. It does not transfer title or ownership of the Software to you.
              </p>
            </section>

            {/* Section 3: Reciprocal Open-Source & 3x Lifetime Royalty Policy */}
            <section id="open-source-royalty" className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2.5 text-[#C9F31D]">
                <Scale className="w-5 h-5 shrink-0" />
                <h2 className="font-syne font-bold text-xl text-white">
                  3. Reciprocal Open-Source &amp; 3x Lifetime Royalty Policy
                </h2>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1C263D] via-[#151D2F] to-[#0B0F19] border-2 border-[#C9F31D]/40 space-y-4 shadow-xl">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C9F31D]">
                  <AlertCircle className="w-4 h-4 text-[#C9F31D]" />
                  <span>Mandatory Dual-Licensing Compliance Policy</span>
                </div>
                
                <p className="text-xs text-white leading-relaxed">
                  If any individual developer, company, contractor, agency, or third-party entity accesses, clones, forks, copies, incorporates, modifies, redistributes, or builds upon either the <strong>MotoBan Website</strong> (<a href="https://motoban.in" className="text-[#C9F31D] underline font-medium" target="_blank" rel="noopener noreferrer">motoban.in</a>) or the <strong>mechbillerai Git Repository</strong> (<a href="https://github.com/Manash8666/mechbillerai.git" className="text-[#C9F31D] underline font-mono font-medium" target="_blank" rel="noopener noreferrer">github.com/Manash8666/mechbillerai.git</a>), according to EULA policies they are legally subjected to abide by <strong>either</strong> of the following two mandatory options prior to any commercial deployment or operation:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {/* Option A */}
                  <div className="p-4 rounded-xl bg-[#0B0F19]/90 border border-[#C9F31D]/30 space-y-2.5">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#C9F31D] uppercase tracking-wide">
                      <GitFork className="w-4 h-4 text-[#C9F31D] shrink-0" />
                      <span>Option A: 100% Open-Source Obligation</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      You must release <strong>100% of your entire resulting project, codebase, application, and all derivative works as fully public, free open-source software</strong> under an identical reciprocal copyleft license.
                    </p>
                    <ul className="text-[11px] text-slate-400 space-y-1 pl-3 list-disc">
                      <li>Complete source code must be published in a public git repository.</li>
                      <li>Zero proprietary paywalls, closed-source sub-modules, or gated enterprise extensions.</li>
                      <li>Attribution to MotoBan and HybridStudioZ must remain intact.</li>
                    </ul>
                  </div>

                  {/* Option B */}
                  <div className="p-4 rounded-xl bg-[#0B0F19]/90 border border-[#FF5E14]/40 space-y-2.5">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#FF5E14] uppercase tracking-wide">
                      <Coins className="w-4 h-4 text-[#FF5E14] shrink-0" />
                      <span>Option B: 3x Lifetime License Royalty</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      If you elect <strong>not</strong> to 100% open-source your project, or if your application, platform, website, or service is proprietary, closed-source, commercially distributed, or monetized for commercial gain, you are legally subjected to <strong>pay a mandatory Royalty that is 3 times (3x) the Lifetime License</strong> of the MotoBan App and Website directly to HybridStudioZ:
                    </p>
                    <div className="p-2.5 rounded-lg bg-[#151D2F] border border-white/10 space-y-1 text-[11px] font-mono text-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Standard Lifetime (3x Royalty):</span>
                        <strong className="text-[#C9F31D]">3 × ₹15,999 = ₹47,997 INR</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Enterprise Multi-Bay (3x):</span>
                        <strong className="text-[#FF5E14]">3 × ₹39,999 = ₹119,997 INR</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0B0F19]/60 border border-white/10 text-[11px] text-slate-400 leading-relaxed">
                  <strong className="text-white font-semibold">Statutory Legal Remedy:</strong> Any closed-source or commercial deployment of the MotoBan Website or mechbillerai repository codebase without pre-paying the mandatory 3x Lifetime License Royalty constitutes willful copyright infringement and breach of license under the Indian Copyright Act, 1957 and international IP treaties. HybridStudioZ reserves all legal rights to claim statutory damages, retroactive royalty fees, and full legal recovery costs.
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="restrictions" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                4. Restrictions on Use
              </h2>
              <p>Except as expressly authorized under this Agreement or by written consent from HybridStudioZ, you agree not to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-slate-300">
                <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code or proprietary algorithms of the HybridStudioZ speech NLP or recommendation engines.</li>
                <li>Sub-license, rent, lease, sell, distribute, or host MotoBan as a commercial bureau or white-labeled SaaS product for third parties without an authorized Enterprise Partner Agreement.</li>
                <li>Scrape, export, or systematically harvest the preloaded 50,000+ spare parts SKU cross-reference database for use in competing automotive software.</li>
                <li>Interfere with, bypass, or disable any security features, license validation mechanisms, or telemetry endpoints of the Software.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="intellectual-property" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                5. Intellectual Property &amp; HybridStudioZ Engine
              </h2>
              <p>
                The MotoBan brand, logos, user interfaces, 3D interactive WebGL graphics, GSAP design systems, documentation, source code, and the underlying <strong>HybridStudioZ</strong> billing engine are the exclusive intellectual property of HybridStudioZ.
              </p>
              <p>
                All trademarks, trade dress, copyrights, database rights, and trade secrets in and to the Software remain solely with HybridStudioZ. Any rights not expressly granted herein are reserved.
              </p>
            </section>

            {/* Section 6 */}
            <section id="data-ownership" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                6. Workshop Data &amp; Customer Records
              </h2>
              <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2">
                <span className="font-syne font-bold text-xs uppercase text-[#C9F31D] flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9F31D]" />
                  <span>You Own 100% of Your Workshop Data</span>
                </span>
                <p className="text-xs text-slate-300">
                  All customer telephone numbers, vehicle registration numbers, job card service notes, inspection photos, mechanic payroll records, and GST billing histories entered by your workshop remain your sole and exclusive property.
                </p>
              </div>
              <p className="text-xs text-slate-400">
                HybridStudioZ will not sell, rent, or monetize your workshop customer records to third-party parts manufacturers, marketing agencies, or competing garages. In offline PWA mode, your data is stored locally on your device&apos;s IndexedDB database and synced securely to encrypted cloud instances only when an internet connection is established.
              </p>
            </section>

            {/* Section 7 */}
            <section id="voice-ai" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                7. AI Voice Dictation &amp; Speech Parsing
              </h2>
              <p>
                MotoBan incorporates voice recognition features powered by the HybridStudioZ engine to convert spoken workshop terminology into billable items and HSN codes.
              </p>
              <p className="text-xs text-slate-300">
                Spoken audio packets are processed in real-time to match phonetically against the parts matrix. HybridStudioZ does not record or store continuous workshop ambient audio. Voice dictation is activated solely when you explicitly tap the microphone button or invoke the designated keyboard shortcut (<kbd className="px-1.5 py-0.5 rounded bg-[#0B0F19] text-[#C9F31D] font-mono text-[10px]">Ctrl + Space</kbd>).
              </p>
            </section>

            {/* Section 8 */}
            <section id="hardware" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                8. Hardware &amp; Thermal POS Printers
              </h2>
              <p>
                MotoBan supports native browser hardware drivers (WebHID / WebSerial / ESC/POS) for standard 58mm and 80mm thermal receipt printers and USB barcode scanners.
              </p>
              <p className="text-xs text-slate-400">
                While MotoBan is designed to be plug-and-play with major printer manufacturers (such as TVS, Epson, Posiflex, BluPrints, and Xprinter), HybridStudioZ does not manufacture hardware and is not liable for printer paper jams, mechanical breakdowns, cable faults, or third-party operating system USB driver conflicts.
              </p>
            </section>

            {/* Section 9 */}
            <section id="gst-disclaimer" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                9. Tax, HSN &amp; GST Compliance Disclaimer
              </h2>
              <p>
                MotoBan assists garages by automatically mapping items to standard Indian HSN/SAC codes and calculating applicable GST tax rates (CGST, SGST, IGST).
              </p>
              <p className="text-xs text-slate-400">
                These calculations and tax mappings are provided as computational aids only. You acknowledge that you, as the registered workshop business owner, remain ultimately responsible for verifying invoice accuracy, ensuring legal compliance, and filing timely GST returns with statutory tax authorities.
              </p>
            </section>

            {/* Section 10 */}
            <section id="limitation" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                10. Warranty Disclaimer &amp; Limitation of Liability
              </h2>
              <p className="text-xs uppercase font-mono tracking-wider text-slate-400">
                DISCLAIMER OF WARRANTIES:
              </p>
              <p className="text-xs">
                THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-xs uppercase font-mono tracking-wider text-slate-400 pt-2">
                LIMITATION OF LIABILITY:
              </p>
              <p className="text-xs">
                TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT SHALL HYBRIDSTUDIOZ, ITS FOUNDERS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA LOSS, OR WORKSHOP DOWNTIME) ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE THE SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            {/* Section 11 */}
            <section id="termination" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                11. Termination &amp; Data Portability
              </h2>
              <p>
                You may terminate this Agreement at any time by discontinuing use of the Software. HybridStudioZ may suspend or terminate your license immediately if you breach any material provision of this Agreement.
              </p>
              <p className="text-xs text-slate-300">
                Upon termination, you retain the right to export your complete customer, vehicle, inventory, and billing records in standard CSV / Excel format.
              </p>
            </section>

            {/* Section 12 */}
            <section id="governing-law" className="space-y-3 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                12. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                This Agreement shall be governed by, construed, and enforced in accordance with the laws of the Republic of India. Any dispute, claim, or controversy arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Ahmedabad, Gujarat, India</strong>.
              </p>
            </section>

            {/* Section 13 */}
            <section id="contact" className="space-y-4 pt-6 border-t border-white/10">
              <h2 className="font-syne font-bold text-xl text-white">
                13. Contact &amp; Legal Notices
              </h2>
              <p>
                If you have questions regarding this End User License Agreement, custom workshop enterprise terms, or commercial licensing, please reach out to our legal and operations desk:
              </p>

              <div className="p-6 rounded-2xl bg-[#151D2F] border border-white/10 space-y-3 text-xs">
                <div className="flex items-center space-x-2 text-white">
                  <Shield className="w-4 h-4 text-[#C9F31D]" />
                  <strong className="font-syne text-sm">HybridStudioZ — Legal &amp; Product Operations</strong>
                </div>
                <div className="flex items-center space-x-2 text-slate-300 font-mono">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#C9F31D] hover:underline font-bold">
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                  <span>Chandkheda, Ahmedabad, Gujarat, India</span>
                </div>
                <div className="pt-2 text-slate-400">
                  <span>Official Domain: </span>
                  <a
                    href={SITE_CONFIG.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C9F31D] underline font-mono"
                  >
                    {SITE_CONFIG.websiteUrl}
                  </a>
                </div>
              </div>
            </section>

          </main>

        </div>

      </div>
    </div>
  );
}
