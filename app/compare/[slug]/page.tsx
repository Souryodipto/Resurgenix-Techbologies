import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { comparisons, getComparisonBySlug } from "@/content/resources";

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

  return {
    title: comparison.seoTitle,
    description: comparison.metaDescription,
    alternates: {
      canonical: `/compare/${comparison.slug}`,
    },
  };
}

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/resources" className="hover:text-blue-600">
          Resources
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          {comparison.title}
        </span>
      </nav>

      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
        Architectural Comparison
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-6">
        {comparison.h1}
      </h1>

      <p className="text-base text-slate-700 leading-relaxed mb-8">{comparison.shortSummary}</p>

      {/* Comparison Table */}
      <div className="border border-slate-200 rounded-lg overflow-hidden mb-8">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-3 sm:p-4 font-bold text-slate-900 w-1/4">Evaluation Criteria</th>
              <th className="p-3 sm:p-4 font-bold text-blue-700 w-3/8 bg-blue-50/50">
                {comparison.entityA}
              </th>
              <th className="p-3 sm:p-4 font-bold text-slate-700 w-3/8">{comparison.entityB}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {comparison.criteria.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50">
                <td className="p-3 sm:p-4 font-medium text-slate-900 align-top">{item.feature}</td>
                <td className="p-3 sm:p-4 text-slate-700 align-top bg-blue-50/20">
                  {item.descriptionA}
                </td>
                <td className="p-3 sm:p-4 text-slate-600 align-top">{item.descriptionB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg mb-8">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
          Engineering Verdict
        </h2>
        <p className="text-sm text-slate-800 leading-relaxed">{comparison.verdict}</p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/request-pilot"
          className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm shadow-sm transition"
        >
          Request a Pilot
        </Link>
        <Link
          href="/how-it-works"
          className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 text-sm transition"
        >
          Explore Architecture
        </Link>
      </div>
    </div>
  );
}
