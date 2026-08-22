"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  en: "EN",
  ar: "AR",
  es: "ES",
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
            {LABELS[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
