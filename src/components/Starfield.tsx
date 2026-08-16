"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmallViewport = window.innerWidth < 640;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const W = 1400;
    const H = 900;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

    const starCount = isSmallViewport ? 70 : 170;
    let bg = "";
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = Math.random() * 1.1 + 0.3;
      const o = Math.random() * 0.5 + 0.15;
      const dur = (4 + Math.random() * 4).toFixed(1);
      const delay = (Math.random() * 6).toFixed(2);
      const cls = reduceMotion ? "" : ' class="sf-twinkle"';
      const style = reduceMotion
        ? ""
        : ` style="--sf-o:${o.toFixed(2)};animation-duration:${dur}s;animation-delay:${delay}s;"`;
      bg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(
        2
      )}" fill="#f6efe0" opacity="${o.toFixed(2)}"${cls}${style}></circle>`;
    }

    const pleiades = [
      [210, 150],
      [232, 140],
      [250, 162],
      [224, 176],
      [268, 150],
      [246, 190],
      [288, 168],
    ];
    const hyades = [
      [430, 330],
      [470, 300],
      [520, 340],
      [560, 300],
      [610, 360],
    ];
    const aldebaranPos = [480, 380];

    function cluster(points: number[][], r = 1.6, op = 0.85) {
      return points
        .map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="#f6efe0" opacity="${op}"/>`)
        .join("");
    }
    function lines(points: number[][], color: string, op: number) {
      let d = "";
      for (let i = 0; i < points.length - 1; i++) {
        d += `<line x1="${points[i][0]}" y1="${points[i][1]}" x2="${points[i + 1][0]}" y2="${
          points[i + 1][1]
        }" stroke="${color}" stroke-width="0.6" opacity="${op}"/>`;
      }
      return d;
    }

    const trailLen = Math.hypot(aldebaranPos[0] - 250, aldebaranPos[1] - 170);
    const trail = reduceMotion
      ? `<line x1="250" y1="170" x2="${aldebaranPos[0]}" y2="${aldebaranPos[1]}" stroke="#b8925a" stroke-width="1" opacity="0.45"/>`
      : `<line x1="250" y1="170" x2="${aldebaranPos[0]}" y2="${aldebaranPos[1]}" stroke="#b8925a" stroke-width="1" opacity="0.45" class="sf-trail" style="--sf-len:${trailLen};stroke-dasharray:${trailLen};"/>`;

    const constellationLines = lines(hyades, "#b8925a", 0.35);
    const pleiadesStars = cluster(pleiades, 1.4, 0.7);
    const hyadesStars = cluster(hyades, 1.6, 0.75);

    const aldebaranCoreCls = reduceMotion ? "" : ' class="sf-pulse"';
    const aldebaran = `
      <circle cx="${aldebaranPos[0]}" cy="${aldebaranPos[1]}" r="16" fill="#e08a3c" opacity="0.12"/>
      <circle cx="${aldebaranPos[0]}" cy="${aldebaranPos[1]}" r="9" fill="#e08a3c" opacity="0.22"/>
      <circle cx="${aldebaranPos[0]}" cy="${aldebaranPos[1]}" r="3.4" fill="#f4b16a"${aldebaranCoreCls}></circle>
    `;

    svg.innerHTML = bg + trail + constellationLines + pleiadesStars + hyadesStars + aldebaran;

    if (reduceMotion || !canHover) return;

    const heroEl = svg.closest(".hero") as HTMLElement | null;
    if (!heroEl) return;

    const onMouseMove = (e: MouseEvent) => {
      const r = heroEl.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      heroEl.style.setProperty("--mx", mx + "%");
      heroEl.style.setProperty("--my", my + "%");
      const dx = (mx - 50) / 50;
      const dy = (my - 50) / 50;
      svg.style.transform = `translate(${dx * -10}px, ${dy * -10}px)`;
    };
    heroEl.addEventListener("mousemove", onMouseMove);
    return () => heroEl.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <svg ref={svgRef} id="starfield" preserveAspectRatio="xMidYMid slice" />;
}
