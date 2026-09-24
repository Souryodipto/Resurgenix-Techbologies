import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/design-system",
          "/thank-you/",
          "/api/",
          "/request-demo/thank-you",
          "/request-pilot/thank-you",
          "/contact/thank-you",
        ],
      },
      // Explicitly allow leading AI search engines and search crawlers
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot",
        ],
        allow: "/",
        disallow: ["/design-system", "/thank-you/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
