"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  en: "EN",
  ar: "AR",
  es: "ES",
};

// Flags are a proxy for language, not a claim about where it's spoken --
// GB/AE/ES are just the most-recognized convention for EN/AR/ES in language
// switchers. AE (rather than the more generic SA) since Al Dabaran itself
// is UAE-based.
const FLAGS: Record<string, string> = {
  en: "gb",
  ar: "ae",
  es: "es",
};

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {routing.locales.map((code, i) => (
        <span key={code} className="lang-toggle-item">
          {i > 0 && <span className="lang-toggle-sep">·</span>}
          <button
            type="button"
            className={`lang-toggle-btn${code === locale ? " active" : ""}`}
            aria-current={code === locale ? "true" : undefined}
            onClick={() => router.replace(pathname, { locale: code })}
          >
            <span className={`fi fi-${FLAGS[code]} lang-toggle-flag`} aria-hidden="true" />
            {LABELS[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
