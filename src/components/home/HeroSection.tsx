"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Sparkles, Github, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// 3D WebGL Piston & Gear Assembly in Background
const HeroEngineCanvas = dynamic(() => import("@/components/3d/HeroEngineCanvas"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,243,29,0.1)_0%,rgba(11,15,25,0)_70%)] pointer-events-none"
      aria-hidden="true"
    />
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center justify-center bg-[#0B0F19] overflow-hidden">
      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <HeroEngineCanvas />
      </div>

      {/* Geekfolio graph grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#C9F31D]/15 via-transparent to-[#FF5E14]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column (3 cols): Geekfolio Editorial Frame with Floating Claw */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-end relative group">
            <div className="relative">
              {/* Floating Claw SVG Asset with Parallax Accent */}
              <div className="absolute -top-10 -right-6 z-20 w-24 h-24 pointer-events-none animate-pulse-glow">
                <Image
                  src="/assets/imgs/claw.svg"
                  alt="Decorative Claw Geometry"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Editorial Frame (cloning Geekfolio c1.jpg container) */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#151D2F] aspect-[3/4]">
                <Image
                  src="/assets/imgs/hero_left.jpg"
                  alt="Custom Performance Cafe Racer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9F31D] block mb-1">
                    SpeedWorks Custom
                  </span>
                  <p className="font-syne font-bold text-xs text-white">
                    Superbike Bay Setup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column (6 cols): Main Headline & Agency Presentation */}
          <div className="lg:col-span-6 text-center flex flex-col items-center">
            
            {/* Spinning 6-Line Star Vector from Geekfolio */}
            <div className="mb-6 inline-flex items-center justify-center">
              <svg
                className="svg-animation star w-14 h-14"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="50" x2="100" y2="50" style={{ transform: "rotate(30deg)" }} />
                <line y1="50" x2="100" y2="50" style={{ transform: "rotate(60deg)" }} />
                <line y1="50" x2="100" y2="50" style={{ transform: "rotate(90deg)" }} />
                <line y1="50" x2="100" y2="50" style={{ transform: "rotate(120deg)" }} />
                <line y1="50" x2="100" y2="50" style={{ transform: "rotate(150deg)" }} />
                <line y1="50" x2="100" y2="50" style={{ transform: "rotate(180deg)" }} />
              </svg>
            </div>

            {/* Geekfolio Subtitle */}
            <h4 className="font-syne font-normal text-sm sm:text-base uppercase tracking-widest text-slate-300 mb-4">
              AI-Powered Garage Operating System
            </h4>

            {/* Split Rotating Headline matching Geekfolio d-rotate */}
            <h1 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[1.05] mb-8">
              <span className="block">High-Speed</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9F31D] via-white to-[#FF5E14]">
                Workshop OS
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-slate-400 font-sans leading-relaxed mb-10">
              Modernizing motorcycle and automotive garages with 15-second AI voice GST billing, digital job cards, 50,000+ BS3/BS4/BS6 spares, and 100% offline-first PWA resilience.
            </p>

            {/* Dual Call to Actions matching Geekfolio button hierarchy */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href={SITE_CONFIG.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-[#C9F31D] text-[#0B0F19] font-syne font-extrabold text-xs uppercase tracking-wider shadow-lime-glow hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-[#0B0F19]" />
                <span>Launch Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-[#151D2F] border border-white/10 text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#1C263D] hover:border-[#C9F31D] transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-slate-400 font-mono">
              <span>CLOUD SAAS</span>
              <span>•</span>
              <span className="text-[#C9F31D]">OFFLINE PWA</span>
              <span>•</span>
              <span>MOBILE COMPANION</span>
            </div>

            {/* Live Flagship Partner Pill */}
            <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#151D2F]/80 border border-[#C9F31D]/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C9F31D] animate-ping" />
              <span className="text-xs text-slate-300 font-mono">
                Full Version deployed at{" "}
                <a
                  href={SITE_CONFIG.flagshipPartner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9F31D] font-bold hover:underline"
                >
                  {SITE_CONFIG.flagshipPartner.name}
                </a>{" "}
                ({SITE_CONFIG.flagshipPartner.location})
              </span>
            </div>
          </div>

          {/* Right Column (3 cols): Geekfolio Editorial Frame + Rotating Circular Badge */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center space-y-6">
            
            {/* Editorial Frame (cloning Geekfolio c2.jpg) */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#151D2F] aspect-[3/4] group">
              <Image
                src="/assets/imgs/hero_right.jpg"
                alt="High-Performance Motorcycle Engine"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5E14] block mb-1">
                  Engine Architecture
                </span>
                <p className="font-syne font-bold text-xs text-white">
                  HybridStudioZ Core
                </p>
              </div>
            </div>

            {/* Geekfolio Signature Circular Rotating Text Badge with A+ */}
            <div className="flex flex-col items-center text-center pt-2">
              <div className="relative w-36 h-36 flex items-center justify-center group cursor-pointer mb-3">
                <div className="absolute inset-0 rotate-circle">
                  <svg className="w-full h-full" viewBox="0 0 500 500">
                    <defs>
                      <path
                        id="textcircleHero"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      />
                    </defs>
                    <text className="font-syne font-bold uppercase tracking-widest text-[14px] fill-[#C9F31D]">
                      <textPath href="#textcircleHero" textLength="900">
                        MOTOBAN • HYBRIDSTUDIOZ • V1.0 LAUNCH •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Inner Circle Content with Geekfolio A+ */}
                <div className="w-20 h-20 rounded-full bg-[#151D2F] border-2 border-[#C9F31D] flex flex-col items-center justify-center text-center shadow-lime-glow group-hover:scale-105 transition-transform">
                  <span className="font-syne font-black text-2xl text-white">
                    A<span className="text-[#C9F31D] font-light text-lg">+</span>
                  </span>
                </div>
              </div>

              <div>
                <h6 className="font-syne font-bold text-xs uppercase text-white tracking-wider">
                  v1.0 Official Launch
                </h6>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Newly unveiled. Powered by HybridStudioZ.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
