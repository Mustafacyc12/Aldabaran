"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useRef } from "react";
import LogoMark from "@/components/LogoMark";
import LanguageToggle from "@/components/LanguageToggle";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);

  const LINKS = [
    { href: "/", label: t("home"), hideOnMobile: true },
    { href: "/about", label: t("about") },
    { href: "/contact", label: `${t("contact")} ${isRtl ? "←" : "→"}` },
  ];

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
        <LanguageToggle />
      </div>
    </nav>
  );
}
