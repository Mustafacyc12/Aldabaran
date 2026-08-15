import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Course from "@/components/Course";
import Waypoint from "@/components/Waypoint";
import Horizon from "@/components/Horizon";
import { ServiceList, ServiceItem } from "@/components/ServiceList";
import { AudienceGrid, AudienceCard } from "@/components/AudienceGrid";

export const metadata: Metadata = {
  title: "About",
  description:
    "Al Dabaran Trading F.Z.E. is a Middle East market-entry and distribution partner, built on the idea that brands need a fixed point of reference when the path ahead is unclear.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Al Dabaran Trading F.Z.E."
        title={
          <>
            Steady, reliable, always
            <br />
            finding the way.
          </>
        }
        lede="We're a Middle East market-entry and distribution partner, built on a simple idea: brands need a fixed point of reference when the path ahead is unclear."
      />

      <main>
        <Course>
          <Waypoint id="story" className="bg-a">
            <div className="wrap-inner">
              <div className="eyebrow">Our Name</div>
              <h2>Al Dabaran — &ldquo;the follower&rdquo;</h2>
              <p>
                Our name is drawn from the star Al Dabaran — known in the West
                as Aldebaran — a fiery orange star marking the eye of Taurus,
                the Bull. For centuries it served as a guiding light for those
                navigating open water with no land in sight.
              </p>
              <p>
                Before satellites and GPS, sailors crossing the sea looked to
                the stars to find their way home, and among the brightest
                guides in the night sky was Al Dabaran. Its Arabic name,{" "}
                <em>al-dabarān</em>, means &ldquo;the follower&rdquo; — so
                called because it rises just after the Pleiades, trailing
                them across the sky like a faithful companion.
              </p>
              <div className="pull">
                <p>
                  &ldquo;To the great Arab navigators of the 15th century,
                  among them the legendary Ahmad ibn Mājid, Al Dabaran was
                  more than a point of light — it was a fixed reference in an
                  uncertain sea, a way to hold a true course when the horizon
                  offered no landmarks at all.&rdquo;
                </p>
              </div>
              <p>
                When the path can be unclear — new regulations, new customs,
                new expectations — Al Dabaran Trading F.Z.E. acts as a steady
                point of reference, helping our partners navigate with
                confidence and arrive exactly where they intend to. Like the
                star that shares our name, we don&rsquo;t chase the spotlight.
                We simply stay reliable, stay visible, and help others find
                their way.
              </p>
            </div>
          </Waypoint>

          <Waypoint id="values" className="bg-b">
            <div className="wrap-inner">
              <div className="eyebrow">Our Values</div>
              <h2>What guides how we work</h2>
              <p className="lead">
                Three principles sit behind every partnership we take on —
                the same qualities that made a fixed star useful to sailors
                for centuries.
              </p>
            </div>
            <div className="wrap">
              <AudienceGrid cols3>
                <AudienceCard eyebrow="Reliability" title="Steady by design">
                  We do what we say, when we say it. Partners can plan around
                  us with confidence.
                </AudienceCard>
                <AudienceCard eyebrow="Local Expertise" title="Ground-level knowledge">
                  Deep, on-the-ground understanding of regulations, customs,
                  and distribution networks across the region.
                </AudienceCard>
                <AudienceCard eyebrow="Long-Term Partnership" title="Built to last">
                  We&rsquo;re not here for a single shipment. We build the
                  channels that keep your products moving for years.
                </AudienceCard>
              </AudienceGrid>
            </div>
          </Waypoint>

          <Waypoint id="approach" className="bg-c">
            <div className="wrap-inner">
              <div className="eyebrow">How We Work</div>
              <h2>Three steps, one course</h2>
              <p className="lead">
                Every partnership follows the same disciplined approach —
                understand, chart the path, then navigate it together.
              </p>
              <ServiceList>
                <ServiceItem mark="STEP 01" title="Understand">
                  We learn your product, your goals, and where it fits within
                  Middle East demand before recommending a single step.
                </ServiceItem>
                <ServiceItem mark="STEP 02" title="Chart the Path">
                  We map the regulatory, distribution, and partnership route
                  specific to your product category and target markets.
                </ServiceItem>
                <ServiceItem mark="STEP 03" title="Navigate Together">
                  We represent you locally and manage the relationships that
                  keep your products reaching customers, season after season.
                </ServiceItem>
              </ServiceList>
            </div>
          </Waypoint>

          <Waypoint id="cta" className="cta-section">
            <div className="contact-star"></div>
            <Horizon />
            <div className="wrap-inner">
              <div className="eyebrow">Get In Touch</div>
              <h2>Ready to find your way into the Middle East?</h2>
              <p className="lede">Contact us and let&rsquo;s chart the course together.</p>
              <div className="contact-row">
                <a className="btn btn-primary" href="/contact">
                  Get In Touch
                </a>
                <a className="btn btn-ghost" href="/">
                  Back to Home
                </a>
              </div>
            </div>
          </Waypoint>
        </Course>
      </main>
    </>
  );
}
