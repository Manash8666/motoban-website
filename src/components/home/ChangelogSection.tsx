"use client";

import { GitCommit, ExternalLink, Tag, Calendar, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const releases = [
  {
    version: "v1.0.0 — Official Launch",
    date: "Today",
    title: "MotoBan Web Platform & Documentation Launch",
    desc: "Unveiling the complete marketing platform, interactive 3D WebGL hero engine, full documentation portal, and pilot partner onboarding system.",
    tag: "Website Launch",
    commit: "feat(web): launch official MotoBan website",
  },
  {
    version: "v0.9.0 — Engine & App Release",
    date: "3 Days Ago",
    title: "HybridStudioZ Engine & Voice-to-Invoice App",
    desc: "First live deployment of the HybridStudioZ garage engine (deployed at https://mechbillerai.vercel.app/). Built 15-second speech NLP parser, full digital job cards, and onboarded flagship partner MotoFit 2 (Nigam Nagar, Chandkheda, Ahmedabad) on the Full Version.",
    tag: "Engine & App",
    commit: "feat(engine): launch hybridstudioz garage billing engine",
  },
  {
    version: "v0.8.0 — Core Architecture",
    date: "Prototype Stage",
    title: "IndexedDB Local Store & ESC/POS Thermal Driver",
    desc: "Engineered atomic offline transaction ledger and 58mm/80mm USB & Bluetooth thermal receipt printing architecture for zero-downtime garage resilience.",
    tag: "Architecture",
    commit: "feat(pos): add offline indexeddb sync and thermal driver",
  },
];

export default function ChangelogSection() {
  return (
    <section className="relative py-28 bg-[#0B0F19] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
              <span>Changelog & Commits</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight">
              Continuous Workshop Innovation
            </h2>
          </div>

          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-syne font-bold uppercase tracking-wider text-slate-400 hover:text-[#C9F31D] transition-colors mt-4 md:mt-0"
          >
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3-Column Grid (Geekfolio blog-modern clone) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {releases.map((rel, idx) => (
            <div
              key={idx}
              className="group glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#C9F31D]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-white/5 font-mono">
                  <span className="flex items-center space-x-1.5 text-[#C9F31D]">
                    <Tag className="w-3 h-3" />
                    <span>{rel.version}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{rel.date}</span>
                  </span>
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-3 group-hover:text-[#C9F31D] transition-colors leading-snug">
                  {rel.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {rel.desc}
                </p>
              </div>

              {/* Commit pill & Link */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
                  <span className="flex items-center space-x-1 text-slate-400">
                    <GitCommit className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate max-w-[200px]">{rel.commit}</span>
                  </span>
                </div>

                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-syne font-bold uppercase tracking-wider text-[#C9F31D] group-hover:underline"
                >
                  <span>Read Git Release Notes</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
