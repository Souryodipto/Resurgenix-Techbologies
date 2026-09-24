import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { solutions, getSolutionBySlug } from "@/content/solutions";
import { StatusBadge } from "@/components/ui/StatusBadge";

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
    title: solution.seoTitle,
    description: solution.metaDescription,
    alternates: {
      canonical: `/solutions/${solution.slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/solutions" className="hover:text-blue-600">
          Solutions
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          {solution.title}
        </span>
      </nav>

      <div className="flex items-center gap-3 mb-4">
        <StatusBadge status={solution.status} />
        <span className="text-xs font-mono text-slate-400">/{solution.slug}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {solution.h1}
      </h1>

      <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-lg">
        <p className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Direct Answer / Category Definition
        </p>
        <p className="text-base text-slate-800 leading-relaxed font-normal">
          {solution.shortAnswer}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-base font-bold text-slate-900 mb-3">Core Problem Addressed</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{solution.problem}</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-base font-bold text-slate-900 mb-3">Key Capabilities</h2>
          <ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside">
            {solution.capabilities.map((cap, idx) => (
              <li key={idx}>{cap}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <Link
          href={solution.ctaPrimary.href}
          className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm shadow-sm transition"
        >
          {solution.ctaPrimary.label}
        </Link>
        <Link
          href={solution.ctaSecondary.href}
          className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 text-sm transition"
        >
          {solution.ctaSecondary.label}
        </Link>
      </div>
    </div>
  );
}
