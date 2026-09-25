import { NextResponse } from "next/server";
import robots from "@/app/robots";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

/**
 * Route handler for /robot.txt (singular alias for /robots.txt)
 * Generates identical compliant directives so all search bots and GEO crawlers
 * receive full access even when querying /robot.txt.
 */
export async function GET() {
  const config = robots();
  const lines: string[] = [];

  const rules = Array.isArray(config.rules) ? config.rules : [config.rules];

  for (const rule of rules) {
    if (!rule) continue;
    const agents = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent || "*"];
    for (const agent of agents) {
      lines.push(`User-agent: ${agent}`);
    }
    if (rule.allow) {
      const allows = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
      for (const a of allows) lines.push(`Allow: ${a}`);
    }
    if (rule.disallow) {
      const disallows = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
      for (const d of disallows) lines.push(`Disallow: ${d}`);
    }
    lines.push("");
  }

  if (config.sitemap) {
    const sitemaps = Array.isArray(config.sitemap) ? config.sitemap : [config.sitemap];
    for (const sm of sitemaps) {
      lines.push(`Sitemap: ${sm}`);
    }
  }

  if (config.host) {
    lines.push(`Host: ${config.host}`);
  }

  return new NextResponse(lines.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
