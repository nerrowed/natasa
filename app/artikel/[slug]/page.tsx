import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getArticleJsonLd } from "@/lib/articles";
import { getAllArticlePages, getArticlePageBySlug } from "@/lib/cms";
import { mergeKeywords, primarySeoKeywords } from "@/lib/seo";
import { businessKeywords, siteUrl, whatsappNumber } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const pages = await getAllArticlePages();
  return pages.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticlePageBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: {
      absolute: article.title
    },
    description: article.description,
    keywords: mergeKeywords(primarySeoKeywords, businessKeywords, article.keywords),
    alternates: {
      canonical: `/artikel/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${siteUrl}/artikel/${article.slug}`,
      type: "article"
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.description
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticlePageBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = getArticleJsonLd(article);
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
        name: "Artikel listrik",
        item: `${siteUrl}/artikel/${article.slug}`
      }
    ]
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
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
            <p className="eyebrow">Artikel edukasi alat listrik</p>
            <h1>{article.h1}</h1>
            <p>{article.intro}</p>
            <div className="hero__actions">
              <a className="button button--primary" href={`https://wa.me/${whatsappNumber}`}>
                Tanya Kebutuhan Barang
              </a>
              <a className="button button--ghost" href="/lokasi/toko-listrik-natasa-mesjid-lama">
                Toko Listrik Terdekat
              </a>
            </div>
          </div>
          <aside className="hero__aside hero__aside--quiet" aria-label="Ringkasan artikel">
            <h2>Panduan Praktis</h2>
            <p>Konten edukasi untuk pembeli rumah, toko, ruko, teknisi, dan proyek di Palembang.</p>
            <p>Hubungi Natasa untuk cek stok sebelum datang ke toko.</p>
          </aside>
        </article>

        <section className="section section--split" aria-labelledby="artikel-title">
          <article>
            <p className="eyebrow">Panduan belanja listrik</p>
            <h2 id="artikel-title">Yang Perlu Diperhatikan</h2>
            {article.sections.map((section) => (
              <section key={section.heading} aria-labelledby={`${article.slug}-${section.heading}`}>
                <h3 id={`${article.slug}-${section.heading}`}>{section.heading}</h3>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
          <aside className="contact-panel" aria-label="Butuh bantuan produk">
            <h3>Butuh Cek Barang?</h3>
            <p>
              Jika sudah punya daftar kebutuhan, kirim nama barang, jumlah, merek, ukuran, dan lokasi penggunaan ke Natasa.
            </p>
            <p>
              Tim toko bisa membantu cek stok kabel, MCB, panel, lampu LED, saklar, stop kontak, dan aksesoris instalasi.
            </p>
            <a className="button button--primary" href={`https://wa.me/${whatsappNumber}`}>
              WhatsApp Natasa
            </a>
          </aside>
        </section>
      </main>
    </>
  );
}
