import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Horizon from "@/components/Horizon";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your product and where you'd like it to go. We'll help you find the way into the Middle East market.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's chart the course together."
        lede="Tell us about your product and where you'd like it to go. We'll help you find the way into the Middle East market."
      />

      <main className="bg-a" style={{ position: "relative", overflow: "hidden" }}>
        <div className="contact-layout">
          <div>
            <div className="eyebrow">Send An Enquiry</div>
            <h2 style={{ fontSize: "clamp(24px,3vw,32px)", margin: "12px 0 26px" }}>
              Tell us about your product
            </h2>
            <ContactForm />
          </div>

          <div>
            <div className="info-card">
              <div className="info-row">
                <div className="eyebrow">Email</div>
                <p>
                  <a href="mailto:info@aldabarantrading.com">info@aldabarantrading.com</a>
                </p>
              </div>
              <div className="info-row">
                <div className="eyebrow">Region</div>
                <p>Middle East · UAE Free Zone</p>
              </div>
              <div className="info-row">
                <div className="eyebrow">Focus</div>
                <p>Market Entry &amp; Distribution</p>
              </div>
              <div className="info-row">
                <div className="eyebrow">Response Time</div>
                <p>We typically respond within 1–2 business days.</p>
              </div>
            </div>
          </div>
        </div>

        <Horizon />
      </main>
    </>
  );
}
