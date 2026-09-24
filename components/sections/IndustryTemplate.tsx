import React from "react";
import Link from "next/link";
import { IndustryEntry } from "@/content/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Accordion } from "@/components/ui/Accordion";
import { siteConfig } from "@/content/site.config";

interface IndustryTemplateProps {
  industry: IndustryEntry;
}

export function IndustryTemplate({ industry }: IndustryTemplateProps) {
  const faqItems = industry.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <div className="bg-white text-slate-900">
      {/* 1. Header & Answer-First Summary */}
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
            <Link href="/industries" className="hover:text-blue-600 transition-colors">
              Industries
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium" aria-current="page">
              {industry.title}
            </span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <StatusBadge status={industry.status} />
            <span className="text-xs font-mono text-slate-400">/industries/{industry.slug}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl">
            {industry.h1}
          </h1>

          {/* Answer-first 40-60 word definition container */}
          <div className="mt-8 p-6 bg-white border border-slate-200 rounded-xl shadow-sm max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Sector Video Intelligence Summary
              </p>
            </div>
            <p className="text-base text-slate-800 leading-relaxed font-normal">
              {industry.shortAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* 2. What Teams Struggle With Today */}
      <section className="py-14 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold tracking-wide uppercase mb-3">
              Sector Operational Reality
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              What teams struggle with today
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Standard passive CCTV systems record incidents after the damage is done. In this
              sector, operational teams face unique surveillance and physical oversight challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.struggles.map((struggle, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy-900 mb-2">{struggle.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{struggle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Relevant Solutions */}
      <section className="py-14 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
              Applicable Intelligence Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Relevant Resurgenix solutions for this sector
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Resurgenix deploys modular computer vision rules over existing video feeds. These
              solutions directly address this sector’s core security and monitoring requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.relevantSolutions.map((sol) => (
              <div
                key={sol.slug}
                className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-navy-900">
                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {sol.title}
                      </Link>
                    </h3>
                    <StatusBadge status={sol.status} size="sm" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{sol.oneLiner}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View technical solution details &rarr;
                  </Link>
                  <span className="text-[11px] font-mono text-slate-400">
                    /solutions/{sol.slug}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Example Scenarios (What the system can be configured to detect) */}
      <section className="py-14 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3">
              Deployment Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Configurable operational scenarios
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              These scenarios illustrate what Resurgenix computer vision models can be configured to
              detect on existing camera feeds. Each scenario generates immediate evidence clips and
              actionable notifications:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.scenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-navy-900">{scenario.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {scenario.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <span className="font-semibold text-slate-700">Detection Rule: </span>
                    <span className="text-slate-600">{scenario.triggerCondition}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Operator Action: </span>
                    <span className="text-slate-600">{scenario.operatorAction}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Buyer Roles & Neutral Vendor Checklist */}
      <section className="py-14 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Buyer Roles & Evaluation Dynamics */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
                Stakeholder Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-4">
                Buyer roles &amp; decision process
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                In this sector, security upgrades involve cross-functional teams balancing physical
                protection, IT network safety, and operational continuity:
              </p>

              <div className="mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  Typical Evaluation Stakeholders
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industry.buyerDecision.keyRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-800 text-xs font-medium rounded-full shadow-2xs"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  How The Decision Usually Works
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {industry.buyerDecision.evaluationProcess}
                </p>
              </div>
            </div>

            {/* Neutral "What to Ask a Vendor" Checklist */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-lg font-bold text-navy-900">
                  What to ask any AI video analytics vendor
                </h3>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Neutral Checklist
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Use this objective checklist when vetting AI video analytics vendors to ensure data
                protection, network integrity, and realistic operational expectations:
              </p>

              <div className="space-y-3">
                {industry.buyerDecision.vendorChecklist.map((question, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p className="text-xs text-slate-800 font-medium leading-relaxed">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Privacy & Operational Considerations */}
      <section className="py-14 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold tracking-wide uppercase mb-3">
              Sector Compliance &amp; Governance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Privacy and operational considerations
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Deploying video intelligence requires careful alignment with privacy standards,
              operational ergonomics, and internal compliance protocols:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {industry.privacyAndOperations.considerations.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Neutral Regulatory Disclaimer */}
          <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-4">
            <div className="text-amber-800 font-bold text-base shrink-0 mt-0.5">ℹ</div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-1">
                Legal &amp; Policy Governance Note
              </h3>
              <p className="text-xs text-amber-950 leading-relaxed">
                {industry.privacyAndOperations.policyNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Suggested Pilot Scope */}
      <section className="py-14 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
              Structured Evaluation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Suggested pilot scope
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We recommend validating computer vision analytics through a controlled, low-footprint
              pilot rather than site-wide deployment:
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Recommended Focus Area
                </span>
                <p className="mt-1 text-sm font-bold text-navy-900">
                  {industry.pilotScope.focusArea}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Typical Camera Footprint
                </span>
                <p className="mt-1 text-sm font-bold text-navy-900">
                  {industry.pilotScope.cameraFootprint}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Key Validation Objectives
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industry.pilotScope.objectives.map((obj, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-slate-700 p-2.5 bg-slate-50 border border-slate-100 rounded-lg"
                  >
                    <span className="text-blue-600 font-bold">▪</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-slate-500 italic border-t border-slate-100 pt-4">
              {industry.pilotScope.assessmentNote}
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-14 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear, practical answers regarding surveillance analytics in{" "}
              {industry.title.toLowerCase()}.
            </p>
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>

      {/* 9. Related Articles & Technical Resources */}
      {industry.relatedArticles.length > 0 && (
        <section className="py-12 border-b border-slate-200 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
              Related Technical Guidance &amp; Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.relatedArticles.map((article) => (
                <div
                  key={article.slug}
                  className="p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-navy-900 mb-2">
                      <Link
                        href={`/resources/${article.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {article.description}
                    </p>
                  </div>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read article &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Matched Intent CTA Block */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Evaluate AI video intelligence on your {industry.title.toLowerCase()} cameras
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Verify detection reliability and latency on your active RTSP camera streams without
            replacing existing NVR or camera hardware.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={industry.ctaPrimary.href}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
            >
              {industry.ctaPrimary.label}
            </Link>
            <Link
              href={industry.ctaSecondary.href}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold rounded-lg transition-colors"
            >
              {industry.ctaSecondary.label}
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Initial feasibility confirmed via camera resolution and RTSP stream assessment.
          </p>
        </div>
      </section>
    </div>
  );
}
