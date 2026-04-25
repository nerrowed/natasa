import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  getLocationBySlug,
  getLocationJsonLd,
  storeLocations
} from "@/lib/locations";
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

  return {
    title: `${location.name} | Toko Listrik Palembang`,
    description: `${location.name} di ${location.shortAddress}. ${location.description}`,
    keywords: [
      location.name,
      ...location.keywords,
      "toko listrik Palembang",
      "alat listrik Palembang"
    ],
    alternates: {
      canonical: `/lokasi/${location.slug}`
    },
    openGraph: {
      title: `${location.name} | Toko Listrik Palembang`,
      description: location.description,
      url: `${siteUrl}/lokasi/${location.slug}`,
      type: "website"
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

  return (
    <>
      <JsonLd data={jsonLd} />
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
