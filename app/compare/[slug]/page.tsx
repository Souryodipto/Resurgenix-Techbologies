import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { comparisons, getComparisonBySlug } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { siteConfig } from "@/content/site.config";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbListSchema } from "@/components/seo/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((comp) => ({
    slug: comp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};

  const canonicalUrl = `${siteConfig.siteUrl}/compare/${comparison.slug}`;
  const ogUrl = `${siteConfig.siteUrl}/api/og?title=${encodeURIComponent(
    comparison.title
  )}&category=${encodeURIComponent("Technical Comparison")}`;

  return {
    title: comparison.seoTitle,
    description: comparison.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: comparison.seoTitle,
      description: comparison.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.company.brandName,
      type: "article",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `${comparison.title} — Resurgenix`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.seoTitle,
      description: comparison.metaDescription,
      images: [ogUrl],
    },
  };
}

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  const breadcrumbsSchema = getBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: comparison.title, url: `/compare/${comparison.slug}` },
  ]);

  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <JsonLd schema={breadcrumbsSchema} />
      {/* 1. Page Header */}
      <Section background="white" className="pt-8 pb-10 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: comparison.title, href: `/compare/${comparison.slug}` },
            ]}
            className="mb-6"
          />

          <div className="max-w-4xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Objective Architectural Comparison
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              {comparison.h1}
            </h1>
            <p className="text-base sm:text-lg text-[#5B6B7F] leading-relaxed mb-6">
              {comparison.shortSummary}
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Side-by-Side Comparison Table */}
      <Section background="white" className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#F7F9FC] border-b border-[#E2E8F0]">
                      <th className="p-4 sm:p-5 font-extrabold text-[#0B1F3A] w-1/4">
                        Evaluation Criteria
                      </th>
                      <th className="p-4 sm:p-5 font-extrabold text-[#2563EB] w-3/8 bg-blue-50/40 border-x border-[#E2E8F0]">
                        {comparison.entityA}
                      </th>
                      <th className="p-4 sm:p-5 font-extrabold text-[#1F2937] w-3/8">
                        {comparison.entityB}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {comparison.criteria.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#F7F9FC]/60 transition-colors">
                        <td className="p-4 sm:p-5 font-bold text-[#0B1F3A] align-top bg-white">
                          {item.feature}
                        </td>
                        <td className="p-4 sm:p-5 text-[#1F2937] leading-relaxed align-top bg-blue-50/15 border-x border-[#E2E8F0]">
                          {item.descriptionA}
                        </td>
                        <td className="p-4 sm:p-5 text-[#5B6B7F] leading-relaxed align-top bg-white">
                          {item.descriptionB}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Engineering Verdict Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0] shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Engineering Assessment &amp; Verdict
              </span>
              <p className="text-sm sm:text-base text-[#0B1F3A] font-medium leading-relaxed">
                {comparison.verdict}
              </p>
            </div>

            {/* 4. Related Capabilities & Links */}
            <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                Explore Related Architecture &amp; Solutions
              </h3>
              <div className="flex flex-wrap gap-2">
                {comparison.relatedSlugs.map((slugPath) => (
                  <Link
                    key={slugPath}
                    href={`/${slugPath}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[#2563EB] hover:border-[#2563EB] hover:bg-[#F7F9FC] transition shadow-xs"
                  >
                    {slugPath.replace(/-/g, " ")} &rarr;
                  </Link>
                ))}
              </div>
            </div>

            {/* 5. Bottom Conversion CTA */}
            <div className="p-8 rounded-2xl bg-[#0B1F3A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-extrabold text-white mb-1">
                  Evaluate On-Premise vs. Cloud for Your Facility
                </h3>
                <p className="text-xs text-slate-300">
                  Speak with our engineering team to review network bandwidth and camera compatibility.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <LinkButton href="/request-pilot" variant="primary" size="md">
                  Request a Pilot
                </LinkButton>
                <LinkButton
                  href="/request-demo"
                  variant="secondary"
                  size="md"
                  className="text-slate-900 border-slate-300 hover:bg-slate-100"
                >
                  Request a Demo
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
