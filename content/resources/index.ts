import { ResourceArticle } from "../types";
import { pillarArticle } from "./pillar";
import { clusterCoreArticles } from "./cluster-core";
import { clusterSecurityArticles } from "./cluster-security";
import { clusterOperationsArticles } from "./cluster-operations";
import { comparisonsData, getComparisonBySlug } from "./comparisonsData";

export const allArticles: ResourceArticle[] = [
  pillarArticle,
  ...clusterCoreArticles,
  ...clusterSecurityArticles,
  ...clusterOperationsArticles,
];

// Re-export for standard imports
export const articles = allArticles;
export const comparisons = comparisonsData;
export { getComparisonBySlug };

// Aliases mapping for backward compatibility and clean canonical redirects
const articleAliases: Record<string, string> = {
  "how-ai-video-analytics-works": "how-to-add-ai-to-existing-cctv-cameras",
  "ai-cctv-vs-traditional-cctv-guide": "ai-cctv-vs-traditional-cctv",
};

export function getArticleBySlug(slug: string): ResourceArticle | undefined {
  const targetSlug = articleAliases[slug] || slug;
  return allArticles.find((art) => art.slug === targetSlug || art.slug === slug);
}
