import { createClient } from "@sanity/client";
import { articlePages, type ArticlePage } from "@/lib/articles";
import { brandPages, type BrandPage } from "@/lib/brands";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-05-01";
const token = process.env.SANITY_API_TOKEN;

const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: !token,
      perspective: "published"
    })
  : null;

const brandQuery = `*[_type == "brandPage" && defined(slug.current)] | order(_createdAt desc) {
  "slug": slug.current,
  name,
  title,
  description,
  h1,
  keywords,
  categories,
  intro,
  buyingTips
}`;

const articleQuery = `*[_type == "article" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
  "slug": slug.current,
  title,
  description,
  h1,
  keywords,
  intro,
  sections[]{heading, body}
}`;

async function fetchSanity<T>(query: string): Promise<T[] | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    const rows = await sanityClient.fetch<T[]>(query, {}, { cache: "no-store" });
    return Array.isArray(rows) && rows.length > 0 ? rows : null;
  } catch {
    return null;
  }
}

export async function getAllBrandPages(): Promise<BrandPage[]> {
  return (await fetchSanity<BrandPage>(brandQuery)) || brandPages;
}

export async function getBrandPageBySlug(slug: string): Promise<BrandPage | undefined> {
  const pages = await getAllBrandPages();
  return pages.find((page) => page.slug === slug);
}

export async function getAllArticlePages(): Promise<ArticlePage[]> {
  return (await fetchSanity<ArticlePage>(articleQuery)) || articlePages;
}

export async function getArticlePageBySlug(slug: string): Promise<ArticlePage | undefined> {
  const pages = await getAllArticlePages();
  return pages.find((page) => page.slug === slug);
}
