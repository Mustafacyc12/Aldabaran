'use client';

import React from 'react';

interface AldebaranStarProps {
  /** Rendered width/height in px. The SVG is square. */
  size?: number;
  className?: string;
}

/**
 * A bright, "shining" star graphic for the hero — bloom + diffraction
 * spikes, styled after a real long-exposure star photo but tinted to
 * the brand's warm amber palette instead of neutral white.
 *
 * Usage: position it absolutely inside your Hero/Starfield container
 * at the same spot the current small Aldebaran dot sits, e.g.
 *
 *   <div style={{ position: 'absolute', left: '62%', top: '32%',
 *                 transform: 'translate(-50%, -50%)', zIndex: 1 }}>
 *     <AldebaranStar size={200} />
 *   </div>
 *
 * Adjust left/top/size to match your layout.
 */
export default function AldebaranStar({ size = 220, className = '' }: AldebaranStarProps) {
  return (
    <div className={`aldebaran-star ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 220 220" className="aldebaran-star__svg" aria-hidden="true">
        <defs>
          <radialGradient id="aldebaranGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8ec" stopOpacity="1" />
            <stop offset="12%" stopColor="#ffd9a0" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#f4b16a" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#e08a3c" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#e08a3c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="spikeMain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f4b16a" stopOpacity="0" />
            <stop offset="48%" stopColor="#fff2dd" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#fff8ec" stopOpacity="1" />
            <stop offset="52%" stopColor="#fff2dd" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f4b16a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="spikeMinor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f4b16a" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffe6bd" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f4b16a" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* soft bloom */}
        <circle
          cx="110"
          cy="110"
          r="105"
          fill="url(#aldebaranGlow)"
          className="aldebaran-star__bloom"
        />

        {/* long diagonal spike, echoing the reference photo */}
        <rect
          x="0"
          y="109"
          width="220"
          height="1.6"
          fill="url(#spikeMinor)"
          transform="rotate(-38 110 110)"
          className="aldebaran-star__spike aldebaran-star__spike--slow"
        />

        {/* main horizontal / vertical cross */}
        <rect x="0" y="109" width="220" height="2.2" fill="url(#spikeMain)" className="aldebaran-star__spike" />
        <rect x="109" y="0" width="2.2" height="220" fill="url(#spikeMain)" className="aldebaran-star__spike" />

        {/* short diagonal accents */}
        <rect
          x="30"
          y="109.4"
          width="160"
          height="1"
          fill="url(#spikeMinor)"
          transform="rotate(45 110 110)"
          className="aldebaran-star__spike aldebaran-star__spike--fast"
        />
        <rect
          x="30"
          y="109.4"
          width="160"
          height="1"
          fill="url(#spikeMinor)"
          transform="rotate(-45 110 110)"
          className="aldebaran-star__spike aldebaran-star__spike--fast"
        />

        {/* bright core */}
        <circle cx="110" cy="110" r="4.2" fill="#fffaf0" className="aldebaran-star__core" />
      </svg>

      <style jsx>{`
        .aldebaran-star {
          position: relative;
          pointer-events: none;
        }
        .aldebaran-star__svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .aldebaran-star__bloom {
          transform-origin: 110px 110px;
          animation: aldebaranBloom 4.5s ease-in-out infinite;
        }
        .aldebaran-star__core {
          animation: aldebaranCore 4.5s ease-in-out infinite;
        }
        .aldebaran-star__spike {
          transform-origin: 110px 110px;
          animation: aldebaranSpike 4.5s ease-in-out infinite;
        }
        .aldebaran-star__spike--fast {
          animation-duration: 3.1s;
          animation-delay: 0.4s;
        }
        .aldebaran-star__spike--slow {
          animation-duration: 6.5s;
          animation-delay: 0.8s;
        }
        @keyframes aldebaranBloom {
          0%,
          100% {
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }
        @keyframes aldebaranCore {
          0%,
          100% {
            opacity: 0.9;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes aldebaranSpike {
          0%,
          100% {
            opacity: 0.55;
          }
          50% {
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .aldebaran-star__bloom,
          .aldebaran-star__core,
          .aldebaran-star__spike {
            animation: none;
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}
