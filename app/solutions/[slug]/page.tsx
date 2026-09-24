import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { solutions, getSolutionBySlug } from "@/content/solutions";
import { SolutionTemplate } from "@/components/sections/SolutionTemplate";
import { siteConfig } from "@/content/site.config";

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

  return {
    title: `${solution.seoTitle}`,
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
          url: "/images/resurgenix-video-poster.jpg",
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
      images: ["/images/resurgenix-video-poster.jpg"],
    },
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return <SolutionTemplate solution={solution} />;
}
