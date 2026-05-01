import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getBrandJsonLd } from "@/lib/brands";
import { getAllBrandPages, getBrandPageBySlug } from "@/lib/cms";
import { mergeKeywords, primarySeoKeywords } from "@/lib/seo";
import { businessKeywords, siteUrl, whatsappNumber } from "@/lib/site";

type BrandPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const pages = await getAllBrandPages();
  return pages.map((brand) => ({
    slug: brand.slug
  }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = await getBrandPageBySlug(slug);

  if (!brand) {
    return {};
  }

  return {
    title: {
      absolute: brand.title
    },
    description: brand.description,
    keywords: mergeKeywords(primarySeoKeywords, businessKeywords, brand.keywords),
    alternates: {
      canonical: `/brand/${brand.slug}`
    },
    openGraph: {
      title: brand.title,
      description: brand.description,
      url: `${siteUrl}/brand/${brand.slug}`,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: brand.title,
      description: brand.description
    }
  };
}

export default async function BrandLandingPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = await getBrandPageBySlug(slug);

  if (!brand) {
    notFound();
  }

  const brandJsonLd = getBrandJsonLd(brand);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Toko Listrik Natasa",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: brand.name,
        item: `${siteUrl}/brand/${brand.slug}`
      }
    ]
  };

  return (
    <>
      <JsonLd data={brandJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Toko Listrik Natasa">
          <span>Natasa</span>
          <small>Toko Listrik Palembang</small>
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="/">Beranda</a>
          <a href="/toko-listrik-palembang">Lokasi</a>
          <a href="#produk">Produk</a>
          <a className="nav-cta" href={`https://wa.me/${whatsappNumber}`}>
            Tanya Stok
          </a>
        </nav>
      </header>

      <main>
        <article className="hero">
          <div className="hero__content">
            <p className="eyebrow">Brand alat listrik Palembang</p>
            <h1>{brand.h1}</h1>
            <p>{brand.description}</p>
            <div className="hero__actions">
              <a className="button button--primary" href={`https://wa.me/${whatsappNumber}`}>
                Tanya Stok {brand.name}
              </a>
              <a className="button button--ghost" href="/lokasi/toko-listrik-natasa-mesjid-lama">
                Lihat Lokasi Natasa
              </a>
            </div>
          </div>
          <aside className="hero__aside hero__aside--quiet" aria-label={`Ringkasan brand ${brand.name}`}>
            <h2>{brand.name} Palembang</h2>
            <p>Toko listrik terdekat untuk cek stok brand dan kategori populer di area Mesjid Lama Palembang.</p>
            <p>Area: Palembang dan Sumatera Selatan.</p>
          </aside>
        </article>

        <section id="produk" className="section section--split" aria-labelledby="produk-title">
          <article>
            <p className="eyebrow">Deskripsi brand</p>
            <h2 id="produk-title">Produk {brand.name} yang Sering Dicari</h2>
            {brand.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="info-grid info-grid--compact">
              {brand.categories.map((category) => (
                <article className="info-card" key={category}>
                  <h3>{category}</h3>
                  <p>
                    Cocok untuk pembeli ecer, teknisi, toko, ruko, dan kebutuhan proyek di Palembang.
                  </p>
                </article>
              ))}
            </div>
          </article>
          <aside className="contact-panel" aria-label={`Panduan beli ${brand.name}`}>
            <h3>Tips Cek Stok {brand.name}</h3>
            {brand.buyingTips.map((tip) => (
              <p key={tip}>{tip}</p>
            ))}
            <a className="button button--primary" href={`https://wa.me/${whatsappNumber}`}>
              WhatsApp Natasa
            </a>
          </aside>
        </section>
      </main>
    </>
  );
}
