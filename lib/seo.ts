import type { StoreLocation } from "@/lib/locations";

export const SEO_TITLE = "toko listrik palembang";

export const primarySeoKeywords = [
  "toko listrik terdekat",
  "toko listrik",
  "toko listrik palembang"
];

export const homeDescription =
  "Butuh toko listrik terdekat di Palembang? Natasa menyediakan kabel, MCB, lampu, dan perlengkapan instalasi untuk rumah, toko, dan proyek.";

export const listingDescription =
  "Jelajahi toko listrik Palembang di area Mesjid Lama, Pasar 16, dan Ilir Timur I, lengkap dengan alamat, jam buka, kontak, serta akses Google Maps.";

export function mergeKeywords(...keywordGroups: string[][]) {
  return Array.from(new Set(keywordGroups.flat().map((keyword) => keyword.trim()).filter(Boolean)));
}

export function getLocationDescription(location: StoreLocation) {
  const localHint = location.landmark
    ? `Dekat ${location.landmark.toLowerCase()}`
    : `Area ${location.area}`;

  return `${location.name} adalah toko listrik di ${location.shortAddress}. ${localHint}, melayani kabel, MCB, lampu, dan kebutuhan instalasi hingga pukul ${location.closeTime} WIB.`;
}

export function getLocationKeywords(location: StoreLocation) {
  return mergeKeywords(primarySeoKeywords, ["toko listrik palembang"], location.keywords, [location.area]);
}
