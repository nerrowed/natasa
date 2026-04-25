const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tokolistrikpalembang.com";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");
export const defaultPhone = "+62-711-000-000";
export const whatsappNumber = defaultPhone.replace(/\D/g, "");

export const businessKeywords = [
  "Toko listrik Natasa",
  "Toko listrik Palembang",
  "Grosir alat listrik murah Palembang",
  "Distributor komponen listrik Sumatera Selatan",
  "Toko alat listrik terdekat dan terlengkap"
];
