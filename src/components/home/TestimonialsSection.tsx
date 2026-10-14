"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star, Quote } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const testimonials = [
  {
    quote:
      "Before MotoBan, my mechanics would forget to write down oil filter and brake shoe consumables on paper job cards. We were leaking at least ₹15,000 every single month. Now with AI voice billing, my front desk technician just speaks the items and the GST bill is printed in 15 seconds. It has completely transformed our cash counter.",
    author: "Rakesh Patel",
    role: "Owner, Patel MotoCare & SpeedWorks",
    location: "Ahmedabad, Gujarat",
    stats: "Servicing 45+ bikes daily",
  },
  {
    quote:
      "During peak festival rush, our local broadband went down for 3 straight hours. Any other cloud billing software would have crashed and formed a massive angry line outside the garage. MotoBan’s offline PWA didn't even flinch — we printed thermal receipts without a hiccup and it synced automatically at 8 PM.",
    author: "Vikramaditya Shinde",
    role: "Chief Technician, Apex Superbike Bay",
    location: "Pune, Maharashtra",
    stats: "Zero downtime in 14 months",
  },
  {
    quote:
      "The WhatsApp estimate approval feature is pure gold. Earlier, customers would fight over why we replaced a damaged clutch cable without asking. Now MotoBan pings them a digital approval card with photo evidence. They tap 'Approve' on WhatsApp, and payment comes directly via UPI QR.",
    author: "K. Murugan",
    role: "Managing Partner, Murugan Auto Spares & Garage",
    location: "Coimbatore, Tamil Nadu",
    stats: "3.2x Repeat customer retention",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-28 bg-[#151D2F] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Arrows (Geekfolio testim-controls clone) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C9F31D] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
              <span>Workshop Owner Stories</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight">
              What Garage Owners Say
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full bg-[#1C263D] border border-white/10 flex items-center justify-center hover:bg-[#C9F31D] hover:text-[#0B0F19] transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full bg-[#1C263D] border border-white/10 flex items-center justify-center hover:bg-[#C9F31D] hover:text-[#0B0F19] transition-all duration-200"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2-Column Layout: Left Sticky CTA + Right Carousel (Geekfolio testim-creative clone) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Sticky Action Button */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0B0F19] border border-white/10 shadow-2xl space-y-6">
              <div className="inline-flex items-center space-x-1 text-[#E5C07B]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E5C07B]" />
                ))}
                <span className="ml-2 font-mono text-xs font-bold text-white">4.9 / 5.0</span>
              </div>

              <h3 className="font-syne font-extrabold text-2xl uppercase tracking-tight text-white leading-snug">
                Join 500+ modernized garages across India.
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                Experience the 15-second AI voice biller live on your own phone or PC right now. No credit card required.
              </p>

              <a
                href={SITE_CONFIG.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full py-4 rounded-full bg-[#C9F31D] text-[#0B0F19] font-syne font-extrabold text-xs uppercase tracking-wider shadow-lime-glow hover:scale-105 transition-all duration-300"
              >
                <span>Try MotoBan Live</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Carousel Slide Content */}
          <div className="lg:col-span-8">
            <div className="relative min-h-[300px] flex flex-col justify-center">
              {/* Gold Star Rating */}
              <div className="flex items-center space-x-1 text-[#E5C07B] mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E5C07B]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="font-syne font-medium text-lg sm:text-2xl text-slate-100 leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-[#C9F31D]/20 border border-[#C9F31D] flex items-center justify-center text-[#C9F31D] font-syne font-black text-lg">
                  {testimonials[current].author.charAt(0)}
                </div>
                <div>
                  <h5 className="font-syne font-bold text-base text-white">
                    {testimonials[current].author}
                  </h5>
                  <p className="text-xs text-[#C9F31D] font-mono">
                    {testimonials[current].role} • {testimonials[current].location}
                  </p>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {testimonials[current].stats}
                  </span>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex space-x-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === i ? "w-8 bg-[#C9F31D]" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
