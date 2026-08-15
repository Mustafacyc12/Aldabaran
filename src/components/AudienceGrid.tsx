import type { ReactNode } from "react";

export function AudienceGrid({
  cols3 = false,
  children,
}: {
  cols3?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`audience-grid${cols3 ? " cols-3" : ""}`}>{children}</div>
  );
}

export function AudienceCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="audience-card reveal-child">
      <div className="eyebrow">{eyebrow}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
