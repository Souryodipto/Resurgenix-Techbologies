import type { Metadata } from "next";
import Link from "next/link";
import { faqsData } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Resurgenix Technologies",
  description:
    "Direct answers to frequent questions regarding camera compatibility, pilot deployments, edge computing, DPDP privacy compliance, and enterprise security.",
};

export default function FAQHubPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          FAQ
        </span>
      </nav>

      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
        Answers &amp; Technical Clarifications
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-6">
        Frequently Asked Questions
      </h1>

      <p className="text-base text-slate-700 leading-relaxed mb-12">
        Direct, technical answers to the most common questions asked by enterprise Chief Security
        Officers, Plant Heads, and IT Infrastructure Directors.
      </p>

      <div className="space-y-10">
        {faqsData.map((category) => (
          <section key={category.category} className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">{category.category}</h2>
            <div className="space-y-6">
              {category.items.map((item, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.question}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 p-6 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Have a specific technical question?
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Our engineering team is ready to review your camera setup and network architecture.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm whitespace-nowrap shadow-sm transition"
        >
          Talk to Our Team
        </Link>
      </div>
    </div>
  );
}
