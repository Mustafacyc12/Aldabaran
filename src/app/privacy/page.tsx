import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Horizon from "@/components/Horizon";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Al Dabaran Trading F.Z.E.",
};

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" short />

      <main className="bg-a">
        <div className="legal-wrap">
          <span className="legal-updated">Last updated: August 2026</span>

          <h2>1. Introduction</h2>
          <p>
            Al Dabaran Trading F.Z.E. (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) respects your privacy and is committed to
            protecting the personal information you share with us. This
            Privacy Policy explains what information we collect through this
            website, how we use it, and the choices you have.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when
            you submit an enquiry through our contact form. This may include
            your name, company name, email address, phone number, country,
            and any details you share about your product or enquiry.
          </p>
          <p>
            We do not knowingly collect sensitive personal information, and
            we do not use cookies or analytics tools that track you across
            other websites.
          </p>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries and communicate with you about our services</li>
            <li>To evaluate potential partnership or distribution opportunities</li>
            <li>To improve our website and the way we communicate with prospective partners</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties.</p>

          <h2>4. How We Share Information</h2>
          <p>
            We may share your information with service providers who help us
            operate our business (such as email providers), and where
            required by law or to protect our legal rights. We do not share
            your information with third parties for their own marketing
            purposes.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain enquiry information for as long as reasonably necessary
            to respond to you and to maintain records of our business
            relationships, after which it is deleted or anonymized.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to request
            access to, correction of, or deletion of your personal
            information. To make such a request, please contact us using the
            details below.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to
            protect your information. However, no method of electronic
            transmission or storage is completely secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how we handle
            your information, please contact us at{" "}
            <a href="mailto:info@aldabarantrading.com">info@aldabarantrading.com</a>{" "}
            or via our <a href="/contact">contact page</a>.
          </p>
        </div>

        <Horizon />
      </main>
    </>
  );
}
