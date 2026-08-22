import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";
import Course from "@/components/Course";
import Waypoint from "@/components/Waypoint";
import Horizon from "@/components/Horizon";
import { ServiceList, ServiceItem } from "@/components/ServiceList";
import { AudienceGrid, AudienceCard } from "@/components/AudienceGrid";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tc = await getTranslations("common");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t.rich("hero.title", { br: () => <br /> })}
        lede={t("hero.lede")}
      />

      <main>
        <Course>
          <Waypoint id="story" className="bg-a">
            <div className="wrap-inner">
              <div className="eyebrow">{t("story.eyebrow")}</div>
              <h2>{t("story.heading")}</h2>
              <p>{t("story.p1")}</p>
              <p>{t.rich("story.p2", { em: (chunks) => <em>{chunks}</em> })}</p>
              <div className="pull">
                <p>{t("story.pullQuote")}</p>
              </div>
              <p>{t("story.p3")}</p>
            </div>
          </Waypoint>

          <Waypoint id="values" className="bg-b">
            <div className="wrap-inner">
              <div className="eyebrow">{t("values.eyebrow")}</div>
              <h2>{t("values.heading")}</h2>
              <p className="lead">{t("values.lead")}</p>
            </div>
            <div className="wrap">
              <AudienceGrid cols3>
                <AudienceCard eyebrow={t("values.card1.eyebrow")} title={t("values.card1.title")}>
                  {t("values.card1.body")}
                </AudienceCard>
                <AudienceCard eyebrow={t("values.card2.eyebrow")} title={t("values.card2.title")}>
                  {t("values.card2.body")}
                </AudienceCard>
                <AudienceCard eyebrow={t("values.card3.eyebrow")} title={t("values.card3.title")}>
                  {t("values.card3.body")}
                </AudienceCard>
              </AudienceGrid>
            </div>
          </Waypoint>

          <Waypoint id="approach" className="bg-c">
            <div className="wrap-inner">
              <div className="eyebrow">{t("approach.eyebrow")}</div>
              <h2>{t("approach.heading")}</h2>
              <p className="lead">{t("approach.lead")}</p>
              <ServiceList>
                <ServiceItem mark={t("approach.item1.mark")} title={t("approach.item1.title")}>
                  {t("approach.item1.body")}
                </ServiceItem>
                <ServiceItem mark={t("approach.item2.mark")} title={t("approach.item2.title")}>
                  {t("approach.item2.body")}
                </ServiceItem>
                <ServiceItem mark={t("approach.item3.mark")} title={t("approach.item3.title")}>
                  {t("approach.item3.body")}
                </ServiceItem>
              </ServiceList>
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
                <Link className="btn btn-ghost" href="/">
                  {tc("backToHome")}
                </Link>
              </div>
            </div>
          </Waypoint>
        </Course>
      </main>
    </>
  );
}
