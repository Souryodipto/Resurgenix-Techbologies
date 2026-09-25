import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

/**
 * Route handler for /sites.xml
 * Returns canonical XML sitemap covering all public pages,
 * solutions, industry verticals, comparisons, and resource articles.
 */
export async function GET() {
  const routes = sitemap();

  const xmlEntries = routes
    .map((item) => {
      const lastmod = item.lastModified
        ? `    <lastmod>${new Date(item.lastModified).toISOString()}</lastmod>\n`
        : "";
      const changefreq = item.changeFrequency
        ? `    <changefreq>${item.changeFrequency}</changefreq>\n`
        : "";
      const priority =
        item.priority !== undefined
          ? `    <priority>${item.priority.toFixed(1)}</priority>\n`
          : "";

      return `  <url>\n    <loc>${item.url}</loc>\n${lastmod}${changefreq}${priority}  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}
