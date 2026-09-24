import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/content/solutions";
import { StatusBadge } from "@/components/ui/StatusBadge";

export const metadata: Metadata = {
  title: "AI Video Surveillance Solutions | Resurgenix Technologies",
  description:
    "Explore AI-powered video analytics solutions designed to work on existing CCTV infrastructure. Real-time detection, unauthorized entry alerts, and workforce intelligence.",
};

export default function SolutionsHubPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Solutions
        </span>
      </nav>

      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Intelligent Video Surveillance Solutions
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Modular computer vision software that integrates directly with compatible existing IP
          cameras, RTSP streams, and NVRs. Transform passive surveillance recordings into actionable
          real-time security intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((item) => (
          <div
            key={item.slug}
            className="border border-slate-200 rounded-lg p-6 bg-white hover:border-slate-300 transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <h2 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h2>
                <StatusBadge status={item.status} size="sm" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.shortAnswer}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/solutions/${item.slug}`}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                View Solution &rarr;
              </Link>
              <Link
                href={item.ctaPrimary.href}
                className="text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                {item.ctaPrimary.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
