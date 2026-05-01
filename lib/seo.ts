import type { StoreLocation } from "@/lib/locations";

export const SITE_NAME = "Toko Listrik Natasa";

export const SEO_TITLE = "Toko Listrik Natasa Palembang | Grosir Alat Listrik Mesjid Lama";

export const LISTING_SEO_TITLE =
  "Daftar Toko Listrik Palembang Terdekat | Mesjid Lama & Pasar 16";

export const primarySeoKeywords = [
  "toko listrik terdekat",
  "toko listrik",
  "toko listrik palembang"
];

export const homeDescription =
  "Toko Listrik Natasa Palembang menyediakan kabel, MCB, panel, lampu LED, saklar, stop kontak, dan alat listrik proyek.";

export const listingDescription =
  "Daftar toko listrik Palembang area Mesjid Lama, Pasar 16, 16 Ilir, dan Ilir Timur I lengkap dengan alamat, rating, dan Maps.";

export function mergeKeywords(...keywordGroups: string[][]) {
  return Array.from(new Set(keywordGroups.flat().map((keyword) => keyword.trim()).filter(Boolean)));
}

export function getLocationDescription(location: StoreLocation) {
  const displayName = location.name.startsWith("Distributor dan Supplier")
    ? "Grosir alat listrik Palembang"
    : location.name;

  return `${displayName} toko listrik ${location.area}. Stok kabel, MCB, panel, lampu LED, saklar, dan stop kontak. Buka hingga ${location.closeTime} WIB.`;
}

export function getLocationTitle(location: StoreLocation) {
  const displayName = location.name.startsWith("Distributor dan Supplier")
    ? "Grosir Alat Listrik Palembang"
    : location.name;
  const areaLabel = location.area.includes("PALI") ? "PALI" : location.area;

  return `${displayName} | Toko Listrik ${areaLabel}`;
}

export function getLocationKeywords(location: StoreLocation) {
  return mergeKeywords(primarySeoKeywords, ["toko listrik palembang"], location.keywords, [location.area]);
}
