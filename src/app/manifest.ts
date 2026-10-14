import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MotoBan — #1 AI Garage Billing, Job Card & Spares POS App",
    short_name: "MotoBan",
    description:
      "India's leading AI-powered garage management software. 15-second voice GST billing, digital job cards, 50,000+ spares matrix, and 100% offline PWA.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F19",
    theme_color: "#0B0F19",
    orientation: "portrait",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
