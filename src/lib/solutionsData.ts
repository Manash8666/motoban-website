export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionPageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  targetAudience: string;
  keyStats: { label: string; value: string; detail: string }[];
  painPoints: { problem: string; solution: string }[];
  sampleParts: { name: string; sku: string; hsn: string; price: string }[];
  faqs: SolutionFaq[];
}

export const SOLUTIONS_DATA: Record<string, SolutionPageData> = {
  "two-wheeler-garage-billing-software": {
    slug: "two-wheeler-garage-billing-software",
    title: "Two-Wheeler Garage Billing Software India",
    metaTitle: "Two-Wheeler Garage Billing Software India (BS4 & BS6) | MotoBan",
    metaDescription:
      "India's #1 two-wheeler workshop billing software. 15-second AI voice job cards, 50,000+ motorcycle spares catalog, ESC/POS thermal printing, and WhatsApp estimates.",
    badge: "Motorcycle & Scooter Workshop OS",
    heroHeadline: "The #1 AI Garage Billing Software for Two-Wheeler Workshops in India",
    heroSubheadline:
      "Engineered specifically for Hero, Honda, Bajaj, TVS, Yamaha, and Suzuki workshops. Generate GST job cards in 15 seconds, eliminate parts leakage, and print silent 58mm thermal receipts 100% offline.",
    targetAudience: "Multi-brand motorcycle garages, scooter tune-up shops, and local two-wheeler service centers.",
    keyStats: [
      { label: "Billing Speed", value: "15 Sec", detail: "Speech-to-GST Voice AI" },
      { label: "Spares Matrix", value: "50,000+", detail: "Hero, Bajaj, TVS, Honda OE SKUs" },
      { label: "Revenue Leakage Saved", value: "₹38,250", detail: "Per month per workshop bay" },
    ],
    painPoints: [
      {
        problem: "Handwritten paper job cards get grease-stained, lost, or misplaced on the shop floor.",
        solution: "1-click digital job cards sent directly to the customer's WhatsApp with vehicle check-in dent photos.",
      },
      {
        problem: "Mechanics forget to charge for small consumables like O-rings, chain lube, washers, and brake cleaner.",
        solution: "Automated consumable kits auto-attach to service packages, ensuring ₹0 in unbilled inventory loss.",
      },
      {
        problem: "GST invoices take 10+ minutes on complex desktop software like Tally or Excel.",
        solution: "Voice-driven NLP recognizes workshop dialect ('shocker oil seal, motul oil') and builds the GST invoice instantly.",
      },
    ],
    sampleParts: [
      { name: "Castrol Activ 4T 20W40 (1L)", sku: "CAS-4T-20W40", hsn: "27101981", price: "₹385" },
      { name: "Hero Splendor OEM Clutch Plate Set", sku: "HER-CLU-SPL", hsn: "87141090", price: "₹340" },
      { name: "Honda Activa 6G Front Brake Shoe Set", sku: "HON-BRK-ACT6G", hsn: "87141090", price: "₹260" },
      { name: "Bajaj Pulsar 150 Spark Plug (Champion)", sku: "BAJ-PLG-RG6YC", hsn: "85111000", price: "₹125" },
    ],
    faqs: [
      {
        question: "Can MotoBan work without internet in a basement motorcycle garage?",
        answer:
          "Yes. MotoBan utilizes an offline-first IndexedDB local architecture. You can create job cards, generate thermal receipts, and adjust spare parts inventory completely offline, and it syncs to the cloud when internet restores.",
      },
      {
        question: "Does it support 58mm and 80mm Bluetooth thermal receipt printers?",
        answer:
          "Yes. MotoBan has built-in raw ESC/POS drivers for TVS, Posiflex, Epson, BluPrints, and cheap Chinese Bluetooth/USB thermal printers.",
      },
    ],
  },

  "royal-enfield-superbike-workshop-pos": {
    slug: "royal-enfield-superbike-workshop-pos",
    title: "Royal Enfield & Superbike Workshop Management POS",
    metaTitle: "Royal Enfield & Superbike Workshop Management POS Software | MotoBan",
    metaDescription:
      "Specialized garage software for Royal Enfield 350/650 Twins, KTM, Harley, and Triumph custom garages. Track synthetic oils, custom fabrication labor, and torque specs.",
    badge: "Big-Bike & Custom Garage Suite",
    heroHeadline: "Precision Workshop Management POS for Royal Enfield & Performance Superbikes",
    heroSubheadline:
      "Purpose-built for RE Classic 350, Himalayan 450, 650 Twins, KTM Duke, and import superbike specialists. Track torque specs, high-performance Motul/Liqui Moly synthetics, and custom fabrication labor.",
    targetAudience: "Royal Enfield custom builders, superbike tuning studios, and high-end motorcycle restoration garages.",
    keyStats: [
      { label: "Twin Engine Matrix", value: "650cc & 450cc", detail: "Preloaded Sherpa & 650 Twin SKUs" },
      { label: "Custom Labor Codes", value: "100% Flexible", detail: "Tuning, dyno runs & lathe work" },
      { label: "VIP Customer Portal", value: "Instant", detail: "WhatsApp photo inspection reports" },
    ],
    painPoints: [
      {
        problem: "Superbike owners demand formal documentation, torque spec checklists, and transparent pricing.",
        solution: "MotoBan generates enterprise-grade digital job cards with HD 4-angle check-in photos and technician notes.",
      },
      {
        problem: "Costly synthetic oils (10W50, 15W50) and imported brake pads cause significant balance sheet variance if miscounted.",
        solution: "Batch-wise FIFO inventory tracking with millilitre-precision engine oil barrel decanting logs.",
      },
    ],
    sampleParts: [
      { name: "Motul 7100 4T 10W50 Fully Synthetic (1L)", sku: "MOT-7100-10W50", hsn: "27101981", price: "₹890" },
      { name: "Royal Enfield 650 Twin OE Oil Filter", sku: "RE-OE-574001", hsn: "84212300", price: "₹450" },
      { name: "Brembo / Bybre Sintered Front Pads", sku: "BYB-BRK-FRT650", hsn: "87141090", price: "₹1,250" },
      { name: "NGK Laser Iridium Spark Plug CR8EIX", sku: "NGK-IRID-CR8", hsn: "85111000", price: "₹780" },
    ],
    faqs: [
      {
        question: "Does MotoBan support job cards for multi-day custom modification projects?",
        answer:
          "Yes. Job cards can remain open across days or weeks while you source rare parts, with automated customer milestone updates sent on WhatsApp.",
      },
    ],
  },

  "multi-brand-car-service-center-erp": {
    slug: "multi-brand-car-service-center-erp",
    title: "Multi-Brand Car & SUV Service Center ERP Software",
    metaTitle: "Multi-Brand Car & SUV Service Center ERP Software India | MotoBan",
    metaDescription:
      "Enterprise billing, denting-painting estimates, multi-bay scheduling, and spare parts POS for multi-brand car workshops (Maruti, Hyundai, Tata, Mahindra).",
    badge: "Automotive 4-Wheeler ERP",
    heroHeadline: "Complete Garage ERP Software for Multi-Brand Car & SUV Service Centers",
    heroSubheadline:
      "Manage multi-bay car repair centers with precision. Denting, painting panel rate cards, OBD diagnostic scans, coolant flushes, and formal insurance claim estimates.",
    targetAudience: "Multi-brand car garages, body shops, detailing centers, and commercial fleet maintenance depots.",
    keyStats: [
      { label: "Panel Rate Matrix", value: "Standardized", detail: "Denting/Painting per-panel costs" },
      { label: "Bay Tracking", value: "Real-Time", detail: "Ramp occupancy & technician productivity" },
      { label: "Insurance Estimates", value: "1-Click PDF", detail: "Ready for surveyor inspection" },
    ],
    painPoints: [
      {
        problem: "Car repair jobs have complex labor splits across body shop, electrical, and mechanical technicians.",
        solution: "MotoBan splits job card labor across multiple mechanics with automated commission calculations.",
      },
      {
        problem: "Customers contest post-service bills due to lack of upfront insurance estimation.",
        solution: "Send digital pre-approval estimates on WhatsApp before disassembling engine or transmission assemblies.",
      },
    ],
    sampleParts: [
      { name: "Shell Helix Ultra 5W40 Synthetic (3.5L)", sku: "SHL-HLX-5W40-3.5", hsn: "27101981", price: "₹2,650" },
      { name: "Bosch Aerotwin Frameless Wiper Set", sku: "BSH-WPR-AERO", hsn: "85124000", price: "₹950" },
      { name: "Maruti Swift OE Front Brake Rotor (Pair)", sku: "MS-BRK-ROTOR", hsn: "87083000", price: "₹2,100" },
      { name: "Full Synthetic Coolant (Green 1L)", sku: "CLN-SYN-1L", hsn: "38200000", price: "₹320" },
    ],
    faqs: [
      {
        question: "Can I print A4 size GST invoices for insurance claims and corporate car fleets?",
        answer:
          "Yes. MotoBan seamlessly switches between 80mm thermal receipts for walk-in retail jobs and full A4 GST tax invoices with HSN summaries and corporate GSTIN fields.",
      },
    ],
  },

  "automobile-spare-parts-shop-inventory-pos": {
    slug: "automobile-spare-parts-shop-inventory-pos",
    title: "Automobile Spare Parts Shop Inventory & Billing POS",
    metaTitle: "Auto Spare Parts Shop Inventory & POS Billing Software India | MotoBan",
    metaDescription:
      "High-speed retail counter billing POS for auto spare parts dealers and wholesalers. Barcode scanning, rack/shelf locator, cross-model compatibility, and FIFO margin tracking.",
    badge: "Auto Spares Retail & Wholesale POS",
    heroHeadline: "High-Speed Counter POS & Inventory Software for Auto Spare Parts Shops",
    heroSubheadline:
      "Built for retail spare parts dealers who need counter billing in under 5 seconds. Instant barcode scanner support, rack-and-shelf bin location finder, and cross-reference compatibility for 50,000+ SKUs.",
    targetAudience: "Automobile spare parts retailers, 2W/4W replacement parts stockists, and auto electrical distributors.",
    keyStats: [
      { label: "Counter Checkout", value: "< 5 Sec", detail: "USB/Wireless barcode scan" },
      { label: "Bin/Rack Locator", value: "Instant", detail: "Locate spares across aisles & shelves" },
      { label: "Cross-Model Search", value: "Smart", detail: "Find matching parts across brands" },
    ],
    painPoints: [
      {
        problem: "Counter billers take minutes looking through paper registers to see if a part is in stock.",
        solution: "Type any partial part number or vehicle name to immediately view live stock count and shelf aisle location.",
      },
      {
        problem: "Dead stock accumulates because slow-moving parts are buried behind popular items.",
        solution: "Automated slow-moving and re-order alerts alert you before parts pass seasonal demand windows.",
      },
    ],
    sampleParts: [
      { name: "Endurance Rear Shock Absorber Set", sku: "END-SHK-UNIV", hsn: "87141090", price: "₹2,200" },
      { name: "Minda Ignition Switch Lock Set", sku: "MND-LCK-SET", hsn: "87141090", price: "₹680" },
      { name: "Rolon Brass Chain & Sprocket Kit", sku: "ROL-BRS-CHN", hsn: "87141090", price: "₹1,450" },
      { name: "TVS Girling Disc Brake Master Cylinder", sku: "TVS-MST-CYL", hsn: "87141090", price: "₹820" },
    ],
    faqs: [
      {
        question: "Can I use standard USB and wireless barcode scanners with MotoBan?",
        answer:
          "Yes. MotoBan connects with any standard plug-and-play USB, Bluetooth, or Honeywell/TVS barcode scanner with zero setup drivers.",
      },
    ],
  },

  "ev-scooter-battery-service-management": {
    slug: "ev-scooter-battery-service-management",
    title: "EV Scooter & Battery Service Management Software",
    metaTitle: "EV Scooter & Battery Health Workshop Management Software | MotoBan",
    metaDescription:
      "Specialized billing and diagnostic tracking for electric 2-wheelers (Ola, Ather, TVS iQube, Chetak). Track battery SoC, BMS errors, motor controller replacements, and warranty claims.",
    badge: "Electric Mobility & EV Hub OS",
    heroHeadline: "Next-Gen Service & Diagnostic Software for EV Two-Wheeler Workshops",
    heroSubheadline:
      "Future-proof your garage for the electric revolution. Log battery State of Health (SoH), State of Charge (SoC), BMS firmware flashes, motor controller replacements, and EV warranty replacements.",
    targetAudience: "EV multi-brand service stations, battery swapping operators, and electric retrofit garages.",
    keyStats: [
      { label: "EV Battery Health", value: "SoH & SoC", detail: "Cell voltage variance logging" },
      { label: "BMS Warranty Claim", value: "Automated", detail: "Serial number traceability" },
      { label: "EV Wiring Checks", value: "Standardized", detail: "High-voltage harness safety protocol" },
    ],
    painPoints: [
      {
        problem: "Legacy software has no fields for Lithium-ion battery serial numbers or battery warranty tracking.",
        solution: "MotoBan tracks unique battery and motor serial numbers across warranty lifecycles.",
      },
      {
        problem: "EV technicians need strict high-voltage safety checklists before touching controller circuits.",
        solution: "Standardized digital EV check-in checklist guarantees mandatory insulation and power-cutoff verification.",
      },
    ],
    sampleParts: [
      { name: "Heavy-Duty EV Throttle Sensor Twist Grip", sku: "EV-THRT-HL", hsn: "87141090", price: "₹450" },
      { name: "DC-DC Converter 72V to 12V 10A", sku: "EV-DCDC-72V", hsn: "85044090", price: "₹650" },
      { name: "Lithium Cell Balancer Lead Harness", sku: "EV-BMS-HARN", hsn: "85443000", price: "₹380" },
      { name: "IP67 Waterproof Main Contactor Relay", sku: "EV-RLY-IP67", hsn: "85364100", price: "₹520" },
    ],
    faqs: [
      {
        question: "Does MotoBan help manage EV retrofitting and conversion kits?",
        answer:
          "Yes. MotoBan tracks conversion kit batches, RTO endorsement documents, and customer battery lease schedules.",
      },
    ],
  },

  "offline-desktop-garage-billing-app": {
    slug: "offline-desktop-garage-billing-app",
    title: "100% Offline Desktop Garage Billing App (Windows & Mac)",
    metaTitle: "100% Offline Desktop Garage Billing App (Windows & Mac) | MotoBan",
    metaDescription:
      "Reliable offline auto repair billing software that never stops when internet drops. Native desktop PWA with local IndexedDB storage and automatic background cloud sync.",
    badge: "Zero-Latency Offline POS",
    heroHeadline: "Unbreakable Offline-First Garage Billing Software for Windows & Mac",
    heroSubheadline:
      "Internet drops? Power cuts? Your workshop counter never stops. MotoBan runs natively on your desktop PC using local IndexedDB storage, generating instant thermal receipts with zero lag.",
    targetAudience: "Workshops in areas with fluctuating internet, rural mechanics, and high-volume billing counters.",
    keyStats: [
      { label: "Offline Availability", value: "100%", detail: "Zero cloud dependency for counter billing" },
      { label: "Local Database", value: "IndexedDB", detail: "Encrypted on your desktop storage" },
      { label: "Cloud Sync", value: "Automatic", detail: "Syncs silently when connection returns" },
    ],
    painPoints: [
      {
        problem: "Cloud-only billing software freezes when workshop broadband or mobile data disconnects.",
        solution: "MotoBan stores catalog, inventory, and customer databases locally in high-speed IndexedDB.",
      },
      {
        problem: "Traditional desktop software (like Tally) requires complex local backups and manual updates.",
        solution: "Enjoy native desktop speed with automated cloud sync and zero-maintenance PWA auto-updates.",
      },
    ],
    sampleParts: [
      { name: "Universal 12V 4Ah Sealed Maintenance Free Battery", sku: "BAT-SMF-12V4", hsn: "85072000", price: "₹950" },
      { name: "Semi-Synthetic 4T 10W30 Engine Oil (900ml)", sku: "OIL-SS-10W30", hsn: "27101981", price: "₹340" },
      { name: "Heavy-Duty O-Ring Drive Chain 120L", sku: "CHN-ORNG-120", hsn: "73151100", price: "₹1,150" },
      { name: "Disc Brake Caliper Piston & Seal Overhaul Kit", sku: "BRK-CLP-PSTN", hsn: "87141090", price: "₹420" },
    ],
    faqs: [
      {
        question: "Can I install MotoBan as a Windows desktop application icon?",
        answer:
          "Yes. MotoBan is an installable Progressive Web App (PWA). Click 'Install' in Chrome or Edge to get a native Windows/Mac desktop shortcut that launches in standalone full-screen window mode.",
      },
    ],
  },

  "whatsapp-digital-job-card-maker": {
    slug: "whatsapp-digital-job-card-maker",
    title: "WhatsApp Digital Job Card & Invoice Maker for Mechanics",
    metaTitle: "WhatsApp Digital Job Card & Invoice Maker for Mechanics | MotoBan",
    metaDescription:
      "Ditch paper bill books. Send instant digital job cards, vehicle dent photos, service estimates, and UPI payment links directly to customer WhatsApp with 1 click.",
    badge: "Paperless Customer Communication",
    heroHeadline: "Instant WhatsApp Digital Job Card & Automated Invoice Maker",
    heroSubheadline:
      "Transform your mechanic workshop into a tech-forward auto studio. Send branded digital job cards, check-in scratch photos, service progress alerts, and dynamic UPI QR payment links directly to customer WhatsApp.",
    targetAudience: "Modern two-wheeler garages, auto workshops aiming to eliminate paper registers, and detailing studios.",
    keyStats: [
      { label: "Paper Saved", value: "100%", detail: "Zero paper registers or job slips needed" },
      { label: "Customer Approval", value: "3x Faster", detail: "WhatsApp 1-click quote approvals" },
      { label: "Payment Speed", value: "Instant", detail: "Embedded zero-fee UPI QR codes" },
    ],
    painPoints: [
      {
        problem: "Customers claim scratches and dents were caused by the garage while the vehicle was serviced.",
        solution: "Timestamped 4-angle check-in photos are attached directly to the customer's WhatsApp job card on intake.",
      },
      {
        problem: "Phone calls asking 'Bhaiya gadi kab milegi?' disrupt busy workshop floor mechanics.",
        solution: "Automated WhatsApp status alerts ('Inspection Done', 'Ready for Pickup') keep customers updated.",
      },
    ],
    sampleParts: [
      { name: "Comprehensive General Service Package Labor", sku: "LBR-GEN-PKG", hsn: "998729", price: "₹450" },
      { name: "High-Temperature Brake Caliper Grease (50g)", sku: "LUB-BRK-GRS", hsn: "27101990", price: "₹95" },
      { name: "LED Headlight Bulb HS1 12V 35W Plug-and-Play", sku: "BLB-LED-HS1", hsn: "85392990", price: "₹550" },
      { name: "Foam Wash & Nano Hydrophobic Sealant Spray", sku: "DET-FOAM-NANO", hsn: "34053000", price: "₹250" },
    ],
    faqs: [
      {
        question: "Does the customer need to install any app to receive their bill on WhatsApp?",
        answer:
          "No. Customers receive a clean WhatsApp message with an itemized summary, payment QR code, and a secure link to view/download their high-resolution PDF tax invoice.",
      },
    ],
  },

  "ahmedabad-gujarat-garage-software": {
    slug: "ahmedabad-gujarat-garage-software",
    title: "Best Garage Billing Software in Ahmedabad & Gujarat",
    metaTitle: "Best Two-Wheeler Garage Billing Software Ahmedabad, Gujarat | MotoBan",
    metaDescription:
      "Local garage management software built in Chandkheda, Ahmedabad. Gujarati & Hinglish invoice support, local thermal printer integration, and proven in MotoFit 2.",
    badge: "Local Ahmedabad Engineering",
    heroHeadline: "Ahmedabad's #1 Garage Billing & Workshop Management Software",
    heroSubheadline:
      "Built right here in Chandkheda, Ahmedabad by HybridStudioZ. Battle-tested across Gujarat workshops including MotoFit 2 (Nigam Nagar). Supports Gujarati dialect, State Code 24 GST tax rules, and local thermal printers.",
    targetAudience: "Automobile repair workshops in Ahmedabad, Gandhinagar, Surat, Vadodara, and Rajkot.",
    keyStats: [
      { label: "Local Flagship Garage", value: "MotoFit 2", detail: "Nigam Nagar, Chandkheda, Ahmedabad" },
      { label: "Local Support", value: "+91 6359635416", detail: "Direct founder phone & WhatsApp line" },
      { label: "State Code 24 GST", value: "Preconfigured", detail: "CGST 9% + SGST 9% tax compliance" },
    ],
    painPoints: [
      {
        problem: "Foreign or generic SaaS software has no local support in Gujarat and doesn't understand local shop floor terms.",
        solution: "MotoBan is developed in Chandkheda with dedicated on-site and WhatsApp support in Gujarati and Hindi.",
      },
      {
        problem: "Hardware compatibility with locally available thermal printers in Relief Road markets is painful.",
        solution: "Plug-and-play compatibility with all thermal POS printers sold in Ahmedabad electronic markets.",
      },
    ],
    sampleParts: [
      { name: "Motul 3100 4T Gold 20W50 (1L)", sku: "MOT-3100-20W50", hsn: "27101981", price: "₹420" },
      { name: "Hero Splendor Front Brake Cable Genuine", sku: "HER-CBL-FRT", hsn: "87141090", price: "₹95" },
      { name: "Honda Activa Carburetor Cleaning Spray", sku: "CLNR-CARB-400", hsn: "34029099", price: "₹180" },
      { name: "Amaron Pro Rider 12V 5Ah Two-Wheeler Battery", sku: "AMR-5AH-MF", hsn: "85072000", price: "₹1,250" },
    ],
    faqs: [
      {
        question: "Can I visit MotoFit 2 in Chandkheda to see MotoBan running live in a real workshop?",
        answer:
          "Yes! MotoFit 2 (located in Nigam Nagar, Chandkheda, Ahmedabad) is our flagship production partner. You can witness live 15-second customer checkout and thermal billing in action.",
      },
      {
        question: "How quickly can my Ahmedabad workshop be onboarded?",
        answer:
          "Setup takes under 2 minutes. We pre-populate your garage name, GSTIN, and local spares matrix so you can start billing immediately.",
      },
    ],
  },
};
