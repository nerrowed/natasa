# Toko Listrik Natasa

Next.js local business website foundation focused on Core Web Vitals, semantic HTML, Google Business Profile support, and structured data.

## Architecture

- `Next.js App Router`: SSR/SSG-ready pages, metadata API, and server components by default.
- `next/image`: available for future store/product photos with WebP/AVIF negotiation, lazy loading below the fold, and long cache TTL.
- `PostgreSQL`: normalized category, product, inventory, and junction tables with GIN/trigram search indexes.
- `JSON-LD`: ElectricalSupplyStore LocalBusiness schema embedded on the homepage.
- `CSS`: single lightweight global stylesheet, no blocking UI library, no client-side JavaScript on the homepage.

## Folder Structure

```text
toko-listrik-natasa/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    JsonLd.tsx
  db/
    schema.sql
  lib/
    catalog.ts
  public/
    images/
      products/
  next.config.ts
  package.json
  tsconfig.json
```

## SEO Targets

- Meta title: `Toko Listrik Palembang | Natasa Grosir Murah` (47 characters)
- Meta description: `Cari alat listrik murah di Palembang? Natasa siap grosir, ecer, dan pengiriman cepat untuk proyek rumah, toko, hingga industri.` (132 characters)
- Homepage H1: `Toko Listrik Natasa - Pusat Grosir Alat Listrik Palembang`

## Local SEO Rules

- Set `NEXT_PUBLIC_SITE_URL` to the exact canonical domain used in Google Search Console, for example `https://tokolistrikpalembang.com`.
- Replace the placeholder Google URL with the real Google Business Profile or Maps URL.
- Keep NAP data exact: business name, address, phone, opening hours, and website must match Google Business Profile.
- Add review/rating schema only when the ratings are real, visible on-page, and sourced from a compliant first-party review system.
- Use local landing pages for service areas only when each page has unique content and real local relevance.

## Performance Rules

- Put above-the-fold product or hero images behind `priority`; leave the rest as lazy-loaded `next/image`.
- Upload source images at high quality, then store generated `.webp` and let Next.js serve AVIF/WebP variants.
- Keep homepage as a server component unless an interactive feature actually needs client JavaScript.
- Use SSG/ISR for future service, brand, and area pages where content rarely changes.
# natasa
