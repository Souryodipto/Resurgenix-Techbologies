import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Privacy Policy | Resurgenix Technologies Pvt. Ltd.",
  description:
    "Privacy Policy for Resurgenix Technologies. Information handling, DPDP Act alignment, and data protection practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Privacy Policy
        </span>
      </nav>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Privacy Policy</h1>

      <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-6 leading-relaxed">
        <p>
          Last updated: March 2026. {siteConfig.company.legalName} (&quot;Resurgenix&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy
          and personal data of our website visitors, clients, and partners. This Privacy Policy
          outlines how we collect, process, and safeguard information in compliance with applicable
          Indian laws, including the Digital Personal Data Protection (DPDP) Act, 2023.
        </p>

        <h2 className="text-base font-bold text-slate-900">
          1. Information We Collect on Our Website
        </h2>
        <p>
          When you submit inquiries, demo requests, or pilot applications through our website, we
          collect corporate contact details including your name, business email address, phone
          number, company name, job title, and operational camera estimates.
        </p>

        <h2 className="text-base font-bold text-slate-900">
          2. Enterprise Video &amp; Surveillance Data Processing
        </h2>
        <p>
          Our video intelligence software operates primarily as an on-premise edge solution. Client
          surveillance footage remains stored on the client&apos;s local hardware infrastructure.
          Resurgenix does not collect, transfer, or store raw customer video feeds on public cloud
          servers unless explicitly contracted under a dedicated managed service agreement.
        </p>

        <h2 className="text-base font-bold text-slate-900">
          3. Purpose Limitation &amp; Lawful Basis
        </h2>
        <p>
          Inbound contact information is collected strictly to respond to business inquiries,
          schedule product demonstrations, coordinate pilot assessments, and manage enterprise
          partnerships. We do not sell or rent personal information to third parties.
        </p>

        <h2 className="text-base font-bold text-slate-900">4. Contact &amp; Grievance Redressal</h2>
        <p>
          For questions or grievances regarding personal data processing, you may contact our data
          governance point of contact at:{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-600 underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
