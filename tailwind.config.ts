import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "void-black": "#0B0F19",
        "navy-steel": "#151D2F",
        "glass-card": "#1C263D",
        "geek-lime": "#C9F31D",
        "garage-orange": "#FF5E14",
        "illuminated-gold": "#E5C07B",
        "emerald-sync": "#10B981",
        "cobalt-ai": "#2563EB",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "Syne", "sans-serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-reverse": "spin-reverse 22s linear infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee2": "marquee2 35s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        "lime-glow": "0 0 35px -5px rgba(201, 243, 29, 0.35)",
        "orange-glow": "0 0 35px -5px rgba(255, 94, 20, 0.35)",
        "cobalt-glow": "0 0 35px -5px rgba(37, 99, 235, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
