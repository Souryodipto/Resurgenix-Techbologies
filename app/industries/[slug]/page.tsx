import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { industries, getIndustryBySlug } from "@/content/industries";
import { StatusBadge } from "@/components/ui/StatusBadge";

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
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/industries" className="hover:text-blue-600">
          Industries
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          {industry.title}
        </span>
      </nav>

      <div className="flex items-center gap-3 mb-4">
        <StatusBadge status={industry.status} />
        <span className="text-xs font-mono text-slate-400">/industries/{industry.slug}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {industry.h1}
      </h1>

      <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-lg">
        <p className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Sector Overview &amp; Impact
        </p>
        <p className="text-base text-slate-800 leading-relaxed font-normal">
          {industry.shortAnswer}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-base font-bold text-slate-900 mb-3">Operational Challenges</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{industry.problem}</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-base font-bold text-slate-900 mb-3">Tailored Capabilities</h2>
          <ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside">
            {industry.capabilities.map((cap, idx) => (
              <li key={idx}>{cap}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <Link
          href={industry.ctaPrimary.href}
          className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm shadow-sm transition"
        >
          {industry.ctaPrimary.label}
        </Link>
        <Link
          href={industry.ctaSecondary.href}
          className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 text-sm transition"
        >
          {industry.ctaSecondary.label}
        </Link>
      </div>
    </div>
  );
}
