"use client";

const items = [
  "AI Voice Billing",
  "Smart Digital Job Cards",
  "BS3 / BS4 / BS6 Spares Matrix",
  "WhatsApp Invoice Sync",
  "Offline-First Desktop PWA",
  "58mm/80mm Thermal POS",
  "Mechanic Commission Tracker",
  "Automated KM Service Reminders",
];

export default function MarqueeTicker() {
  return (
    <section className="relative bg-[#151D2F] py-5 border-y border-white/10 overflow-hidden select-none">
      {/* Glow gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#151D2F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#151D2F] to-transparent z-10 pointer-events-none" />

      {/* Marquee Row 1 */}
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-syne font-black text-sm md:text-base uppercase tracking-wider text-slate-100 whitespace-nowrap">
              {item}
            </span>
            <span className="ml-8 text-xl font-mono text-[#C9F31D] select-none font-bold">
              ✻
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
