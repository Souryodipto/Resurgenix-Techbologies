import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries, getIndustryBySlug } from "@/content/industries";
import { IndustryTemplate } from "@/components/sections/IndustryTemplate";
import { siteConfig } from "@/content/site.config";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbListSchema } from "@/components/seo/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const canonicalUrl = `${siteConfig.siteUrl}/industries/${industry.slug}`;
  const ogUrl = `${siteConfig.siteUrl}/api/og?title=${encodeURIComponent(
    industry.title
  )}&category=${encodeURIComponent("Industry Solution")}`;

  return {
    title: industry.seoTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: industry.seoTitle,
      description: industry.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.company.brandName,
      type: "website",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `${industry.title} — Resurgenix`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.seoTitle,
      description: industry.metaDescription,
      images: [ogUrl],
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbsSchema = getBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: industry.title, url: `/industries/${industry.slug}` },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbsSchema} />
      <IndustryTemplate industry={industry} />
    </>
  );
}
