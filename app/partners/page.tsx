import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "System Integrator & Channel Partner Program | Resurgenix",
  description:
    "Partner with Resurgenix Technologies. High software margins, local Indian engineering support, and Manufacturer Authorization Form (MAF) tender support for SIs.",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Partners
        </span>
      </nav>

      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
        System Integrator &amp; Channel Ecosystem
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-6">
        Grow Your Security Business with High-Margin AI Video Intelligence
      </h1>

      <p className="text-base text-slate-700 leading-relaxed mb-8">
        As CCTV hardware margins commoditize, leading security system integrators, telecommunication
        contractors, and IT infrastructure providers partner with Resurgenix to deliver high-value
        AI analytics to their existing client base.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-sm font-bold text-slate-900 mb-2">High Recurring Margins</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Upsell intelligent video analytics software licenses and annual maintenance contracts to
            existing CCTV installations.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-sm font-bold text-slate-900 mb-2">Tender &amp; MAF Support</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Receive official Manufacturer Authorization Forms (MAF) and technical tender
            documentation for enterprise and government RFPs.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-sm font-bold text-slate-900 mb-2">
            Direct Founder &amp; R&amp;D Access
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Fast turnaround on technical feasibility assessments, pilot deployments, and Indian
            infrastructure customization.
          </p>
        </div>
      </div>

      <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Become an Authorized Resurgenix Partner
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Connect with our channel partnerships team to discuss commercial terms and joint pilot
            opportunities.
          </p>
        </div>
        <a
          href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("System Integrator Partnership Inquiry")}`}
          className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm whitespace-nowrap shadow-sm transition"
        >
          Apply for Partnership
        </a>
      </div>
    </div>
  );
}
