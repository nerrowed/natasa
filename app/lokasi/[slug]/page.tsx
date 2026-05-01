import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  getLocationBySlug,
  getLocationJsonLd,
  storeLocations
} from "@/lib/locations";
import {
  getLocationDescription,
  getLocationKeywords,
  getLocationTitle
} from "@/lib/seo";
import { siteUrl } from "@/lib/site";

type LocationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return storeLocations.map((location) => ({
    slug: location.slug
  }));
}

export async function generateMetadata({
  params
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {};
  }

  const locationDescription = getLocationDescription(location);
  const locationTitle = getLocationTitle(location);

  return {
    title: {
      absolute: locationTitle
    },
    description: locationDescription,
    keywords: getLocationKeywords(location),
    alternates: {
      canonical: `/lokasi/${location.slug}`
    },
    openGraph: {
      title: locationTitle,
      description: locationDescription,
      url: `${siteUrl}/lokasi/${location.slug}`,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: locationTitle,
      description: locationDescription
    }
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const jsonLd = getLocationJsonLd(location);
  const locationWhatsapp = location.phone.replace(/\D/g, "");
  const isNatasa = location.slug === "toko-listrik-natasa-mesjid-lama";
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "toko listrik palembang",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "lokasi toko listrik",
        item: `${siteUrl}/toko-listrik-palembang`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: `${siteUrl}/lokasi/${location.slug}`
      }
    ]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Toko Listrik Natasa">
          <span>Natasa</span>
          <small>Toko Listrik Palembang</small>
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="/">Beranda</a>
          <a href="/toko-listrik-palembang">Toko Palembang</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <main>
        <article className="hero">
          <div className="hero__content">
            <p className="eyebrow">{location.status}</p>
            <h1>{location.name} - Toko Listrik Palembang</h1>
            <p>{location.description}</p>
            <div className="hero__actions">
              <a className="button button--primary" href={location.mapsUrl}>
                Buka Google Maps
              </a>
              <a className="button button--ghost" href={`https://wa.me/${locationWhatsapp}`}>
                Tanya Stok
              </a>
            </div>
          </div>
          <aside className="hero__aside" aria-label="Ringkasan lokasi">
            <dl>
              <div>
                <dt>{location.area}</dt>
                <dd>Area layanan</dd>
              </div>
              <div>
                <dt>{location.postalCode}</dt>
                <dd>Kode pos</dd>
              </div>
              <div>
                <dt>{location.closeTime}</dt>
                <dd>Tutup Senin-Sabtu</dd>
              </div>
            </dl>
          </aside>
        </article>

        <section id="kontak" className="section section--split" aria-labelledby="kontak-title">
          <article>
            <p className="eyebrow">Alamat toko</p>
            <h2 id="kontak-title">Lokasi {location.name}</h2>
            <p>{location.address}</p>
            {location.landmark ? <p>Patokan: {location.landmark}.</p> : null}
            <p>
              Halaman ini dibuat sebagai halaman lokasi khusus agar Google dapat
              memahami nama toko, alamat, area, dan relevansi lokalnya secara
              terpisah dari halaman utama.
            </p>
          </article>
          <aside className="contact-panel" aria-label="Informasi kontak">
            <h3>Informasi Google Business</h3>
            <p>Nama: {location.name}</p>
            <p>Status: {location.status}</p>
            <p>{location.businessCategory}</p>
            <p>
              Rating Google {location.googleRating?.toFixed(1)} dari{" "}
              {location.googleReviewCount} ulasan.
            </p>
            <p>Telepon: {location.phone}</p>
            <a className="button button--primary" href={location.mapsUrl}>
              Lihat Profil Google
            </a>
          </aside>
        </section>

        {isNatasa ? (
          <section className="section section--split" aria-labelledby="terdekat-title">
            <article>
              <p className="eyebrow">Toko listrik terdekat Palembang</p>
              <h2 id="terdekat-title">Natasa di Mesjid Lama, Dekat Air Mancur dan Pasar 16</h2>
              <p>
                Toko Listrik Natasa menjadi pilihan untuk pembeli yang mencari
                toko listrik terdekat di pusat Palembang, terutama area Mesjid
                Lama, 16 Ilir, Ilir Timur I, Air Mancur, dan Pasar 16.
              </p>
              <p>
                Pembeli bisa menanyakan stok kabel listrik, MCB, box panel,
                lampu LED, saklar, stop kontak, fitting, conduit, kontaktor,
                relay, dan perlengkapan instalasi sebelum datang ke toko.
              </p>
              <p>
                Untuk kebutuhan proyek, teknisi, reseller, atau pembelian grosir,
                hubungi Natasa terlebih dulu agar tim toko bisa mengecek jumlah
                stok, alternatif merek, dan kebutuhan pengiriman di Palembang.
              </p>
            </article>
            <aside className="contact-panel" aria-label="Keunggulan Toko Listrik Natasa">
              <h3>Kenapa Natasa Relevan untuk “Toko Listrik Terdekat”?</h3>
              <p>Lokasi berada di koridor toko dan grosir sekitar Jalan Mesjid Lama.</p>
              <p>Patokan jelas: depan Bank BNI 46 Air Mancur, dekat Pasar 16 Palembang.</p>
              <p>Produk mencakup kebutuhan rumah, toko, teknisi, kontraktor, dan proyek.</p>
              <a className="button button--primary" href={`https://wa.me/${locationWhatsapp}`}>
                Cek Stok via WhatsApp
              </a>
            </aside>
          </section>
        ) : null}

        <section className="section" aria-labelledby="layanan-title">
          <div className="section__heading">
            <p className="eyebrow">Kebutuhan alat listrik</p>
            <h2 id="layanan-title">Komponen Listrik yang Dicari di Lokasi Ini</h2>
          </div>
          <div className="info-grid">
            {["Kabel listrik", "MCB dan panel", "Lampu LED", "Saklar dan stop kontak"].map(
              (item) => (
                <article className="info-card" key={item}>
                  <h3>{item}</h3>
                  <p>
                    Tersedia untuk kebutuhan rumah, toko, teknisi, pengadaan,
                    dan proyek di sekitar {location.area}.
                  </p>
                </article>
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
}
