"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export default function Course({ children }: { children: ReactNode }) {
  const courseRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const courseEl = courseRef.current;
    const fillEl = fillRef.current;
    if (!courseEl || !fillEl) return;

    function updateCourseFill() {
      if (!courseEl || !fillEl) return;
      const rect = courseEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      let progressed = vh * 0.6 - rect.top;
      progressed = Math.max(0, Math.min(progressed, total));
      const pct = total > 0 ? (progressed / total) * 100 : 0;
      fillEl.style.height = pct + "%";
    }

    window.addEventListener("scroll", updateCourseFill, { passive: true });
    window.addEventListener("resize", updateCourseFill);
    updateCourseFill();
    return () => {
      window.removeEventListener("scroll", updateCourseFill);
      window.removeEventListener("resize", updateCourseFill);
    };
  }, []);

  return (
    <div className="course" ref={courseRef}>
      <div className="course-track"></div>
      <div className="course-fill" ref={fillRef}></div>
      {children}
    </div>
  );
}
