import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import Horizon from "@/components/Horizon";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function Terms({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("terms");
  const tc = await getTranslations("common");

  return (
    <>
      <PageHero eyebrow={tc("legalEyebrow")} title={t("heading")} short />

      <main className="bg-a">
        <div className="legal-wrap">
          <span className="legal-updated">{t("lastUpdated")}</span>

          <h2>{t("s1.heading")}</h2>
          <p>{t("s1.body")}</p>

          <h2>{t("s2.heading")}</h2>
          <p>{t("s2.body")}</p>

          <h2>{t("s3.heading")}</h2>
          <p>{t("s3.body")}</p>

          <h2>{t("s4.heading")}</h2>
          <p>{t("s4.body")}</p>

          <h2>{t("s5.heading")}</h2>
          <p>{t("s5.body")}</p>

          <h2>{t("s6.heading")}</h2>
          <p>{t("s6.body")}</p>

          <h2>{t("s7.heading")}</h2>
          <p>{t("s7.body")}</p>

          <h2>{t("s8.heading")}</h2>
          <p>{t("s8.body")}</p>

          <h2>{t("s9.heading")}</h2>
          <p>{t("s9.body")}</p>

          <h2>{t("s10.heading")}</h2>
          <p>{t("s10.body")}</p>

          <h2>{t("s11.heading")}</h2>
          <p>
            {t.rich("s11.body", {
              email: (chunks) => <a href="mailto:info@aldabaran.co">{chunks}</a>,
              link: (chunks) => <Link href="/contact">{chunks}</Link>,
            })}
          </p>
        </div>

        <Horizon />
      </main>
    </>
  );
}
