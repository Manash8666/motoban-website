"use client";

import React, { useState, useEffect } from "react";
import {
  Mic,
  Sparkles,
  Printer,
  FileText,
  CreditCard,
  QrCode,
  CheckCircle2,
  RefreshCw,
  ExternalLink,
  Fuel,
  Gauge,
  Calendar,
  UserCheck,
  Send,
  Zap,
  Wrench,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// Vehicle Presets
interface VehiclePreset {
  id: string;
  regNumber: string;
  model: string;
  category: "BS6" | "BS4" | "Custom";
  odometer: string;
  fuelLevel: number; // 0-100%
  lastService: string;
  bay: string;
  mechanic: string;
  customerName: string;
  customerPhone: string;
}

const VEHICLE_PRESETS: VehiclePreset[] = [
  {
    id: "re-gt650",
    regNumber: "GJ-01-XX-8666",
    model: "Royal Enfield Continental GT 650",
    category: "BS6",
    odometer: "14,820 KM",
    fuelLevel: 65,
    lastService: "12 May 2026",
    bay: "Bay 01 (Superbike Hydraulic Ramp)",
    mechanic: "Manash (Master Tech)",
    customerName: "Vikram Rathore",
    customerPhone: "+91 98250 88712",
  },
  {
    id: "pulsar-150",
    regNumber: "GJ-01-AB-1500",
    model: "Bajaj Pulsar 150 Twin Disc",
    category: "BS4",
    odometer: "38,450 KM",
    fuelLevel: 40,
    lastService: "04 Feb 2026",
    bay: "Bay 03 (Standard Two-Wheeler Bay)",
    mechanic: "Ramesh Bhai",
    customerName: "Pravin Solanki",
    customerPhone: "+91 99042 15000",
  },
  {
    id: "apache-rtr200",
    regNumber: "GJ-27-CD-2004",
    model: "TVS Apache RTR 200 4V",
    category: "BS6",
    odometer: "21,110 KM",
    fuelLevel: 80,
    lastService: "28 Jul 2026",
    bay: "Bay 02 (Diagnostics & EFI Bay)",
    mechanic: "Devang Patel",
    customerName: "Aniket Dave",
    customerPhone: "+91 97240 22004",
  },
  {
    id: "ktm-duke200",
    regNumber: "GJ-01-EF-4455",
    model: "KTM Duke 200 White",
    category: "BS6",
    odometer: "18,900 KM",
    fuelLevel: 50,
    lastService: "19 Mar 2026",
    bay: "Bay 04 (Performance Tuning Ramp)",
    mechanic: "Kishan Prajapati",
    customerName: "Harshil Modi",
    customerPhone: "+91 98980 44550",
  },
];

// Bill Line Item Interface
interface BillItem {
  id: string;
  name: string;
  sku: string;
  hsn: string;
  qty: number;
  rate: number;
  type: "part" | "labor";
}

// Spoken Voice Presets
interface VoicePreset {
  id: string;
  title: string;
  spokenPrompt: string;
  items: BillItem[];
}

const VOICE_PRESETS: VoicePreset[] = [
  {
    id: "re-service",
    title: "RE 650 Twin Synthetic Service",
    spokenPrompt:
      "Motul 7100 10W50 2L, Oil Filter, Front Sintered Brake Pads, aur ₹650 General Service Labor add karo",
    items: [
      {
        id: "1",
        name: "Motul 7100 4T 10W50 Fully Synthetic (2x 1L)",
        sku: "MOT-7100-10W50-2L",
        hsn: "27101981",
        qty: 2,
        rate: 890,
        type: "part",
      },
      {
        id: "2",
        name: "OEM Royal Enfield Spin-On Oil Filter",
        sku: "RE-OE-574001",
        hsn: "84212300",
        qty: 1,
        rate: 450,
        type: "part",
      },
      {
        id: "3",
        name: "Bybre Front Sintered Brake Pad Kit",
        sku: "BYB-BRK-FRT650",
        hsn: "87141090",
        qty: 1,
        rate: 850,
        type: "part",
      },
      {
        id: "4",
        name: "Periodic General Maintenance & EFI Scan",
        sku: "LBR-GEN-650",
        hsn: "998729",
        qty: 1,
        rate: 650,
        type: "labor",
      },
    ],
  },
  {
    id: "pulsar-overhaul",
    title: "Pulsar 150 Suspension & Controls",
    spokenPrompt:
      "Pulsar 150 Rear Nitrox Shocker, Clutch Cable, Accelerator Cable, Chain Lube + ₹400 Labor",
    items: [
      {
        id: "1",
        name: "Endurance Rear Nitrox Gas Shocker Pair",
        sku: "END-SHK-P150",
        hsn: "87141090",
        qty: 1,
        rate: 2350,
        type: "part",
      },
      {
        id: "2",
        name: "Pricol OEM Teflon Clutch Cable",
        sku: "PRC-CBL-CLU150",
        hsn: "87141090",
        qty: 1,
        rate: 195,
        type: "part",
      },
      {
        id: "3",
        name: "TVS Girling Accelerator Cable",
        sku: "TVS-CBL-ACC150",
        hsn: "87141090",
        qty: 1,
        rate: 165,
        type: "part",
      },
      {
        id: "4",
        name: "Motul Chain Clean & High-Tack Lube Pack",
        sku: "MOT-CHN-SET",
        hsn: "34031900",
        qty: 1,
        rate: 280,
        type: "part",
      },
      {
        id: "5",
        name: "Rear Suspension Replacement & Cable Routing Labor",
        sku: "LBR-SHK-REP",
        hsn: "998729",
        qty: 1,
        rate: 400,
        type: "labor",
      },
    ],
  },
  {
    id: "fz-front-end",
    title: "FZ V1 Fork Seal & Cone Set",
    spokenPrompt: "FZ V1 Fork Oil Seal Kit, Cone Set, Front Sprocket, Consumables ₹80",
    items: [
      {
        id: "1",
        name: "Gabriel Front Fork Oil Seal & Dust Cap Kit",
        sku: "GAB-FRK-FZ1",
        hsn: "40169320",
        qty: 1,
        rate: 340,
        type: "part",
      },
      {
        id: "2",
        name: "TPI Precision Steering Stem Cone Set",
        sku: "TPI-STEER-FZ",
        hsn: "84821011",
        qty: 1,
        rate: 480,
        type: "part",
      },
      {
        id: "3",
        name: "Rolon High-Carbon Front Engine Sprocket 14T",
        sku: "ROL-SPRK-14T",
        hsn: "87141090",
        qty: 1,
        rate: 290,
        type: "part",
      },
      {
        id: "4",
        name: "Degreaser, Kerosene & Workshop Consumables",
        sku: "GEN-CNSM-80",
        hsn: "34029099",
        qty: 1,
        rate: 80,
        type: "part",
      },
      {
        id: "5",
        name: "Telescopic Fork Overhaul & T-Stem Press Labor",
        sku: "LBR-FRK-OVH",
        hsn: "998729",
        qty: 1,
        rate: 450,
        type: "labor",
      },
    ],
  },
];

export default function LivePosSandbox() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehiclePreset>(VEHICLE_PRESETS[0]);
  const [selectedVoice, setSelectedVoice] = useState<VoicePreset>(VOICE_PRESETS[0]);
  const [items, setItems] = useState<BillItem[]>(VOICE_PRESETS[0].items);
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [previewMode, setPreviewMode] = useState<"thermal" | "gst" | "jobcard">("thermal");
  const [copiedInvoiceNumber, setCopiedInvoiceNumber] = useState(false);

  // Compute Invoice Financials
  const partsSubtotal = items
    .filter((i) => i.type === "part")
    .reduce((sum, item) => sum + item.rate * item.qty, 0);
  const laborSubtotal = items
    .filter((i) => i.type === "labor")
    .reduce((sum, item) => sum + item.rate * item.qty, 0);
  const rawSubtotal = partsSubtotal + laborSubtotal;
  const cgst = Math.round(rawSubtotal * 0.09);
  const sgst = Math.round(rawSubtotal * 0.09);
  const grandTotal = rawSubtotal + cgst + sgst;

  const invoiceNumber = `MB-26-0894`;
  const invoiceDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleSelectVoicePreset = (preset: VoicePreset) => {
    setIsAiProcessing(true);
    setSelectedVoice(preset);
    setTimeout(() => {
      setItems(preset.items);
      setIsAiProcessing(false);
    }, 600);
  };

  const handleSelectVehicle = (vehicle: VehiclePreset) => {
    setSelectedVehicle(vehicle);
    // Auto-match voice preset to vehicle if applicable
    if (vehicle.id === "re-gt650") {
      handleSelectVoicePreset(VOICE_PRESETS[0]);
    } else if (vehicle.id === "pulsar-150") {
      handleSelectVoicePreset(VOICE_PRESETS[1]);
    } else {
      handleSelectVoicePreset(VOICE_PRESETS[2]);
    }
  };

  // WhatsApp Share URL
  const waShareUrl = `https://wa.me/916359635416?text=${encodeURIComponent(
    `*MotoBan AI Live Bill Preview*\nVehicle: ${selectedVehicle.regNumber} (${selectedVehicle.model})\nInvoice: ${invoiceNumber}\nTotal Amount: ₹${grandTotal.toLocaleString(
      "en-IN"
    )}\n\nItems:\n${items
      .map((i) => `• ${i.name} (x${i.qty}) - ₹${i.rate * i.qty}`)
      .join("\n")}\n\nGenerated in 8 seconds via MotoBan AI (https://mechbillerai.vercel.app/)`
  )}`;

  return (
    <div
      id="live-pos-sandbox"
      className="relative rounded-3xl border border-white/10 bg-[#0E1526]/90 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden"
    >
      {/* Background neon ambience */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#C9F31D]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#FF5E14]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9F31D]/10 border border-[#C9F31D]/30 text-[#C9F31D] text-xs font-mono uppercase tracking-widest mb-2">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            Zero-Login Interactive Terminal
          </div>
          <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white tracking-tight">
            MotoBan Live 15-Second Mini-POS Sandbox
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Simulate a live garage checkout: select a vehicle, speak or click workshop voice prompts, and watch the receipt generate in real time.
          </p>
        </div>

        {/* Primary Cloud Handoff CTA */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={`${SITE_CONFIG.appUrl}?ref=sandbox&reg=${selectedVehicle.regNumber}&total=${grandTotal}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#C9F31D] to-[#9EE300] text-[#0B0F19] font-syne font-bold text-xs sm:text-sm hover:shadow-lime-glow hover:scale-[1.02] active:scale-95 transition-all shadow-md"
          >
            Open in Full MotoBan App
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Grid: Left Configurator / Right Live Receipt Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* LEFT COLUMN (7 Cols): Vehicle Selector & Voice Simulator */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Vehicle Selection Presets */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-[#C9F31D]" />
                1. Select Vehicle Check-In Preset:
              </label>
              <span className="text-[11px] font-mono text-gray-500">Live Bay Assignment Active</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {VEHICLE_PRESETS.map((v) => {
                const isSelected = selectedVehicle.id === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => handleSelectVehicle(v)}
                    className={`flex flex-col text-left p-3 rounded-xl border transition-all ${
                      isSelected
                        ? "bg-[#1C263D] border-[#C9F31D] shadow-sm shadow-[#C9F31D]/20"
                        : "bg-[#111827]/60 border-white/5 hover:border-white/20 text-gray-400 hover:text-white"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-[#C9F31D]" : "text-gray-300"
                      }`}
                    >
                      {v.regNumber}
                    </span>
                    <span className="text-[11px] truncate mt-1 text-gray-400 font-sans">{v.model}</span>
                    <span className="text-[10px] text-gray-500 font-mono mt-1.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      {v.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Vehicle Diagnostic Stats Strip */}
            <div className="mt-3 p-3 rounded-xl bg-[#090D16] border border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Odometer</span>
                <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                  <Gauge className="w-3 h-3 text-[#FF5E14]" />
                  {selectedVehicle.odometer}
                </span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Fuel Level</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <Fuel className="w-3 h-3 text-[#C9F31D]" />
                  <div className="w-14 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF5E14] to-[#C9F31D]"
                      style={{ width: `${selectedVehicle.fuelLevel}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-gray-300">{selectedVehicle.fuelLevel}%</span>
                </div>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Previous Service</span>
                <span className="text-gray-300 flex items-center gap-1 mt-0.5 text-[11px]">
                  <Calendar className="w-3 h-3 text-gray-400" />
                  {selectedVehicle.lastService}
                </span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Assigned Bay</span>
                <span className="text-[#C9F31D] truncate flex items-center gap-1 mt-0.5 text-[11px]">
                  <UserCheck className="w-3 h-3" />
                  {selectedVehicle.bay.split("(")[0]}
                </span>
              </div>
            </div>
          </div>

          {/* 2. AI Voice & Natural Language Simulator */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <Mic className="w-3.5 h-3.5 text-[#2563EB]" />
                2. AI Voice Billing & Workshop Hinglish NLP:
              </label>
              <span className="text-[11px] font-mono text-[#2563EB] flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Speech-to-GST Engine
              </span>
            </div>

            {/* Glowing Active Voice Bar */}
            <div className="relative rounded-2xl p-4 bg-gradient-to-r from-[#111A30] via-[#0E1526] to-[#1A1224] border border-[#2563EB]/40 shadow-inner">
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                      isAiProcessing
                        ? "bg-[#C9F31D] text-[#0B0F19] scale-110 shadow-lg shadow-[#C9F31D]/40"
                        : "bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/40"
                    }`}
                  >
                    <Mic className={`w-5 h-5 ${isAiProcessing ? "animate-bounce" : ""}`} />
                  </div>
                  {isAiProcessing && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9F31D] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C9F31D]"></span>
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase text-gray-400">
                      {isAiProcessing ? "Analyzing Spoken Audio..." : "Voice Input Recognized (Hinglish/English):"}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#C9F31D]">
                      Auto-matched 50k+ Spares
                    </span>
                  </div>
                  <p className="text-sm font-sans font-medium text-white italic mt-1 bg-black/30 p-2.5 rounded-lg border border-white/5">
                    &ldquo;{selectedVoice.spokenPrompt}&rdquo;
                  </p>
                </div>
              </div>

              {/* Clickable Voice Sample Chips */}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-gray-400 font-mono">Try Voice Presets:</span>
                {VOICE_PRESETS.map((vp) => (
                  <button
                    key={vp.id}
                    type="button"
                    onClick={() => handleSelectVoicePreset(vp)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      selectedVoice.id === vp.id
                        ? "bg-[#C9F31D] text-[#0B0F19] font-bold"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                  >
                    {vp.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Live Items Matrix Table */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#10B981]" />
                3. Parsed GST Invoice Items ({items.length} Line Items):
              </label>
              <button
                type="button"
                onClick={() => handleSelectVoicePreset(selectedVoice)}
                className="text-[11px] font-mono text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Items
              </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#090D16]">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 font-mono text-[11px] bg-black/40">
                    <th className="py-2 px-3">Description</th>
                    <th className="py-2 px-2">HSN/SAC</th>
                    <th className="py-2 px-2 text-center">Qty</th>
                    <th className="py-2 px-2 text-right">Rate</th>
                    <th className="py-2 px-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-2 px-3 font-sans">
                        <span className="text-white font-medium block">{item.name}</span>
                        <span className="text-[10px] text-gray-500 font-mono">SKU: {item.sku}</span>
                      </td>
                      <td className="py-2 px-2 text-gray-400">{item.hsn}</td>
                      <td className="py-2 px-2 text-center text-gray-300">{item.qty}</td>
                      <td className="py-2 px-2 text-right text-gray-300">₹{item.rate}</td>
                      <td className="py-2 px-3 text-right font-bold text-white">
                        ₹{(item.rate * item.qty).toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (5 Cols): Real-Time Thermal & Digital Receipt Preview */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          
          {/* Format Switcher Tab Pills */}
          <div className="bg-[#090D16] p-1.5 rounded-2xl border border-white/10 flex items-center gap-1 mb-4">
            <button
              type="button"
              onClick={() => setPreviewMode("thermal")}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                previewMode === "thermal"
                  ? "bg-[#C9F31D] text-[#0B0F19] shadow-md shadow-[#C9F31D]/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              80mm Thermal
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode("gst")}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                previewMode === "gst"
                  ? "bg-[#C9F31D] text-[#0B0F19] shadow-md shadow-[#C9F31D]/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              A4 GST Bill
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode("jobcard")}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                previewMode === "jobcard"
                  ? "bg-[#C9F31D] text-[#0B0F19] shadow-md shadow-[#C9F31D]/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Digital Job Card
            </button>
          </div>

          {/* VIEWPORT CONTAINER */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-[#070A11] p-4 sm:p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[480px]">
            
            {/* VIEW 1: 80mm ESC/POS Thermal Receipt */}
            {previewMode === "thermal" && (
              <div className="font-mono text-[11px] text-gray-300 leading-tight space-y-2 select-text">
                <div className="text-center pb-2 border-b border-dashed border-gray-600">
                  <p className="font-bold text-sm tracking-wider text-white">MOTOFIT 2 SPEED SHOP</p>
                  <p className="text-[10px] text-gray-400">Nigam Nagar, Chandkheda, Ahmedabad</p>
                  <p className="text-[10px] text-gray-400">GSTIN: 24AABCM8666Q1Z3 | Ph: 6359635416</p>
                  <p className="text-[10px] text-[#C9F31D] font-bold mt-1">POWERED BY MOTOBAN AI</p>
                </div>

                <div className="flex justify-between text-[10px] text-gray-400 border-b border-dashed border-gray-600 pb-1.5">
                  <span>INV: {invoiceNumber}</span>
                  <span>{invoiceDate}</span>
                </div>

                <div className="text-[10px] text-gray-300 border-b border-dashed border-gray-600 pb-1.5">
                  <p>
                    <span className="text-gray-500">VEH:</span> {selectedVehicle.regNumber}
                  </p>
                  <p className="truncate">
                    <span className="text-gray-500">MODEL:</span> {selectedVehicle.model}
                  </p>
                  <p>
                    <span className="text-gray-500">KM:</span> {selectedVehicle.odometer} |{" "}
                    <span className="text-gray-500">TECH:</span> {selectedVehicle.mechanic}
                  </p>
                </div>

                {/* Items */}
                <div className="space-y-1.5 py-1">
                  {items.map((it, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <div className="w-3/4 truncate">
                        <span>{it.name}</span>
                        <span className="text-[9px] block text-gray-500">
                          Qty: {it.qty} x ₹{it.rate} [HSN: {it.hsn}]
                        </span>
                      </div>
                      <span className="font-bold text-white">₹{it.rate * it.qty}</span>
                    </div>
                  ))}
                </div>

                {/* Tax & Total */}
                <div className="border-t border-dashed border-gray-600 pt-2 space-y-1 text-[11px]">
                  <div className="flex justify-between text-gray-400">
                    <span>Parts Subtotal:</span>
                    <span>₹{partsSubtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Labor Subtotal:</span>
                    <span>₹{laborSubtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-[10px]">
                    <span>CGST 9% + SGST 9%:</span>
                    <span>₹{(cgst + sgst).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#C9F31D] border-t border-white/20 pt-1.5">
                    <span>TOTAL AMOUNT:</span>
                    <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                {/* Dynamic Mockup UPI QR Code */}
                <div className="border-t border-dashed border-gray-600 pt-3 text-center flex flex-col items-center">
                  <div className="p-2 bg-white rounded-lg inline-block mb-1.5">
                    <QrCode className="w-16 h-16 text-black" />
                  </div>
                  <span className="text-[9px] text-gray-400 font-mono uppercase">
                    Scan with GPay / PhonePe / Paytm
                  </span>
                  <span className="text-[10px] text-white font-bold">UPI ID: 6359635416@okhdfcbank</span>
                  <p className="text-[8px] text-gray-500 mt-2">
                    THANK YOU FOR CHOOSING MOTOFIT 2! VISIT AGAIN.
                  </p>
                </div>
              </div>
            )}

            {/* VIEW 2: A4 GST Tax Invoice Layout */}
            {previewMode === "gst" && (
              <div className="font-sans text-[11px] text-gray-300 space-y-3">
                <div className="flex items-start justify-between border-b border-white/10 pb-2">
                  <div>
                    <h4 className="font-syne font-bold text-sm text-white">TAX INVOICE (GST)</h4>
                    <p className="text-[10px] text-gray-400">Original for Recipient</p>
                    <p className="text-[11px] font-bold text-[#C9F31D] mt-1">MotoFit 2 Service Hub</p>
                  </div>
                  <div className="text-right text-[10px] font-mono">
                    <p className="text-white font-bold">Invoice #{invoiceNumber}</p>
                    <p className="text-gray-400">Date: {invoiceDate}</p>
                    <p className="text-gray-400">State Code: 24 (Gujarat)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] p-2 rounded bg-black/40 font-mono">
                  <div>
                    <span className="text-gray-500 block uppercase">Billed To (Customer):</span>
                    <span className="text-white font-bold">{selectedVehicle.customerName}</span>
                    <span className="text-gray-400 block">{selectedVehicle.customerPhone}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block uppercase">Vehicle Profile:</span>
                    <span className="text-white font-bold">{selectedVehicle.regNumber}</span>
                    <span className="text-gray-400 block truncate">{selectedVehicle.model}</span>
                  </div>
                </div>

                {/* HSN Summary Matrix */}
                <div className="p-2 rounded bg-black/40 font-mono text-[10px] space-y-1">
                  <div className="flex justify-between font-bold text-gray-300 border-b border-white/10 pb-1">
                    <span>Tax Category</span>
                    <span>Taxable Val</span>
                    <span>Tax (18%)</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Spares & Fluids</span>
                    <span>₹{partsSubtotal}</span>
                    <span>₹{Math.round(partsSubtotal * 0.18)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Workshop Services</span>
                    <span>₹{laborSubtotal}</span>
                    <span>₹{Math.round(laborSubtotal * 0.18)}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between items-center font-mono">
                  <div>
                    <span className="text-[10px] text-gray-500 block">TOTAL PAYABLE</span>
                    <span className="text-lg font-bold text-[#C9F31D]">₹{grandTotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="text-right text-[10px] text-gray-400">
                    <p className="text-white font-medium">Authorized Signatory</p>
                    <p className="text-[9px] text-[#10B981]">Digitally Certified via MotoBan POS</p>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: Digital Job Card Mode */}
            {previewMode === "jobcard" && (
              <div className="font-sans text-[11px] text-gray-300 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                    <span className="font-syne font-bold text-sm text-white">ACTIVE JOB CARD #JC-902</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981]">
                    Stage: Ready for Delivery
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <p className="flex justify-between">
                    <span className="text-gray-400">Vehicle:</span>
                    <span className="font-bold text-white">{selectedVehicle.regNumber} ({selectedVehicle.model})</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-400">Mechanic:</span>
                    <span className="font-mono text-[#C9F31D]">{selectedVehicle.mechanic}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-400">Bay Ramp:</span>
                    <span className="text-gray-300 font-mono">{selectedVehicle.bay}</span>
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-2.5 bg-black/40 space-y-1.5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block font-bold">
                    Multi-Point Vehicle Inspection:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Brakes Inspected
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Engine Oil Replaced
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Chain Tension Set
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Battery Health 12.8V
                    </span>
                  </div>
                </div>

                {/* Digital Gatepass QR */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Digital Exit Gatepass</span>
                    <span className="text-[10px] text-gray-400">Customer OTP: 8666</span>
                  </div>
                  <div className="p-1 bg-white rounded">
                    <QrCode className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
            )}

            {/* ACTION BUTTONS STRIP */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2">
              <a
                href={waShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#25D366] text-[#0B0F19] font-bold text-xs hover:bg-[#20BD5A] transition-all shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                WhatsApp Bill to My Phone
              </a>

              <a
                href={`${SITE_CONFIG.appUrl}?source=sandbox-button`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 font-mono text-xs transition-colors"
              >
                <span>Full App</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
