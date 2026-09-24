import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "How It Works: Connecting AI to Existing CCTV | Resurgenix",
  description:
    "See how Resurgenix connects to compatible existing IP cameras, RTSP feeds, and NVRs without replacing hardware. The 7-stage vision intelligence pipeline.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      name: "See",
      desc: "Ingest live RTSP video feeds from compatible IP cameras, NVRs, DVRs, or XVRs.",
    },
    {
      num: "02",
      name: "Understand",
      desc: "Define spatial zones, boundaries, and contextual monitoring parameters.",
    },
    {
      num: "03",
      name: "Detect",
      desc: "Classify persons, vehicles, objects, and line-crossing movements in real time.",
    },
    {
      num: "04",
      name: "Analyze",
      desc: "Filter environmental noise (wind, rain, animals, shadows) to prevent false alerts.",
    },
    {
      num: "05",
      name: "Alert",
      desc: "Dispatch sub-second visual alerts and audible triggers to operators and webhooks.",
    },
    {
      num: "06",
      name: "Record",
      desc: "Log structured, searchable metadata and timestamped incident snapshots.",
    },
    {
      num: "07",
      name: "Respond",
      desc: "Enable immediate physical verification and intervention before loss occurs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          How It Works
        </span>
      </nav>

      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          How Resurgenix Adds AI to Existing CCTV Infrastructure
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          You do not need to replace operational cameras, pull new cables, or buy proprietary
          hardware. Resurgenix attaches an intelligent computer vision layer directly to your
          compatible video streams.
        </p>
      </div>

      {/* 7-Stage Pipeline */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-slate-900 mb-6">
          The 7-Stage Visual Intelligence Pipeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((st) => (
            <div key={st.num} className="border border-slate-200 rounded-lg p-5 bg-white">
              <span className="text-xs font-mono font-bold text-blue-600">{st.num}</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">{st.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Evaluate on Your Existing Cameras</h3>
          <p className="text-xs text-slate-600 mt-1">
            Request a controlled pilot on 3 to 5 cameras to test detection accuracy in your live
            environment.
          </p>
        </div>
        <Link
          href={siteConfig.cta.pilot.href}
          className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm whitespace-nowrap shadow-sm transition"
        >
          {siteConfig.cta.pilot.label}
        </Link>
      </div>
    </div>
  );
}
