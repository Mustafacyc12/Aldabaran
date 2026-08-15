import type { ReactNode } from "react";

export function ServiceList({ children }: { children: ReactNode }) {
  return <div className="service-list">{children}</div>;
}

export function ServiceItem({
  mark,
  title,
  children,
}: {
  mark: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="service-item reveal-child">
      <div className="service-mark">{mark}</div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
