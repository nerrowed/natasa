import type { StoreLocation } from "@/lib/locations";

export const SITE_NAME = "Toko Listrik Natasa";

export const SEO_TITLE = "Toko Listrik Terdekat | Toko Listrik Palembang Natasa";

export const LISTING_SEO_TITLE =
  "Toko Listrik Terdekat Palembang | Daftar Toko & Maps";

export const primarySeoKeywords = [
  "toko listrik terdekat",
  "toko listrik terdekat terlengkap",
  "toko listrik lengkap terdekat",
  "toko listrik terdekat dari lokasi saya",
  "toko listrik",
  "toko listrik palembang"
];

export const homeDescription =
  "Cari toko listrik terdekat dan toko listrik Palembang? Natasa Mesjid Lama menyediakan kabel, MCB, panel, lampu LED, saklar, stop kontak, dan alat proyek.";

export const listingDescription =
  "Cek toko listrik terdekat Palembang area Mesjid Lama, Pasar 16, 16 Ilir, dan Ilir Timur I lengkap dengan alamat, rating, jam buka, dan Maps.";

export function mergeKeywords(...keywordGroups: string[][]) {
  return Array.from(new Set(keywordGroups.flat().map((keyword) => keyword.trim()).filter(Boolean)));
}

export function getLocationDescription(location: StoreLocation) {
  const displayName = location.name.startsWith("Distributor dan Supplier")
    ? "Grosir alat listrik Palembang"
    : location.name;

  return `${displayName}, toko listrik terdekat area ${location.area}. Stok kabel, MCB, panel, lampu LED, saklar, stop kontak. Buka sampai ${location.closeTime}.`;
}

export function getLocationTitle(location: StoreLocation) {
  if (location.slug === "toko-listrik-natasa-mesjid-lama") {
    return "Toko Listrik Terdekat Palembang | Natasa Mesjid Lama";
  }

  const displayName = location.name.startsWith("Distributor dan Supplier")
    ? "Grosir Alat Listrik Palembang"
    : location.name;
  const areaLabel = location.area.includes("PALI") ? "PALI" : location.area;

  return `${displayName} | Toko Listrik ${areaLabel}`;
}

export function getLocationKeywords(location: StoreLocation) {
  return mergeKeywords(primarySeoKeywords, ["toko listrik palembang"], location.keywords, [location.area]);
}
