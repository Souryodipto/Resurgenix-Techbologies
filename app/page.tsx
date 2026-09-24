import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { capabilities } from "@/content/capabilities";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      {/* Top Bar Notice */}
      <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-2 text-center text-xs text-slate-600">
        <span className="font-semibold text-slate-900">{siteConfig.company.brandName}</span>{" "}
        Corporate Platform &bull; Step 1: Scaffolding &amp; Configuration Active &bull;{" "}
        <span className="text-slate-500">Kolkata, West Bengal, India</span>
      </div>

      <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              R
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                {siteConfig.company.brandName}
              </span>
              <span className="text-xs text-slate-500 ml-1.5 hidden sm:inline">Technologies</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-md transition-colors"
            >
              <span>WhatsApp us</span>
            </a>
            <Link
              href={siteConfig.cta.primary.href}
              className="inline-flex items-center text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-1.5 rounded-md transition-colors shadow-sm"
            >
              {siteConfig.cta.primary.label}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 w-full">
        {/* Hero Section Preview */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium mb-6">
            <span>Video Intelligence for Existing CCTV Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {siteConfig.company.tagline}
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            {siteConfig.company.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href={siteConfig.cta.primary.href}
              className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-sm text-sm"
            >
              {siteConfig.cta.primary.label}
            </Link>
            <Link
              href={siteConfig.cta.pilot.href}
              className="px-5 py-2.5 rounded-md bg-white text-slate-800 font-medium hover:bg-slate-50 border border-slate-300 transition text-sm"
            >
              {siteConfig.cta.pilot.label}
            </Link>
          </div>
        </div>

        {/* Transformation Pipeline */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-4">
            Visual Intelligence Pipeline
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {[
              "1. See",
              "2. Understand",
              "3. Detect",
              "4. Analyze",
              "5. Alert",
              "6. Record",
              "7. Respond",
            ].map((step) => (
              <div
                key={step}
                className="bg-slate-50 border border-slate-200 rounded p-2.5 text-center text-xs font-medium text-slate-700"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Scaffolding Grid with Status Badges */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Platform Capabilities &amp; Life-Cycle Status
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                Every capability reflects its operational readiness tier from single-source
                configuration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap.slug}
                className="border border-slate-200 rounded-lg p-5 bg-white hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      {cap.name}
                    </h3>
                    <StatusBadge status={cap.status} size="sm" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cap.shortDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  {cap.statusNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 mt-16 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.company.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>{siteConfig.company.fullHqDisplay}</span>
            <span>&bull;</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-blue-600 transition"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
