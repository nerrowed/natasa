import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  getProductCategoryBySlug,
  getProductCategoryJsonLd,
  productCategories
} from "@/lib/products";
import { mergeKeywords, primarySeoKeywords } from "@/lib/seo";
import { businessKeywords, siteUrl, whatsappNumber } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getProductCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: {
      absolute: category.title
    },
    description: category.description,
    keywords: mergeKeywords(primarySeoKeywords, businessKeywords, category.keywords),
    alternates: {
      canonical: `/produk/${category.slug}`
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `${siteUrl}/produk/${category.slug}`,
      type: "website",
      images: category.image ? [{ url: category.image, alt: category.imageAlt || category.name }] : undefined
    },
    twitter: {
      card: category.image ? "summary_large_image" : "summary",
      title: category.title,
      description: category.description,
      images: category.image ? [category.image] : undefined
    }
  };
}

export default async function ProductCategoryPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const category = getProductCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const productJsonLd = getProductCategoryJsonLd(category);
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
        name: category.name,
        item: `${siteUrl}/produk/${category.slug}`
      }
    ]
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Toko Listrik Natasa">
          <span>Natasa</span>
          <small>Toko Listrik Palembang</small>
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="/">Beranda</a>
          <a href="/#brand">Brand</a>
          <a href="/#artikel">Artikel</a>
          <a href="/toko-listrik-palembang">Lokasi</a>
          <a className="nav-cta" href={`https://wa.me/${whatsappNumber}`}>
            Tanya Stok
          </a>
        </nav>
      </header>

      <main>
        <article className="hero">
          <div className="hero__content">
            <p className="eyebrow">Kategori alat listrik Palembang</p>
            <h1>{category.h1}</h1>
            <p>{category.description}</p>
            <div className="hero__actions">
              <a className="button button--primary" href={`https://wa.me/${whatsappNumber}`}>
                Tanya Stok {category.name}
              </a>
              <a className="button button--ghost" href="/toko-listrik-palembang">
                Lihat Lokasi Toko
              </a>
            </div>
          </div>
          <aside className="hero__aside hero__aside--quiet" aria-label={`Ringkasan ${category.name}`}>
            <h2>{category.name}</h2>
            <p>{category.buyerIntent}</p>
            <p>Area: Palembang dan Sumatera Selatan.</p>
          </aside>
        </article>

        <section id="produk" className="section section--split" aria-labelledby="produk-title">
          <article>
            <p className="eyebrow">Stok yang sering dicari</p>
            <h2 id="produk-title">Pilihan {category.name} di Natasa</h2>
            <p>{category.buyerIntent}</p>
            <div className="info-grid info-grid--compact">
              {category.products.map((product) => (
                <article className="info-card" key={product}>
                  <h3>{product}</h3>
                  <p>Tersedia untuk kebutuhan rumah, toko, teknisi, grosir, dan proyek.</p>
                </article>
              ))}
            </div>
          </article>
          <aside className="contact-panel" aria-label="Informasi pemesanan">
            {category.image ? (
              <img src={category.image} alt={category.imageAlt || category.name} loading="lazy" />
            ) : null}
            <h3>Cara Cek Stok</h3>
            <p>Hubungi Toko Listrik Natasa via WhatsApp/telepon dan sebutkan kebutuhan produk, jumlah, serta lokasi proyek.</p>
            <a className="button button--primary" href={`https://wa.me/${whatsappNumber}`}>
              WhatsApp Natasa
            </a>
          </aside>
        </section>
      </main>
    </>
  );
}
