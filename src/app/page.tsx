import HeroSection from "@/components/home/HeroSection";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import PlatformEcosystem from "@/components/home/PlatformEcosystem";
import ParallaxDivider from "@/components/home/ParallaxDivider";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import AppShowcase from "@/components/home/AppShowcase";
import InteractiveBillGenerator from "@/components/home/InteractiveBillGenerator";
import LivePosSandbox from "@/components/sandbox/LivePosSandbox";
import InstallPromptBanner from "@/components/pwa/InstallPromptBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import HorizontalScrollContainer from "@/components/home/HorizontalScrollContainer";
import ChangelogSection from "@/components/home/ChangelogSection";

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. Hero Creative with 3D WebGL Piston & Gear Engine */}
      <HeroSection />

      {/* 2. Dual Infinite Marquee */}
      <MarqueeTicker />

      {/* 3. Tri-Platform Intro & Multi-Device Sync */}
      <PlatformEcosystem />

      {/* 4. Zero Downtime Parallax Workshop Divider */}
      <ParallaxDivider />

      {/* 5. 4-Column Bordered Capabilities Grid */}
      <CapabilitiesGrid />

      {/* 6. Asymmetrical Interactive App Showcase */}
      <AppShowcase />

      {/* 7. Zero-Login Mini-POS Terminal Sandbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LivePosSandbox />
      </section>

      {/* 8. Viral PLG: Live 15-Second WhatsApp Bill & Job Card Generator */}
      <InteractiveBillGenerator />

      {/* 9. Smart OS-Aware PWA & Multi-Device Install Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstallPromptBanner />
      </div>

      {/* 10. Garage Owner Testimonials Carousel */}
      <TestimonialsSection />

      {/* 11. 3-Tier Interactive Pricing */}
      <PricingSection />

      {/* 9. GSAP 3-Panel Horizontal Scroll Section */}
      <HorizontalScrollContainer />

      {/* 10. Changelog & GitHub Releases */}
      <ChangelogSection />
    </div>
  );
}
