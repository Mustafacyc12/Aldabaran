"use client";

import { useReveal } from "@/lib/useReveal";

export default function Horizon() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="horizon reveal" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none">
        <defs>
          <radialGradient id="horizonGlow" cx="50%" cy="100%" r="75%">
            <stop offset="0%" stopColor="#f4b16a" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#e08a3c" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#e08a3c" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="720" cy="260" rx="820" ry="170" fill="url(#horizonGlow)" />
        <path
          d="M0,260 L0,150 L90,120 L170,160 L260,95 L340,140 L430,80 L520,130 L600,70 L690,125 L780,90 L860,145 L950,100 L1040,150 L1120,105 L1210,155 L1300,115 L1440,160 L1440,260 Z"
          fill="#111c33"
          opacity="0.55"
        />
        <path
          d="M0,260 L0,190 L80,150 L160,195 L250,140 L330,185 L420,130 L510,180 L590,125 L680,175 L760,120 L850,178 L940,135 L1030,182 L1110,140 L1200,185 L1290,150 L1440,190 L1440,260 Z"
          fill="#0a0f1c"
        />
      </svg>
    </div>
  );
}
