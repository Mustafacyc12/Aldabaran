import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Horizon from "@/components/Horizon";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Al Dabaran Trading F.Z.E.",
};

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" short />

      <main className="bg-a">
        <div className="legal-wrap">
          <span className="legal-updated">Last updated: August 2026</span>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to be bound by
            these Terms of Use. If you do not agree with any part of these
            terms, please do not use this website.
          </p>

          <h2>2. About This Website</h2>
          <p>
            This website is operated by Al Dabaran Trading F.Z.E. and is
            provided to share information about our services connecting
            international manufacturers and brands with distributors,
            retailers, and consumers across the Middle East.
          </p>

          <h2>3. Use of the Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a
            way that does not infringe the rights of, or restrict or inhibit
            the use and enjoyment of, this website by any third party.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            design, is the property of Al Dabaran Trading F.Z.E. unless
            otherwise noted, and may not be reproduced, distributed, or used
            without our prior written consent.
          </p>

          <h2>5. No Professional Advice</h2>
          <p>
            Content on this website is provided for general informational
            purposes only and does not constitute legal, financial, or
            regulatory advice. You should seek independent professional
            advice before making decisions related to market entry,
            distribution, or regulatory compliance.
          </p>

          <h2>6. Enquiries and Communications</h2>
          <p>
            Submitting an enquiry through our contact form does not create
            any contractual obligation between you and Al Dabaran Trading
            F.Z.E. Any business relationship will only be established through
            a separate, signed agreement.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Al Dabaran Trading F.Z.E.
            shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of this website or
            reliance on its content.
          </p>

          <h2>8. External Links</h2>
          <p>
            This website may contain links to third-party websites. We are
            not responsible for the content or practices of any linked
            websites.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these Terms of Use from time to time. Continued use
            of the website after changes are posted constitutes acceptance of
            the revised terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of the United Arab
            Emirates, without regard to conflict of law principles.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            Questions about these Terms of Use can be sent to{" "}
            <a href="mailto:info@aldabaran.co">info@aldabaran.co</a>{" "}
            or via our <a href="/contact">contact page</a>.
          </p>
        </div>

        <Horizon />
      </main>
    </>
  );
}
