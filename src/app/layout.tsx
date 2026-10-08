import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { jsonLd } from "@/content/jsonld";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-ink">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "8c3521e2ee39435cb1e09e599e7baedd"}'
        />
      </body>
    </html>
  );
}
