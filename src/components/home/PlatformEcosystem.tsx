"use client";

import Image from "next/image";
import Link from "next/link";
import { Mic, Laptop, Layers, ArrowUpRight } from "lucide-react";

export default function PlatformEcosystem() {
  return (
    <section className="relative py-32 lg:py-40 bg-[#0B0F19] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column: Arch Image + Agency Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols): Geekfolio Half-Circle Arch (.half-circle-img) + Rotating Circle Stamp */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Rotating Circular Text Stamp Overlapping Top-Right */}
              <div className="absolute -top-10 -right-6 z-20 w-36 h-36">
                <div className="w-full h-full rotate-circle">
                  <svg className="w-full h-full" viewBox="0 0 500 500">
                    <defs>
                      <path
                        id="textcircleAbout"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      />
                    </defs>
                    <text className="font-syne font-bold uppercase tracking-widest text-[14px] fill-[#C9F31D]">
                      <textPath href="#textcircleAbout" textLength="900">
                        WORKSHOP PRECISION • MECHBILLER AI • TRI-PLATFORM •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-[#151D2F] border border-[#C9F31D] flex items-center justify-center text-xs font-mono font-bold text-[#C9F31D]">
                    100%
                  </span>
                </div>
              </div>

              {/* Half-Circle Arch Frame (cloning Geekfolio .half-circle-img) */}
              <div className="relative rounded-t-full rounded-b-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#151D2F] aspect-[3/4] group">
                <Image
                  src="/assets/imgs/about_arch.jpg"
                  alt="Master Motorcycle Technician Tuning Engine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9F31D] block mb-1">
                    Master Technician Edition
                  </span>
                  <p className="font-syne font-bold text-sm text-white">
                    Engineered on the Workshop Floor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Geekfolio Agency Content (.cont.sec-lg-head) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D]">
              <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
              <span>About MotoBan</span>
            </div>

            <h2 className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.08]">
              We engineer speed <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#C9F31D]">
                for modern motorcycle garages.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Automotive and motorcycle garages operate in demanding conditions: dusty hands, noisy compressors, and impatient evening customer queues.
              MotoBan was architected from the ground up to replace lost paperwork and slow billing with an intuitive, 15-second voice workflow that works whether your internet is connected or completely offline.
            </p>

            {/* Geekfolio Signature Underline Link */}
            <div>
              <Link
                href="/features"
                className="inline-flex items-center space-x-2 text-xs uppercase font-syne font-bold tracking-widest text-white hover:text-[#C9F31D] transition-colors border-b-2 border-[#C9F31D] pb-1 group"
              >
                <span>Read Full Architecture</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* 3 Bordered Minimalist Feature Cards below (cloning Geekfolio item-serv) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-white/10">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 pb-4 border-b border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#1C263D] border border-white/10 flex items-center justify-center text-[#C9F31D]">
                <Mic className="w-5 h-5" />
              </div>
              <h6 className="font-syne font-bold text-base text-white">AI Voice & Natural Language</h6>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Speak parts, fluids, and labor in natural Hindi or English; converts spoken audio into taxable HSN line items in 15 seconds.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 pb-4 border-b border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#1C263D] border border-white/10 flex items-center justify-center text-[#FF5E14]">
                <Laptop className="w-5 h-5" />
              </div>
              <h6 className="font-syne font-bold text-base text-white">Tri-Platform Hybrid Sync</h6>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cloud SaaS Web, Desktop PWA, and Mobile Companion sync automatically via IndexedDB local stores during internet dropouts.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 pb-4 border-b border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#1C263D] border border-white/10 flex items-center justify-center text-[#E5C07B]">
                <Layers className="w-5 h-5" />
              </div>
              <h6 className="font-syne font-bold text-base text-white">50k+ Spares Matrix & POS</h6>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Preloaded BS3, BS4 & BS6 cross-referenced part numbers with instant thermal receipt printing and WhatsApp estimate approvals.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
