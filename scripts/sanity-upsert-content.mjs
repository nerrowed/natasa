import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-05-01";

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/sanity-upsert-content.mjs path/to/content.json");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
const payload = JSON.parse(await readFile(file, "utf8"));
const docs = Array.isArray(payload) ? payload : [payload];

for (const doc of docs) {
  if (!doc._type || !doc.slug?.current) {
    throw new Error("Each document needs _type and slug.current");
  }

  const _id = `${doc._type}.${doc.slug.current}`;
  await client.createOrReplace({ ...doc, _id });
  console.log(`upserted ${_id}`);
}
