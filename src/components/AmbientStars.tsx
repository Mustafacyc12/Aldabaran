"use client";

import { useEffect, useState } from "react";

type Star = {
  top: number;
  left: number;
  o: number;
  dur: number;
  delay: number;
};

export default function AmbientStars() {
  const [stars, setStars] = useState<Star[] | null>(null);

  useEffect(() => {
    const count = 46;
    const next: Star[] = [];
    for (let i = 0; i < count; i++) {
      next.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        o: Math.random() * 0.35 + 0.15,
        dur: 5 + Math.random() * 6,
        delay: Math.random() * 6,
      });
    }
    setStars(next);
  }, []);

  return (
    <div className="ambient-stars" aria-hidden="true">
      {stars?.map((s, i) => (
        <span
          key={i}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            ["--o" as string]: s.o,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
