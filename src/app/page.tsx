import HeroSection from "@/components/home/HeroSection";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import PlatformEcosystem from "@/components/home/PlatformEcosystem";
import ParallaxDivider from "@/components/home/ParallaxDivider";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import AppShowcase from "@/components/home/AppShowcase";
import InteractiveBillGenerator from "@/components/home/InteractiveBillGenerator";
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

      {/* 7. Viral PLG: Live 15-Second WhatsApp Bill & Job Card Generator */}
      <InteractiveBillGenerator />

      {/* 8. Garage Owner Testimonials Carousel */}
      <TestimonialsSection />

      {/* 8. 3-Tier Interactive Pricing */}
      <PricingSection />

      {/* 9. GSAP 3-Panel Horizontal Scroll Section */}
      <HorizontalScrollContainer />

      {/* 10. Changelog & GitHub Releases */}
      <ChangelogSection />
    </div>
  );
}
