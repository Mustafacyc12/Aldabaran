import type { Metadata } from "next";
import { Fraunces, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AmbientStars from "@/components/AmbientStars";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Al Dabaran Trading F.Z.E. — Middle East Market Entry & Distribution",
    template: "%s — Al Dabaran Trading F.Z.E.",
  },
  description:
    "Al Dabaran Trading F.Z.E. connects international manufacturers and brands with distributors, retailers, and consumers across the Middle East.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable}`}
    >
      <body>
        <div id="pageWrap" style={{ position: "relative" }}>
          <AmbientStars />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
