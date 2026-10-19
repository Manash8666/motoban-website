"use client";

import { useState } from "react";
import { Calculator, AlertTriangle, TrendingUp, Share2, Sparkles, Check, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function GarageProfitCalculator() {
  const [vehiclesPerDay, setVehiclesPerDay] = useState<number>(15);
  const [consumablesLostPerVehicle, setConsumablesLostPerVehicle] = useState<number>(45);
  const [missedRepeatCustomers, setMissedRepeatCustomers] = useState<number>(20);

  // Constants based on Indian workshop benchmarks
  const workingDaysPerMonth = 26;
  const avgServiceTicket = 850;

  // Monthly Calculations
  const monthlyVehicles = vehiclesPerDay * workingDaysPerMonth;
  const consumablesLoss = monthlyVehicles * consumablesLostPerVehicle;
  const missedRepeatLoss = missedRepeatCustomers * avgServiceTicket;
  const totalMonthlyLoss = consumablesLoss + missedRepeatLoss;
  const annualLoss = totalMonthlyLoss * 12;

  // Format INR
  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // WhatsApp Share Message
  const shareText = `🚨 *Workshop Revenue Audit (via MotoBan)*%0A%0A*Daily Vehicles:* ${vehiclesPerDay}%0A*Unbilled Consumables Lost:* ₹${consumablesLostPerVehicle}/vehicle%0A*Missed Repeat Customers:* ${missedRepeatCustomers}/month%0A%0A💥 *Total Monthly Revenue Leaking:* ${formatINR(totalMonthlyLoss)}%0A💰 *Annual Lost Cashflow:* ${formatINR(annualLoss)}%0A%0ACheck how much your garage is losing and recover it free: https://motoban.in/pricing%0A⚡ _MotoBan AI Garage OS (https://mechbillerai.vercel.app/)_`;

  const whatsappShareUrl = `https://wa.me/?text=${shareText}`;

  return (
    <section id="profit-calculator" className="py-20 bg-[#0B0F19] relative border-t border-b border-white/10">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-gradient-to-r from-[#FF5E14]/15 to-[#C9F31D]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#FF5E14]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF5E14] font-bold">
              Interactive Revenue Audit Micro-Tool
            </span>
          </div>

          <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            The Garage <span className="text-[#FF5E14]">Revenue Leakage</span> & Profit Calculator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every unbilled washer, forgotten O-ring, and missed WhatsApp service reminder drains thousands in silent cash every month. Slide below to see your actual numbers.
          </p>
        </div>

        {/* 2-Column Calculator & Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#151D2F] border border-white/10 space-y-6">
            
            {/* Slider 1: Vehicles Per Day */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="vehiclesPerDay" className="font-syne font-bold uppercase text-white">
                  1. Vehicles / Bikes Serviced Per Day
                </label>
                <span className="font-mono text-base font-extrabold text-[#C9F31D]">
                  {vehiclesPerDay} <span className="text-xs text-slate-400 font-normal">vehicles/day</span>
                </span>
              </div>
              <input
                id="vehiclesPerDay"
                type="range"
                min="5"
                max="50"
                step="1"
                value={vehiclesPerDay}
                onChange={(e) => setVehiclesPerDay(Number(e.target.value))}
                className="w-full h-2 bg-[#0B0F19] rounded-lg appearance-none cursor-pointer accent-[#C9F31D]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>5 (Small Workshop)</span>
                <span>25 (Busy 3-Bay Ramp)</span>
                <span>50+ (High-Volume Hub)</span>
              </div>
            </div>

            {/* Slider 2: Unbilled Consumables */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="consumables" className="font-syne font-bold uppercase text-white">
                  2. Unbilled Consumables Lost Per Vehicle
                </label>
                <span className="font-mono text-base font-extrabold text-[#FF5E14]">
                  ₹{consumablesLostPerVehicle} <span className="text-xs text-slate-400 font-normal">/ vehicle</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Washers, grease, chain spray, cotton waste, carburetor spray, and minor nuts that never make it to handwritten paper bills.
              </p>
              <input
                id="consumables"
                type="range"
                min="10"
                max="150"
                step="5"
                value={consumablesLostPerVehicle}
                onChange={(e) => setConsumablesLostPerVehicle(Number(e.target.value))}
                className="w-full h-2 bg-[#0B0F19] rounded-lg appearance-none cursor-pointer accent-[#FF5E14]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>₹10 (Conservative)</span>
                <span>₹50 (Industry Average)</span>
                <span>₹150 (Severe Leakage)</span>
              </div>
            </div>

            {/* Slider 3: Missed Repeat Customers */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="missedCustomers" className="font-syne font-bold uppercase text-white">
                  3. Missed Repeat Service Customers Per Month
                </label>
                <span className="font-mono text-base font-extrabold text-[#C9F31D]">
                  {missedRepeatCustomers} <span className="text-xs text-slate-400 font-normal">lost riders/mo</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Past customers who never return because the workshop lacks automated 60-day WhatsApp service reminder pings.
              </p>
              <input
                id="missedCustomers"
                type="range"
                min="5"
                max="80"
                step="5"
                value={missedRepeatCustomers}
                onChange={(e) => setMissedRepeatCustomers(Number(e.target.value))}
                className="w-full h-2 bg-[#0B0F19] rounded-lg appearance-none cursor-pointer accent-[#C9F31D]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>5 riders</span>
                <span>35 riders</span>
                <span>80 riders</span>
              </div>
            </div>

          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C263D] via-[#151D2F] to-[#0B0F19] border-2 border-[#FF5E14]/50 shadow-2xl space-y-6">
              
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E14]">
                <AlertTriangle className="w-4 h-4 text-[#FF5E14]" />
                <span>Estimated Monthly Leakage</span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block tracking-wider">
                  Your Workshop Is Leaking:
                </span>
                <h3 className="font-syne font-black text-4xl sm:text-5xl text-[#FF5E14] tracking-tight pt-1">
                  {formatINR(totalMonthlyLoss)}
                  <span className="text-xs font-mono font-normal text-slate-400 block pt-1">/ every 30 days</span>
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F19]/80 border border-white/10 space-y-2.5 text-xs font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>Consumables Lost / Mo:</span>
                  <span className="font-bold text-white">{formatINR(consumablesLoss)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Lost Repeat Revenue / Mo:</span>
                  <span className="font-bold text-white">{formatINR(missedRepeatLoss)}</span>
                </div>
                <div className="flex justify-between text-slate-300 border-t border-white/10 pt-2">
                  <span className="text-[#C9F31D] font-bold">12-Month Annual Cash Drain:</span>
                  <strong className="text-[#C9F31D] font-black">{formatINR(annualLoss)}</strong>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-white">
                  <Check className="w-4 h-4 text-[#C9F31D]" />
                  <span>MotoBan Annual Pro costs just <strong className="text-[#C9F31D]">₹{SITE_CONFIG.pricing.yearlyEffective}/mo</strong> (₹29/day)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white">
                  <TrendingUp className="w-4 h-4 text-[#C9F31D]" />
                  <span>Estimated ROI: <strong className="text-[#C9F31D]">{Math.round((totalMonthlyLoss / SITE_CONFIG.pricing.yearlyEffective) * 100)}% return in Month 1</strong></span>
                </div>
              </div>

              {/* Viral Share Action */}
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
              >
                <Share2 className="w-4 h-4" />
                <span>Share My Garage Audit on WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
