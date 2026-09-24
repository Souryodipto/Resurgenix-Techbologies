import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/content/glossary";

export const metadata: Metadata = {
  title: "Surveillance AI & Computer Vision Glossary | Resurgenix",
  description:
    "A clear, practical glossary of terms in video analytics, camera protocols (RTSP, ONVIF), edge AI, DPDP Act compliance, and physical security intelligence.",
};

export default function GlossaryPage() {
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
          Glossary
        </span>
      </nav>

      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
        Technical Reference &amp; Terminology
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-6">
        Surveillance AI &amp; Video Intelligence Glossary
      </h1>

      <p className="text-base text-slate-700 leading-relaxed mb-10">
        Clear, factual definitions of technical protocols, computer vision architectures, and
        regulatory terms commonly used across enterprise surveillance projects.
      </p>

      <div className="space-y-6">
        {glossaryTerms.map((term) => (
          <div key={term.slug} className="border border-slate-200 rounded-lg p-5 bg-white">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h2 className="text-lg font-bold text-slate-900">{term.term}</h2>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                {term.category}
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">{term.shortDefinition}</p>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span>Related Capabilities:</span>
              {term.relatedSolutionSlugs.map((sSlug) => (
                <Link
                  key={sSlug}
                  href={`/solutions/${sSlug}`}
                  className="text-blue-600 hover:underline"
                >
                  {sSlug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
