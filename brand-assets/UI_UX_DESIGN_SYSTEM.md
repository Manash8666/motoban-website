# MotoBan (`mechbillerai`) UI & UX Design System Specification
**Version:** 3.0.0 (Global Production Specification)  
**Parent Ecosystem:** HybridStudioZ  
**Primary Field Laboratory:** MotoFit 2 Workshop, Ahmedabad  

---

## 1. System Philosophy: "Zero-Latency Industrial Luxury"

MotoBan exists at the intersection of **Extreme Workshop Durability** and **High-End Silicon Valley Aesthetics**. A mechanic using this software is often wearing nitrile gloves, holding an oily wrench in one hand, standing in high sunlight or dim fluorescent bays, and operating on low-cost Android phones or refurbished POS terminals.

### Core UX Tenets:
1. **The 15-Second Rule:** A mechanic must be able to complete a vehicle intake, add parts, apply GST, and generate a WhatsApp bill within 15 seconds. Every extra click is considered a design defect.
2. **Grease-Proof Touch Ergonomics:** Every interactive element on mobile/tablet must have a minimum bounding target of `48 × 48px` (preferably `54px`) to prevent mis-clicks.
3. **Glanceable Telemetry:** Critical financial and stock numbers must be legible from 3 feet away without squinting.
4. **Keyboard-First Omnipresence:** Desktop POS operators must never be forced to touch the mouse. All primary flows operate via hotkeys (`F2`, `ALT+B`, `ESC`, `ENTER`).

---

## 2. Spatial Grid & Layout Architecture

MotoBan strictly adheres to an **8-Point Spatial Grid System** (with a 4-point subgrid for micro-padding inside pills and compact tags).

```
4px (Micro) ── 8px (Tight) ── 16px (Base) ── 24px (Comfortable) ── 32px (Spacious) ── 48px (Macro) ── 64px (Hero)
```

### Breakpoints & Container Envelopes

| Breakpoint Key | Min Width | Max Container | Target Devices | Layout Behavior |
| :--- | :--- | :--- | :--- | :--- |
| `sm` | `640px` | `100% (Padding 16px)` | iPhone 15 Pro, Samsung Galaxy S24 | Single column stack, sticky bottom action bar |
| `md` | `768px` | `720px` | iPad Mini, 8-inch Garage Rugged Tablets | 2-column split (Vehicle Details / Bill Items) |
| `lg` | `1024px` | `960px` | 10.5-inch iPad, Desktop POS Screens | 3-pane billing cockpit, persistent live subtotal |
| `xl` | `1280px` | `1200px` | Laptops, Desktop Monitors | Full dashboard with real-time analytics & drawer |
| `2xl` | `1536px` | `1400px` | Ultra-wide Workshop Displays | Expanded multi-bay job board + inventory dock |

---

## 3. Elevation & Surface Hierarchy

In MotoBan's dark canvas ecosystem, elevation is not achieved via drop shadows alone (which are invisible against pure black); it is engineered using **Surface Luminance Shifts** and **Frosted Glass Borders**.

```
┌─────────────────────────────────────────────────────────────┐
│ LEVEL 3: Floating Command Bar & Hotkey Dock (Luminance +16%)│
│          rgba(28, 38, 61, 0.95) + 1px Geek Lime Border Glow │
├─────────────────────────────────────────────────────────────┤
│ LEVEL 2: Modals, Drawers & Live Dropdowns (Luminance +10%)  │
│          rgba(21, 29, 47, 0.90) + Backdrop Blur 20px        │
├─────────────────────────────────────────────────────────────┤
│ LEVEL 1: POS Billing Cards & Metric Panels (Luminance +5%)  │
│          rgba(21, 29, 47, 0.60) + 1px rgba(255,255,255,0.08)│
├─────────────────────────────────────────────────────────────┤
│ LEVEL 0: Ground Base Canvas (Luminance 0%)                  │
│          #0B0F19 (Void Black)                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Component Anatomy & States

### 4.1 Buttons

#### A. Primary Action Button (`btn-primary`)
Used for finalizing bills, printing receipts, and primary call-to-actions.
- **Background:** Solid `#C9F31D` (Geek Lime)
- **Text Color:** `#0B0F19` (Void Black) — *Never white!*
- **Typography:** `Plus Jakarta Sans`, 600 SemiBold, 15px
- **Border Radius:** `12px` (Soft industrial squircle)
- **Padding:** `14px 24px` (Desktop) / `16px 28px` (Mobile)
- **Hover State:** Background shifts to `#d8f844`, subtle box-shadow `0 0 24px rgba(201, 243, 29, 0.35)`
- **Active / Pressed State:** Scale down `0.97`, shadow collapsed
- **Disabled State:** Opacity 40%, cursor `not-allowed`, grayscale 20%

#### B. Secondary Ghost / Glass Button (`btn-secondary`)
Used for secondary actions like "Add Customer", "Clear Items", "Export CSV".
- **Background:** `rgba(255, 255, 255, 0.05)`
- **Text Color:** `#FFFFFF` (Pure White)
- **Border:** `1px solid rgba(255, 255, 255, 0.12)`
- **Hover State:** Background `rgba(255, 255, 255, 0.10)`, border `rgba(255, 255, 255, 0.25)`

#### C. Urgent / Destructive Button (`btn-destructive`)
Used for voiding invoices, wiping session items, or stock write-offs.
- **Background:** `rgba(239, 68, 68, 0.12)`
- **Text Color:** `#EF4444` (Crimson Brake)
- **Border:** `1px solid rgba(239, 68, 68, 0.25)`
- **Hover State:** Background `rgba(239, 68, 68, 0.22)`, border `#EF4444`

---

### 4.2 Form Inputs & Garage-Proof Controls

Mechanics often enter vehicle registration numbers while walking around a motorcycle. Inputs must be prominent and high-contrast:

- **Height:** Minimum `48px` (desktop), `54px` (mobile).
- **Background:** `#0E1422` (Deep Obsidian).
- **Border:** `1px solid rgba(255, 255, 255, 0.10)`.
- **Corner Radius:** `10px`.
- **Focus Ring:** `0 0 0 2px #C9F31D`, border color `#C9F31D`.
- **Text:** 15px `Plus Jakarta Sans` or 15px `JetBrains Mono` for license plates & amounts.
- **Placeholder:** `#64748B` (Steel Dim).
- **Clear Button:** Prominent right-aligned "✕" icon for single-tap field clearing.

---

### 4.3 Billing Table Item Rows

- **Row Height:** `52px` minimum.
- **Alternating Tint:** Not used. We use subtle 1px dividers `rgba(255, 255, 255, 0.04)`.
- **Hover Highlight:** `rgba(201, 243, 29, 0.03)` with a 2px left border accent in `#C9F31D`.
- **Inline Quantity Stepper:**
  - `[-]` and `[+]` touch buttons: `36 × 36px` minimum.
  - Number display: `JetBrains Mono` Bold with tabular numbers.
- **Instant Delete:** Single-click trash icon on row right.

---

### 4.4 Status Badges & Pills

Badges communicate critical vehicle and invoice stages at a glance:

| Status | Badge Background | Text / Dot Color | Label |
| :--- | :--- | :--- | :--- |
| **Paid / Finalized** | `rgba(16, 185, 129, 0.15)` | `#10B981` | `● PAID` |
| **Pending / Due** | `rgba(245, 158, 11, 0.15)` | `#F59E0B` | `⏱ UNPAID` |
| **In Service Bay** | `rgba(37, 99, 235, 0.15)` | `#38BDF8` | `🔧 REPAIRING` |
| **Voice Listening**| `rgba(201, 243, 29, 0.15)` | `#C9F31D` | `🎙 LISTENING...` |
| **Hardware Ready** | `rgba(16, 185, 129, 0.15)` | `#10B981` | `🖨 ESC/POS READY`|

---

## 5. Micro-Interactions & Animation Physics

All animations in MotoBan are designed for **tactile responsiveness**. Slow, floaty animations feel sluggish to a busy mechanic; transitions must be crisp and snappy.

### Animation Tokens
- **Snappy Spring (Buttons, Toggles):** `transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);`
- **Surface Slide (Modals, Sheets):** `transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease;`
- **Voice Waveform Pulse:** Pulsing ring effect radiating from `#C9F31D` microphone icon at `1.2s infinite ease-out`.

### Haptic & Audio Feedback Standards
When operating on supported mobile browsers (Chrome on Android / MotoBan PWA):
- **Item Added via Voice / Barcode:** Single short haptic vibration (`navigator.vibrate(40)`).
- **Bill Finalized & Sent:** Dual success vibration (`navigator.vibrate([30, 50, 60])`) + short high-frequency confirmation chime (optional setting).
- **Error / Low Stock:** Heavy alert vibration (`navigator.vibrate([100, 50, 100])`).

---

## 6. Accessibility & Industrial Usability Checklist

Before any screen or feature is certified for MotoBan:
- [x] All interactive controls exceed `48px` touch target.
- [x] Full flow operable without a pointing device (Tab, Shift-Tab, Enter, Space).
- [x] Contrast ratio exceeds 4.5:1 for standard text, 7:1 for headers.
- [x] Text size can be scaled to 130% without breaking POS card boundaries.
- [x] Offline fallback banner clearly visible when garage internet drops.
- [x] Zero flashing animations or jarring strobe effects.
