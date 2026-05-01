import { siteUrl } from "@/lib/site";

export type ArticlePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const articlePages: ArticlePage[] = [
  {
    slug: "tips-memilih-kabel-standar-sni-untuk-rumah",
    title: "Tips Memilih Kabel Standar SNI untuk Rumah | Natasa",
    description:
      "Pelajari tips memilih kabel standar SNI untuk rumah, mulai dari jenis NYA, NYM, NYY, ukuran kabel, jalur instalasi, hingga cara cek stok di Natasa Palembang.",
    h1: "Tips Memilih Kabel Standar SNI untuk Rumah",
    keywords: ["tips memilih kabel SNI", "kabel standar SNI", "kabel listrik rumah", "kabel listrik Palembang"],
    intro:
      "Memilih kabel listrik rumah tidak cukup hanya melihat harga. Kabel harus sesuai standar, ukuran, jalur instalasi, dan beban pemakaian agar instalasi lebih aman dan rapi.",
    sections: [
      {
        heading: "Kenali jenis kabel yang umum dipakai",
        body: [
          "Untuk rumah, jenis yang sering dicari antara lain NYA, NYM, dan NYY. NYA biasanya dipakai di dalam pipa conduit, NYM umum untuk instalasi dalam bangunan, sedangkan NYY lebih sering dipertimbangkan untuk area yang membutuhkan perlindungan lebih kuat.",
          "Sebelum membeli, jelaskan kepada toko apakah kabel akan dipakai untuk lampu, stop kontak, AC, pompa air, dapur, atau panel kecil. Kebutuhan beban berbeda dapat memerlukan ukuran kabel yang berbeda juga."
        ]
      },
      {
        heading: "Perhatikan standar dan ukuran kabel",
        body: [
          "Cari kabel yang jelas spesifikasinya dan tanyakan pilihan standar SNI. Jangan memilih kabel hanya karena terlihat tebal dari luar; ukuran konduktor, bahan, dan kualitas isolasi tetap perlu diperhatikan.",
          "Untuk instalasi permanen, sebaiknya diskusikan dengan teknisi listrik agar ukuran kabel sesuai beban. Jika ragu, bawa catatan kebutuhan titik lampu, stop kontak, dan peralatan besar saat datang ke toko listrik."
        ]
      },
      {
        heading: "Cek kebutuhan aksesoris instalasi",
        body: [
          "Selain kabel, rumah baru atau renovasi biasanya membutuhkan conduit, ducting, terminal, box, MCB, saklar, stop kontak, fitting, dan perlengkapan pengaman. Membeli sekaligus dapat membantu pekerjaan teknisi berjalan lebih cepat.",
          "Jika berada di Palembang, Toko Listrik Natasa Mesjid Lama bisa menjadi toko listrik terdekat untuk cek stok kabel, MCB, dan aksesoris instalasi sebelum pekerjaan dimulai."
        ]
      }
    ]
  },
  {
    slug: "daftar-kebutuhan-listrik-untuk-ruko-baru",
    title: "Daftar Kebutuhan Listrik untuk Ruko Baru | Natasa",
    description:
      "Checklist kebutuhan listrik untuk ruko baru: kabel, MCB, panel, lampu LED, saklar, stop kontak, conduit, terminal, dan perlengkapan instalasi di Palembang.",
    h1: "Daftar Kebutuhan Listrik untuk Ruko Baru",
    keywords: ["kebutuhan listrik ruko", "alat listrik ruko", "instalasi listrik ruko", "toko listrik Palembang"],
    intro:
      "Ruko baru biasanya membutuhkan daftar belanja listrik yang lebih lengkap daripada rumah biasa, karena ada area display, gudang, kasir, AC, lampu luar, dan kebutuhan operasional harian.",
    sections: [
      {
        heading: "Mulai dari kabel, conduit, dan jalur instalasi",
        body: [
          "Bagian awal yang perlu dihitung adalah jalur kabel untuk lampu, stop kontak, AC, mesin, CCTV, signage, dan area gudang. Kabel yang dipakai harus disesuaikan dengan beban dan rencana penggunaan tiap area.",
          "Conduit, ducting, klem, terminal, dan box sambungan juga perlu disiapkan agar instalasi lebih rapi dan mudah dirawat. Untuk ruko yang akan sering direnovasi display-nya, jalur instalasi yang rapi akan sangat membantu."
        ]
      },
      {
        heading: "Siapkan proteksi listrik dan panel",
        body: [
          "MCB, ELCB, box panel, busbar, kontaktor, relay, dan timer dapat dibutuhkan tergantung skala ruko. Panel yang tertata membantu memisahkan jalur lampu, stop kontak, AC, dan peralatan lain sehingga lebih mudah dicek saat ada gangguan.",
          "Diskusikan rancangan panel dengan teknisi agar pembagian beban tidak asal. Saat membeli barang, sebutkan kebutuhan daya, jumlah lantai, dan rencana peralatan yang akan dipakai."
        ]
      },
      {
        heading: "Lengkapi penerangan dan kebutuhan operasional",
        body: [
          "Lampu LED, downlight, floodlight, fitting, saklar, stop kontak, steker, extension, dan colokan industri sering masuk daftar belanja awal ruko. Pilih pencahayaan yang cukup terang untuk area display dan tetap efisien untuk pemakaian harian.",
          "Untuk pembeli di Palembang, Natasa Mesjid Lama bisa membantu cek stok kebutuhan ruko mulai dari kabel sampai aksesoris. Hubungi toko lebih dulu jika pembelian dalam jumlah banyak atau untuk proyek pembukaan ruko baru."
        ]
      }
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return articlePages.find((article) => article.slug === slug);
}

export function getArticleUrl(article: ArticlePage) {
  return `${siteUrl}/artikel/${article.slug}`;
}

export function getArticleJsonLd(article: ArticlePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${getArticleUrl(article)}#article`,
    headline: article.h1,
    description: article.description,
    url: getArticleUrl(article),
    author: {
      "@type": "Organization",
      name: "Toko Listrik Natasa"
    },
    publisher: {
      "@type": "Organization",
      name: "Toko Listrik Natasa"
    },
    mainEntityOfPage: getArticleUrl(article)
  };
}
