"use client";

import { useState } from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
  Sparkles,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    workshopName: "",
    ownerName: "",
    phone: "",
    vehicleType: "2-Wheeler",
    mechanicCount: "4-8 Mechanics",
    preferredTime: "Morning (10 AM - 1 PM)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build pre-filled WhatsApp message
    const msg = `Hi Manash, I want to book a MotoBan demo for my garage:
- Workshop: ${formData.workshopName}
- Owner: ${formData.ownerName}
- Phone: ${formData.phone}
- Vehicles: ${formData.vehicleType}
- Mechanics: ${formData.mechanicCount}
- Preferred Time: ${formData.preferredTime}
${formData.notes ? `- Notes: ${formData.notes}` : ""}`;

    const url = `https://wa.me/916359635416?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative pt-28 pb-20 bg-[#0B0F19] text-white min-h-screen">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#C9F31D]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9F31D]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold">
              Direct Contact & Onboarding
            </span>
          </div>
          <h1 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight mb-4">
            Get Started With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9F31D] via-white to-[#FF5E14]">
              Personalized Onboarding
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions or want our engineering team to preload your existing spare parts inventory? Reach out directly via WhatsApp, phone, or schedule a free remote demo.
          </p>
        </div>

        {/* 2-Column Layout: Direct Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols): Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C9F31D]/15 border border-[#C9F31D]/30 flex items-center justify-center text-[#C9F31D] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-slate-400">Direct Phone Support</span>
                <h4 className="font-syne font-bold text-lg text-white">
                  <a href={SITE_CONFIG.phoneHref} className="hover:text-[#C9F31D] transition-colors font-mono">
                    {SITE_CONFIG.phone}
                  </a>
                </h4>
                <p className="text-xs text-slate-400">Available Mon - Sat (9:00 AM - 8:00 PM IST)</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#10B981] font-bold">Instant WhatsApp Chat</span>
                <h4 className="font-syne font-bold text-base text-white">
                  Message Manash & Onboarding Team
                </h4>
                <p className="text-xs text-slate-400">Average response time: under 10 minutes</p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-syne font-bold uppercase tracking-wider text-[#10B981] hover:underline pt-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* HQ Location Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5E14]/15 border border-[#FF5E14]/30 flex items-center justify-center text-[#FF5E14] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-slate-400">Product Engineering HQ</span>
                <h4 className="font-syne font-bold text-base text-white">
                  Chandkheda, Ahmedabad
                </h4>
                <p className="text-xs text-slate-400">Gujarat, India</p>
              </div>
            </div>

            {/* Live Sandbox Quick Link */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#1C263D] to-[#151D2F] border border-[#C9F31D]/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-syne font-bold text-sm text-white">Want to test it right now?</span>
                <span className="w-2 h-2 rounded-full bg-[#C9F31D] animate-ping" />
              </div>
              <p className="text-xs text-slate-300">
                Skip the form and dive right into the live cloud sandbox with dummy garage data preloaded.
              </p>
              <a
                href={SITE_CONFIG.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-syne font-bold uppercase tracking-wider text-[#C9F31D] hover:underline"
              >
                <span>Open MechBillerAI Sandbox</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Onboarding Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
              <div className="mb-8">
                <h3 className="font-syne font-bold text-2xl text-white mb-2">
                  Book a Garage Onboarding Call
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your workshop details and we’ll prepare a custom catalog and demo ready for your team.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
                  <h4 className="font-syne font-bold text-lg text-white">Demo Request Sent!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    We’ve opened WhatsApp with your details. Our technical team in Ahmedabad will assist you in setting up your thermal printer and inventory catalog.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#C9F31D] underline"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-syne uppercase tracking-wider text-slate-300 mb-1.5">
                        Workshop Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. SpeedZone Two-Wheeler Works"
                        value={formData.workshopName}
                        onChange={(e) => setFormData({ ...formData, workshopName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#C9F31D] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-syne uppercase tracking-wider text-slate-300 mb-1.5">
                        Owner / Manager Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#C9F31D] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-syne uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#C9F31D] transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-syne uppercase tracking-wider text-slate-300 mb-1.5">
                        Vehicles Serviced
                      </label>
                      <select
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-white text-xs focus:outline-none focus:border-[#C9F31D] transition-colors"
                      >
                        <option value="2-Wheeler (Bikes & Scooters)">2-Wheeler (Bikes & Scooters)</option>
                        <option value="4-Wheeler (Cars & SUVs)">4-Wheeler (Cars & SUVs)</option>
                        <option value="Multi-Brand (2W + 4W Combo)">Multi-Brand (2W + 4W Combo)</option>
                        <option value="Superbike & Performance">Superbike & Performance</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-syne uppercase tracking-wider text-slate-300 mb-1.5">
                        Number of Mechanics / Bays
                      </label>
                      <select
                        value={formData.mechanicCount}
                        onChange={(e) => setFormData({ ...formData, mechanicCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-white text-xs focus:outline-none focus:border-[#C9F31D] transition-colors"
                      >
                        <option value="1-3 Mechanics (1-2 Bays)">1-3 Mechanics (1-2 Bays)</option>
                        <option value="4-8 Mechanics (3-5 Bays)">4-8 Mechanics (3-5 Bays)</option>
                        <option value="9+ Mechanics (Multi-Branch)">9+ Mechanics (Multi-Branch)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-syne uppercase tracking-wider text-slate-300 mb-1.5">
                        Preferred Demo Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-white text-xs focus:outline-none focus:border-[#C9F31D] transition-colors"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-syne uppercase tracking-wider text-slate-300 mb-1.5">
                      Additional Notes or Existing Software
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Currently using manual job cards and paper bills, need help with TVS thermal printer setup."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#C9F31D] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-black text-xs uppercase tracking-wider shadow-lime-glow hover:bg-white transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm & Book Onboarding</span>
                  </button>

                  <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-400 pt-2 font-mono">
                    <span className="flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Zero Obligation</span>
                    </span>
                    <span>•</span>
                    <span>Direct WhatsApp Connect</span>
                    <span>•</span>
                    <span>Ahmedabad HQ</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
