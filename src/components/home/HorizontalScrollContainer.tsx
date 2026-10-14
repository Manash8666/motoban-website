"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Award, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function HorizontalScrollContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Only apply horizontal pin on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const panels = track.querySelectorAll(".horizontal-panel");
      const totalWidth = (panels.length - 1) * 100;

      const tween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${container.offsetWidth * 1.8}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#0B0F19]">
      <div
        ref={trackRef}
        className="flex flex-col lg:flex-row w-full lg:w-[300vw] min-h-screen"
      >
        
        {/* PANEL 1: intro-pan (Speed & Precision + 4 massive metric counters) */}
        <div className="horizontal-panel w-full lg:w-[100vw] min-h-screen p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#151D2F] border-b lg:border-b-0 lg:border-r border-white/10 shrink-0">
          <div className="max-w-5xl mx-auto w-full">
            
            {/* Top Marquee Header */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#C9F31D]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C9F31D]">
                Speed & Precision Benchmark
              </span>
            </div>

            <h2 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-6">
              Measured in Seconds. <br />
              <span className="text-stroke-lime">Built for Profit.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-16 leading-relaxed">
              Every second an owner stands at the counter waiting for a slow computer is friction.
              We stripped away unnecessary clicks and engineered an atomic, millisecond-fast data pipeline.
            </p>

            {/* 4 Massive Metric Counters (Geekfolio numbers clone) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-1">
                <span className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl text-[#C9F31D] block">
                  15s
                </span>
                <h6 className="font-syne font-bold text-sm uppercase text-white">Avg Invoice Time</h6>
                <p className="text-[11px] text-slate-400">From voice to thermal print</p>
              </div>

              <div className="space-y-1">
                <span className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl text-white block">
                  50k+
                </span>
                <h6 className="font-syne font-bold text-sm uppercase text-white">Preloaded SKUs</h6>
                <p className="text-[11px] text-slate-400">BS3/4/6 2W & 4W parts</p>
              </div>

              <div className="space-y-1">
                <span className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl text-[#FF5E14] block">
                  100%
                </span>
                <h6 className="font-syne font-bold text-sm uppercase text-white">Offline Uptime</h6>
                <p className="text-[11px] text-slate-400">Zero internet dependency</p>
              </div>

              <div className="space-y-1">
                <span className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl text-[#E5C07B] block">
                  0ms
                </span>
                <h6 className="font-syne font-bold text-sm uppercase text-white">Local Latency</h6>
                <p className="text-[11px] text-slate-400">Instant IndexedDB memory reads</p>
              </div>
            </div>

          </div>
        </div>

        {/* PANEL 2: awards-list (Architecture & Compliance milestones) */}
        <div className="horizontal-panel w-full lg:w-[100vw] min-h-screen p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#0B0F19] border-b lg:border-b-0 lg:border-r border-white/10 shrink-0">
          <div className="max-w-5xl mx-auto w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Title */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#E5C07B]">
                  <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />
                  <span>Architecture & Standards</span>
                </div>
                <h2 className="font-syne font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                  Hardened For <br />
                  <span className="text-[#C9F31D]">Garage Realities</span>
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Engineered with atomic IndexedDB local stores, ESC/POS hardware interfaces, and GSTN auto-lookup validation.
                </p>

                {/* Experience Box (cloning Geekfolio exp-box) */}
                <div className="p-4 rounded-2xl bg-[#151D2F] border border-white/10 inline-flex items-center space-x-4">
                  <span className="font-syne font-black text-3xl text-[#E5C07B]">Day 1</span>
                  <div className="text-xs">
                    <span className="font-bold text-white block">Official Launch</span>
                    <span className="text-slate-400">Engineered in Chandkheda, Ahmedabad</span>
                  </div>
                </div>
              </div>

              {/* Right Milestones List (cloning Geekfolio awards-list) */}
              <div className="lg:col-span-7 space-y-4">
                {[
                  {
                    title: "Offline-First IndexedDB Engine",
                    desc: "Operates 100% disconnected; syncs seamlessly with zero ID collisions upon reconnection.",
                    tag: "Reliability",
                  },
                  {
                    title: "58mm / 80mm ESC/POS Thermal Driver",
                    desc: "Zero-driver browser printing directly to USB, Bluetooth, and LAN thermal receipt machines.",
                    tag: "Hardware",
                  },
                  {
                    title: "AI Natural Language Part Matcher",
                    desc: "Maps phonetically transcribed voice keywords directly to verified HSN/SAC codes.",
                    tag: "Intelligence",
                  },
                  {
                    title: "GSTN HSN/SAC Auto-Validator",
                    desc: "Automated CGST + SGST tax split and 1-click GSTR-1 Excel/JSON export.",
                    tag: "Compliance",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#151D2F]/70 border border-white/5 hover:border-[#C9F31D]/40 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="font-syne font-bold text-sm text-white">{item.title}</span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#C9F31D]">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 ml-4" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* PANEL 3: call-action-center (Full-screen CTA with 185px circular magnetic button) */}
        <div className="horizontal-panel w-full lg:w-[100vw] min-h-screen p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center bg-[#151D2F] shrink-0 relative overflow-hidden">
          {/* Radial grid pattern background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C9F31D] animate-ping" />
              <span>Modernize Your Workshop</span>
            </div>

            <h2 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white mb-8 leading-[1.05]">
              Ready to upgrade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9F31D] via-white to-[#FF5E14]">
                your workshop floor?
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg mb-12 leading-relaxed">
              Experience the speed of MechBillerAI on your phone or desktop. Instant sandbox access with sample data ready.
            </p>

            {/* Geekfolio Signature 185px Circular Magnetic Button (.butn-circle clone) */}
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="butn-circle group"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <ArrowUpRight className="w-6 h-6 mb-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="font-syne font-black text-sm uppercase tracking-wider">
                  Launch Demo
                </span>
                <span className="text-[10px] font-mono font-medium text-[#0B0F19]/70">
                  Free Sandbox
                </span>
              </div>
            </a>

            <div className="mt-10 flex items-center space-x-6 text-xs text-slate-400">
              <span>Offline PWA Available</span>
              <span>•</span>
              <a
                href={SITE_CONFIG.phoneHref}
                className="hover:text-[#C9F31D] transition-colors font-mono"
              >
                Call: {SITE_CONFIG.phone}
              </a>
              <span>•</span>
              <span>Ahmedabad, India</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
