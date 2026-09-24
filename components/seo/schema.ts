import { siteConfig } from "@/content/site.config";
import { companyFacts } from "@/content/facts";

const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

/**
 * Sitewide Organization Schema
 * Strictly adheres to verified facts: no street address, ratings, prices, or employee count.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: companyFacts.legalName,
    alternateName: companyFacts.brandName,
    url: baseUrl,
    logo: `${baseUrl}/images/resurgenix-video-poster.jpg`,
    description: companyFacts.description,
    sameAs: [companyFacts.social.linkedin, companyFacts.social.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyFacts.contact.phone,
      contactType: "sales",
      email: companyFacts.contact.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: companyFacts.headquarters.locality,
      addressRegion: companyFacts.headquarters.region,
      addressCountry: companyFacts.headquarters.country,
    },
    areaServed: "India",
    founder: {
      "@type": "Person",
      name: companyFacts.founder.name,
      jobTitle: companyFacts.founder.role,
    },
    knowsAbout: companyFacts.knowsAbout,
  };
}

/**
 * Sitewide WebSite Schema
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: companyFacts.brandName,
    url: baseUrl,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };
}

/**
 * Universal BreadcrumbList Schema
 */
export function getBreadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Solution Page Service Schema
 * Provider linked to Organization @id
 */
export function getServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
  audience?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : `${baseUrl}${opts.url}`,
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    serviceType: "AI Video Analytics",
    audience: {
      "@type": "Audience",
      audienceType: opts.audience || "Enterprise Security & Operations Teams",
    },
  };
}

/**
 * SoftwareApplication Schema (for core platform pillar only, zero invented prices or ratings)
 */
export function getSoftwareApplicationSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : `${baseUrl}${opts.url}`,
    applicationCategory: "SecurityApplication",
    operatingSystem: "Linux (Edge Appliance / On-Premise Server)",
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
  };
}

/**
 * Article / BlogPosting Schema
 */
export function getArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url.startsWith("http") ? opts.url : `${baseUrl}${opts.url}`,
    },
    author: {
      "@type": "Person",
      name: opts.authorName || companyFacts.founder.name,
      jobTitle: companyFacts.founder.role,
    },
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    image: `${baseUrl}/api/og?title=${encodeURIComponent(opts.title)}`,
  };
}

/**
 * FAQPage Schema
 * MUST ONLY be applied when questions and answers are visibly rendered on the page.
 */
export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/**
 * AboutPage Schema
 */
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${baseUrl}/about/#webpage`,
    url: `${baseUrl}/about`,
    name: "About Resurgenix Technologies",
    description: companyFacts.description,
    mainEntity: {
      "@id": `${baseUrl}/#organization`,
    },
  };
}
