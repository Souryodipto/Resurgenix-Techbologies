import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/content/industries";
import { StatusBadge } from "@/components/ui/StatusBadge";

export const metadata: Metadata = {
  title: "Industry Verticals & Sector Surveillance | Resurgenix Technologies",
  description:
    "AI video intelligence tailored for manufacturing plants, corporate campuses, logistics yards, healthcare, retail, and public safety infrastructure.",
};

export default function IndustriesHubPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Industries
        </span>
      </nav>

      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Surveillance Intelligence by Industry Vertical
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Operational security requirements vary drastically between manufacturing perimeters,
          corporate IT floors, and logistics hubs. Resurgenix deploys industry-tailored computer
          vision rules on compatible existing CCTV infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((item) => (
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
                href={`/industries/${item.slug}`}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                Explore Vertical &rarr;
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

        {/* Cross-Link Card for Smart City & Defence */}
        <div className="border border-dashed border-blue-200 bg-blue-50/50 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Institutional Programs
            </span>
            <h2 className="text-lg font-bold text-slate-900 mt-2 mb-3">
              Smart Cities &amp; Defence Installations
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Looking for municipal traffic intelligence or air-gapped defense perimeter
              surveillance? Explore our specialized institutional capability roadmaps.
            </p>
          </div>
          <div className="pt-4 border-t border-blue-100 flex flex-col gap-2">
            <Link
              href="/solutions/smart-city-video-intelligence"
              className="text-xs font-semibold text-blue-700 hover:underline"
            >
              Smart City Intelligence &rarr;
            </Link>
            <Link
              href="/solutions/defence-security"
              className="text-xs font-semibold text-blue-700 hover:underline"
            >
              Defence &amp; Border Surveillance &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
