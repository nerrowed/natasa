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
  "Butuh toko listrik terdekat di Palembang? Natasa menyediakan kabel, MCB, panel, lampu LED, saklar, stop kontak, dan perlengkapan instalasi untuk rumah, toko, teknisi, kontraktor, dan proyek.";

export const listingDescription =
  "Jelajahi daftar toko listrik Palembang di area Mesjid Lama, Pasar 16, 16 Ilir, Ilir Timur I, dan Sumatera Selatan lengkap dengan alamat, jam buka, kontak, rating, serta akses Google Maps.";

export function mergeKeywords(...keywordGroups: string[][]) {
  return Array.from(new Set(keywordGroups.flat().map((keyword) => keyword.trim()).filter(Boolean)));
}

export function getLocationDescription(location: StoreLocation) {
  const localHint = location.landmark
    ? `Dekat ${location.landmark.toLowerCase()}`
    : `Area ${location.area}`;

  return `${location.name} adalah toko listrik di ${location.shortAddress}. ${localHint}, melayani kabel listrik, MCB, panel, lampu LED, saklar, stop kontak, dan kebutuhan instalasi hingga pukul ${location.closeTime} WIB.`;
}

export function getLocationTitle(location: StoreLocation) {
  const displayName = location.name.startsWith("Distributor dan Supplier")
    ? "Distributor Grosir Alat Listrik Palembang"
    : location.name;
  const areaLabel = location.area.includes("PALI") ? "PALI" : location.area;

  return `${displayName} - Toko Listrik ${areaLabel}`;
}

export function getLocationKeywords(location: StoreLocation) {
  return mergeKeywords(primarySeoKeywords, ["toko listrik palembang"], location.keywords, [location.area]);
}
