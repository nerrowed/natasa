import type { MetadataRoute } from "next";
import { storeLocations } from "@/lib/locations";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/toko-listrik-palembang`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...storeLocations.map((location) => ({
      url: `${siteUrl}/lokasi/${location.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: location.slug === "toko-listrik-natasa-mesjid-lama" ? 0.85 : 0.75
    }))
  ];
}
