const { createReadStream, existsSync, statSync } = require("node:fs");
const { createServer } = require("node:http");
const { extname, join, normalize } = require("node:path");

const root = join(__dirname, "out");
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const safePath = normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  const directPath = join(root, safePath);

  if (existsSync(directPath) && statSync(directPath).isFile()) {
    return directPath;
  }

  if (existsSync(`${directPath}.html`)) {
    return `${directPath}.html`;
  }

  const indexPath = join(directPath, "index.html");
  if (existsSync(indexPath)) {
    return indexPath;
  }

  return join(root, "404.html");
}

createServer((request, response) => {
  const filePath = resolvePath(request.url || "/");
  const extension = extname(filePath);
  const statusCode = filePath.endsWith("404.html") ? 404 : 200;

  response.writeHead(statusCode, {
    "Content-Type": contentTypes[extension] || "application/octet-stream",
    "Cache-Control": extension === ".html" ? "public, max-age=0, must-revalidate" : "public, max-age=31536000, immutable"
  });

  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Static site running on port ${port}`);
});
