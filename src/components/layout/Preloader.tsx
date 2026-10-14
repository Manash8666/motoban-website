"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client
    const letters = textRef.current?.querySelectorAll("span");
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path || !letters) {
      setComplete(true);
      return;
    }

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    const tl = gsap.timeline({
      onComplete: () => {
        setComplete(true);
      },
    });

    // Stagger letters up
    tl.fromTo(
      letters,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      }
    )
      .to(
        letters,
        {
          y: -60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: "power3.in",
          delay: 0.3,
        }
      )
      // Morph SVG curve
      .to(path, {
        duration: 0.7,
        attr: { d: curve },
        ease: "power2.easeIn",
      })
      .to(path, {
        duration: 0.7,
        attr: { d: flat },
        ease: "power2.easeOut",
      })
      .to(
        container,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.6"
      );

    return () => {
      tl.kill();
    };
  }, []);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0F19] text-white overflow-hidden pointer-events-auto"
    >
      <svg
        className="absolute top-0 left-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#151D2F]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M0 0S175 0 500 0s500 0 500 0v1000H0Z"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Icon */}
        <div className="w-16 h-16 mb-6 rounded-2xl bg-[#1C263D] border border-white/10 flex items-center justify-center shadow-lime-glow">
          <span className="font-syne font-extrabold text-2xl text-[#C9F31D]">MB</span>
        </div>

        {/* Letters container */}
        <div
          ref={textRef}
          className="flex space-x-2 text-3xl md:text-5xl font-syne font-black tracking-widest uppercase text-white"
        >
          {["M", "O", "T", "O", "B", "A", "N"].map((char, index) => (
            <span
              key={index}
              className="inline-block transition-transform text-[#C9F31D]"
            >
              {char}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-400">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          <span>Powered by HybridStudioZ Engine</span>
        </div>
      </div>
    </div>
  );
}
