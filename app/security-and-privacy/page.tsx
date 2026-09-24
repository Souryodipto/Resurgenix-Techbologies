import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Security, Privacy & DPDP Governance | Resurgenix",
  description:
    "Review Resurgenix's privacy-by-design framework, on-premise data sovereignty, role-based access, and alignment with India's DPDP Act 2023.",
};

export default function SecurityAndPrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Security &amp; Privacy
        </span>
      </nav>

      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
        Enterprise Governance &amp; Data Sovereignty
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-6">
        Privacy-by-Design &amp; Enterprise Security Architecture
      </h1>

      <p className="text-base text-slate-700 leading-relaxed mb-8">
        At Resurgenix Technologies, we believe enterprise surveillance must protect physical
        facilities without compromising human privacy or regulatory compliance. Our platform is
        built from the ground up around strict data sovereignty, localized processing, and
        transparent auditability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-base font-bold text-slate-900 mb-2">DPDP Act 2023 Alignment</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Identifiable surveillance imagery is treated as digital personal data. Facial features
            are strictly confined to consent-based employee verification and opt-in access
            workflows, with clear purpose limitation and access rights.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-base font-bold text-slate-900 mb-2">On-Premise Data Sovereignty</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Raw camera video streams stay inside your physical premises. Our edge processing models
            run on local appliances, ensuring no proprietary enterprise video footage is sent to
            foreign clouds.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-base font-bold text-slate-900 mb-2">
            Role-Based Access Control (RBAC)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Granular permission tiers (Administrator, Security Supervisor, Station Operator,
            Compliance Auditor) ensure personnel only view feeds and alerts authorized for their
            specific operational role.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5">
          <h2 className="text-base font-bold text-slate-900 mb-2">Tamper-Evident Audit Trails</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every user login, stream view, zone alteration, alert acknowledgment, and video export
            is immutably timestamped and logged for internal security and compliance audits.
          </p>
        </div>
      </div>

      <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Read Our Complete Compliance Guide</h3>
          <p className="text-xs text-slate-600 mt-1">
            Learn more about enterprise obligations under India&apos;s DPDP Act in our technical
            resource.
          </p>
        </div>
        <Link
          href="/resources/cctv-dpdp-act-compliance-guide"
          className="text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          View Compliance Guide &rarr;
        </Link>
      </div>
    </div>
  );
}
