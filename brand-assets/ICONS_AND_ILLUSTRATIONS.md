# MotoBan (`mechbillerai`) Iconography & Illustration Guide
**Version:** 3.0.0 (Global Production Specification)  
**Parent Ecosystem:** HybridStudioZ  

---

## 1. Iconography Philosophy: "Functional Industrial Vector"

In an automotive workshop, icons are not decorative doodles; they are **visual safety and operational signposts**. Mechanics recognize visual shapes 300% faster than reading tiny text labels under bright sunlight or while rushing between bays.

### Primary Principles:
1. **Geometric Precision:** Clean, unembellished vector geometry with uniform corner radii.
2. **Standardized Stroke Weight:** Consistent `1.75px` to `2.0px` stroke weight across all UI viewports.
3. **High Optical Legibility:** Open counters, generous internal spacing, zero cluttered internal hatching.

---

## 2. Official Icon Library: Lucide Vector Standard

MotoBan standardizes on **Lucide Icons** (an open-source fork of Feather Icons) for all UI, web, and POS interfaces.

### 2.1 Standard Sizing Matrix

| Size Token | ViewBox | Stroke Width | Primary Application |
| :--- | :--- | :--- | :--- |
| `icon-xs` | `14 × 14px` | `1.75px` | Table status dots, keyboard shortcut pills (`[↵]`) |
| `icon-sm` | `18 × 18px` | `1.75px` | Input field prefixes (Search, Phone, Rupee) |
| `icon-md` | `22 × 22px` | `2.00px` | Standard button icons, primary navigation links |
| `icon-lg` | `32 × 32px` | `1.75px` | Feature card badges, modal section headers |
| `icon-xl` | `48 × 48px` | `1.50px` | Empty state illustrations, voice listening rings |

---

## 3. Core Domain Icon Mappings

To maintain immediate recognition across all touchpoints, use the following standardized Lucide icons for specific automotive and billing actions:

| Domain Action | Standard Lucide Icon | Meaning / Usage in MotoBan |
| :--- | :--- | :--- |
| **Vehicle Intake** | `Bike` / `Car` | Add new two-wheeler / four-wheeler job card |
| **Voice Billing** | `Mic` / `Volume2` | Trigger Speech-to-GST natural language billing |
| **Thermal Print** | `Printer` | Direct Bluetooth / USB 58mm/80mm ESC/POS spool |
| **WhatsApp Share** | `Send` / `Share2` | Dispatch digital PDF invoice & payment link |
| **Spare Parts** | `Wrench` / `Package` | Add engine oil, brake pads, spark plugs to cart |
| **Labor Charge** | `Hammer` / `Clock` | Add mechanic service hours or inspection fee |
| **GST / Tax** | `Receipt` / `FileSpreadsheet`| Toggle CGST/SGST 18% or 28% breakdown |
| **Quick Search** | `Search` / `ScanBarcode` | Look up customer by mobile number or bike plate |
| **Cash Settlement**| `Banknote` | Cash paid drawer transaction |
| **UPI / Online** | `QrCode` / `Smartphone` | Dynamic UPI QR code generated on customer screen |
| **Offline Sync** | `WifiOff` / `RefreshCw` | Offline PWA caching & IndexedDB sync indicator |

---

## 4. Brand Motifs & Visual Elements

Beyond standard icons, MotoBan incorporates unique mechanical and technical visual motifs into its brand language:

### 4.1 The "Sprocket & Piston" Blueprint Watermark
Subtle, high-precision technical CAD lines layered into the background of hero sections and card containers.
- **Color:** `rgba(255, 255, 255, 0.02)` to `rgba(201, 243, 29, 0.04)`
- **Style:** Isometric exploded line drawings of gears, spark plugs, disc rotors, and caliper brackets.

### 4.2 The "Thermal Sawtooth" Tear-Off Edge
Used at the bottom of digital receipt previews and invoice modal cards to mimic physical 58mm/80mm thermal receipt paper roll cuts:
```svg
<svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
  <polygon points="0,0 5,8 10,0 15,8 20,0 25,8 30,0 35,8 40,0 45,8 50,0 55,8 60,0 65,8 70,0 75,8 80,0 85,8 90,0 95,8 100,0 100,12 0,12" fill="#0B0F19"/>
</svg>
```

### 4.3 The "Voice Speech-to-GST" Waveform Bar
Animated vertical soundwave bars that indicate voice transcription activity when a mechanic dictates: *"Hero Splendor Activa oil change 2 liter Motul 10W-30 brake pad replacement"*.
- **Bar Count:** 5 vertical pill bars.
- **Color:** Gradient from `#C9F31D` (Geek Lime) to `#2563EB` (Cobalt AI).
- **Animation:** Continuous staggered height oscillate (`scaleY(0.3)` to `scaleY(1.0)`).

---

## 5. Illustration Style Guidelines

### ❌ Strict Prohibitions:
- **No Cartoonish or Infantilizing Art:** Do not use bubbly 3D clay characters, smiling generic avatars, or childish illustrations.
- **No Stock Generic Corporate Clip-Art:** Avoid handshakes, generic lightbulbs, or corporate stock drawings.

### ✅ Prescribed Visual Style:
- **Dark CAD Blueprint Aesthetic:** High-contrast line art, wireframes, technical schematic callouts, and isometric exploded mechanical diagrams.
- **Glowing Neon Wireframes:** Geometric outlines with subtle radial glow (`box-shadow: 0 0 30px rgba(201, 243, 29, 0.15)`).
- **Authentic Workshop Photography:** Real photos of greasy hands, laser-precise thermal receipts printing from portable Bluetooth printers, and actual mechanics using the terminal on the shop floor (e.g. MotoFit 2 Workshop, Ahmedabad).
