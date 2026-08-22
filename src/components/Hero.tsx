import { useTranslations } from "next-intl";
import Starfield from "@/components/Starfield";
import AldebaranStarLayer from "@/components/AldebaranStarLayer";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <header className="hero" id="hero">
      <Starfield />
      <AldebaranStarLayer />
      <div className="grain"></div>
      <div className="hero-content">
        <div className="eyebrow">{t("eyebrow")}</div>
        <h1>
          {t.rich("title", {
            br: () => <br />,
            em: (chunks) => <em>{chunks}</em>,
          })}
        </h1>
        <p className="lede">{t("lede")}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/contact">
            {t("ctaPrimary")}
          </Link>
          <a className="btn btn-ghost" href="#origin">
            {t("ctaSecondary")} ↓
          </a>
        </div>
      </div>
      <div className="coords">
        <span>α TAURI — ALDEBARAN</span>
        <span>RA 04h 35m 55s · DEC +16° 30&prime; 33&Prime;</span>
      </div>
      <div className="scroll-cue">HOLD COURSE</div>
    </header>
  );
}
