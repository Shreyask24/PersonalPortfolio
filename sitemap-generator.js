import fs from "fs";

const domain = "https://shreyaskallurkar.com";

const pages = [
    "/", // your home page
    // Add more pages here if you ever have About, Contact, etc.
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
        .map(
            (page) => `<url>
  <loc>${domain}${page}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>`
        )
        .join("\n")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap, "utf8");

console.log("✅ Sitemap generated at public/sitemap.xml");
