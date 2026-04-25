-- PostgreSQL schema for Toko Listrik Natasa.
-- Use generated WebP/AVIF product images in the application layer before inserting image_url.

CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS unaccent;

CREATE TABLE categories (
  id BIGSERIAL PRIMARY KEY,
  parent_id BIGINT REFERENCES categories(id) ON DELETE SET NULL,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(140) NOT NULL UNIQUE,
  meta_title VARCHAR(60),
  meta_description VARCHAR(155),
  description TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  category_id BIGINT NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  sku VARCHAR(80) NOT NULL UNIQUE,
  name VARCHAR(180) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  short_description VARCHAR(320) NOT NULL,
  description TEXT,
  brand VARCHAR(120),
  price NUMERIC(14, 2) NOT NULL CHECK (price >= 0),
  compare_at_price NUMERIC(14, 2) CHECK (compare_at_price IS NULL OR compare_at_price >= price),
  image_url TEXT NOT NULL,
  image_alt VARCHAR(180) NOT NULL,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  is_bestseller BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  search_vector TSVECTOR GENERATED ALWAYS AS (
    setweight(to_tsvector('simple', unaccent(coalesce(name, ''))), 'A') ||
    setweight(to_tsvector('simple', unaccent(coalesce(brand, ''))), 'B') ||
    setweight(to_tsvector('simple', unaccent(coalesce(short_description, ''))), 'C')
  ) STORED,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE inventory (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  warehouse_name VARCHAR(120) NOT NULL DEFAULT 'Toko Listrik Natasa Palembang',
  quantity_on_hand INTEGER NOT NULL DEFAULT 0 CHECK (quantity_on_hand >= 0),
  quantity_reserved INTEGER NOT NULL DEFAULT 0 CHECK (quantity_reserved >= 0),
  reorder_level INTEGER NOT NULL DEFAULT 5 CHECK (reorder_level >= 0),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (product_id, warehouse_name),
  CHECK (quantity_reserved <= quantity_on_hand)
);

CREATE TABLE product_categories (
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  category_id BIGINT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, category_id)
);

-- Fast homepage query indexes.
CREATE INDEX idx_categories_active_sort ON categories (is_active, sort_order, name);
CREATE INDEX idx_products_homepage_featured ON products (is_active, is_featured, is_bestseller, category_id, price);
CREATE INDEX idx_products_category_active_price ON products (category_id, is_active, price);
CREATE INDEX idx_inventory_product_available ON inventory (product_id, quantity_on_hand) WHERE quantity_on_hand > 0;

-- Search indexes for keyword, local SEO landing pages, and product search.
CREATE INDEX idx_products_search_vector ON products USING GIN (search_vector);
CREATE INDEX idx_products_name_trgm ON products USING GIN (name gin_trgm_ops);
CREATE INDEX idx_products_brand_trgm ON products USING GIN (brand gin_trgm_ops);

-- Example homepage query should stay covered by indexes above.
-- SELECT p.id, p.name, p.slug, p.price, p.image_url, p.image_alt, c.name AS category_name, i.quantity_on_hand
-- FROM products p
-- JOIN categories c ON c.id = p.category_id
-- JOIN inventory i ON i.product_id = p.id
-- WHERE p.is_active = TRUE
--   AND p.is_featured = TRUE
--   AND i.quantity_on_hand > 0
-- ORDER BY p.is_bestseller DESC, p.updated_at DESC
-- LIMIT 12;
