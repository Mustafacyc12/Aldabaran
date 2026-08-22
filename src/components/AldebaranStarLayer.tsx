"use client";

import { useEffect, useState } from "react";
import AldebaranStar from "@/components/AldebaranStar";
import {
  getAldebaranPos,
  STARFIELD_VIEWBOX_H,
  STARFIELD_VIEWBOX_W,
} from "@/lib/starfieldConstants";

// Rendered in the same viewBox coordinate space (and with the same
// preserveAspectRatio="slice" + absolute positioning) as Starfield.tsx's
// background SVG, via <foreignObject>. That's what keeps the star pinned
// exactly where the constellation trail line converges at every viewport
// size -- a plain CSS left/top percentage on a sibling HTML element can't
// do this, because "slice" scaling crops each dimension by a different,
// aspect-ratio-dependent amount (confirmed: mobile portrait crops ~70% of
// the width away, desktop crops ~25% of the height), so a fixed percentage
// drifts out of alignment with the constellation across breakpoints.
//
// Sizes below are in viewBox units, not CSS px. Since the shared SVG's
// slice-scale factor stays close to 1x across common hero aspect ratios
// (~0.89 on a narrow phone, ~1.03 on desktop), these translate to roughly
// the requested ~120-200px on mobile / ~200-240px on desktop on screen.
export default function AldebaranStarLayer() {
  const [size, setSize] = useState(230);
  const [pos, setPos] = useState<[number, number]>([460, 355]);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSize(w < 640 ? 160 : w < 1024 ? 195 : 230);
      setPos(getAldebaranPos(w));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const half = size / 2;
  const [cx, cy] = pos;

  return (
    <svg
      viewBox={`0 0 ${STARFIELD_VIEWBOX_W} ${STARFIELD_VIEWBOX_H}`}
      preserveAspectRatio="xMidYMid slice"
      className="aldebaran-star-layer"
      aria-hidden="true"
    >
      <foreignObject x={cx - half} y={cy - half} width={size} height={size} overflow="visible">
        <AldebaranStar size={size} />
      </foreignObject>
    </svg>
  );
}
