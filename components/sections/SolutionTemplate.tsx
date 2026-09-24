import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Callout } from "@/components/ui/Callout";
import { StepFlow } from "@/components/ui/StepFlow";
import { Table } from "@/components/ui/Table";
import { Accordion } from "@/components/ui/Accordion";
import { LinkButton } from "@/components/ui/LinkButton";
import { SolutionEntry } from "@/content/types";

interface SolutionTemplateProps {
  solution: SolutionEntry;
}

/**
 * Universal Solution Page Template
 * Implements the 12-stage sequential layout specified in Step 8 with strict
 * white-theme styling, answer-first GEO definition, and truth-governed guardrails.
 */
export function SolutionTemplate({ solution }: SolutionTemplateProps) {
  const isPilotReady = solution.status === "pilot";
  const isEarlyStage = solution.status === "in-development" || solution.status === "roadmap";

  // Table columns for Requirements & Compatibility
  const requirementColumns = [
    {
      header: "Parameter / Component",
      accessorKey: "parameter" as const,
      className: "w-1/3 font-semibold text-[#0B1F3A]",
    },
    {
      header: "Technical Specification",
      accessorKey: "specification" as const,
      className: "w-1/3 font-mono text-xs text-[#2563EB]",
    },
    {
      header: "Operational Guidance & Compatibility Notes",
      accessorKey: "notes" as const,
      className: "w-1/3 text-xs text-[#5B6B7F]",
    },
  ];

  return (
    <article className="bg-white text-[#1F2937]">
      {/* =========================================================================
          1. HEADER & ANSWER-FIRST DEFINITION
          ========================================================================= */}
      <section className="pt-8 pb-14 sm:pb-16 bg-white border-b border-[#E2E8F0]">
        <Container size="lg">
          <Breadcrumbs
            items={[{ label: "Solutions", href: "/solutions" }, { label: solution.title }]}
          />

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={solution.status} size="md" />
              <span className="text-xs font-mono text-[#5B6B7F]">
                Primary Keyword: {solution.primaryKeyword}
              </span>
            </div>

            <h1 className="text-fluid-h1 font-heading font-extrabold text-[#0B1F3A] tracking-tight leading-[1.12]">
              {solution.h1}
            </h1>

            {/* Answer-First 40-60 Word Definition Block */}
            <div className="p-6 rounded-[12px] bg-[#F7F9FC] border border-[#E2E8F0] shadow-xs">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Executive Definition &bull; Direct Answer
              </span>
              <p className="text-base sm:text-lg text-[#0B1F3A] font-medium leading-relaxed">
                {solution.shortAnswer}
              </p>
            </div>

            {/* Special Contextual Callouts */}
            {isEarlyStage && (
              <Callout
                type="Under development"
                title="Capability Lifecycle Notice"
                className="mt-4"
              >
                This capability is under development. Talk to us about early evaluation on your
                infrastructure.
              </Callout>
            )}

            {solution.specialNotice && (
              <Callout
                type={
                  solution.specialNotice.type === "privacy"
                    ? "Compliance"
                    : solution.specialNotice.type === "engagement"
                      ? "Note"
                      : "Assumption"
                }
                title={solution.specialNotice.title}
                className="mt-4"
              >
                {solution.specialNotice.content}
              </Callout>
            )}

            {/* Direct Quick Conversion Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <LinkButton href={solution.ctaPrimary.href} variant="primary" size="lg">
                {solution.ctaPrimary.label}
              </LinkButton>
              {isPilotReady && solution.ctaSecondary && (
                <LinkButton href={solution.ctaSecondary.href} variant="secondary" size="lg">
                  {solution.ctaSecondary.label}
                </LinkButton>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. THE PROBLEM IN THE BUYER'S WORDS
          ========================================================================= */}
      <Section
        id="problem"
        background="soft"
        eyebrow="OPERATIONAL CHALLENGE"
        heading={solution.problemTitle}
        lead={solution.problem}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.problemPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-5 rounded-[10px] bg-white border border-[#E2E8F0] flex items-start gap-3.5 shadow-xs"
            >
              <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 border border-red-100 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                &times;
              </div>
              <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          3. HOW IT WORKS (SPECIFIC VIDEO-ANALYTICS PIPELINE)
          ========================================================================= */}
      <Section
        id="how-it-works"
        background="white"
        eyebrow="PIPELINE ARCHITECTURE"
        heading="How the video analytics pipeline executes"
        lead="A dedicated, deterministic computer vision workflow engineered specifically for this operational capability."
      >
        <StepFlow
          steps={solution.stepFlow.map((st) => ({
            number: st.step,
            title: st.title,
            description: st.description,
          }))}
        />
      </Section>

      {/* =========================================================================
          4. CAPABILITIES & OPERATOR DELIVERABLES
          ========================================================================= */}
      <Section
        id="capabilities"
        background="soft"
        eyebrow="DETECTION & DELIVERABLES"
        heading="What it detects and what operators receive"
        lead="Clear operational division between real-time deep learning inference and concrete security console outputs."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: What It Detects */}
          <div className="space-y-4">
            <h3 className="text-base font-heading font-bold text-[#0B1F3A] pb-2 border-b border-[#E2E8F0]">
              Detection &amp; Analytics Modules
            </h3>
            <div className="space-y-3">
              {solution.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[10px] bg-white border border-[#E2E8F0] space-y-1 shadow-xs"
                >
                  <div className="text-xs font-heading font-bold text-[#0B1F3A] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" aria-hidden="true" />
                    {cap.title}
                  </div>
                  <p className="text-xs text-[#5B6B7F] leading-relaxed pl-3.5">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What the Operator Receives */}
          <div className="space-y-4">
            <h3 className="text-base font-heading font-bold text-[#0B1F3A] pb-2 border-b border-[#E2E8F0]">
              What the Operator Receives
            </h3>
            <div className="space-y-3">
              {solution.operatorReceives.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[10px] bg-white border border-[#E2E8F0] space-y-1 shadow-xs"
                >
                  <div className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                    Deliverable {idx + 1}: {rec.item}
                  </div>
                  <p className="text-xs text-[#1F2937] leading-relaxed">{rec.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          5. WHAT YOU NEED: REQUIREMENTS & COMPATIBILITY TABLE
          ========================================================================= */}
      <Section
        id="requirements"
        background="white"
        eyebrow="TECHNICAL PREREQUISITES"
        heading="Requirements and infrastructure compatibility"
        lead="Standardized technical specifications to integrate with your existing camera, network, and computing hardware."
      >
        <div className="space-y-4">
          <Table
            columns={requirementColumns}
            data={solution.requirementsTable}
            caption={`${solution.title} Technical Requirements and Baseline Compatibility Table`}
          />

          <div className="p-4 rounded-[10px] bg-[#F7F9FC] border border-[#E2E8F0] text-center text-xs text-[#5B6B7F]">
            <span className="font-semibold text-[#0B1F3A]">Verification Notice:</span> Compatibility
            is confirmed during a site assessment.
          </div>
        </div>
      </Section>

      {/* =========================================================================
          6. DEPLOYMENT OPTIONS
          ========================================================================= */}
      <Section
        id="deployment"
        background="soft"
        eyebrow="FLEXIBLE TOPOLOGIES"
        heading="Deployment options and operational fit"
        lead="An honest evaluation of deployment environments based on network bandwidth, latency requirements, and data governance policies."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.deploymentOptions.map((opt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[12px] bg-white border border-[#E2E8F0] space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase">
                  Option {idx + 1}
                </span>
                <h3 className="text-base font-heading font-bold text-[#0B1F3A]">{opt.model}</h3>
                <div className="text-xs font-semibold text-[#0B1F3A] pt-1">
                  Ideal Operational Fit:
                </div>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">{opt.fit}</p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] text-[11px] text-[#5B6B7F] leading-snug">
                {opt.details}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          7. CONCRETE USE CASES
          ========================================================================= */}
      <Section
        id="use-cases"
        background="white"
        eyebrow="FIELD VALIDATION"
        heading="Concrete operational scenarios"
        lead="How this capability addresses high-stakes security and operational triggers across active enterprise facilities."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.useCases.map((uc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[12px] bg-[#F7F9FC] border border-[#E2E8F0] space-y-3 shadow-xs"
            >
              <h3 className="text-base font-heading font-bold text-[#0B1F3A]">{uc.title}</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-[#0B1F3A] block">Operational Scenario:</span>
                  <span className="text-[#5B6B7F] leading-relaxed">{uc.scenario}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A] block">AI Detection Trigger:</span>
                  <span className="text-[#5B6B7F] leading-relaxed">{uc.detection}</span>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0]">
                  <span className="font-semibold text-[#0B1F3A] block">Immediate Outcome:</span>
                  <span className="text-[#2563EB] font-medium leading-relaxed">{uc.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          8. PILOT VALIDATION & HONEST LIMITATIONS
          ========================================================================= */}
      <Section
        id="pilot-and-limitations"
        background="soft"
        eyebrow="TRANSPARENT ENGINEERING"
        heading="What we validate in a pilot and honest limitations"
        lead="Being upfront about optical parameters and boundary constraints builds long-term operational trust."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Pilot Validation */}
          <div className="p-6 rounded-[12px] bg-white border border-[#E2E8F0] space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
              <h3 className="text-base font-heading font-bold text-[#0B1F3A]">
                What We Validate in a Pilot
              </h3>
            </div>
            <p className="text-xs text-[#5B6B7F] leading-relaxed">
              Before enterprise expansion, we measure these empirical parameters on your actual
              camera streams:
            </p>
            <ul className="space-y-2 text-xs text-[#1F2937]" role="list">
              {solution.pilotValidation.map((val, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#2563EB] font-bold">&check;</span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Honest Limitations */}
          <div className="p-6 rounded-[12px] bg-white border border-[#E2E8F0] space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" aria-hidden="true" />
              <h3 className="text-base font-heading font-bold text-[#0B1F3A]">
                Known Physical &amp; Optical Limitations
              </h3>
            </div>
            <p className="text-xs text-[#5B6B7F] leading-relaxed">
              Every computer vision model is governed by physical optics. We do not claim 100%
              accuracy under extreme conditions:
            </p>
            <ul className="space-y-2 text-xs text-[#1F2937]" role="list">
              {solution.limitations.map((lim, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold">&bull;</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          9. WHERE IT FITS: RELEVANT INDUSTRIES
          ========================================================================= */}
      <Section
        id="industries"
        background="white"
        eyebrow="SECTOR APPLICABILITY"
        heading="Where this capability fits"
        lead="Explore industry-specific deployments and operational configurations."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solution.relevantIndustries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="p-5 rounded-[12px] bg-[#F7F9FC] border border-[#E2E8F0] hover:border-[#2563EB] transition-colors group block shadow-xs"
            >
              <h3 className="text-sm font-heading font-bold text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors flex items-center justify-between">
                <span>{ind.name}</span>
                <span className="text-xs text-[#5B6B7F] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </h3>
              <p className="mt-2 text-xs text-[#5B6B7F] leading-relaxed">{ind.context}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <Section
        id="faq"
        background="soft"
        eyebrow="DIRECT ANSWERS"
        heading="Frequently asked questions"
        lead="Straightforward answers regarding camera compatibility, infrastructure, and deployment timelines."
      >
        <div className="max-w-3xl mx-auto">
          <Accordion
            items={solution.faqs.map((f) => ({
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>
      </Section>

      {/* =========================================================================
          11. RELATED SOLUTIONS & EDUCATIONAL GUIDES
          ========================================================================= */}
      <Section
        id="related"
        background="white"
        eyebrow="SYSTEM ECOSYSTEM"
        heading="Related platform capabilities and technical guides"
        lead="Explore companion video intelligence modules and architectural guides."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Related Solutions */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#0B1F3A]">
              Companion Capabilities
            </h3>
            <div className="space-y-3">
              {solution.relatedSolutions.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/solutions/${rel.slug}`}
                  className="p-4 rounded-[10px] bg-[#F7F9FC] border border-[#E2E8F0] hover:border-[#2563EB] transition-colors block shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-[#0B1F3A]">{rel.title}</span>
                    <StatusBadge status={rel.status} size="sm" />
                  </div>
                  <p className="text-xs text-[#5B6B7F]">{rel.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#0B1F3A]">
              Technical Articles &amp; Architectural Guides
            </h3>
            <div className="space-y-3">
              {solution.relatedResources.map((art, idx) => (
                <Link
                  key={idx}
                  href={art.href}
                  className="p-4 rounded-[10px] bg-[#F7F9FC] border border-[#E2E8F0] hover:border-[#2563EB] transition-colors block shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-[#0B1F3A]">{art.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[#5B6B7F] uppercase">
                      {art.type}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#2563EB]">Read Guide &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          12. FINAL INTENT-MATCHED CTA BLOCK
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F7F9FC] border-t border-[#E2E8F0]">
        <Container size="md">
          <div className="text-center space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono font-semibold text-[#0B1F3A]">
              NEXT STEP &bull; TECHNICAL ASSESSMENT
            </span>

            <h2 className="text-fluid-h2 font-heading font-extrabold text-[#0B1F3A] tracking-tight">
              Evaluate {solution.title} on your existing camera feeds
            </h2>

            <p className="text-sm sm:text-base text-[#5B6B7F] max-w-xl mx-auto leading-relaxed">
              Schedule a technical discovery call to review your camera layout, verify RTSP stream
              compatibility, and discuss pilot parameters.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <LinkButton href={solution.ctaPrimary.href} variant="primary" size="lg">
                {solution.ctaPrimary.label}
              </LinkButton>
              {isPilotReady && (
                <LinkButton href="/request-pilot" variant="secondary" size="lg">
                  Request a Pilot Program
                </LinkButton>
              )}
            </div>

            <p className="text-xs text-[#5B6B7F] pt-2">
              Kolkata Engineering Center &bull; Contact: +91 6290985464 &bull;
              contact@resurgenixtechnologies.com
            </p>
          </div>
        </Container>
      </section>
    </article>
  );
}

export default SolutionTemplate;
