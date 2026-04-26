import type { Metadata } from "next";
import type { ReactNode } from "react";
import { globalCss } from "@/app/inline-css";
import { SEO_TITLE } from "@/lib/seo";
import { businessKeywords, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SEO_TITLE,
  description:
    "Portal toko listrik Palembang untuk menemukan lokasi, kontak, dan ketersediaan alat listrik dari Natasa dan jaringan toko sekitar.",
  keywords: businessKeywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Toko Listrik Natasa",
    title: SEO_TITLE,
    description:
      "Temukan toko listrik terdekat di Palembang dengan informasi alamat, produk, dan jalur cepat ke Google Maps."
  },
  twitter: {
    card: "summary",
    title: SEO_TITLE,
    description:
      "Temukan toko listrik terdekat di Palembang dengan informasi alamat, produk, dan jalur cepat ke Google Maps."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
