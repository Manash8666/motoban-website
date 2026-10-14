# 58mm (2-Inch) Thermal Receipt Print Specification
**Standard:** ESC/POS Direct Command Stream  
**Resolution:** 203 DPI (8 dots/mm, 384 dots per horizontal line)  
**Standard Font:** Font A (12 × 24 dots) = **32 Characters Per Line**  
**Target Printers:** Everycom, Bluprint, TVS RP-3200, Posiflex, Android Bluetooth Mini-Printers  

---

## 1. Line Width & Column Allocation Rules

With 32 characters per line, the layout must allocate strict character budgets:

```
┌────────────────────────────────┐ ◄── 32 Chars ──►
│ ITEM DESC         QTY  RATE AMT│
├────────────────────────────────┤
│ 16 Chars           3c   6c   7c│ = 32 Chars Exact
└────────────────────────────────┘
```

- **Item Description:** 16 characters (truncate with `..` if over 16 chars, or wrap to line 2).
- **Qty:** 3 characters (right aligned, e.g. `  2`).
- **Rate:** 6 characters (right aligned, e.g. ` 450`).
- **Amount:** 7 characters (right aligned, e.g. ` 900.00`).

---

## 2. Standard 32-Column ASCII Mock (Production Output)

```text
================================
         MOTOBAN POS            
     AI SPEED BILLING           
--------------------------------
GARAGE: MOTOFIT 2 WORKSHOP      
LOC: CHANDKHEDA, AHMEDABAD      
MOB: +91 98765 43210            
GSTIN: 24AAAAA0000A1Z5          
--------------------------------
INV #: MB-2026-0842             
DATE: 14-OCT-2026  TIME: 18:30  
VEHICLE: GJ-01-ER-4921 (ACTIVA) 
KM: 24,180   MECH: SURESH BHAI  
================================
ITEM             QTY  RATE   AMT
--------------------------------
MOTUL 10W-30 1L    1   450 450.00
FRONT BRAKE PAD    1   280 280.00
SPARK PLUG RG6YC   1   140 140.00
CARB CLEAN SERVICE 1   350 350.00
GENERAL LABOR      1   200 200.00
--------------------------------
SUBTOTAL:               1,420.00
CGST 9%:                  127.80
SGST 9%:                  127.80
--------------------------------
TOTAL AMOUNT:        Rs 1,675.00
--------------------------------
PAYMENT STATUS:     PAID (CASH) 
================================
     SCAN FOR DIGITAL BILL      
                                
         [  QR CODE  ]          
         [   HERE    ]          
                                
  SAVE PAPER • WHATSAPP COPY    
   https://motoban.in/bill/842  
================================
   POWERED BY MOTOBAN AI POS    
   ZERO HARDWARE LOCK-IN APP    
```

---

## 3. Essential ESC/POS Byte Sequences

| Command Function | Hex Byte Sequence | ASCII Equivalent |
| :--- | :--- | :--- |
| **Initialize Printer** | `1B 40` | `ESC @` |
| **Center Alignment** | `1B 61 01` | `ESC a 1` |
| **Left Alignment** | `1B 61 00` | `ESC a 0` |
| **Right Alignment** | `1B 61 02` | `ESC a 2` |
| **Bold ON** | `1B 45 01` | `ESC E 1` |
| **Bold OFF** | `1B 45 00` | `ESC E 0` |
| **Double Height & Width**| `1D 21 11` | `GS ! 17` |
| **Standard Text Size** | `1D 21 00` | `GS ! 0` |
| **Paper Feed & Partial Cut**| `1D 56 42 00` | `GS V B 0` |
| **Cash Drawer Kick Pulse**| `1B 70 00 19 FA` | `ESC p 0 25 250` |

---

## 4. Hardware Optimization Rules
1. **Never send high-resolution graphics:** A 58mm printer with a 203 DPI thermal head cannot process large image buffers without choking buffer memory. Always use native 1-bit monochome raster or native ESC/POS text commands.
2. **QR Code Generation:** Utilize hardware command `GS ( k` model 2 with Error Correction Level L/M (width 3 or 4 dots per module) for instant scanning on budget Android cameras.
