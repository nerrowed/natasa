import { siteUrl } from "@/lib/site";

export type StoreLocation = {
  code?: string;
  slug: string;
  name: string;
  status: "Terverifikasi" | "Belum diverifikasi";
  address: string;
  shortAddress: string;
  area: string;
  postalCode: string;
  landmark?: string;
  phone: string;
  closeTime: string;
  googleRating?: number;
  googleReviewCount?: number;
  businessCategory: string;
  mapsUrl: string;
  description: string;
  keywords: string[];
};

export const storeLocations: StoreLocation[] = [
  {
    code: "17173853350181821634",
    slug: "toko-listrik-paci-palembang",
    name: "TOKO LISTRIK PACI",
    status: "Terverifikasi",
    address:
      "Jalan Masjid Lama No. 1191, Kelurahan 16 Ilir, Kecamatan Ilir Timur I, Kota Palembang, Sumatera Selatan 30122",
    shortAddress: "Jalan Masjid Lama No. 1191, 16 Ilir, Ilir Timur I, Palembang",
    area: "16 Ilir, Ilir Timur I",
    postalCode: "30122",
    phone: "0812-7464-4575",
    closeTime: "17:00",
    googleRating: 4.7,
    googleReviewCount: 13,
    businessCategory: "Penyedia peralatan listrik di Palembang, Sumatera Selatan",
    mapsUrl: "https://maps.app.goo.gl/nPe6LtyeEpJBChnU9",
    description:
      "Toko listrik di kawasan Jalan Masjid Lama Palembang untuk kebutuhan alat listrik rumah, toko, teknisi, dan pembelian grosir.",
    keywords: ["toko listrik PACI", "toko listrik Jalan Masjid Lama", "toko listrik 16 Ilir"]
  },
  {
    code: "13257919226400510387",
    slug: "toko-listrik-raja-raja-palembang",
    name: "TOKO LISTRIK RAJA-RAJA",
    status: "Belum diverifikasi",
    address:
      "Jl. Kebumen Darat No. 6, 16 Ilir, Kecamatan Ilir Timur I, belakang Bank BCA KCU Mesjid Lama, Kota Palembang, Sumatera Selatan 30111",
    shortAddress: "Jl. Kebumen Darat No. 6, belakang Bank BCA KCU Mesjid Lama",
    area: "16 Ilir, Ilir Timur I",
    postalCode: "30111",
    landmark: "Belakang Bank BCA KCU Mesjid Lama",
    phone: "0822-8965-5871",
    closeTime: "16:00",
    googleRating: 5.0,
    googleReviewCount: 6,
    businessCategory: "Toko alat listrik di Palembang, Sumatera Selatan",
    mapsUrl: "https://maps.app.goo.gl/fzh3qvkxFKwZ7WGd8",
    description:
      "Lokasi toko listrik dekat Mesjid Lama dan Bank BCA KCU untuk kebutuhan kabel, lampu, saklar, panel, dan perlengkapan instalasi.",
    keywords: ["toko listrik Raja-Raja", "toko listrik belakang BCA Mesjid Lama"]
  },
  {
    code: "09484848892277683593",
    slug: "toko-listrik-palembang-pasar-16",
    name: "TOKO LISTRIK PALEMBANG",
    status: "Terverifikasi",
    address:
      "Jalan Mesjid Lama No. 184, Kelurahan 17 Ilir, Kecamatan Ilir Timur I, samping ATM BCA Mesjid Lama Pasar 16, Palembang, Sumatera Selatan 30125",
    shortAddress: "Jalan Mesjid Lama No. 184, samping ATM BCA Mesjid Lama Pasar 16",
    area: "17 Ilir, Ilir Timur I",
    postalCode: "30125",
    landmark: "Samping ATM BCA Mesjid Lama Pasar 16",
    phone: "0811-718-085",
    closeTime: "16:00",
    googleRating: 5.0,
    googleReviewCount: 28,
    businessCategory: "Toko alat listrik di Palembang, Sumatera Selatan",
    mapsUrl: "https://maps.app.goo.gl/Gp4hFuCAPEYFiWPx7",
    description:
      "Toko listrik di area Pasar 16 Palembang untuk pembelian alat listrik ecer, grosir, dan kebutuhan proyek sekitar Ilir Timur I.",
    keywords: ["toko listrik Palembang", "toko listrik Pasar 16", "alat listrik Mesjid Lama"]
  },
  {
    code: "05079300461497908736",
    slug: "toko-listrik-energy-pendopo",
    name: "Toko Listrik Energy",
    status: "Terverifikasi",
    address:
      "Jalan Merdeka No. 10 Simpang 5, Pendopo, Talang Ubi Barat, Penukal Abab Lematang Ilir, depan Indomaret Simpang Lima, Sumatera Selatan 31211",
    shortAddress: "Jalan Merdeka No. 10 Simpang 5 Pendopo, depan Indomaret",
    area: "Pendopo, PALI",
    postalCode: "31211",
    landmark: "Depan Indomaret Simpang Lima",
    phone: "0811-787-189",
    closeTime: "21:00",
    googleRating: 5.0,
    googleReviewCount: 14,
    businessCategory: "Toko alat listrik di Sumatera Selatan",
    mapsUrl: "https://maps.app.goo.gl/8dVyCyt6ZXqdzvzV7",
    description:
      "Toko listrik area Pendopo PALI untuk kebutuhan komponen listrik, lampu, kabel, proteksi, dan perlengkapan instalasi.",
    keywords: ["toko listrik Pendopo", "toko listrik PALI", "Toko Listrik Energy"]
  },
  {
    code: "00722284989569498855",
    slug: "grosir-listrik-maju-terus-palembang",
    name: "GROSIR LISTRIK MAJU TERUS",
    status: "Terverifikasi",
    address:
      "Jalan Mesjid Lama No. 26, depan Lorong Basah, 17 Ilir, Kecamatan Ilir Timur I, Kota Palembang, Sumatera Selatan 30125",
    shortAddress: "Jalan Mesjid Lama No. 26, depan Lorong Basah, 17 Ilir",
    area: "17 Ilir, Ilir Timur I",
    postalCode: "30125",
    landmark: "Depan Lorong Basah",
    phone: "0811-791-089",
    closeTime: "17:00",
    googleRating: 5.0,
    googleReviewCount: 6,
    businessCategory: "Toko alat listrik di Palembang, Sumatera Selatan",
    mapsUrl: "https://maps.app.goo.gl/uQjfvzwtmCqjYCLw7",
    description:
      "Grosir listrik di Jalan Mesjid Lama Palembang untuk suplai alat listrik partai, reseller, teknisi, dan kebutuhan proyek.",
    keywords: ["grosir listrik Palembang", "grosir listrik Maju Terus", "alat listrik murah Palembang"]
  },
  {
    slug: "toko-listrik-natasa-mesjid-lama",
    name: "TOKO LISTRIK NATASA",
    status: "Terverifikasi",
    address:
      "Jalan Mesjid Lama No. 8 / 1022, depan Bank BNI 46 Air Mancur, Kecamatan Ilir Timur I, Kota Palembang, Sumatera Selatan 30111",
    shortAddress: "Depan Bank BNI Air Mancur, Jalan Mesjid Lama No. 8, 16 Ilir",
    area: "16 Ilir, Ilir Timur I",
    postalCode: "30111",
    landmark: "Depan Bank BNI 46 Air Mancur",
    phone: "0812-7217-7300",
    closeTime: "16:00",
    googleRating: 4.8,
    googleReviewCount: 56,
    businessCategory: "Toko alat listrik di Palembang, Sumatera Selatan",
    mapsUrl: "https://maps.app.goo.gl/iEb1dhr4wSLX5Wr96",
    description:
      "Distributor dan supplier grosir alat-alat listrik Palembang terlengkap di Jalan Mesjid Lama untuk rumah, toko, kontraktor, dan proyek.",
    keywords: ["Toko listrik Natasa", "grosir alat listrik Palembang", "supplier alat listrik Palembang"]
  },
  {
    slug: "distributor-grosir-alat-listrik-palembang",
    name: "Distributor dan Supplier Grosir Alat-Alat Listrik Palembang Terlengkap",
    status: "Terverifikasi",
    address:
      "Jalan Mesjid Lama No. 8 / 1022, depan Bank BNI 46 Air Mancur, Kecamatan Ilir Timur I, Kota Palembang, Sumatera Selatan 30111",
    shortAddress: "Jalan Mesjid Lama No. 8 / 1022, depan Bank BNI 46 Air Mancur",
    area: "16 Ilir, Ilir Timur I",
    postalCode: "30111",
    landmark: "Depan Bank BNI 46 Air Mancur",
    phone: "0812-7217-7300",
    closeTime: "16:00",
    googleRating: 4.9,
    googleReviewCount: 17,
    businessCategory: "Toko alat listrik di Palembang, Sumatera Selatan",
    mapsUrl: "https://maps.app.goo.gl/Z9YLx28EDbm9NBw16",
    description:
      "Listing distributor dan supplier grosir alat-alat listrik Palembang untuk kebutuhan kabel, panel, lampu, saklar, stop kontak, dan komponen listrik proyek.",
    keywords: [
      "distributor komponen listrik Sumatera Selatan",
      "supplier grosir alat listrik Palembang",
      "grosir alat listrik murah Palembang"
    ]
  }
];

export const primaryLocation = storeLocations.find(
  (location) => location.slug === "toko-listrik-natasa-mesjid-lama"
)!;

export function getLocationBySlug(slug: string) {
  return storeLocations.find((location) => location.slug === slug);
}

export function getLocationUrl(location: StoreLocation) {
  return `${siteUrl}/lokasi/${location.slug}`;
}

export function getLocationJsonLd(location: StoreLocation) {
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalSupplyStore",
    "@id": `${getLocationUrl(location)}#localbusiness`,
    name: location.name,
    url: getLocationUrl(location),
    telephone: location.phone,
    priceRange: "Rp",
    image: `${siteUrl}/images/products/mcb-schneider.webp`,
    hasMap: location.mapsUrl,
    description: location.description,
    aggregateRating: location.googleRating && location.googleReviewCount
      ? {
          "@type": "AggregateRating",
          ratingValue: location.googleRating,
          reviewCount: location.googleReviewCount
        }
      : undefined,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: location.phone,
      contactType: "sales",
      areaServed: "ID",
      availableLanguage: ["Indonesian"]
    },
    paymentAccepted: "Cash, Bank Transfer, QRIS",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.name.includes("Energy") ? "Penukal Abab Lematang Ilir" : "Kota Palembang",
      addressRegion: "Sumatera Selatan",
      postalCode: location.postalCode,
      addressCountry: "ID"
    },
    containedInPlace: {
      "@type": "Place",
      name: location.area
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: location.closeTime
      }
    ],
    areaServed: [
      {
        "@type": "State",
        name: "Sumatera Selatan"
      }
    ],
    sameAs: [location.mapsUrl],
    knowsAbout: location.keywords
  };
}
