import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { brand } from "@/lib/content";
import "./globals.css";

const publicSans = localFont({
  src: "../fonts/public-sans-latin.woff2",
  weight: "100 900",
  variable: "--font-public-sans",
  display: "swap",
});

const sourceSerif = localFont({
  src: "../fonts/source-serif-4-latin.woff2",
  weight: "200 900",
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: brand,
    template: `%s · ${brand}`,
  },
  description:
    "1-on-1 and small-group STEM tutoring for Grade 8–12 — Maths, Physical Sciences, Life Sciences and CS, built around the exam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
