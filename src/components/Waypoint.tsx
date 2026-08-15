"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

export default function Waypoint({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`waypoint reveal ${className}`}
    >
      {children}
    </section>
  );
}
