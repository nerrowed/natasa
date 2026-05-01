import { siteUrl } from "@/lib/site";

export type BrandPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  categories: string[];
  intro: string[];
  buyingTips: string[];
};

export const brandPages: BrandPage[] = [
  {
    slug: "philips-palembang",
    name: "Philips",
    title: "Philips Palembang | Lampu LED & Fitting di Natasa",
    description:
      "Cari produk Philips Palembang? Natasa Mesjid Lama membantu cek stok lampu LED, downlight, fitting, dan kebutuhan penerangan rumah, toko, dan proyek.",
    h1: "Philips Palembang untuk Lampu LED dan Kebutuhan Penerangan",
    keywords: ["Philips Palembang", "lampu Philips Palembang", "lampu LED Philips Palembang"],
    categories: ["Lampu LED", "Downlight", "Fitting", "Lampu rumah", "Lampu toko", "Penerangan proyek"],
    intro: [
      "Philips dikenal sebagai salah satu merek penerangan yang banyak dicari untuk rumah, toko, kantor, ruko, gudang, dan proyek kecil-menengah. Di Palembang, pembeli biasanya mencari produk Philips karena ingin lampu yang terang, stabil, hemat listrik, dan mudah dicari kembali saat perlu penggantian.",
      "Toko Listrik Natasa di kawasan Mesjid Lama membantu pembeli mengecek kebutuhan Philips seperti lampu LED, downlight, fitting, dan perlengkapan penerangan lain. Untuk kebutuhan proyek atau pembelian jumlah banyak, sebaiknya tanyakan stok, watt, bentuk fitting, warna cahaya, dan jumlah unit terlebih dulu melalui WhatsApp agar pilihan produk lebih sesuai dengan kondisi lapangan.",
      "Halaman ini ditujukan untuk pembeli yang mencari toko listrik terdekat atau toko listrik Palembang dengan kebutuhan produk Philips. Natasa juga dapat membantu memberi alternatif bila tipe yang dicari sedang kosong, sehingga pembeli tetap bisa mendapatkan solusi penerangan yang cocok untuk rumah, toko, teknisi, maupun kontraktor."
    ],
    buyingTips: [
      "Cek watt dan kebutuhan terang ruangan sebelum membeli lampu.",
      "Pastikan bentuk fitting sesuai dengan armatur yang sudah terpasang.",
      "Untuk toko dan gudang, pertimbangkan warna cahaya dan sebaran lampu.",
      "Untuk proyek, tanyakan ketersediaan jumlah stok sebelum datang ke toko."
    ]
  },
  {
    slug: "maspion-palembang",
    name: "Maspion",
    title: "Maspion Palembang | Alat Listrik & Kebutuhan Rumah",
    description:
      "Cari Maspion Palembang? Natasa Mesjid Lama membantu cek stok kebutuhan listrik rumah, toko, teknisi, dan proyek di toko listrik terdekat Palembang.",
    h1: "Maspion Palembang untuk Kebutuhan Listrik Rumah dan Toko",
    keywords: ["Maspion Palembang", "alat listrik Maspion Palembang", "produk Maspion Palembang"],
    categories: ["Kebutuhan listrik rumah", "Perlengkapan toko", "Aksesoris listrik", "Produk harian", "Stok teknisi"],
    intro: [
      "Maspion merupakan merek yang akrab untuk kebutuhan rumah tangga dan perlengkapan listrik harian. Banyak pembeli mencari Maspion karena nama mereknya mudah dikenali, pilihan produknya luas, dan sering dipakai untuk kebutuhan rumah, toko, ruko, atau penggantian barang harian.",
      "Di Toko Listrik Natasa Palembang, pembeli dapat menanyakan ketersediaan produk Maspion dan perlengkapan pendukung lain sesuai kebutuhan. Karena jenis barang Maspion cukup beragam, sebaiknya sebutkan tipe produk, jumlah, ukuran, atau foto barang lama saat menghubungi toko. Cara ini membantu tim Natasa mengecek stok dengan lebih cepat dan menawarkan alternatif bila diperlukan.",
      "Untuk pencarian lokal seperti toko listrik terdekat, toko listrik lengkap terdekat, atau toko listrik Palembang, halaman ini memperjelas bahwa Natasa melayani kebutuhan merek dan kategori populer, bukan hanya katalog umum. Pembeli ecer, teknisi, reseller, dan kontraktor bisa menjadikan Natasa sebagai titik cek stok sebelum datang ke area Mesjid Lama."
    ],
    buyingTips: [
      "Bawa contoh barang lama atau kirim foto sebelum datang ke toko.",
      "Sebutkan jumlah pembelian bila untuk stok toko atau kebutuhan proyek.",
      "Tanyakan alternatif merek bila tipe Maspion tertentu sedang kosong.",
      "Pastikan spesifikasi daya dan ukuran sesuai kebutuhan pemakaian."
    ]
  },
  {
    slug: "samoto-palembang",
    name: "Samoto",
    title: "Samoto Palembang | Kabel, Saklar & Aksesoris Listrik",
    description:
      "Cari Samoto Palembang? Natasa menyediakan bantuan cek stok kabel, saklar, stop kontak, aksesoris listrik, dan kebutuhan instalasi di Palembang.",
    h1: "Samoto Palembang untuk Aksesoris dan Kebutuhan Instalasi Listrik",
    keywords: ["Samoto Palembang", "aksesoris listrik Samoto", "saklar Samoto Palembang"],
    categories: ["Kabel dan aksesoris", "Saklar", "Stop kontak", "Steker", "Terminal", "Kebutuhan instalasi"],
    intro: [
      "Samoto termasuk merek yang dicari untuk kebutuhan aksesoris listrik, instalasi, dan perlengkapan harian. Pembeli biasanya membutuhkan produk seperti saklar, stop kontak, steker, terminal, kabel, atau komponen kecil lain yang sering dipakai teknisi saat pemasangan dan perbaikan listrik.",
      "Toko Listrik Natasa di Mesjid Lama Palembang membantu pembeli mengecek produk Samoto dan alternatif perlengkapan instalasi sesuai kebutuhan. Untuk mempercepat pengecekan, pembeli bisa menyebutkan jenis produk, warna, ukuran, jumlah, dan tujuan pemakaian, misalnya untuk rumah, toko, ruko, gudang, atau pekerjaan proyek.",
      "Halaman Samoto Palembang ini dibuat agar pencarian brand tidak tercampur dengan katalog umum. Dengan begitu, pembeli yang mencari toko listrik Palembang atau toko listrik terdekat untuk produk Samoto dapat langsung memahami kategori yang tersedia dan langkah terbaik untuk cek stok sebelum datang."
    ],
    buyingTips: [
      "Pastikan tipe saklar atau stop kontak sesuai instalasi lama.",
      "Untuk pembelian banyak, tanyakan stok warna dan model lebih dulu.",
      "Cek kebutuhan tambahan seperti box, kabel, steker, atau terminal.",
      "Gunakan produk sesuai standar pemasangan dan beban listrik."
    ]
  }
];

export function getBrandBySlug(slug: string) {
  return brandPages.find((brand) => brand.slug === slug);
}

export function getBrandUrl(brand: BrandPage) {
  return `${siteUrl}/brand/${brand.slug}`;
}

export function getBrandJsonLd(brand: BrandPage) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${getBrandUrl(brand)}#webpage`,
    name: brand.h1,
    url: getBrandUrl(brand),
    description: brand.description,
    about: {
      "@type": "Brand",
      name: brand.name
    },
    mainEntity: brand.categories.map((category) => ({
      "@type": "Product",
      name: `${category} ${brand.name}`,
      brand: {
        "@type": "Brand",
        name: brand.name
      },
      areaServed: "Palembang dan Sumatera Selatan"
    }))
  };
}
