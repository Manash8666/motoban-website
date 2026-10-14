"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only on desktop/pointing devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    setIsVisible(true);

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    const fXTo = gsap.quickTo(follower, "x", { duration: 0.35, ease: "power3" });
    const fYTo = gsap.quickTo(follower, "y", { duration: 0.35, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fXTo(e.clientX);
      fYTo(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const interactiveSelector = "a, button, input, textarea, select, [role='button'], .cursor-pointer, .hover-anim";

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(interactiveSelector)) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden hidden md:block">
      {/* Inner precise dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#C9F31D] mix-blend-difference"
      />
      {/* Outer fluid halo */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full border border-[#C9F31D] transition-transform duration-200 ease-out mix-blend-difference ${
          isHovered
            ? "-ml-6 -mt-6 w-12 h-12 bg-[#C9F31D]/20 scale-125"
            : "-ml-4 -mt-4 w-8 h-8 opacity-60 scale-100"
        }`}
      />
    </div>
  );
}
