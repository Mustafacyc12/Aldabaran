"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");
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
          <label htmlFor="name">{t("nameLabel")}</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="field">
          <label htmlFor="company">{t("companyLabel")}</label>
          <input type="text" id="company" name="company" required />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">{t("emailLabel")}</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">{t("phoneLabel")}</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="country">{t("countryLabel")}</label>
          <input type="text" id="country" name="country" placeholder={t("countryPlaceholder")} />
        </div>
        <div className="field">
          <label htmlFor="product">{t("productLabel")}</label>
          <input type="text" id="product" name="product" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">{t("messageLabel")}</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder={t("messagePlaceholder")}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {t("submit")}
      </button>
      <p className="form-note">{t("note")}</p>
      <div className={`form-success${showSuccess ? " show" : ""}`}>{t("success")}</div>
    </form>
  );
}
