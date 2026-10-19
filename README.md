# MotoBan ⚡ 

### Next-Generation AI-Powered Garage Billing, Job Card & Spares Matrix Platform
**Engineered & Powered by [HybridStudioZ](https://motoban.in)**

---

[![Production Website](https://img.shields.io/badge/Production%20Website-motoban.in-C9F31D?style=for-the-badge&logo=vercel&logoColor=0B0F19)](https://motoban.in)
[![Cloud App Sandbox](https://img.shields.io/badge/Live%20App%20Demo-mechbillerai.vercel.app-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mechbillerai.vercel.app)
[![Flagship Production Partner](https://img.shields.io/badge/Flagship%20Partner-MotoFit%202%20(Ahmedabad)-FF5E14?style=for-the-badge&logo=googlemaps&logoColor=white)](https://motofit2.in)
[![EULA Policy](https://img.shields.io/badge/Legal-EULA%20Policy-10B981?style=for-the-badge&logo=googledocs&logoColor=white)](./EULA.md)
[![Next.js](https://img.shields.io/badge/Next.js-14%20App%20Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## 🏁 Live Deployment Links

| Resource | URL | Description |
| :--- | :--- | :--- |
| **Official Website** | **[https://motoban.in](https://motoban.in)** | High-performance editorial marketing website with interactive 3D WebGL hero engine. |
| **WWW Subdomain** | **[https://www.motoban.in](https://www.motoban.in)** | Canonical production redirect with active Edge SSL. |
| **Live App Engine** | **[https://mechbillerai.vercel.app](https://mechbillerai.vercel.app)** | Live cloud sandbox featuring the 15-second speech biller and interactive garage job card demo. |
| **Flagship Partner** | **[https://motofit2.in](https://motofit2.in)** | **MotoFit 2** (Nigam Nagar, Chandkheda, Ahmedabad) — Actively running the **Full Version** in multi-bay production. |
| **Official Email** | **[info@motoban.in](mailto:info@motoban.in)** | Dedicated support and enterprise garage onboarding inquiries. |

---

## 🛠️ Platform Overview

**MotoBan** is a modern operating system purpose-built for motorcycle, scooter, and multi-brand automotive workshops across India. Designed to overcome the realities of workshop environments—dusty hands, loud engine bays, and evening customer rush queues—MotoBan transforms manual paperwork into rapid digital workflows.

### 🌟 Core Capabilities

1. **15-Second AI Voice Biller**
   - Natural language voice recognition trained on real Indian garage vernacular (*"shocker"*, *"clutch katora"*, *"motul 10w40"*, *"chakka bearing"*).
   - Automatically maps spoken part names and labor rates directly to verified GST HSN/SAC codes.

2. **Tri-Platform Hybrid Sync**
   - **Cloud SaaS Web:** Centralized management, consolidated GST filing reports, and multi-branch mechanic payroll.
   - **Offline-First Desktop PWA:** Native desktop installation on Windows/macOS. Operates with zero internet latency via local IndexedDB stores and auto-syncs when reconnected.
   - **Mobile Companion App:** Vehicle check-in, 4-angle dent/scratch camera photos, and digital gate pass QR scanning.

3. **50,000+ Preloaded Spares SKU Matrix**
   - Universal part numbering with cross-references across BS3, BS4, and BS6 platforms (Hero, Bajaj, Honda, TVS, Yamaha, Royal Enfield, KTM).
   - Live FIFO inventory tracking with automatic low-stock alerts and supplier purchase orders.

4. **Hardware-Native ESC/POS Thermal Printing**
   - Direct WebHID, WebSerial, and USB/Bluetooth communication for standard 58mm and 80mm thermal receipt printers (TVS, Epson, Posiflex, BluPrints, Xprinter).
   - Silent, raw text printing without print preview dialog delays.

5. **WhatsApp Estimates & Instant UPI Approvals**
   - 1-click WhatsApp customer dispatch with vehicle inspection photos and itemized line items.
   - Dynamic UPI QR codes embedded directly on bills for instant direct-to-bank settlement.

---

## 🏗️ Technical Architecture & Stack

```
motoban-website/
├── public/
│   └── assets/imgs/          # Editorial photography & custom claw geometry
├── src/
│   ├── app/
│   │   ├── page.tsx          # Editorial homepage with 3D canvas & horizontal GSAP scroll
│   │   ├── features/         # Interactive voice dictation simulator & hardware matrix
│   │   ├── pricing/          # ROI Calculator & transparent garage plans
│   │   ├── docs/             # PWA setup, hotkeys cheat sheet & thermal printer guide
│   │   ├── contact/          # Onboarding booking form & WhatsApp integration
│   │   ├── eula/             # Full End User License Agreement policy page
│   │   ├── layout.tsx        # Global fonts, metadata & smooth Lenis provider
│   │   └── globals.css       # Custom design tokens, glassmorphism & keyframes
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroEngineCanvas.tsx  # Interactive WebGL motorcycle engine assembly
│   │   ├── home/             # HeroSection, PlatformEcosystem, AppShowcase, etc.
│   │   └── layout/           # Navbar, Footer, Preloader, CustomCursor, ScrollProgress
│   └── lib/
│       └── constants.ts      # Single source of truth for site config & partners
├── EULA.md                   # Formal End User License Agreement
└── README.md                 # Project documentation
```

### Technology Highlights

- **Framework:** Next.js 14.2 (App Router)
- **Language:** TypeScript 5.0 (Strict mode)
- **Styling:** Vanilla Tailwind CSS with custom editorial Geekfolio design tokens:
  - **Void Black:** `#0B0F19`
  - **Navy Steel:** `#151D2F`
  - **Acid Lime (Accent):** `#C9F31D`
  - **High-Vis Orange (Accent):** `#FF5E14`
- **3D Graphics:** Three.js via `@react-three/fiber` & `@react-three/drei`
- **Animations:** GSAP 3 (ScrollTrigger) & Lenis Smooth Scroll
- **Icons:** Lucide React
- **Hosting & CDN:** Vercel Global Anycast Edge Network with Custom Domain SSL

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/Manash8666/motoban-website.git
cd motoban-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Launch local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production build validation
```bash
npm run build
npm run start
```

---

## 📜 End User License Agreement (EULA) & Dual-Licensing Policy

MotoBan is software engineered and powered by **HybridStudioZ**. Use of the software, website, and underlying codebase is strictly governed by our formal End User License Agreement.

### ⚖️ Important Notice: Website Code & `mechbillerai` Repository Terms
If you or your organization are using the **MotoBan Website** or the **[`mechbillerai`](https://github.com/Manash8666/mechbillerai.git)** Git repository, according to EULA policies, you are legally subjected to **either**:

1. **Option A (100% Reciprocal Open-Source):** Release **100% of your resulting project, platform, codebase, and derivative works as free and public open-source software** under identical terms with all source code publicly accessible, **OR**
2. **Option B (3x Lifetime License Commercial Royalty):** Pay a mandatory Royalty that is **3 times (3x) the Lifetime License** of the MotoBan App and Website directly to HybridStudioZ prior to commercial launch or closed-source deployment:
   - **Standard Workshop Commercial Royalty:** `3 × ₹15,999 = ₹47,997 INR`
   - **Enterprise Multi-Bay Commercial Royalty:** `3 × ₹39,999 = ₹119,997 INR`

- 📄 **View Full Markdown EULA:** [`EULA.md`](./EULA.md)
- 🌐 **View Web EULA:** [https://motoban.in/eula](https://motoban.in/eula)

---

## 🤝 Flagship Production Partner

MotoBan's Full Version is deployed in daily high-volume production at:

- **Workshop:** **MotoFit 2**
- **Location:** Nigam Nagar, Chandkheda, Ahmedabad, Gujarat, India
- **Partner Website:** [https://motofit2.in](https://motofit2.in)
- **Workbay Volume:** Multi-ramp continuous motorcycle servicing, computerized diagnostics, and instant GST invoicing.

---

## 📬 Contact & Support

For product inquiries, pilot garage onboarding, or enterprise multi-branch setups:

- **Entity:** HybridStudioZ
- **Support & Legal Email:** [info@motoban.in](mailto:info@motoban.in)
- **Phone / WhatsApp:** [+91 6359635416](tel:+916359635416)
- **Headquarters:** Chandkheda, Ahmedabad, Gujarat, India - 382424
- **Official Domain:** [https://motoban.in](https://motoban.in)

---

© 2026 MotoBan. All rights reserved. Powered by **HybridStudioZ**.
