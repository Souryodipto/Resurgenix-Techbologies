import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Analytics Company in Kolkata & Eastern India | Resurgenix",
  description:
    "Resurgenix Technologies is headquartered in Kolkata, serving West Bengal, Kalyani, and Eastern India industrial corridors with on-site pilot assessments.",
};

export default function KolkataEasternIndiaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Kolkata &amp; Eastern India Hub
        </span>
      </nav>

      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
        Regional Operations &amp; Engineering Headquarters
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-6">
        AI Video Intelligence Engineered in Kolkata for Eastern India
      </h1>

      <p className="text-base text-slate-700 leading-relaxed mb-6">
        Resurgenix Technologies is proudly founded and headquartered in Kolkata, West Bengal. We
        provide local enterprises, manufacturing facilities, hospitals, and civic authorities across
        Kolkata, Kalyani, Durgapur, Haldia, and Eastern India with direct on-site technical support
        and hands-on pilot evaluations.
      </p>

      <div className="border border-slate-200 rounded-lg p-6 bg-slate-50 mb-10">
        <h2 className="text-base font-bold text-slate-900 mb-3">
          Why Local Regional Presence Matters
        </h2>
        <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
          <li>
            <strong>Rapid On-Site Technical Audits:</strong> Our engineering team can visit your
            facility in Kolkata, Kalyani, or nearby industrial belts to inspect camera stream
            quality and network readiness.
          </li>
          <li>
            <strong>Direct Pilot Deployment Support:</strong> Hands-on configuration of edge
            hardware and virtual boundary rules on active plant feeds.
          </li>
          <li>
            <strong>Dedicated Regional Ground Service:</strong> Avoid being treated as a distant
            ticket number by Bangalore- or Silicon Valley-based vendors.
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/request-pilot"
          className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm shadow-sm transition"
        >
          Request On-Site Pilot Assessment
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 text-sm transition"
        >
          Contact Kolkata Operations
        </Link>
      </div>
    </div>
  );
}
