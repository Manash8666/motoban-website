"use client";

import { GitCommit, ExternalLink, Tag, Calendar, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const releases = [
  {
    version: "v4.9.2 - Latest Production",
    date: "October 2026",
    title: "AI Voice-to-Invoice Hindi & Multilingual Phonetic Parser",
    desc: "Added deep vocabulary for automotive garage terms (e.g. 'shocker', 'tapet setting', 'bore piston', 'motul 10w40'). Maps spoken quantities directly into taxable line items.",
    tag: "AI Engine",
    commit: "feat(ai): optimize voice recognition stream",
  },
  {
    version: "v4.8.0 - Stable Release",
    date: "September 2026",
    title: "ESC/POS 58mm & 80mm Native Thermal Printer Pipeline",
    desc: "Direct USB, Bluetooth, and Web-Serial communication for thermal receipt printers. Prints clean barcode and dynamic UPI QR code without print dialog delays.",
    tag: "Hardware",
    commit: "feat(pos): add 80mm ESC/POS layout renderer",
  },
  {
    version: "v4.7.1 - Core Update",
    date: "August 2026",
    title: "IndexedDB Multi-Tab Conflict Resolver & Cloud Sync Queue",
    desc: "Robust offline transaction ledger. Garages can bill across 4 workshop tablets simultaneously without internet; reconciles all job cards cleanly once Wi-Fi reconnects.",
    tag: "Architecture",
    commit: "feat(offline): atomic sequence generator",
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
