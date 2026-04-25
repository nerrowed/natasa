import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { storeLocations } from "@/lib/locations";
import { businessKeywords, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Toko Listrik Palembang Terdekat dan Terlengkap",
  description:
    "Cari toko listrik Palembang? Temukan lokasi toko alat listrik di Mesjid Lama, Pasar 16, Ilir Timur I, dan Sumatera Selatan.",
  keywords: [
    ...businessKeywords,
    "toko listrik Mesjid Lama",
    "toko listrik Pasar 16",
    "toko listrik 16 Ilir",
    "toko listrik Ilir Timur I"
  ],
  alternates: {
    canonical: "/toko-listrik-palembang"
  }
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/toko-listrik-palembang#webpage`,
  name: "Toko Listrik Palembang Terdekat dan Terlengkap",
  url: `${siteUrl}/toko-listrik-palembang`,
  description:
    "Daftar lokasi toko listrik di Palembang dan Sumatera Selatan untuk kebutuhan alat listrik rumah, toko, grosir, dan proyek.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: storeLocations.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: location.name,
      url: `${siteUrl}/lokasi/${location.slug}`
    }))
  }
};

export default function TokoListrikPalembangPage() {
  return (
    <>
      <JsonLd data={collectionJsonLd} />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Toko Listrik Natasa">
          <span>Natasa</span>
          <small>Toko Listrik Palembang</small>
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="/">Beranda</a>
          <a href="#lokasi">Lokasi</a>
          <a href="#keyword">Keyword</a>
        </nav>
      </header>

      <main>
        <article className="hero">
          <div className="hero__content">
            <p className="eyebrow">Local SEO toko listrik Palembang</p>
            <h1>Toko Listrik Palembang Terdekat dan Terlengkap</h1>
            <p>
              Temukan lokasi toko listrik di kawasan Mesjid Lama, Pasar 16,
              16 Ilir, Ilir Timur I, dan Sumatera Selatan untuk kebutuhan kabel,
              MCB, lampu LED, panel, saklar, stop kontak, dan komponen instalasi.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#lokasi">
                Lihat Lokasi
              </a>
              <a className="button button--ghost" href="/">
                Toko Listrik Natasa
              </a>
            </div>
          </div>
          <aside className="hero__aside" aria-label="Ringkasan area">
            <dl>
              <div>
                <dt>{storeLocations.length}</dt>
                <dd>Lokasi toko listrik</dd>
              </div>
              <div>
                <dt>Palembang</dt>
                <dd>Mesjid Lama, Pasar 16, Ilir Timur I</dd>
              </div>
              <div>
                <dt>SEO</dt>
                <dd>Halaman lokasi siap crawl Google</dd>
              </div>
            </dl>
          </aside>
        </article>

        <section id="lokasi" className="section" aria-labelledby="lokasi-title">
          <div className="section__heading">
            <p className="eyebrow">Daftar lokasi</p>
            <h2 id="lokasi-title">Pilihan Toko Listrik di Palembang dan Sumatera Selatan</h2>
          </div>
          <div className="location-list">
            {storeLocations.map((location) => (
              <article className="location-row" key={location.slug}>
                <div>
                  <p className="eyebrow">{location.status}</p>
                  <h3>
                    <a href={`/lokasi/${location.slug}`}>{location.name}</a>
                  </h3>
                  <p>{location.businessCategory}</p>
                  <p>{location.address}</p>
                  <p>
                    Rating Google {location.googleRating?.toFixed(1)} dari{" "}
                    {location.googleReviewCount} ulasan. Tutup pukul{" "}
                    {location.closeTime} WIB.
                  </p>
                </div>
                <a className="button button--ghost" href={`/lokasi/${location.slug}`}>
                  Detail Lokasi
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="keyword" className="section section--split" aria-labelledby="keyword-title">
          <article>
            <p className="eyebrow">Strategi keyword</p>
            <h2 id="keyword-title">Dibangun untuk Query Toko Listrik Lokal</h2>
            <p>
              Halaman ini memberi Google jalur internal menuju setiap lokasi
              toko, sekaligus menarget pencarian lokal seperti toko listrik
              Palembang, toko listrik Mesjid Lama, toko listrik Pasar 16, dan
              grosir alat listrik murah Palembang.
            </p>
          </article>
          <aside className="contact-panel" aria-label="Keyword utama">
            <h3>Keyword Utama</h3>
            <p>Toko listrik Palembang</p>
            <p>Grosir alat listrik murah Palembang</p>
            <p>Distributor komponen listrik Sumatera Selatan</p>
          </aside>
        </section>
      </main>
    </>
  );
}
