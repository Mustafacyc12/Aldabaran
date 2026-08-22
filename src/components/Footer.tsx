import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} {t("copyright")}</p>
      <div className="foot-links">
        <Link href="/privacy">{t("privacy")}</Link>
        <Link href="/terms">{t("terms")}</Link>
      </div>
      <p>{t("tagline")}</p>
    </footer>
  );
}
