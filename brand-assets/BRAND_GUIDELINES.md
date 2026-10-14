# MotoBan Brand Identity & Style Guidelines

> **Document Version:** 2.4.0  
> **Brand Owner:** HybridStudioZ  
> **Flagship Validation:** MotoFit 2 (Chandkheda, Ahmedabad)  
> **Confidentiality:** Public Brand Standards  

---

## 1. Brand Mission & Story

### 1.1 The Problem
India's 1.2+ million two-wheeler and multi-brand automotive repair shops form the backbone of urban mobility. Yet, over 85% of mechanics still rely on grease-stained paper bill books, handwritten registers, or cumbersome 1990s desktop accounting software designed for grocery stores, not oily workshop counters.

### 1.2 The MotoBan Vision
MotoBan was engineered on the active workshop floor of **MotoFit 2** in Chandkheda, Ahmedabad to solve this exact problem:
> **"To give every independent Indian mechanic, custom bike builder, and auto workshop owner an AI-powered, 15-second billing weapon that runs 100% offline, tracks every drop of oil, and commands total respect from vehicle owners."**

### 1.3 Brand Essence: "The High-Performance Speed Shop"
MotoBan is **not** sterile corporate SaaS. It draws inspiration from:
- **Precision Motorsport Engineering:** Tuned exhaust manifolds, high-tensile chrome-moly frames, and Brembo calipers.
- **The Street-Smart Indian Workshop Floor:** Mechanics who diagnose tappet noise by ear, speak in rapid Hinglish (*"shocker seal, clutch katora"*), and need billing that is faster than handing back the vehicle keys.
- **Cyberpunk / Void Black Aesthetics:** Deep matte blacks, electric acid lime lasers, glowing orange turbo manifold heat, and mono terminal typography.

---

## 2. Brand Archetype & Tone of Voice

### 2.1 The Archetype
- **Primary Archetype:** The **Creator / Master Craftsman** (obsessed with precision, torque specs, OEM tolerances, and speed).
- **Secondary Archetype:** The **Hero / Speed Specialist** (fearless, high-tech, uncompromising against revenue leakage).

### 2.2 Voice & Tone Matrix

| Dimension | How MotoBan Speaks | What MotoBan Never Does |
| :--- | :--- | :--- |
| **Pace** | Rapid, punchy, decisive (*"15 seconds to print. Done."*) | Verbose, bureaucratic, sluggish |
| **Language** | Authentic workshop vernacular (*"Bilingual Hinglish + Queen's English GST"*) | Pretentious academic jargon |
| **Attitude** | Direct, gritty, respectful of physical labor | Condescending or patronizing |
| **Technical Depth**| Precise part numbers, HSN codes, torque specs, ESC/POS byte codes | Vague buzzwords without substance |

### 2.3 Workshop Vernacular Example
- **Mechanic Floor Input:** *"Activa 6G front brake shoe, Motul 10W30, air filter, aur 350 labor daal do."*
- **MotoBan Interface Translation:** Instantly categorizes into HSN `87141090`, `27101981`, `84212300`, and SAC `998729`, applying 18% GST splits and generating an 80mm receipt with UPI QR in 8 seconds.

---

## 3. The Logo Suite

### 3.1 Anatomical Breakdown of the Symbol
The MotoBan icon mark is a geometric synthesis of:
1. **The Letter "M":** Sharp angled chevron wings representing mechanical symmetry.
2. **The Combustion Engine Piston & Connecting Rod:** Central downward compression stroke symbolizing power and momentum.
3. **The Speed Spark Accent:** Circular focal point at `x: 256, y: 170` representing instant ignition and AI velocity.

```
       ▲                   ▲
      / \                 / \
     /   \       ●       /   \       ← Speed Spark (Acid Lime)
    /     \     / \     /     \
   /       \   /   \   /       \
  /         \_/     \_/         \    ← Precision Bevel (Void Black / Lime)
 |           |       |           |
 |           |       |           |
```

### 3.2 Logo Variations & Roles

| Logo Asset | Background Requirement | Application |
| :--- | :--- | :--- |
| `motoban-logo-full-dark.svg` | Void Black (`#0B0F19`) or Navy (`#151D2F`) | Primary Web Header, Presentations, Video Thumbnails |
| `motoban-logo-full-light.svg`| Pure White (`#FFFFFF`) or Off-White (`#F3F4F6`) | Formal Paper Invoices, Letterheads, B2B Contracts |
| `motoban-symbol-gradient.svg`| Dark/Glass Backgrounds | Browser Favicon, App Launcher, Watermark, Social Avatars |
| `motoban-logo-monochrome.svg`| Single-Color Black or White | 58mm/80mm Thermal Receipt Header, Stamp, Laser Engraving |
| `motoban-app-icon-512.svg`   | Adaptive Squircle Border | Android APK, iOS PWA Manifest, Windows Desktop Icon |

---

## 4. Clear Space & Size Constraints

### 4.1 Exclusion Zone (Clear Space)
The minimum clear space around the logo lockup must be equal to **$X$**, where $X$ is the height of the letter **"M"** in the logotype. No graphic elements, borders, or text may intrude into this boundary.

```
+-----------------------------------------------+
|                      X                        |
|   X   [  M O T O B A N  ]  (P O S)    X       |
|                      X                        |
+-----------------------------------------------+
```

### 4.2 Minimum Render Sizes
- **Digital Screens:**
  - Full Horizontal Lockup: Minimum **140px** width.
  - Standalone Icon Symbol: Minimum **24px × 24px**.
  - Browser Favicon: **16px / 32px**.
- **Print & Thermal Paper:**
  - 58mm Thermal Slip: Minimum **32mm** width (approx 240 dots at 203 DPI).
  - 80mm Thermal Receipt: Minimum **48mm** width (approx 380 dots at 203 DPI).
  - A4 Tax Invoice Header: Minimum **38mm** width.

---

## 5. Logo Misuse (Strict "Don'ts")

To protect brand integrity, **NEVER** perform any of the following:
1. ❌ **Do not rotate or tilt** the logo at awkward angles.
2. ❌ **Do not alter the color palette** (e.g., turning Acid Lime to pastel cyan or purple).
3. ❌ **Do not apply heavy drop shadows or bevel embosses**; keep it flat or modern CSS glass-glow.
4. ❌ **Do not squish, stretch, or alter the aspect ratio**.
5. ❌ **Do not separate the speed spark** from the piston geometry.
6. ❌ **Do not place the dark-mode logo over low-contrast busy photography** without a Void Black backdrop shield.

---

## 6. Co-Branding & Production Crediting

### 6.1 "Powered by HybridStudioZ"
When crediting the engineering engine:
- The sub-line `"Powered by HybridStudioZ"` must be set in **JetBrains Mono** or **Plus Jakarta Sans** at 45% opacity (`#94A3B8`).
- Maintain the official link: `https://motoban.in`.

### 6.2 "Flagship Production Partner: MotoFit 2"
MotoFit 2 is MotoBan's premier proof-of-work flagship garage located in Chandkheda, Ahmedabad:
- Any case study, video review, or verified banner must include the location tag: **"Nigam Nagar, Chandkheda, Ahmedabad"**.
- Link to official site: `https://motofit2.in`.
