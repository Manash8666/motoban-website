# MotoBan (`mechbillerai`) Typography Specification
**Version:** 3.0.0 (Global Production Specification)  
**Parent Ecosystem:** HybridStudioZ  

---

## 1. Typeface Architecture Overview

MotoBan's typography combines high-impact industrial precision with ergonomic legibility. Mechanics and service advisors frequently read bills and spare lists on cracked mobile screens, tablets covered in oil smudges, or low-cost thermal receipt rolls. 

To solve this, MotoBan mandates a 3-tier font system:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. DISPLAY / HEADINGS:      Syne (700 Bold / 800 ExtraBold) │
│ 2. USER INTERFACE & BODY:   Plus Jakarta Sans (400 to 700)  │
│ 3. THERMAL POS & FINANCIAL: JetBrains Mono (500 to 700)     │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. The Typeface Tiers

### 2.1 Display Font: `Syne`
- **Designer / Foundry:** Lucas Le Bihan / Bonjour Monde
- **License:** Open Font License (Google Fonts)
- **Role:** Marketing display headlines, brand slogans, hero titles, billboard signage, high-impact numbers.
- **Characteristics:** Sculptural, distinctive, high-tech geometry with wide character proportions that immediately differentiate MotoBan from generic SaaS software.
- **Weights Used:**
  - `Syne 700` (Bold) — Section headings, feature titles.
  - `Syne 800` (ExtraBold) — Hero main titles, giant PLG metrics (e.g. `15s`, `₹0`).
- **Tracking / Letter Spacing:** `-0.03em` to `-0.01em` (Tight, locked-in aesthetic).

### 2.2 UI & Body Font: `Plus Jakarta Sans`
- **Designer / Foundry:** Tokotype (Gumpita Rahayu)
- **License:** Open Font License (Google Fonts)
- **Role:** Web application UI, form inputs, customer records, modal dialogs, help documentation, mobile screens.
- **Characteristics:** Clean, neo-grotesque sans-serif with a tall x-height, generous apertures, and wide counters. Built specifically for high legibility on high-DPI retina and low-resolution mobile displays alike.
- **Weights Used:**
  - `Plus Jakarta Sans 400` (Regular) — Long body paragraphs, terms, release notes.
  - `Plus Jakarta Sans 500` (Medium) — Table cells, secondary navigation, input placeholders.
  - `Plus Jakarta Sans 600` (SemiBold) — Button text, tab labels, card headers.
  - `Plus Jakarta Sans 700` (Bold) — Form labels, emphasized metrics, customer names.
- **Tracking / Letter Spacing:** `0em` to `+0.01em` for body, `+0.02em` for uppercase badges.

### 2.3 Monospace & POS Font: `JetBrains Mono`
- **Designer / Foundry:** JetBrains
- **License:** Open Font License (Google Fonts)
- **Role:** Thermal receipt previews, invoice numbering (`#MB-2026-0842`), vehicle registration plates (`GJ-01-ER-4921`), GSTIN codes, hotkey pills (`[ALT+B]`), pricing totals, and code snippets.
- **Characteristics:** Monospaced with clear distinction between `0` (slashed) and `O`, `1`, `l`, and `I`. Tabular numbers ensure invoice digits align vertically down to the exact decimal point without jittering during live recalculations.
- **Weights Used:**
  - `JetBrains Mono 500` (Medium) — Invoice line items, tax breakdowns.
  - `JetBrains Mono 700` (Bold) — Final total amounts (`₹1,840.00`), shortcut keys.
- **CSS Feature Settings:** `font-feature-settings: "tnum" on, "zero" on;`

---

## 3. Typographic Hierarchy & Scale

MotoBan adopts a dynamic **1.25 Major Third** scale for web applications, scaling up to **1.333 Perfect Fourth** on wide desktop displays.

| Token | Desktop Size | Mobile Size | Line Height | Weight | Font Family | Example Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-2xl` | `72px` | `44px` | `1.05` | `800` | `Syne` | Hero landing stat numbers (`15s`, `₹0`) |
| `display-xl` | `56px` | `36px` | `1.10` | `700` | `Syne` | Main Page H1 ("World's Fastest Garage POS") |
| `heading-1` | `40px` | `28px` | `1.15` | `700` | `Syne` | Section Titles ("Zero Hardware Lock-In") |
| `heading-2` | `30px` | `22px` | `1.25` | `600` | `Syne` | Feature Card Headers, Modal Titles |
| `heading-3` | `22px` | `18px` | `1.30` | `600` | `Plus Jakarta Sans`| Table Group Headers, Customer Profile H3 |
| `body-large` | `18px` | `16px` | `1.50` | `400 / 500`| `Plus Jakarta Sans`| Hero subtitle, lead editorial summary |
| `body-base` | `15px` | `14px` | `1.50` | `400 / 500`| `Plus Jakarta Sans`| Standard paragraph, service descriptions |
| `body-small` | `13px` | `12px` | `1.45` | `500` | `Plus Jakarta Sans`| Form captions, metadata, table sub-values |
| `mono-stat` | `24px` | `20px` | `1.20` | `700` | `JetBrains Mono` | Grand Total (`₹4,850.00`), Live Counter |
| `mono-base` | `14px` | `13px` | `1.40` | `500` | `JetBrains Mono` | Invoice line item, Part SKU: `SP-BRK-409` |
| `mono-micro` | `11px` | `10px` | `1.30` | `700` | `JetBrains Mono` | Hotkey pills (`F2`, `ALT+P`), Thermal specs |

---

## 4. Financial & Pricing Display Rules

In billing terminals and customer invoices, digits must never shift width when incrementing:

1. **Always Enforce Tabular Numerals:**
   ```css
   font-variant-numeric: tabular-nums;
   font-feature-settings: "tnum" 1, "ss01" 1;
   ```
2. **Indian Currency Formatting:**
   - Always place the Indian Rupee symbol `₹` directly before the integer without a space (`₹1,450.00`, never `Rs. 1450` or `₹ 1450`).
   - Grouping must follow the Indian Numbering System: Thousands, then Lakhs, then Crores (`₹12,45,800.00`).
3. **Decimals:**
   - Display `.00` in thermal receipts for accounting clarity.
   - For marketing headers, drop decimals (`₹6,999`, not `₹6,999.00`).

---

## 5. ESC/POS Thermal Receipt Hardware Fallbacks

Real Bluetooth & USB 58mm/80mm thermal receipt printers do not download Google Fonts. They render embedded firmware bitmap fonts:

- **Primary Thermal Font (Font A):** `12 × 24 dots` — 32 characters per line (58mm) or 48 characters per line (80mm).
- **Condensed Thermal Font (Font B):** `9 × 17 dots` — 42 characters per line (58mm) or 64 characters per line (80mm).
- **Digital Screen Preview Fallback:**
  When rendering the receipt preview modal in MotoBan Web POS:
  ```css
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
  letter-spacing: 0.04em;
  font-weight: 600;
  ```

---

## 6. Prohibited Typographic Practices
❌ **Never** stretch, squish, or distort font glyphs horizontally or vertically.  
❌ **Never** use script, serif, or comic typefaces anywhere in the MotoBan interface.  
❌ **Never** use `Syne` for body paragraphs or data tables; its geometric personality is intended purely for headlines.  
❌ **Never** use all-caps for paragraphs; reserve all-caps strictly for short badges (`PAID`, `OFFLINE`, `GST 18%`).  
