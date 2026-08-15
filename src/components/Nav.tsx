"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import LogoMark from "@/components/LogoMark";

const LINKS = [
  { href: "/", label: "Home", hideOnMobile: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact →" },
];

export default function Nav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} id="nav">
      <Link href="/" className="brandmark">
        <LogoMark size={24} />
        Al&nbsp;Dabaran
      </Link>
      <div className="nav-links">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`navlink${pathname === link.href ? " active" : ""}${
              link.hideOnMobile ? " navlink-hide-mobile" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
