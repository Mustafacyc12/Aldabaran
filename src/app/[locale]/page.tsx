import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Course from "@/components/Course";
import Waypoint from "@/components/Waypoint";
import Horizon from "@/components/Horizon";
import { ServiceList, ServiceItem } from "@/components/ServiceList";
import { AudienceGrid, AudienceCard } from "@/components/AudienceGrid";
import { Link } from "@/i18n/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tc = await getTranslations("common");
  const tm = await getTranslations("metadata");
  const isRtl = locale === "ar";

  return (
    <>
      <Hero />

      <main>
        <Course>
          <Waypoint id="origin" className="bg-a">
            <div className="wrap-inner">
              <div className="eyebrow">{t("origin.eyebrow")}</div>
              <h2>{t("origin.heading")}</h2>
              <p>{t("origin.p1")}</p>
              <p>{t.rich("origin.p2", { em: (chunks) => <em>{chunks}</em> })}</p>
              <div className="pull">
                <p>{t("origin.pullQuote")}</p>
              </div>
              <p>{t("origin.p3")}</p>
              <p>
                {t.rich("origin.p4", {
                  link: (chunks) => (
                    <Link
                      href="/about"
                      style={{ color: "var(--amber)", textDecoration: "underline" }}
                    >
                      {chunks} {isRtl ? "←" : "→"}
                    </Link>
                  ),
                })}
              </p>
            </div>
          </Waypoint>

          <Waypoint id="services" className="bg-b">
            <div className="wrap-inner">
              <div className="eyebrow">{t("services.eyebrow")}</div>
              <h2>{t("services.heading")}</h2>
              <p className="lead">{t("services.lead")}</p>
              <ServiceList>
                <ServiceItem mark={t("services.item1.mark")} title={t("services.item1.title")}>
                  {t("services.item1.body")}
                </ServiceItem>
                <ServiceItem mark={t("services.item2.mark")} title={t("services.item2.title")}>
                  {t("services.item2.body")}
                </ServiceItem>
                <ServiceItem mark={t("services.item3.mark")} title={t("services.item3.title")}>
                  {t("services.item3.body")}
                </ServiceItem>
              </ServiceList>
            </div>
          </Waypoint>

          <Waypoint id="audience" className="bg-c">
            <div className="wrap-inner">
              <div className="eyebrow">{t("audience.eyebrow")}</div>
              <h2>{t("audience.heading")}</h2>
              <p className="lead">{t("audience.lead")}</p>
              <AudienceGrid>
                <AudienceCard eyebrow={t("audience.card1.eyebrow")} title={t("audience.card1.title")}>
                  {t("audience.card1.body")}
                </AudienceCard>
                <AudienceCard eyebrow={t("audience.card2.eyebrow")} title={t("audience.card2.title")}>
                  {t("audience.card2.body")}
                </AudienceCard>
              </AudienceGrid>
            </div>
          </Waypoint>

          <Waypoint id="cta" className="cta-section">
            <div className="contact-star"></div>
            <Horizon />
            <div className="wrap-inner">
              <div className="eyebrow">{tc("ctaEyebrow")}</div>
              <h2>{tc("ctaHeading")}</h2>
              <p className="lede">{tc("ctaLede")}</p>
              <div className="contact-row">
                <Link className="btn btn-primary" href="/contact">
                  {tc("ctaButton")}
                </Link>
                <a className="btn btn-ghost" href="#hero">
                  {tc("backToTop")} ↑
                </a>
              </div>
              <div className="contact-meta">
                <div>
                  <div className="eyebrow">{tc("companyLabel")}</div>
                  <p>{tm("companyName")}</p>
                </div>
                <div>
                  <div className="eyebrow">{tc("regionLabel")}</div>
                  <p>{tc("region")}</p>
                </div>
                <div>
                  <div className="eyebrow">{tc("focusLabel")}</div>
                  <p>{tc("focus")}</p>
                </div>
              </div>
            </div>
          </Waypoint>
        </Course>
      </main>
    </>
  );
}
