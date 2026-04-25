import type { Metadata } from "next";
import type { ReactNode } from "react";
import { globalCss } from "@/app/inline-css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Toko Listrik Palembang | Natasa Grosir Murah",
    template: "%s | Toko Listrik Natasa"
  },
  description:
    "Cari alat listrik murah di Palembang? Natasa siap grosir, ecer, dan pengiriman cepat untuk proyek rumah, toko, hingga industri.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Toko Listrik Natasa",
    title: "Toko Listrik Palembang | Natasa Grosir Murah",
    description:
      "Pusat grosir alat listrik Palembang untuk kabel, MCB, lampu LED, stop kontak, dan komponen listrik proyek."
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
