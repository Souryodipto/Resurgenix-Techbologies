import { CapabilityStatus } from "./capabilities";

export interface CTAConfig {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SolutionEntry {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  shortAnswer: string; // Answer-first 40 to 60 word concise definition
  problem: string;
  capabilities: string[];
  howItWorks: string[];
  requirements: string[];
  useCases: string[];
  limitations: string[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  ctaPrimary: CTAConfig;
  ctaSecondary: CTAConfig;
  status: CapabilityStatus;
}

export interface IndustryEntry {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  shortAnswer: string; // Answer-first 40 to 60 word concise definition
  problem: string;
  capabilities: string[];
  howItWorks: string[];
  requirements: string[];
  useCases: string[];
  limitations: string[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  ctaPrimary: CTAConfig;
  ctaSecondary: CTAConfig;
  status: CapabilityStatus;
}

export interface ResourceArticle {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  category: "guide" | "compliance" | "architecture";
  publishDate: string;
  readTime: string;
  shortSummary: string;
  relatedSlugs: string[];
}

export interface ComparisonEntry {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  shortSummary: string;
  entityA: string;
  entityB: string;
  criteria: {
    feature: string;
    descriptionA: string;
    descriptionB: string;
  }[];
  verdict: string;
  relatedSlugs: string[];
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  acronym?: string;
  shortDefinition: string;
  category: "AI & Computer Vision" | "Surveillance Hardware" | "Compliance & Standards";
  relatedSolutionSlugs: string[];
}

export interface NavLinkItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavSection {
  title: string;
  items: NavLinkItem[];
}
