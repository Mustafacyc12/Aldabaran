"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) || "";
    const company = (data.get("company") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const country = (data.get("country") as string) || "";
    const product = (data.get("product") as string) || "";
    const message = (data.get("message") as string) || "";

    const subject = encodeURIComponent(
      `New enquiry from ${name}${company ? " — " + company : ""}`
    );
    const bodyLines = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Country: ${country}`,
      `Product / Industry: ${product}`,
      "",
      "Message:",
      message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    setShowSuccess(true);
    window.location.href = `mailto:info@aldabaran.co?subject=${subject}&body=${body}`;
  }

  return (
    <form id="leadForm" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="field">
          <label htmlFor="company">Company *</label>
          <input type="text" id="company" name="company" required />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Work Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" placeholder="Where you're based" />
        </div>
        <div className="field">
          <label htmlFor="product">Product / Industry</label>
          <input type="text" id="product" name="product" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your product and what you're looking for in the Middle East market."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
      <p className="form-note">
        This opens your email client with your message pre-filled to
        info@aldabaran.co.
      </p>
      <div className={`form-success${showSuccess ? " show" : ""}`}>
        Thanks — your email client should now be open with your message ready
        to send. We typically respond within 1–2 business days.
      </div>
    </form>
  );
}
