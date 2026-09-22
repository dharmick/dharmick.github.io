import type { Metadata } from "next";
import localFont from "next/font/local";
import { Gochi_Hand } from "next/font/google";
import { site } from "@/content/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

// Champ Black is the licensed display face for headers and titles.
// Satoshi carries body text. Gochi Hand stands in for the licensed handwriting face.
const display = localFont({
  src: "../fonts/Champ-Black.woff2",
  weight: "900",
  style: "normal",
  variable: "--font-display-face",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "../fonts/satoshi-medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const script = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_IN",
    url: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
