import type { Metadata } from "next";
import Link from "next/link";
import { DemoForm } from "@/components/forms/DemoForm";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Request a Demo | Resurgenix AI Video Analytics",
  description:
    "Schedule a technical demonstration of Resurgenix AI video intelligence on your existing CCTV infrastructure. Zero camera replacements required.",
  alternates: {
    canonical: "/request-demo",
  },
  openGraph: {
    title: "Request a Demo | Resurgenix AI Video Analytics",
    description:
      "Schedule a technical demonstration of Resurgenix AI video intelligence on your existing CCTV infrastructure.",
    url: "/request-demo",
    type: "website",
  },
};

export default function RequestDemoPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-slate-500 mb-6 flex items-center gap-2"
        >
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-medium" aria-current="page">
            Request a Demo
          </span>
        </nav>

        {/* Header Block */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Technical Demonstration
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            See Resurgenix in action on your cameras
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Discover how Resurgenix adds an AI detection layer to your existing IP or analog CCTV
            streams without replacing cameras or pulling new cabling. Complete this form to schedule
            a focused demonstration tailored to your facility.
          </p>
        </div>

        {/* Main Grid: Form on Left, "What Happens Next" + Direct Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <DemoForm />
          </div>

          {/* Right Column: Process & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* What Happens Next Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
              <h2 className="text-base font-bold text-navy-900 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                What happens next
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wide">
                      Technical Review
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Our solutions team examines your site requirements, camera count, and primary
                      detection needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wide">
                      Discovery Call
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      A brief conversation to understand your control room workflow, network
                      constraints, and alert priorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wide">
                      Interactive Live Demo
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      We showcase live computer vision inference on sample CCTV feeds matching your
                      lighting and environmental conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wide">
                      Assessment &amp; Pilot Scope
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      If aligned, we outline a low-footprint on-premise pilot on 4 to 8 critical
                      cameras to validate detection performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Channels Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-2xs">
              <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3">
                Prefer to speak directly?
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Connect directly with our engineering and commercial leadership team in Kolkata:
              </p>

              <div className="space-y-3 text-xs">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-medium transition-colors"
                >
                  <span className="text-base">💬</span>
                  <div>
                    <span className="font-semibold block">Chat on WhatsApp</span>
                    <span className="text-emerald-700 text-[11px]">
                      Direct founder and engineering channel
                    </span>
                  </div>
                </a>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-semibold block text-[11px] uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-semibold block text-[11px] uppercase tracking-wider">
                    Phone / Office
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-slate-800 hover:text-slate-900 font-semibold text-sm"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                  <span className="block text-slate-500 text-[11px] mt-0.5">
                    Kolkata, West Bengal, India
                  </span>
                </div>
              </div>
            </div>

            {/* Pilot Alternative Notice */}
            <div className="p-5 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-slate-700">
              <p className="font-semibold text-blue-900 mb-1">Evaluating an active project?</p>
              <p className="text-slate-600 leading-relaxed mb-2">
                If you have an urgent deployment or high-risk zone ready for evaluation, you can
                apply directly for our pilot program.
              </p>
              <Link
                href="/request-pilot"
                className="font-semibold text-blue-700 hover:text-blue-900 underline"
              >
                Apply for an on-site pilot evaluation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
