import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Request a Controlled Pilot Program | Resurgenix Technologies",
  description:
    "Evaluate Resurgenix AI video analytics on 3 to 5 existing cameras in your facility. Controlled deployment, non-disruptive, and tested on live infrastructure.",
};

export default function RequestPilotPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Request a Pilot
        </span>
      </nav>

      <div className="max-w-2xl mb-8">
        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Controlled Proof of Concept
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-3 mb-4">
          Evaluate AI Video Intelligence on Your Live Cameras
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Test real-world detection accuracy, alert latency, and false alarm suppression on 3 to 5
          critical existing CCTV feeds before committing to enterprise-scale deployment.
        </p>
      </div>

      {/* Pilot Architecture Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50">
          <h2 className="text-sm font-bold text-slate-900 mb-2">Who the Pilot Is For</h2>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Designed for Chief Security Officers, Plant Heads, and Facility Directors managing 20+
            cameras who require verified empirical proof of detection accuracy in their specific
            operational environment.
          </p>
          <h2 className="text-sm font-bold text-slate-900 mb-2">What Can Be Evaluated</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Restricted zone boundary intrusion, personnel movement tracking, night motion filtering,
            and automated alert notification latency.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50">
          <h2 className="text-sm font-bold text-slate-900 mb-2">Existing CCTV Compatibility</h2>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Works with compatible IP cameras and NVRs supporting RTSP streams. No existing cameras
            need to be uninstalled or replaced during the pilot.
          </p>
          <h2 className="text-sm font-bold text-slate-900 mb-2">Expected Pilot Outputs</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            A comprehensive Technical Evaluation Report with detection event logs, false alarm
            metrics, and an architectural recommendation for site-wide scaling.
          </p>
        </div>
      </div>

      {/* Pilot Request Form */}
      <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-white max-w-2xl">
        <h2 className="text-base font-bold text-slate-900 mb-4">Submit Pilot Evaluation Request</h2>
        <form action="/request-pilot/thank-you" method="GET" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="Vikram Sharma"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1">
                Company / Facility *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="Industrial Plant / Enterprise"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="facilityLocation"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Facility Location (City / State) *
              </label>
              <input
                type="text"
                id="facilityLocation"
                name="facilityLocation"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="e.g. Kolkata / Durgapur / Haldia"
              />
            </div>
            <div>
              <label
                htmlFor="cameraBrand"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Existing Camera / NVR Brand
              </label>
              <input
                type="text"
                id="cameraBrand"
                name="cameraBrand"
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="e.g. Hikvision, Dahua, CP Plus, Axis"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="priorityZones"
              className="block text-xs font-semibold text-slate-700 mb-1"
            >
              What specific zones or events do you want to evaluate?
            </label>
            <textarea
              id="priorityZones"
              name="priorityZones"
              rows={3}
              className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
              placeholder="e.g. 3 perimeter cameras along eastern fence + 1 server room entrance..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded text-sm transition shadow-sm"
          >
            Submit Pilot Evaluation Request
          </button>
        </form>

        <p className="text-[11px] text-slate-500 mt-4 text-center">
          Questions before submitting? Speak with our team via WhatsApp:{" "}
          <a
            href={siteConfig.contact.whatsappUrl}
            className="text-emerald-700 font-semibold hover:underline"
          >
            {siteConfig.contact.displayPhone}
          </a>
        </p>
      </div>
    </div>
  );
}
