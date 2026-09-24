import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { articles, comparisons } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  // Base stable publication date for verified static platform pages
  const platformStableDate = new Date("2026-09-24T00:00:00Z");

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: platformStableDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: platformStableDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: platformStableDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: platformStableDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/security-and-privacy`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations/kolkata-eastern-india`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/request-demo`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/request-pilot`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/pilot-readiness-checklist`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/cctv-ai-readiness-assessment`,
      lastModified: platformStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: platformStableDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: platformStableDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 9 Solutions
  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: platformStableDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 7 Industries
  const industryRoutes: MetadataRoute.Sitemap = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: platformStableDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 15 Resource Articles (with accurate frontmatter modification dates)
  const articleRoutes: MetadataRoute.Sitemap = articles.map((art) => ({
    url: `${baseUrl}/resources/${art.slug}`,
    lastModified: new Date(art.updatedDate || art.publishDate || "2026-09-24"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // 3 Comparison Pages
  const comparisonRoutes: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: platformStableDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...comparisonRoutes,
    ...articleRoutes,
  ];
}
