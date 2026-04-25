const {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync
} = require("node:fs");
const { dirname, join, relative, sep } = require("node:path");

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");
const publicDir = join(root, "public");
const nextStaticDir = join(root, ".next", "static");
const appServerDir = join(root, ".next", "server", "app");

function copyDirContents(from, to) {
  if (!existsSync(from)) return;
  mkdirSync(to, { recursive: true });

  for (const entry of readdirSync(from)) {
    const source = join(from, entry);
    const target = join(to, entry);
    cpSync(source, target, { recursive: statSync(source).isDirectory() });
  }
}

function copyFile(source, target) {
  mkdirSync(dirname(target), { recursive: true });
  cpSync(source, target);
}

function walkHtmlFiles(dir, files = []) {
  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      walkHtmlFiles(path, files);
    } else if (entry.endsWith(".html")) {
      files.push(path);
    }
  }

  return files;
}

function buildFallbackDistFromNextServer() {
  const indexFile = join(appServerDir, "index.html");

  if (!existsSync(indexFile)) {
    console.warn("No out/ folder and no .next/server/app/index.html fallback found.");
    console.warn("Build finished, but Hostinger publish directory may still need adjustment.");
    return;
  }

  copyDirContents(publicDir, distDir);

  if (existsSync(nextStaticDir)) {
    copyDirContents(nextStaticDir, join(distDir, "_next", "static"));
  }

  for (const htmlFile of walkHtmlFiles(appServerDir)) {
    const route = relative(appServerDir, htmlFile);

    if (route === "_global-error.html") continue;

    if (route === "index.html") {
      copyFile(htmlFile, join(distDir, "index.html"));
      continue;
    }

    if (route === "_not-found.html") {
      copyFile(htmlFile, join(distDir, "404.html"));
      continue;
    }

    const routeWithoutExt = route.replace(/\.html$/, "");
    const routeParts = routeWithoutExt.split(sep);
    copyFile(htmlFile, join(distDir, ...routeParts, "index.html"));
  }
}

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(distDir, { recursive: true });

if (existsSync(join(outDir, "index.html"))) {
  copyDirContents(outDir, distDir);
  console.log("Static export verified: out/index.html exists.");
  console.log("Hostinger publish directory prepared: dist/");
  process.exit(0);
}

console.warn("out/index.html was not found. Building Hostinger fallback from .next/server/app.");
buildFallbackDistFromNextServer();

if (existsSync(join(distDir, "index.html"))) {
  console.log("Hostinger fallback publish directory prepared: dist/");
  process.exit(0);
}

console.warn("Could not prepare dist/index.html. Build will not be failed by this script.");
