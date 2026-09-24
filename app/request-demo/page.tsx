import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Request an Enterprise Video Intelligence Demo | Resurgenix",
  description:
    "Schedule a live technical walkthrough of the Resurgenix AI video intelligence platform. See real-time detection on live multi-camera streams.",
};

export default function RequestDemoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Request a Demo
        </span>
      </nav>

      <div className="max-w-2xl mb-8">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          Enterprise Security Walkthrough
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-4">
          Request a Live Platform Demonstration
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          See how Resurgenix connects to compatible existing CCTV feeds to detect unauthorized
          entry, automate workforce records, and trigger real-time alerts.
        </p>
      </div>

      <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-slate-50/50 max-w-2xl">
        <form action="/request-demo/thank-you" method="GET" className="space-y-4">
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
              placeholder="e.g. Vikram Sharma"
            />
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
              <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1">
                Company / Organization *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label htmlFor="jobTitle" className="block text-xs font-semibold text-slate-700 mb-1">
                Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="e.g. Head of Security / Plant Head"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cameras" className="block text-xs font-semibold text-slate-700 mb-1">
              Estimated Number of CCTV Cameras
            </label>
            <select
              id="cameras"
              name="cameras"
              className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
            >
              <option value="1-15">1 – 15 cameras (Pilot Scale)</option>
              <option value="16-50">16 – 50 cameras (Single Facility)</option>
              <option value="51-200">51 – 200 cameras (Campus / Plant)</option>
              <option value="200+">200+ cameras (Multi-Site Enterprise)</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1">
              Primary Use Case or Current Challenge
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
              placeholder="e.g. Unauthorized entry detection in server rooms, industrial perimeter alerts..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded text-sm transition shadow-sm"
          >
            Submit Demo Request
          </button>
        </form>

        <p className="text-[11px] text-slate-500 mt-4 text-center">
          Or message us directly via WhatsApp:{" "}
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
