"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    image: "/assets/imgs/portfolio_1.jpg",
    title: "Apex Superbike Bay",
    category: "AI Voice Billing Deployment",
    year: "© 2026",
    colClass: "lg:col-span-5",
  },
  {
    image: "/assets/imgs/portfolio_2.jpg",
    title: "Patel MotoCare Spares Hub",
    category: "50,000+ SKU Matrix & FIFO",
    year: "© 2026",
    colClass: "lg:col-span-7 lg:pt-16",
  },
  {
    image: "/assets/imgs/portfolio_3.jpg",
    title: "SpeedZone Dyno & Service Bay",
    category: "Digital Job Card Ramp Pipeline",
    year: "© 2026",
    colClass: "lg:col-span-7",
  },
  {
    image: "/assets/imgs/portfolio_4.jpg",
    title: "Continental Workshop Network",
    category: "Offline PWA & Thermal POS Suite",
    year: "© 2026",
    colClass: "lg:col-span-5 lg:pt-16",
  },
];

export default function AppShowcase() {
  return (
    <section className="relative py-32 lg:py-40 bg-[#0B0F19] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Geekfolio Section Header (.sec-lg-head) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
              <span>Selected Deployments</span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight">
              Featured Works
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 text-sm text-slate-400 max-w-sm leading-relaxed">
            Case studies from high-volume multi-brand garages and performance tuning bays across India.
          </p>
        </div>

        {/* Asymmetrical 4-Card Staggered Grid (Exact Geekfolio portfolio clone) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {works.map((item, idx) => (
            <div key={idx} className={`${item.colClass} group`}>
              <div className="relative rounded-3xl overflow-hidden bg-[#151D2F] border border-white/10 shadow-2xl aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Corner Link Icon */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#0B0F19]/80 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#C9F31D] group-hover:text-[#0B0F19] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Geekfolio Content Meta Below Image (.cont mt-30 d-flex) */}
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#C9F31D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono uppercase text-[#C9F31D] mt-1">
                    {item.category}
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-400">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
