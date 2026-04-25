import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { stockGroups } from "@/lib/catalog";
import {
  getLocationJsonLd,
  primaryLocation,
  storeLocations
} from "@/lib/locations";
import { businessKeywords, siteUrl } from "@/lib/site";

const businessPhone = primaryLocation.phone;
const businessWhatsapp = businessPhone.replace(/\D/g, "");

export const metadata: Metadata = {
  title: "Toko Listrik Palembang | Natasa Grosir Murah",
  description:
    "Cari alat listrik murah di Palembang? Natasa siap grosir, ecer, dan pengiriman cepat untuk proyek rumah, toko, hingga industri.",
  keywords: businessKeywords,
  alternates: {
    canonical: "/"
  }
};

const localBusinessJsonLd = {
  ...getLocationJsonLd(primaryLocation),
  "@id": `${siteUrl}/#localbusiness`,
  url: siteUrl,
  geo: {
    "@type": "GeoCoordinates",
    latitude: -2.976073,
    longitude: 104.775431
  },
  areaServed: [
    {
      "@type": "City",
      name: "Palembang"
    },
    {
      "@type": "State",
      name: "Sumatera Selatan"
    }
  ],
  sameAs: [primaryLocation.mapsUrl],
  knowsAbout: businessKeywords,
  makesOffer: stockGroups.map((group) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: group.name,
      description: group.description
    },
    areaServed: "Palembang dan Sumatera Selatan"
  }))
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Toko Listrik Natasa">
          <span>Natasa</span>
          <small>Toko Listrik Palembang</small>
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="#stok">Kebutuhan</a>
          <a href="#lokasi">Lokasi</a>
          <a href="/toko-listrik-palembang">Toko Palembang</a>
          <a className="nav-cta" href={`tel:${businessPhone}`}>
            Hubungi
          </a>
        </nav>
      </header>

      <main>
        <article className="hero">
          <div className="hero__content">
            <p className="eyebrow">Distributor komponen listrik Sumatera Selatan</p>
            <h1>Toko Listrik Natasa - Pusat Grosir Alat Listrik Palembang</h1>
            <p>
              Pusat alat listrik di Jalan Mesjid Lama untuk kebutuhan rumah,
              toko, teknisi, kontraktor, dan pengadaan proyek di Palembang.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href={`https://wa.me/${businessWhatsapp}`}>
                Tanya Stok
              </a>
              <a className="button button--ghost" href={primaryLocation.mapsUrl}>
                Buka Maps
              </a>
            </div>
          </div>
          <aside className="hero__aside hero__aside--quiet" aria-label="Informasi singkat toko">
            <p className="eyebrow">Toko terverifikasi</p>
            <h2>{primaryLocation.name}</h2>
            <p>{primaryLocation.shortAddress}</p>
            <p>
              Rating Google {primaryLocation.googleRating?.toFixed(1)} dari{" "}
              {primaryLocation.googleReviewCount} ulasan.
            </p>
            <p>Senin-Sabtu, 08.00-{primaryLocation.closeTime} WIB</p>
          </aside>
        </article>

        <section id="stok" className="section section--compact" aria-labelledby="stok-title">
          <div className="section__heading">
            <p className="eyebrow">Toko alat listrik terdekat dan terlengkap</p>
            <h2 id="stok-title">Stok Komponen Listrik yang Sering Dicari</h2>
            <p>
              Kabel, MCB, panel, lampu LED, saklar, stop kontak, dan kebutuhan
              instalasi tersedia untuk ecer, grosir, dan proyek.
            </p>
          </div>
          <div className="compact-grid">
            {stockGroups.map((group) => (
              <article className="compact-item" key={group.name}>
                <h3>{group.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="lokasi" className="section section--split" aria-labelledby="lokasi-title">
          <article>
            <p className="eyebrow">Local SEO Palembang</p>
            <h2 id="lokasi-title">Toko Listrik Palembang di Jalan Mesjid Lama</h2>
            <p>
              Toko Listrik Natasa melayani pembelian alat listrik untuk rumah,
              toko, teknisi, reseller, dan proyek dari kawasan 16 Ilir, Ilir
              Timur I, Palembang.
            </p>
            <div className="inline-actions">
              <a className="button button--primary" href={`tel:${businessPhone}`}>
                Telepon Toko
              </a>
              <a className="button button--ghost" href="/toko-listrik-palembang">
                Lihat Semua Lokasi
              </a>
            </div>
          </article>
          <aside className="contact-panel" aria-label="Jaringan toko listrik Palembang">
            <h3>Jaringan Toko Listrik</h3>
            <div className="mini-location-list">
              {storeLocations.slice(0, 3).map((location) => (
                <a href={`/lokasi/${location.slug}`} key={location.slug}>
                  <span>{location.name}</span>
                  <small>{location.area}</small>
                </a>
              ))}
            </div>
            <a className="text-link" href="/toko-listrik-palembang">
              Toko listrik Palembang lainnya
            </a>
          </aside>
        </section>

        <section className="section section--compact" aria-labelledby="google-title">
          <div className="seo-strip">
            <div>
              <p className="eyebrow">Google Business Profile</p>
              <h2 id="google-title">Profil Google Toko Listrik Natasa</h2>
              <p>{primaryLocation.address}</p>
            </div>
            <a className="button button--primary" href={primaryLocation.mapsUrl}>
              Buka Profil Google
            </a>
          </div>
        </section>

        <section className="sr-content" aria-labelledby="seo-content-title">
          <h2 id="seo-content-title">Toko Listrik Palembang dan Grosir Alat Listrik Murah</h2>
          <p>
            Toko Listrik Natasa adalah toko listrik Palembang dan distributor
            komponen listrik Sumatera Selatan untuk kebutuhan kabel listrik,
            MCB, panel, lampu LED, saklar, stop kontak, serta perlengkapan
            instalasi rumah, toko, dan proyek.
          </p>
          <ul>
            {storeLocations.map((location) => (
              <li key={location.slug}>
                <h3>
                  <a href={`/lokasi/${location.slug}`}>{location.name}</a>
                </h3>
                <p>{location.shortAddress}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © 2026 Toko Listrik Natasa. Pusat alat listrik Palembang dan distributor
          komponen listrik Sumatera Selatan.
        </p>
      </footer>
    </>
  );
}
