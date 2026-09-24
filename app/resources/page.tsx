import type { Metadata } from "next";
import Link from "next/link";
import { articles, comparisons } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources, Guides & Surveillance Architecture | Resurgenix",
  description:
    "Technical guides, compliance whitepapers, and architectural comparisons on AI video analytics, existing CCTV integration, and India's DPDP Act.",
};

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Resources
        </span>
      </nav>

      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Surveillance Intelligence Knowledge Base
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Objective architectural analyses, compliance roadmaps, and evaluation checklists designed
          for enterprise CSOs, IT leaders, and facility operations teams.
        </p>
      </div>

      {/* Technical Articles */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
          Technical Guides &amp; Regulatory Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div
              key={art.slug}
              className="border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition"
            >
              <div>
                <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                  {art.category}
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-1.5 mb-3 leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {art.shortSummary}
                </p>
              </div>
              <Link
                href={`/resources/${art.slug}`}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                Read Guide &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Architectural Comparisons */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
          Architectural Comparisons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((comp) => (
            <div
              key={comp.slug}
              className="border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition"
            >
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Comparison
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-1.5 mb-3 leading-snug">
                  {comp.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {comp.shortSummary}
                </p>
              </div>
              <Link
                href={`/compare/${comp.slug}`}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                View Comparison &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Reference Links */}
      <section className="p-6 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Need specific definitions or answers?
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Browse our surveillance engineering glossary or review our full frequently asked
            questions hub.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/glossary"
            className="text-xs font-medium px-4 py-2 rounded border border-slate-300 bg-white hover:bg-slate-50 transition"
          >
            Glossary
          </Link>
          <Link
            href="/faq"
            className="text-xs font-medium px-4 py-2 rounded border border-slate-300 bg-white hover:bg-slate-50 transition"
          >
            FAQ Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
