#!/usr/bin/env node
// Renders the CV pages of the already-built site to PDF using headless
// Chrome (Chromium's PDF printing always applies @media print, see
// _sass/_print.scss). Run after `bundle exec jekyll build`:
//
//   node bin/generate-pdfs.mjs [path/to/_site]

import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, dirname } from "node:path";
import { chromium } from "playwright";

const SITE_DIR = process.argv[2] || "_site";
const PORT = 4173;

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const PAGES = [
  { path: "/cv/", out: "assets/pdf/marc-gillioz-resume.pdf" },
  { path: "/cv/academic/", out: "assets/pdf/marc-gillioz-cv.pdf" },
];

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        let urlPath = decodeURIComponent(req.url.split("?")[0]);
        if (urlPath.endsWith("/")) urlPath += "index.html";
        const filePath = join(SITE_DIR, urlPath);
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": MIME_TYPES[extname(filePath)] || "application/octet-stream" });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function main() {
  const server = await startServer();
  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();
    for (const { path, out } of PAGES) {
      const url = `http://localhost:${PORT}${path}`;
      const outPath = join(SITE_DIR, out);
      console.log(`Rendering ${url} -> ${out}`);
      await page.goto(url, { waitUntil: "networkidle" });
      await mkdir(dirname(outPath), { recursive: true });
      await page.pdf({ path: outPath, format: "A4", printBackground: true });
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("PDFs generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
