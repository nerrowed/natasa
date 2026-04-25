const { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } = require("node:fs");
const { join } = require("node:path");

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");
const indexFile = join(outDir, "index.html");

if (!existsSync(outDir) || !existsSync(indexFile)) {
  console.error("Static export failed: expected out/index.html after next build.");
  console.error("Check that next.config.mjs contains output: \"export\".");
  process.exit(1);
}

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(distDir, { recursive: true });

for (const entry of readdirSync(outDir)) {
  const from = join(outDir, entry);
  const to = join(distDir, entry);
  cpSync(from, to, { recursive: statSync(from).isDirectory() });
}

console.log("Static export verified: out/index.html exists.");
console.log("Fallback publish directory created: dist/");
