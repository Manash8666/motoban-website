"use client";

import { useState } from "react";
import {
  Wrench,
  Printer,
  Share2,
  Sparkles,
  CheckCircle2,
  Receipt,
  FileText,
  Volume2,
  QrCode,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface BikePreset {
  id: string;
  name: string;
  regNumber: string;
  customerName: string;
  customerPhone: string;
  hinglishVoice: string;
  englishVoice: string;
  defaultRepairs: string[];
}

interface RepairItem {
  id: string;
  name: string;
  hsn: string;
  partsCost: number;
  laborCost: number;
  category: "Spares" | "Consumables" | "Labor";
}

const BIKE_PRESETS: BikePreset[] = [
  {
    id: "re-classic",
    name: "Royal Enfield Classic 350",
    regNumber: "GJ-01-RE-3500",
    customerName: "Rahul Sharma",
    customerPhone: "9876543210",
    hinglishVoice: "Bhai Classic 350 ka Motul 15w50 oil badlo, tappet aur chain tight karke 350 labor jodo",
    englishVoice: "Replace Motul 15W50 engine oil, adjust tappet clearance, chain service, and add ₹350 labor",
    defaultRepairs: ["oil-motul", "chain-service", "labor-general"],
  },
  {
    id: "activa-6g",
    name: "Honda Activa 6G",
    regNumber: "GJ-27-AC-6009",
    customerName: "Priya Patel",
    customerPhone: "9825012345",
    hinglishVoice: "Activa 6G engine oil, front brake shoe aur belt check karo",
    englishVoice: "Honda Activa engine oil renewal, brake shoe replacement, and CVT belt inspection",
    defaultRepairs: ["oil-scooter", "brake-shoe", "labor-general"],
  },
  {
    id: "pulsar-150",
    name: "Bajaj Pulsar 150",
    regNumber: "GJ-05-PL-1500",
    customerName: "Vikas Verma",
    customerPhone: "9712345678",
    hinglishVoice: "Pulsar 150 disc pad front, clutch cable aur chain lube daal do",
    englishVoice: "Front disc brake pads replacement, clutch cable renewal, and chain lube",
    defaultRepairs: ["disc-pad", "clutch-cable", "chain-service"],
  },
  {
    id: "apache-200",
    name: "TVS Apache RTR 200",
    regNumber: "GJ-18-AP-2004",
    customerName: "Ankit Dave",
    customerPhone: "9909011223",
    hinglishVoice: "Apache 200 synthetic oil 10w40, spark plug check aur rear disc pad",
    englishVoice: "TVS Apache 10W40 full synthetic oil change, spark plug service, and rear disc pad",
    defaultRepairs: ["oil-motul", "spark-plug", "disc-pad"],
  },
];

const REPAIR_CATALOG: RepairItem[] = [
  {
    id: "oil-motul",
    name: "Motul 10W40 4T Semi-Synthetic (1L)",
    hsn: "27101980",
    partsCost: 480,
    laborCost: 50,
    category: "Consumables",
  },
  {
    id: "oil-scooter",
    name: "Castrol Activ 10W30 Scooter Oil (800ml)",
    hsn: "27101980",
    partsCost: 360,
    laborCost: 40,
    category: "Consumables",
  },
  {
    id: "brake-shoe",
    name: "Rear Drum Brake Shoe Assembly (OES)",
    hsn: "87141090",
    partsCost: 280,
    laborCost: 100,
    category: "Spares",
  },
  {
    id: "disc-pad",
    name: "Front Ceramic Disc Brake Pads",
    hsn: "87141090",
    partsCost: 340,
    laborCost: 120,
    category: "Spares",
  },
  {
    id: "chain-service",
    name: "Drive Chain Cleaning & High-Tack Lube",
    hsn: "34039900",
    partsCost: 150,
    laborCost: 80,
    category: "Consumables",
  },
  {
    id: "clutch-cable",
    name: "Teflon Clutch Cable Wire Set",
    hsn: "87141090",
    partsCost: 190,
    laborCost: 80,
    category: "Spares",
  },
  {
    id: "spark-plug",
    name: "NGK Laser Iridium Spark Plug",
    hsn: "85111000",
    partsCost: 240,
    laborCost: 40,
    category: "Spares",
  },
  {
    id: "labor-general",
    name: "Full Multi-Point General Service & Wash",
    hsn: "998729",
    partsCost: 0,
    laborCost: 350,
    category: "Labor",
  },
];

export default function InteractiveBillGenerator() {
  const [selectedBike, setSelectedBike] = useState<BikePreset>(BIKE_PRESETS[0]);
  const [selectedRepairs, setSelectedRepairs] = useState<string[]>(BIKE_PRESETS[0].defaultRepairs);
  const [viewMode, setViewMode] = useState<"thermal" | "jobcard">("thermal");
  const [dialect, setDialect] = useState<"hinglish" | "english">("hinglish");

  const toggleRepair = (id: string) => {
    if (selectedRepairs.includes(id)) {
      if (selectedRepairs.length > 1) {
        setSelectedRepairs(selectedRepairs.filter((r) => r !== id));
      }
    } else {
      setSelectedRepairs([...selectedRepairs, id]);
    }
  };

  const activeItems = REPAIR_CATALOG.filter((r) => selectedRepairs.includes(r.id));
  const partsTotal = activeItems.reduce((acc, curr) => acc + curr.partsCost, 0);
  const laborTotal = activeItems.reduce((acc, curr) => acc + curr.laborCost, 0);
  const subtotal = partsTotal + laborTotal;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  const handleSelectBike = (bike: BikePreset) => {
    setSelectedBike(bike);
    setSelectedRepairs(bike.defaultRepairs);
  };

  // Generate WhatsApp message
  const whatsappItemsText = activeItems
    .map((item, idx) => `${idx + 1}. ${item.name} - ₹${item.partsCost + item.laborCost}`)
    .join("%0A");

  const whatsappMessage = `*⚡ MotoBan AI Invoice Estimate*%0A%0A*Garage:* MotoFit 2 Workshop%0A*Customer:* ${selectedBike.customerName}%0A*Vehicle:* ${selectedBike.name} (${selectedBike.regNumber})%0A%0A*Job Card Items:*%0A${whatsappItemsText}%0A%0A*Subtotal:* ₹${subtotal}%0A*GST (18%):* ₹${gst}%0A*Total Payable:* ₹${grandTotal}%0A%0A📲 Pay via UPI: Direct to Workshop Bank%0A⚡ _Generated in 8 seconds via MotoBan AI (https://mechbillerai.vercel.app/) — Free Garage Billing & Job Card App_`;

  const whatsappShareUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <section id="interactive-biller" className="py-24 bg-[#0B0F19] relative border-b border-white/10">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#C9F31D]/10 to-[#FF5E14]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C263D] border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9F31D]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold">
              Interactive Live Demo • Zero Login Required
            </span>
          </div>

          <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            Generate a Real <span className="text-[#C9F31D]">15-Second Bill</span> Right Now
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Pick a bike, click common service repairs, and watch MotoBan calculate GST, pre-populate HSN codes, and generate a print-ready thermal bill & WhatsApp job card instantly.
          </p>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurator (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Bike Selector */}
            <div className="p-6 rounded-2xl bg-[#151D2F] border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-bold">
                Step 1: Choose Workshop Vehicle Preset
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {BIKE_PRESETS.map((bike) => (
                  <button
                    key={bike.id}
                    onClick={() => handleSelectBike(bike)}
                    className={`p-3 rounded-xl border text-left transition-all text-xs flex flex-col justify-between space-y-2 ${
                      selectedBike.id === bike.id
                        ? "bg-[#1C263D] border-[#C9F31D] text-white shadow-lg shadow-[#C9F31D]/10"
                        : "bg-[#0B0F19] border-white/10 text-slate-400 hover:border-white/30"
                    }`}
                  >
                    <span className="font-syne font-bold leading-tight block">{bike.name}</span>
                    <span className="font-mono text-[10px] text-slate-400 block">{bike.regNumber}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Bilingual Voice Simulator */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1C263D] to-[#151D2F] border border-[#C9F31D]/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C9F31D] font-bold flex items-center space-x-1.5">
                  <Volume2 className="w-4 h-4 text-[#C9F31D]" />
                  <span>Step 2: Voice Recognition Simulation</span>
                </span>
                
                {/* Dialect Switcher */}
                <div className="flex items-center bg-[#0B0F19] p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
                  <button
                    onClick={() => setDialect("hinglish")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      dialect === "hinglish"
                        ? "bg-[#C9F31D] text-[#0B0F19] font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    🇮🇳 Hinglish Lingo
                  </button>
                  <button
                    onClick={() => setDialect("english")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      dialect === "english"
                        ? "bg-[#C9F31D] text-[#0B0F19] font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B0F19] border border-white/10 flex items-start space-x-3">
                <div className="w-7 h-7 rounded-lg bg-[#C9F31D]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Volume2 className="w-4 h-4 text-[#C9F31D] animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Mechanic Floor Audio Input:
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-[#C9F31D] italic pt-1">
                    &ldquo;{dialect === "hinglish" ? selectedBike.hinglishVoice : selectedBike.englishVoice}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Repairs Checklist */}
            <div className="p-6 rounded-2xl bg-[#151D2F] border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-bold">
                Step 3: Auto-Parsed Repair Items & Spares (Toggle to Customize)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {REPAIR_CATALOG.map((item) => {
                  const isChecked = selectedRepairs.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleRepair(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all text-xs flex items-center justify-between ${
                        isChecked
                          ? "bg-[#1C263D] border-[#C9F31D]/60 text-white"
                          : "bg-[#0B0F19] border-white/10 text-slate-400 hover:border-white/20"
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <span className="font-semibold block text-slate-200">{item.name}</span>
                        <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400">
                          <span>HSN: {item.hsn}</span>
                          <span>•</span>
                          <span className="text-[#C9F31D]">₹{item.partsCost + item.laborCost}</span>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                          isChecked
                            ? "bg-[#C9F31D] text-[#0B0F19]"
                            : "border border-white/20 bg-transparent"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Output Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* View Mode Toggle Header */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-[#151D2F] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 pl-2 font-bold">
                Live Output:
              </span>
              <div className="flex space-x-1">
                <button
                  onClick={() => setViewMode("thermal")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center space-x-1.5 transition-colors ${
                    viewMode === "thermal"
                      ? "bg-[#C9F31D] text-[#0B0F19] font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>58mm Thermal</span>
                </button>
                <button
                  onClick={() => setViewMode("jobcard")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center space-x-1.5 transition-colors ${
                    viewMode === "jobcard"
                      ? "bg-[#C9F31D] text-[#0B0F19] font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>WhatsApp Card</span>
                </button>
              </div>
            </div>

            {/* Thermal Slip View */}
            {viewMode === "thermal" ? (
              <div className="p-6 rounded-2xl bg-[#FFFBF0] text-[#1A1A1A] font-mono shadow-2xl border-4 border-slate-300 relative space-y-4">
                <div className="text-center border-b-2 border-dashed border-black/40 pb-3 space-y-0.5">
                  <h3 className="font-extrabold text-base tracking-wider uppercase">
                    MOTOFIT 2 WORKSHOP
                  </h3>
                  <p className="text-[11px] text-slate-600">Nigam Nagar, Chandkheda, Ahmedabad</p>
                  <p className="text-[10px] text-slate-500">GSTIN: 24AAACH0123M1Z5 • Mob: +91 6359635416</p>
                </div>

                <div className="text-[11px] space-y-1 border-b border-black/20 pb-2">
                  <div className="flex justify-between">
                    <span>Date: {new Date().toLocaleDateString("en-IN")}</span>
                    <span>Bill: #MB-8492</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cust: {selectedBike.customerName}</span>
                    <span>Ph: {selectedBike.customerPhone}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Veh: {selectedBike.name}</span>
                    <span>{selectedBike.regNumber}</span>
                  </div>
                </div>

                {/* Items Table */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between font-bold border-b border-black/30 pb-1 text-[11px]">
                    <span className="w-7/12">Item / HSN</span>
                    <span className="w-2/12 text-center">Qty</span>
                    <span className="w-3/12 text-right">Amt</span>
                  </div>
                  {activeItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-[11px] leading-tight">
                      <span className="w-7/12 truncate">{item.name}</span>
                      <span className="w-2/12 text-center">1</span>
                      <span className="w-3/12 text-right">₹{item.partsCost + item.laborCost}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t-2 border-dashed border-black/40 pt-2 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-700">
                    <span>Parts Subtotal:</span>
                    <span>₹{partsTotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Labor Subtotal:</span>
                    <span>₹{laborTotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>GST (CGST 9% + SGST 9%):</span>
                    <span>₹{gst}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-sm border-t border-black/40 pt-1 text-black">
                    <span>GRAND TOTAL:</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                {/* Simulated UPI QR */}
                <div className="text-center pt-2 border-t border-black/20 space-y-1">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-black/10 text-[10px] font-bold">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Scan UPI QR for Direct Settlement</span>
                  </div>
                  <p className="text-[9px] text-slate-500 pt-1">
                    *** Thank You! Visit Again for Safe Riding ***
                  </p>
                </div>
              </div>
            ) : (
              /* Digital WhatsApp Job Card View */
              <div className="p-6 rounded-2xl bg-[#151D2F] border border-white/10 space-y-4 font-sans text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9F31D] block font-bold">
                      Digital Job Card
                    </span>
                    <h3 className="font-syne font-bold text-white text-base">JC-2026-1049</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] font-mono text-[10px] font-bold">
                    ● Ready for Delivery
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-slate-300 font-mono text-[11px]">
                  <div>
                    <span className="text-slate-500 block">Customer</span>
                    <strong className="text-white">{selectedBike.customerName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Phone</span>
                    <strong className="text-white">{selectedBike.customerPhone}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Vehicle Model</span>
                    <strong className="text-white">{selectedBike.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Reg Number</span>
                    <strong className="text-[#C9F31D]">{selectedBike.regNumber}</strong>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-bold">
                    Verified Workbay Items:
                  </span>
                  {activeItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#0B0F19] text-slate-200"
                    >
                      <span className="truncate pr-2">{item.name}</span>
                      <span className="font-mono text-[#C9F31D] shrink-0 font-bold">
                        ₹{item.partsCost + item.laborCost}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-[#1C263D] border border-white/10 flex justify-between items-center text-xs">
                  <span className="font-mono text-slate-400">Total with 18% GST:</span>
                  <strong className="font-syne text-base text-[#C9F31D]">₹{grandTotal}</strong>
                </div>
              </div>
            )}

            {/* Viral WhatsApp Action Button */}
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
            >
              <Share2 className="w-4 h-4" />
              <span>Send Test Bill to My WhatsApp (1-Click)</span>
            </a>

            <div className="text-center">
              <span className="text-[11px] font-mono text-slate-400">
                Want to test real voice billing with microphone?{" "}
                <a
                  href={SITE_CONFIG.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9F31D] underline font-bold"
                >
                  Launch MechBillerAI Sandbox &rarr;
                </a>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
