import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries, getIndustryBySlug } from "@/content/industries";
import { IndustryTemplate } from "@/components/sections/IndustryTemplate";

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

  return {
    title: industry.seoTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.seoTitle,
      description: industry.metaDescription,
      url: `/industries/${industry.slug}`,
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
}
