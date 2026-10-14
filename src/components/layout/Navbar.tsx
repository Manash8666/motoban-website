"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, ExternalLink, Menu, X, Wrench, Sparkles } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0B0F19]/85 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#1C263D] border border-white/10 flex items-center justify-center group-hover:border-[#C9F31D] group-hover:shadow-lime-glow transition-all duration-300">
              <Wrench className="w-5 h-5 text-[#C9F31D] group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-syne font-extrabold text-xl tracking-tight text-white group-hover:text-[#C9F31D] transition-colors">
                  MotoBan
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase font-bold rounded bg-[#FF5E14]/20 text-[#FF5E14] border border-[#FF5E14]/30">
                  AI
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-400">
                by MechBillerAI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Geekfolio 3D Rolling Text */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-syne font-semibold transition-colors duration-200 ${
                    isActive ? "text-[#C9F31D]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="rolling-text">
                    <span className="block">{link.name}</span>
                    <span className="block text-[#C9F31D]">{link.name}</span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Cluster */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2.5 rounded-full bg-[#151D2F] border border-white/10 text-slate-300 hover:text-white hover:border-[#C9F31D] hover:bg-[#1C263D] transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-xs uppercase tracking-wider overflow-hidden hover:shadow-lime-glow transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0B0F19]" />
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 text-[#0B0F19] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#151D2F] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-syne uppercase tracking-wider font-semibold text-slate-200 hover:bg-[#1C263D] hover:text-[#C9F31D]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-xs uppercase tracking-wider shadow-lime-glow"
            >
              Launch Live App Demo
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-[#151D2F] border border-white/10 text-white font-syne text-xs uppercase"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Source</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
