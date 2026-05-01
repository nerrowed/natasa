import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { stockGroups } from "@/lib/catalog";
import { getAllArticlePages, getAllBrandPages } from "@/lib/cms";
import {
  getLocationJsonLd,
  primaryLocation,
  storeLocations
} from "@/lib/locations";
import { productCategories } from "@/lib/products";
import { homeDescription, mergeKeywords, SEO_TITLE } from "@/lib/seo";
import { businessKeywords, siteUrl } from "@/lib/site";

const businessPhone = primaryLocation.phone;
const businessWhatsapp = businessPhone.replace(/\D/g, "");

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: homeDescription,
  keywords: mergeKeywords(businessKeywords, ["natasa", "toko listrik mesjid lama"]),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: SEO_TITLE,
    description: homeDescription,
    url: siteUrl,
    type: "website"
  },
  twitter: {
    card: "summary",
    title: SEO_TITLE,
    description: homeDescription
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: primaryLocation.googleRating,
    reviewCount: primaryLocation.googleReviewCount
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: primaryLocation.phone,
    contactType: "sales",
    areaServed: "ID",
    availableLanguage: ["Indonesian"]
  },
  paymentAccepted: "Cash, Bank Transfer, QRIS",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Katalog alat listrik Natasa",
    itemListElement: productCategories.map((category) => ({
      "@type": "OfferCatalog",
      name: category.name,
      url: `${siteUrl}/produk/${category.slug}`
    }))
  },
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

const homeBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "toko listrik palembang",
      item: siteUrl
    }
  ]
};

const homeFaq = [
  {
    question: "Apakah Toko Listrik Natasa melayani pembelian grosir?",
    answer:
      "Ya, Natasa melayani pembelian ecer, grosir, repeat order teknisi, reseller, dan kebutuhan pengadaan proyek di Palembang."
  },
  {
    question: "Produk alat listrik apa saja yang tersedia?",
    answer:
      "Kategori yang sering dicari meliputi kabel listrik, MCB, panel, lampu LED, saklar, stop kontak, fitting, conduit, kontaktor, relay, dan aksesoris instalasi."
  },
  {
    question: "Apakah bisa tanya stok lewat WhatsApp?",
    answer:
      "Bisa. Sebutkan nama barang, jumlah, merek atau spesifikasi, dan lokasi penggunaan agar tim toko bisa mengecek stok atau alternatif produk."
  },
  {
    question: "Area layanan toko listrik Natasa di mana?",
    answer:
      "Fokus utama Natasa berada di Jalan Mesjid Lama, 16 Ilir, Ilir Timur I, Pasar 16, Palembang, dan melayani kebutuhan Sumatera Selatan."
  }
];

export default async function HomePage() {
  const [articlePages, brandPages] = await Promise.all([
    getAllArticlePages(),
    getAllBrandPages()
  ]);

  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={homeBreadcrumbJsonLd} />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Toko Listrik Natasa">
          <span>Natasa</span>
          <small>Toko Listrik Palembang</small>
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="#stok">Kebutuhan</a>
          <a href="#brand">Brand</a>
          <a href="#artikel">Artikel</a>
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
            <p className="eyebrow">Toko listrik terdekat dan terlengkap di Palembang</p>
            <h1>Toko Listrik Terdekat dan Toko Listrik Palembang - Natasa Mesjid Lama</h1>
            <p>
              Natasa adalah toko listrik Palembang di Jalan Mesjid Lama untuk
              kebutuhan rumah, toko, teknisi, kontraktor, dan pengadaan proyek.
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
            <p className="eyebrow">Toko listrik lengkap terdekat</p>
            <h2 id="stok-title">Stok Komponen Listrik yang Sering Dicari</h2>
            <p>
              Kabel, MCB, panel, lampu LED, saklar, stop kontak, dan kebutuhan
              instalasi tersedia untuk pembeli yang mencari toko listrik
              terdekat, ecer, grosir, dan proyek.
            </p>
          </div>
          <div className="compact-grid">
            {stockGroups.map((group) => (
              <article className="compact-item" key={group.name}>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--split" aria-labelledby="produk-title">
          <article>
            <p className="eyebrow">Produk populer</p>
            <h2 id="produk-title">Alat Listrik untuk Rumah, Toko, Teknisi, dan Proyek</h2>
            <p>
              Natasa membantu pembeli mencari perlengkapan listrik dari kebutuhan
              harian sampai pengadaan proyek: kabel instalasi, MCB dan panel,
              lampu LED, fitting, saklar, stop kontak, pipa conduit, terminal,
              kontaktor, relay, dan aksesoris instalasi.
            </p>
            <p>
              Untuk pembelian partai, grosir, atau repeat order kontraktor,
              hubungi toko lebih dulu agar tim bisa mengecek stok dan alternatif
              produk yang paling sesuai dengan kebutuhan lapangan.
            </p>
            <div className="info-grid info-grid--compact">
              {productCategories.map((category) => (
                <article className="info-card" key={category.slug}>
                  <h3>
                    <a href={`/produk/${category.slug}`}>{category.name}</a>
                  </h3>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>
          </article>
          <aside className="contact-panel" aria-label="Area layanan toko listrik Natasa">
            <img
              src="/images/products/mcb-schneider.webp"
              alt="MCB dan komponen proteksi listrik di Toko Listrik Natasa Palembang"
              loading="lazy"
            />
            <h3>Area Layanan</h3>
            <p>Jalan Mesjid Lama, 16 Ilir, Ilir Timur I, Pasar 16, Palembang.</p>
            <p>Meliputi kebutuhan rumah, toko, teknisi, reseller, dan proyek di Sumatera Selatan.</p>
            <a className="text-link" href="/toko-listrik-palembang">
              Cek daftar lokasi toko listrik
            </a>
          </aside>
        </section>

        <section id="brand" className="section section--split" aria-labelledby="brand-title">
          <article>
            <p className="eyebrow">Brand alat listrik populer</p>
            <h2 id="brand-title">Halaman Khusus Brand Besar di Toko Listrik Natasa</h2>
            <p>
              Untuk membantu pembeli yang mencari merek tertentu di toko listrik
              terdekat Palembang, Natasa menyiapkan halaman brand dengan deskripsi
              unik, kategori produk, dan panduan cek stok.
            </p>
            <div className="info-grid info-grid--compact">
              {brandPages.map((brand) => (
                <article className="info-card" key={brand.slug}>
                  <h3>
                    <a href={`/brand/${brand.slug}`}>{brand.name} Palembang</a>
                  </h3>
                  <p>{brand.description}</p>
                </article>
              ))}
            </div>
          </article>
          <aside className="contact-panel" aria-label="Brand di Toko Listrik Natasa">
            <h3>Cari Brand Tertentu?</h3>
            <p>
              Sebutkan merek, tipe produk, jumlah, dan foto barang jika ada agar
              tim Natasa bisa mengecek stok lebih cepat.
            </p>
            <a className="button button--primary" href={`https://wa.me/${businessWhatsapp}`}>
              Tanya Stok Brand
            </a>
          </aside>
        </section>

        <section id="artikel" className="section" aria-labelledby="artikel-title">
          <div className="section__heading">
            <p className="eyebrow">Konten edukasi listrik</p>
            <h2 id="artikel-title">Panduan Sebelum Membeli Alat Listrik</h2>
            <p>
              Artikel edukasi membantu pembeli memahami kebutuhan sebelum membeli,
              sekaligus memperkuat topical authority Natasa untuk pencarian alat
              listrik dan toko listrik Palembang.
            </p>
          </div>
          <div className="info-grid info-grid--compact">
            {articlePages.map((article) => (
              <article className="info-card" key={article.slug}>
                <h3>
                  <a href={`/artikel/${article.slug}`}>{article.h1}</a>
                </h3>
                <p>{article.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="lokasi" className="section section--split" aria-labelledby="lokasi-title">
          <article>
            <p className="eyebrow">Local SEO Palembang</p>
            <h2 id="lokasi-title">Toko Listrik Palembang di Jalan Mesjid Lama</h2>
            <p>
              Toko Listrik Natasa melayani pembeli yang mencari toko listrik
              terdekat dan toko listrik Palembang dari kawasan 16 Ilir, Ilir
              Timur I, Mesjid Lama, Air Mancur, dan Pasar 16.
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

        <section className="section" aria-labelledby="faq-title">
          <div className="section__heading">
            <p className="eyebrow">FAQ toko listrik Palembang</p>
            <h2 id="faq-title">Pertanyaan yang Sering Ditanyakan</h2>
          </div>
          <div className="faq-list">
            {homeFaq.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
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
