import type { Metadata } from "next";
import Link from "next/link";
import { PilotForm } from "@/components/forms/PilotForm";
import { StepFlow } from "@/components/ui/StepFlow";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Request a Pilot Program | Resurgenix AI Video Analytics",
  description:
    "Evaluate Resurgenix AI video analytics on your existing CCTV cameras. Controlled on-premise trial with zero camera replacements.",
  alternates: {
    canonical: "/request-pilot",
  },
  openGraph: {
    title: "Request a Pilot Program | Resurgenix AI Video Analytics",
    description:
      "Evaluate Resurgenix AI video analytics on your existing CCTV cameras through a controlled trial.",
    url: "/request-pilot",
    type: "website",
  },
};

export default function RequestPilotPage() {
  const deploymentSteps = [
    {
      number: 1,
      title: "Stream & Network Assessment",
      description:
        "We inspect your target RTSP camera feeds, resolution, illumination, and local network topology remotely or on-site.",
    },
    {
      number: 2,
      title: "Edge Appliance Installation",
      description:
        "A compact localized edge server is connected to your dedicated surveillance VLAN without touching wider corporate networks.",
    },
    {
      number: 3,
      title: "Rule Calibration & Zone Mapping",
      description:
        "Virtual tripwires, safety exclusion polygons, and time schedules are calibrated directly on live camera video streams.",
    },
    {
      number: 4,
      title: "Ground-Truth Evaluation Review",
      description:
        "We compare system event logs, alerts, and snapshots against manual ground truth to verify detection reliability.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-slate-500 mb-6 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium" aria-current="page">
              Request a Pilot
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
              Controlled On-Site Evaluation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Evaluate AI video intelligence on your existing CCTV
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Validate real-time detection accuracy, stream latency, and operator alert workflows on
              your actual facility cameras before making site-wide capital commitments. Zero camera
              hardware replacements required.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Who the pilot is for */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
              1. Who the pilot is for
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Our pilot program is designed for enterprise and institutional security leaders
              actively evaluating automated computer vision layers on existing camera
              infrastructure:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold text-navy-900 mb-2">Plant &amp; Operations Heads</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Industrial facilities, factories, and warehouses needing to evaluate hazardous
                machinery exclusion zones, worker perimeter safety, or gate vehicle turnaround.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold text-navy-900 mb-2">
                Enterprise Security Directors
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Corporate real estate, commercial campuses, and data centers seeking to automate
                unauthorized server room entry, lobby tailgating, and after-hours floor monitoring.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold text-navy-900 mb-2">
                Healthcare &amp; Institutions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hospital administrators, municipal departments, and infrastructure operators
                evaluating emergency bay blockage, sterile zone protection, and concourse density.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What can be evaluated */}
      <section className="py-12 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
              2. What can be evaluated
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              During the pilot, you can evaluate one or more of our verified computer vision
              capabilities across 4 to 8 designated camera channels:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-1">
                Restricted Zones
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Virtual polygons and directional tripwires with sub-second alert dispatch.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-1">
                Workforce Verification
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Consent-based, contactless optical attendance at office or plant turnstiles.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-1">
                Perimeter Intrusion
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Boundary line-crossing with environmental noise and foliage filtering.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-1">
                Vehicle Intelligence
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Gate license plate recognition (ANPR) and commercial vehicle dwell logging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Existing CCTV compatibility */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
              3. Existing CCTV compatibility
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Resurgenix connects directly to existing IP cameras and NVR systems via standard RTSP
              or ONVIF streams over your local network. Analog systems connect through standard
              multi-channel IP encoders.
            </p>
          </div>

          <div className="p-5 bg-blue-50/60 border border-blue-200 rounded-xl flex items-start gap-4">
            <span className="text-blue-700 font-bold text-lg mt-0.5">ℹ</span>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-1">
                Assessment Validation Notice
              </h3>
              <p className="text-xs text-blue-950 leading-relaxed font-normal">
                Compatibility is confirmed during a site assessment. Camera mounting angles, target
                zone illumination, and local network throughput are verified prior to hardware
                placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deployment process */}
      <section className="py-12 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
              4. Deployment process
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We deploy pilots through a structured four-stage engineering workflow designed to
              cause zero disruption to active facility operations:
            </p>
          </div>

          <StepFlow steps={deploymentSteps} />
        </div>
      </section>

      {/* 5. Evaluation methodology */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
              5. Evaluation methodology
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We believe in transparent, evidence-based evaluation rather than subjective vendor
              claims. Every pilot follows these core methodological principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold text-navy-900 mb-2">
                Define Success Criteria Together
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before powering on inference, we document concrete measurable objectives (e.g.,
                alert dispatch speed, false-alarm tolerance, and lighting condition boundaries).
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold text-navy-900 mb-2">Agreed Evaluation Scope</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The pilot is restricted to an agreed camera footprint (typically 4 to 8 cameras) to
                maintain controlled focus and prevent network overhead.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold text-navy-900 mb-2">Agreed Detection Rules</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specific virtual polygon coordinates, minimum dwell durations, and directional
                filters are jointly configured and locked for consistent observation.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold text-navy-900 mb-2">
                Review of Alerts Against Ground Truth
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Security staff logs actual real-world test events to systematically benchmark system
                detections against human-observed ground truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Expected outputs */}
      <section className="py-12 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">6. Expected outputs</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              At the conclusion of the evaluation period, your team receives tangible operational
              artifacts to guide procurement decisions (no unverified accuracy percentages or
              hypothetical ROI figures):
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-2">
                1
              </span>
              <h3 className="text-xs font-bold text-navy-900 mb-1">Detailed Event Logs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exportable CSV and JSON logs detailing timestamps, zone IDs, and detection classes.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-2">
                2
              </span>
              <h3 className="text-xs font-bold text-navy-900 mb-1">Alert Samples &amp; Clips</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A verified repository of high-resolution snapshots and video buffer clips from test
                triggers.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-2">
                3
              </span>
              <h3 className="text-xs font-bold text-navy-900 mb-1">Dashboard Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full operator access to the local web interface to evaluate alert filtering and
                workflow ergonomics.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-2">
                4
              </span>
              <h3 className="text-xs font-bold text-navy-900 mb-1">Summary Findings Report</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                An engineering report highlighting camera angle observations, lighting limitations,
                and scaling recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Next steps */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">7. Next steps</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Complete the pilot request form below. Our engineering team in Kolkata will review
              your target camera channels and schedule an introductory feasibility call to finalize
              scope.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Pilot Form Section */}
      <section className="py-14 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Submit your pilot evaluation request
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill in your facility details and designated evaluation zones below.
            </p>
          </div>

          <PilotForm />

          {/* Quick Direct Help */}
          <div className="mt-8 text-center text-xs text-slate-500">
            <p>
              Questions about edge hardware requirements or stream formats? Speak with our
              engineers:
            </p>
            <div className="mt-2 flex items-center justify-center gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-semibold hover:underline"
              >
                WhatsApp Direct
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
