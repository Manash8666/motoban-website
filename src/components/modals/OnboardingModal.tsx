"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Wrench,
  Car,
  Package,
  Layers,
  ExternalLink,
  Github,
  Send,
  Loader2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
  initialPlan?: string;
}

export default function OnboardingModal({
  isOpen,
  onClose,
  defaultPlan = "Annual Pro",
  initialPlan,
}: OnboardingModalProps) {
  const activePlan = initialPlan || defaultPlan;
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [garageName, setGarageName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("Two-Wheeler");
  const [dailyVehicles, setDailyVehicles] = useState(15);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitLead = async (destination: "cloud" | "github" | "whatsapp") => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workshopName: garageName || "New Garage",
          ownerName: ownerName || "Workshop Owner",
          phone: phone || "Not Provided",
          city: city || "India",
          workshopType: specialty,
          dailyVehicles,
          selectedPlan: activePlan,
        }),
      });

      const data = await res.json();
      setSubmitted(true);

      // Destination Handoff
      if (destination === "cloud") {
        window.open(
          `${SITE_CONFIG.appUrl}?garage=${encodeURIComponent(garageName)}&city=${encodeURIComponent(
            city
          )}`,
          "_blank"
        );
      } else if (destination === "github") {
        window.open(SITE_CONFIG.githubUrl, "_blank");
      } else if (destination === "whatsapp") {
        window.open(
          data.waRedirectUrl ||
            `https://wa.me/916359635416?text=${encodeURIComponent(
              `Hello! I just signed up for MotoBan. Garage: ${garageName}, City: ${city}. Please onboard me.`
            )}`,
          "_blank"
        );
      }
    } catch (err) {
      console.error("Onboarding lead error:", err);
      // Fallback
      if (destination === "cloud") {
        window.open(SITE_CONFIG.appUrl, "_blank");
      } else if (destination === "github") {
        window.open(SITE_CONFIG.githubUrl, "_blank");
      } else {
        window.open(`https://wa.me/916359635416`, "_blank");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0E1526] p-6 sm:p-8 shadow-2xl text-white overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#C9F31D]/15 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Header */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step >= 1 ? "bg-[#C9F31D] text-[#0B0F19]" : "bg-white/10 text-gray-400"
            }`}
          >
            1
          </span>
          <div className={`h-0.5 w-8 ${step >= 2 ? "bg-[#C9F31D]" : "bg-white/10"}`} />
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step >= 2 ? "bg-[#C9F31D] text-[#0B0F19]" : "bg-white/10 text-gray-400"
            }`}
          >
            2
          </span>
          <div className={`h-0.5 w-8 ${step >= 3 ? "bg-[#C9F31D]" : "bg-white/10"}`} />
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step >= 3 ? "bg-[#C9F31D] text-[#0B0F19]" : "bg-white/10 text-gray-400"
            }`}
          >
            3
          </span>
          <span className="ml-auto text-xs font-mono text-[#C9F31D] uppercase">
            30-Sec Setup Wizard
          </span>
        </div>

        {/* STEP 1: Garage Name, Owner Name & City */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-syne font-bold text-white">Let&apos;s Set Up Your Garage Profile</h3>
              <p className="text-xs text-gray-400 mt-1">
                Selected Tier: <span className="text-[#C9F31D] font-mono font-bold">{activePlan}</span>
              </p>
            </div>

            <div className="space-y-3 font-sans">
              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">Workshop / Garage Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Royal Motors, SpeedTech Auto"
                  value={garageName}
                  onChange={(e) => setGarageName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9F31D]"
                />
                {garageName.trim() && (
                  <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-mono text-[#10B981]">
                    <Sparkles className="w-3 h-3 text-[#10B981]" />
                    <span>Your Free Subdomain: <strong>{garageName.toLowerCase().replace(/[^a-z0-9]/g, "") || "garage"}.motoban.in</strong></span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">Owner Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Rajesh Sharma"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9F31D]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">City / Town *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Ahmedabad, Pune"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9F31D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98250 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9F31D]"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (!garageName.trim() || !phone.trim()) {
                  alert("Please enter your Workshop Name and Phone Number to continue.");
                  return;
                }
                setStep(2);
              }}
              className="w-full mt-4 py-3 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lime-glow transition-all"
            >
              Continue to Workshop Specialty
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Workshop Specialty & Volume */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-syne font-bold text-white">Select Your Workshop Type</h3>
              <p className="text-xs text-gray-400 mt-1">
                We pre-load your catalog with 50,000+ matching spare parts and job templates.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "Two-Wheeler", label: "Two-Wheeler / Bike", icon: Wrench },
                { id: "Car & SUV", label: "Car & SUV Service", icon: Car },
                { id: "Spares Counter", label: "Auto Spares POS", icon: Package },
                { id: "Custom & Detailing", label: "Custom / Detailing", icon: Layers },
              ].map((spec) => {
                const Icon = spec.icon;
                const isSelected = specialty === spec.id;
                return (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => setSpecialty(spec.id)}
                    className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      isSelected
                        ? "bg-[#1C263D] border-[#C9F31D] shadow-sm shadow-[#C9F31D]/20 text-white"
                        : "bg-black/30 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-[#C9F31D]" : "text-gray-400"}`} />
                    <span className="text-xs font-mono font-bold">{spec.label}</span>
                  </button>
                );
              })}
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-gray-300 mb-1">
                <span>Average Vehicles Serviced Daily:</span>
                <span className="text-[#C9F31D] font-bold">{dailyVehicles} vehicles/day</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={dailyVehicles}
                onChange={(e) => setDailyVehicles(Number(e.target.value))}
                className="w-full accent-[#C9F31D] bg-white/10 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div className="flex gap-2 mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 text-xs font-mono transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 py-3 rounded-xl bg-[#C9F31D] text-[#0B0F19] font-syne font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lime-glow transition-all"
              >
                Choose Deployment Channel
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Platform Choice & Immediate Launch */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-syne font-bold text-white">Ready! How would you like to launch?</h3>
              <p className="text-xs text-gray-400 mt-1">
                {garageName} ({city}) • {specialty} • {defaultPlan}
              </p>
            </div>

            <div className="space-y-2.5">
              {/* Option 1: Instant Cloud Web Terminal */}
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleSubmitLead("cloud")}
                className="w-full p-4 rounded-xl border border-[#C9F31D]/40 bg-gradient-to-r from-[#C9F31D]/15 to-transparent hover:from-[#C9F31D]/25 text-left flex items-center justify-between group transition-all"
              >
                <div>
                  <span className="text-sm font-syne font-bold text-white group-hover:text-[#C9F31D] flex items-center gap-1.5">
                    Launch Cloud POS App Immediately
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Opens live terminal on mechbillerai.vercel.app with zero installation.
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C9F31D] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Option 2: WhatsApp VIP Assisted Setup */}
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleSubmitLead("whatsapp")}
                className="w-full p-4 rounded-xl border border-white/10 bg-black/40 hover:bg-white/5 text-left flex items-center justify-between group transition-all"
              >
                <div>
                  <span className="text-sm font-syne font-bold text-white group-hover:text-[#25D366] flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-[#25D366]" />
                    WhatsApp Founder Assisted Setup (+91 6359635416)
                  </span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Get 1-on-1 printer pairing and data migration support in Gujarati/Hindi.
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Option 3: GitHub Open Source / Self Host */}
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleSubmitLead("github")}
                className="w-full p-4 rounded-xl border border-white/10 bg-black/40 hover:bg-white/5 text-left flex items-center justify-between group transition-all"
              >
                <div>
                  <span className="text-sm font-syne font-bold text-white group-hover:text-gray-200 flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5" />
                    Clone Open-Source Code from GitHub
                  </span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Run locally or self-host under our dual-license EULA.
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {isSubmitting && (
              <div className="flex items-center justify-center gap-2 py-2 text-xs font-mono text-[#C9F31D]">
                <Loader2 className="w-4 h-4 animate-spin" />
                Registering garage profile...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
