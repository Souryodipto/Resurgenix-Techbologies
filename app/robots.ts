import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      // 1. Universal Rule: Unrestricted access for all legitimate web crawlers and indexers
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
      // 2. Generative Engine Optimization (GEO) & AI Search Agents:
      // Explicitly allow and prioritize leading AI search engines, answer engines, and LLM web crawlers
      {
        userAgent: [
          // Google AI & Search
          "Googlebot",
          "Google-Extended",
          // OpenAI ChatGPT & Search
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          // Anthropic Claude
          "ClaudeBot",
          "anthropic-ai",
          "Claude-Web",
          // Perplexity AI
          "PerplexityBot",
          // Microsoft Bing & Copilot
          "Bingbot",
          "msnbot",
          // Apple Intelligence & Siri
          "Applebot",
          "Applebot-Extended",
          // Meta AI / Llama
          "Meta-ExternalAgent",
          "FacebookBot",
          // Cohere
          "cohere-ai",
          // Diffbot Knowledge Graph
          "Diffbot",
          // You.com
          "YouBot",
          // Amazon AI
          "Amazonbot",
          // ByteDance / TikTok AI
          "Bytespider",
          // Common Crawl (Foundation for LLMs)
          "CCBot",
        ],
        allow: "/",
        disallow: ["/design-system", "/thank-you/", "/api/"],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sites.xml`,
    ],
    host: baseUrl,
  };
}

