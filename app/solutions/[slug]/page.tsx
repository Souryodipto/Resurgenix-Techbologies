import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { solutions, getSolutionBySlug } from "@/content/solutions";
import { SolutionTemplate } from "@/components/sections/SolutionTemplate";
import { siteConfig } from "@/content/site.config";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbListSchema,
  getServiceSchema,
  getSoftwareApplicationSchema,
  getFAQPageSchema,
} from "@/components/seo/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  const ogUrl = `${siteConfig.siteUrl}/api/og?title=${encodeURIComponent(
    solution.title
  )}&category=${encodeURIComponent("Solution")}`;

  return {
    title: solution.seoTitle,
    description: solution.metaDescription,
    alternates: {
      canonical: `${siteConfig.siteUrl}/solutions/${solution.slug}`,
    },
    openGraph: {
      title: solution.seoTitle,
      description: solution.metaDescription,
      url: `${siteConfig.siteUrl}/solutions/${solution.slug}`,
      siteName: siteConfig.company.brandName,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `${solution.title} — Resurgenix Technologies`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: solution.seoTitle,
      description: solution.metaDescription,
      images: [ogUrl],
    },
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const breadcrumbsSchema = getBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: solution.title, url: `/solutions/${solution.slug}` },
  ]);

  const serviceSchema = getServiceSchema({
    name: solution.title,
    description: solution.shortAnswer || solution.metaDescription,
    url: `/solutions/${solution.slug}`,
  });

  const schemas: Record<string, unknown>[] = [breadcrumbsSchema, serviceSchema];

  // Core platform pillar also includes SoftwareApplication schema
  if (slug === "ai-video-analytics") {
    schemas.push(
      getSoftwareApplicationSchema({
        name: solution.title,
        description: solution.shortAnswer || solution.metaDescription,
        url: `/solutions/${solution.slug}`,
      })
    );
  }

  // FAQPage Schema only when FAQs are visibly rendered on the page
  if (solution.faqs && solution.faqs.length > 0) {
    schemas.push(getFAQPageSchema(solution.faqs));
  }

  return (
    <>
      <JsonLd schema={schemas} />
      <SolutionTemplate solution={solution} />
    </>
  );
}
