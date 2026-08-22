import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import Horizon from "@/components/Horizon";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tc = await getTranslations("common");

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lede={t("hero.lede")} />

      <main className="bg-a" style={{ position: "relative", overflow: "hidden" }}>
        <div className="contact-layout">
          <div>
            <div className="eyebrow">{t("form.eyebrow")}</div>
            <h2 style={{ fontSize: "clamp(24px,3vw,32px)", margin: "12px 0 26px" }}>
              {t("form.heading")}
            </h2>
            <ContactForm />
          </div>

          <div>
            <div className="info-card">
              <div className="info-row">
                <div className="eyebrow">{t("info.emailLabel")}</div>
                <p>
                  <a href="mailto:info@aldabaran.co">info@aldabaran.co</a>
                </p>
              </div>
              <div className="info-row">
                <div className="eyebrow">{t("info.regionLabel")}</div>
                <p>{tc("region")}</p>
              </div>
              <div className="info-row">
                <div className="eyebrow">{t("info.focusLabel")}</div>
                <p>{tc("focus")}</p>
              </div>
              <div className="info-row">
                <div className="eyebrow">{t("info.responseTimeLabel")}</div>
                <p>{t("info.responseTime")}</p>
              </div>
            </div>
          </div>
        </div>

        <Horizon />
      </main>
    </>
  );
}
