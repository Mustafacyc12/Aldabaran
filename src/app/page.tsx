import Hero from "@/components/Hero";
import Course from "@/components/Course";
import Waypoint from "@/components/Waypoint";
import Horizon from "@/components/Horizon";
import { ServiceList, ServiceItem } from "@/components/ServiceList";
import { AudienceGrid, AudienceCard } from "@/components/AudienceGrid";

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        <Course>
          <Waypoint id="origin" className="bg-a">
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
                confidence and arrive exactly where they intend to.
              </p>
              <p>
                Like the star that shares our name, we don&rsquo;t chase the
                spotlight. We simply stay reliable, stay visible, and help
                others find their way.{" "}
                <a
                  href="/about"
                  style={{ color: "var(--amber)", textDecoration: "underline" }}
                >
                  Read more about us →
                </a>
              </p>
            </div>
          </Waypoint>

          <Waypoint id="services" className="bg-b">
            <div className="wrap-inner">
              <div className="eyebrow">What We Do</div>
              <h2>From first introduction to lasting reach</h2>
              <p className="lead">
                We handle the on-the-ground work of bringing a product to
                market — navigating local requirements, building distribution
                channels, and turning a first introduction into lasting
                reach.
              </p>
              <ServiceList>
                <ServiceItem mark="BEARING 01" title="Market Entry & Regulatory Navigation">
                  Making sense of local requirements, customs, and
                  expectations so your entry into the region is smooth and
                  compliant from day one.
                </ServiceItem>
                <ServiceItem mark="BEARING 02" title="Distribution Channel Development">
                  Building the on-the-ground network of distributors and
                  retailers your product needs to reach shelves and customers
                  across the region.
                </ServiceItem>
                <ServiceItem mark="BEARING 03" title="Local Representation & Partnership">
                  Acting as your steady, reliable local partner — turning a
                  first introduction into a lasting presence in the Middle
                  East market.
                </ServiceItem>
              </ServiceList>
            </div>
          </Waypoint>

          <Waypoint id="audience" className="bg-c">
            <div className="wrap-inner">
              <div className="eyebrow">Who We Serve</div>
              <h2>Every course starts somewhere</h2>
              <p className="lead">
                Whether you&rsquo;re an established brand entering a new
                region or a growing manufacturer looking for your first
                foothold in the Middle East, we act as your local partner.
              </p>
              <AudienceGrid>
                <AudienceCard eyebrow="Established Brands" title="Entering a new region">
                  You&rsquo;ve proven your product elsewhere. We help you
                  localize the approach and build the channels needed to
                  enter the Middle East with confidence.
                </AudienceCard>
                <AudienceCard eyebrow="Growing Manufacturers" title="Seeking a first foothold">
                  You&rsquo;re ready to expand beyond your home market. We
                  provide the local partnership and market knowledge to
                  secure your first foothold in the region.
                </AudienceCard>
              </AudienceGrid>
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
                <a className="btn btn-ghost" href="#hero">
                  Back to top ↑
                </a>
              </div>
              <div className="contact-meta">
                <div>
                  <div className="eyebrow">Company</div>
                  <p>Al Dabaran Trading F.Z.E.</p>
                </div>
                <div>
                  <div className="eyebrow">Region</div>
                  <p>Middle East · UAE Free Zone</p>
                </div>
                <div>
                  <div className="eyebrow">Focus</div>
                  <p>Market Entry &amp; Distribution</p>
                </div>
              </div>
            </div>
          </Waypoint>
        </Course>
      </main>
    </>
  );
}
