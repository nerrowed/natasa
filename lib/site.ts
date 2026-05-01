import { mergeKeywords, primarySeoKeywords } from "@/lib/seo";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tokolistrikpalembang.com";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");
export const defaultPhone = "+62-812-7217-7300";
export const whatsappNumber = defaultPhone.replace(/\D/g, "");

export const businessKeywords = mergeKeywords(primarySeoKeywords, [
  "toko listrik natasa",
  "grosir alat listrik murah palembang",
  "distributor komponen listrik sumatera selatan",
  "toko alat listrik terdekat dan terlengkap"
]);
