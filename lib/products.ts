import { siteUrl } from "@/lib/site";

export type ProductCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  image?: string;
  imageAlt?: string;
  keywords: string[];
  products: string[];
  buyerIntent: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "kabel-listrik-palembang",
    name: "Kabel Listrik",
    title: "Kabel Listrik Palembang | NYA, NYM, NYY - Natasa",
    description:
      "Cari kabel listrik di Palembang? Natasa menyediakan kabel NYA, NYM, NYY, fleksibel, conduit, dan aksesoris instalasi.",
    h1: "Kabel Listrik Palembang untuk Rumah, Toko, dan Proyek",
    image: "/images/products/kabel-nym.webp",
    imageAlt: "Kabel NYM untuk instalasi listrik rumah dan proyek di Palembang",
    keywords: ["kabel listrik palembang", "kabel NYM palembang", "kabel NYA", "kabel NYY"],
    products: ["Kabel NYA", "Kabel NYM", "Kabel NYY", "Kabel fleksibel", "Pipa conduit", "Ducting kabel"],
    buyerIntent:
      "Cocok untuk instalasi baru, renovasi rumah, kebutuhan teknisi, dan pengadaan proyek di area Palembang."
  },
  {
    slug: "mcb-palembang",
    name: "MCB dan Panel",
    title: "MCB Palembang | Panel & Proteksi Listrik - Natasa",
    description:
      "Butuh MCB di Palembang? Cek stok MCB, ELCB, MCCB, box panel, kontaktor, relay, dan komponen proteksi listrik.",
    h1: "MCB, Panel, dan Proteksi Listrik Palembang",
    image: "/images/products/mcb-schneider.webp",
    imageAlt: "MCB dan proteksi listrik untuk instalasi rumah toko dan proyek Palembang",
    keywords: ["MCB Palembang", "panel listrik Palembang", "ELCB", "MCCB"],
    products: ["MCB", "ELCB", "MCCB", "Box panel", "Kontaktor", "Relay", "Timer listrik"],
    buyerIntent:
      "Direkomendasikan untuk rumah, ruko, toko, gudang, panel distribusi kecil, dan kebutuhan teknisi lapangan."
  },
  {
    slug: "lampu-led-palembang",
    name: "Lampu LED",
    title: "Lampu LED Palembang | Downlight & Fitting - Natasa",
    description:
      "Natasa menyediakan lampu LED Palembang, downlight, floodlight, fitting, rumah lampu, dan kebutuhan penerangan proyek.",
    h1: "Lampu LED Palembang untuk Rumah, Toko, dan Area Proyek",
    image: "/images/products/led-philips.webp",
    imageAlt: "Lampu LED untuk kebutuhan penerangan rumah toko dan proyek di Palembang",
    keywords: ["lampu LED Palembang", "downlight Palembang", "fitting lampu", "lampu proyek"],
    products: ["Lampu LED", "Downlight", "Floodlight", "Lampu jalan", "Fitting", "Rumah lampu"],
    buyerIntent:
      "Pilihan untuk pencahayaan rumah, etalase toko, ruko, gudang, halaman, dan kebutuhan penerangan proyek."
  },
  {
    slug: "panel-listrik-palembang",
    name: "Panel Listrik",
    title: "Panel Listrik Palembang | Box Panel & Komponen - Natasa",
    description:
      "Cari panel listrik Palembang? Natasa membantu kebutuhan box panel, busbar, kontaktor, relay, timer, dan aksesoris panel.",
    h1: "Panel Listrik Palembang untuk Instalasi dan Pengadaan Proyek",
    keywords: ["panel listrik Palembang", "box panel Palembang", "komponen panel listrik"],
    products: ["Box panel", "Busbar", "Kontaktor", "Relay", "Timer", "Terminal block", "Aksesoris panel"],
    buyerIntent:
      "Untuk teknisi, kontraktor, maintenance gedung, dan pengadaan panel distribusi skala kecil-menengah."
  },
  {
    slug: "saklar-stop-kontak-palembang",
    name: "Saklar dan Stop Kontak",
    title: "Saklar Stop Kontak Palembang | Steker & Extension - Natasa",
    description:
      "Tersedia saklar, stop kontak, steker, colokan industri, extension, dan perlengkapan listrik harian di Palembang.",
    h1: "Saklar dan Stop Kontak Palembang untuk Kebutuhan Harian",
    keywords: ["saklar Palembang", "stop kontak Palembang", "steker listrik", "colokan industri"],
    products: ["Saklar", "Stop kontak", "Steker", "Colokan industri", "Extension", "Terminal listrik"],
    buyerIntent:
      "Cocok untuk penggantian harian, renovasi rumah, stok toko, dan kebutuhan teknisi instalasi."
  }
];

export function getProductCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductCategoryUrl(category: ProductCategory) {
  return `${siteUrl}/produk/${category.slug}`;
}

export function getProductCategoryJsonLd(category: ProductCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${getProductCategoryUrl(category)}#webpage`,
    name: category.h1,
    url: getProductCategoryUrl(category),
    description: category.description,
    about: category.products.map((product) => ({
      "@type": "Product",
      name: product,
      category: category.name,
      areaServed: "Palembang dan Sumatera Selatan"
    }))
  };
}
