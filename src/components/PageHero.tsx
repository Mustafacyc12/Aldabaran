import type { ReactNode } from "react";
import Starfield from "@/components/Starfield";
import AldebaranStarLayer from "@/components/AldebaranStarLayer";

export default function PageHero({
  eyebrow,
  title,
  lede,
  short = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  short?: boolean;
}) {
  return (
    <header
      className="hero hero--page"
      id="hero"
      style={short ? { minHeight: "38vh" } : undefined}
    >
      <Starfield />
      <AldebaranStarLayer />
      <div className="grain"></div>
      <div className="hero-content">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </header>
  );
}
