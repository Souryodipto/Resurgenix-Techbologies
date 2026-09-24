import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Terms of Service | Resurgenix Technologies Pvt. Ltd.",
  description: "Terms of Service and website usage agreement for Resurgenix Technologies Pvt. Ltd.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Terms of Service
        </span>
      </nav>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Terms of Service</h1>

      <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-6 leading-relaxed">
        <p>
          Last updated: March 2026. Welcome to the official website of{" "}
          {siteConfig.company.legalName}. By accessing or using this website, you agree to comply
          with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-base font-bold text-slate-900">1. Intellectual Property</h2>
        <p>
          All trademarks, logos, brand names (&quot;Resurgenix&quot;), software architectures, text,
          diagrams, and code snippets published on this website are the proprietary property of{" "}
          {siteConfig.company.legalName} and are protected under Indian and international
          intellectual property laws.
        </p>

        <h2 className="text-base font-bold text-slate-900">
          2. Informational Purpose &amp; No Warranty
        </h2>
        <p>
          Content on this website is provided for general informational and marketing purposes.
          Technical compatibility with specific camera models or NVR brands must be formally
          validated during an engineering assessment. Capabilities labeled as &quot;Roadmap&quot;
          represent planned developments.
        </p>

        <h2 className="text-base font-bold text-slate-900">3. Governing Law &amp; Jurisdiction</h2>
        <p>
          These terms and any disputes arising out of your use of this website shall be governed by
          and construed in accordance with the laws of India, with exclusive jurisdiction in the
          courts of Kolkata, West Bengal.
        </p>
      </div>
    </div>
  );
}
