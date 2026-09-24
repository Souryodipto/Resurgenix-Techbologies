import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/LinkButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Accordion } from "@/components/ui/Accordion";
import dynamic from "next/dynamic";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";
import { IllustrativeDashboard } from "@/components/ui/IllustrativeDashboard";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site.config";

const VideoPlayer = dynamic(
  () => import("@/components/ui/VideoPlayer").then((mod) => mod.VideoPlayer),
  {
    loading: () => (
      <div className="aspect-video w-full bg-slate-100 flex items-center justify-center text-xs text-[#5B6B7F]">
        Loading video player...
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Resurgenix — AI Video Intelligence for Existing CCTV Infrastructure",
  description:
    "Resurgenix adds an AI layer to existing CCTV cameras, delivering real-time event detection, unauthorized entry alerts, and workforce intelligence without replacing hardware.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: "Resurgenix — AI Video Intelligence for Existing CCTV Infrastructure",
    description:
      "Transform existing CCTV cameras into real-time monitoring systems. Sub-second alerts for unauthorized entry, vehicle access, and perimeter breaches.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.company.brandName,
    images: [
      {
        url: "/images/resurgenix-video-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Resurgenix Video Intelligence Platform Overview",
      },
    ],
  },
};

export default function HomePage() {
  const {
    hero,
    videoSection,
    trustStrip,
    problems,
    solution,
    capabilities,
    howItWorks,
    useCases,
    industries,
    whyResurgenix,
    pilotProof,
    faq,
    finalCta,
  } = homeContent;

  return (
    <div className="bg-white text-[#1F2937] selection:bg-[#2563EB] selection:text-white">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-white border-b border-[#E2E8F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F9FC] border border-[#E2E8F0] text-[#0B1F3A] text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" aria-hidden="true" />
                <span>{hero.eyebrow}</span>
              </div>

              <h1 className="text-fluid-h1 font-heading font-extrabold text-[#0B1F3A] tracking-tight leading-[1.12]">
                {hero.h1}
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7F] leading-relaxed max-w-2xl">
                {hero.subhead}
              </p>

              {/* Direct Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <LinkButton href={hero.primaryCta.href} variant="primary" size="lg">
                  {hero.primaryCta.label}
                </LinkButton>
                <LinkButton href={hero.secondaryCta.href} variant="secondary" size="lg">
                  {hero.secondaryCta.label}
                </LinkButton>
              </div>

              {/* Compatibility Notice */}
              <div className="pt-2 flex items-start gap-2 text-xs text-[#5B6B7F]">
                <svg
                  className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="leading-normal">{hero.compatibilityNotice}</p>
              </div>
            </div>

            {/* Right Column: Visual Architecture Flow */}
            <div className="lg:col-span-5">
              <div className="bg-[#F7F9FC] p-4 sm:p-6 rounded-[14px] border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]">
                    Architecture Overview
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[#5B6B7F]">
                    RTSP Ingest
                  </span>
                </div>
                <PipelineDiagram />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. THE VIDEO SECTION
          ========================================================================= */}
      <Section
        id="video-overview"
        background="soft"
        eyebrow={videoSection.eyebrow}
        heading={videoSection.heading}
        lead={videoSection.lead}
        align="center"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] shadow-sm bg-white">
            <VideoPlayer
              poster="/images/resurgenix-video-poster.jpg"
              title="What Resurgenix can do — 60-Second Video Overview"
              captionSrc="/video/resurgenix-video-captions.vtt"
              captionLabel="English Captions"
            />
          </div>

          <p className="text-xs text-center text-[#5B6B7F] italic">{videoSection.honestCaption}</p>

          {/* Accessible Transcript Accordion */}
          <details className="group border border-[#E2E8F0] rounded-[10px] bg-white p-4 text-left transition-all">
            <summary className="font-semibold text-xs text-[#0B1F3A] cursor-pointer hover:text-[#2563EB] flex items-center justify-between select-none">
              <span>{videoSection.transcriptTitle}</span>
              <svg
                className="w-4 h-4 text-[#5B6B7F] group-open:rotate-180 transition-transform duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="mt-3 pt-3 border-t border-[#E2E8F0] space-y-1.5 text-xs text-[#5B6B7F] font-mono">
              {videoSection.transcriptLines.map((line, idx) => (
                <p key={idx} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </details>
        </div>
      </Section>

      {/* =========================================================================
          3. TRUST STRIP (VERIFIED ONLY)
          ========================================================================= */}
      <section
        className="py-8 bg-white border-y border-[#E2E8F0]"
        aria-label="Corporate Trust Indicators"
      >
        <Container size="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStrip.items.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-sm sm:text-base font-heading font-bold text-[#0B1F3A]">
                  {item.value}
                </div>
                <div className="text-[11px] font-mono text-[#5B6B7F] uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. PROBLEM SECTION
          ========================================================================= */}
      <Section
        id="problem"
        background="white"
        eyebrow={problems.eyebrow}
        heading={problems.heading}
        lead={problems.lead}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.items.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white hover:border-[#CBD5E1] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-[8px] bg-red-50 text-red-600 border border-red-100 flex items-center justify-center font-mono font-bold text-xs">
                  !
                </div>
                <h3 className="text-base font-heading font-bold text-[#0B1F3A]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E2E8F0] text-[11px] font-mono font-medium text-[#0B1F3A]">
                {item.metricOrImpact}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          5. SOLUTION ARCHITECTURE SECTION
          ========================================================================= */}
      <Section
        id="solution"
        background="soft"
        eyebrow={solution.eyebrow}
        heading={solution.heading}
        lead={solution.description}
      >
        <div className="space-y-8">
          <div className="text-center pb-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono font-semibold text-[#0B1F3A]">
              {solution.supportingLine}
            </span>
          </div>

          {/* Transformation Step Flow */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {solution.transformationSteps.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-[10px] bg-white border border-[#E2E8F0] text-center space-y-1.5"
              >
                <div className="text-[11px] font-mono font-bold text-[#2563EB]">{step.step}</div>
                <div className="text-xs font-heading font-bold text-[#0B1F3A]">{step.name}</div>
                <p className="text-[11px] text-[#5B6B7F] leading-snug">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Visual Event Console Preview */}
          <div className="pt-4">
            <IllustrativeDashboard />
          </div>
        </div>
      </Section>

      {/* =========================================================================
          6. CAPABILITIES GRID
          ========================================================================= */}
      <Section
        id="capabilities"
        background="white"
        eyebrow={capabilities.eyebrow}
        heading={capabilities.heading}
        lead={capabilities.lead}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.items.map((cap) => (
            <div
              key={cap.slug}
              className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                    Module
                  </span>
                  <StatusBadge status={cap.status} size="sm" />
                </div>

                <h3 className="text-base font-heading font-bold text-[#0B1F3A]">
                  <Link
                    href={`/solutions/${cap.slug}`}
                    className="hover:text-[#2563EB] focus:outline-none focus:underline"
                  >
                    {cap.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">
                  <strong className="text-[#0B1F3A] font-semibold">What it does:</strong>{" "}
                  {cap.whatItDoes}
                </p>

                <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">
                  <strong className="text-[#0B1F3A] font-semibold">Why it matters:</strong>{" "}
                  {cap.whyItMatters}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                <Link
                  href={`/solutions/${cap.slug}`}
                  className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1 focus:outline-none focus:underline"
                >
                  View Solution Specs &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <LinkButton href="/solutions" variant="secondary" size="md">
            View All 9 Platform Capabilities &rarr;
          </LinkButton>
        </div>
      </Section>

      {/* =========================================================================
          7. HOW IT WORKS (5 STEPS)
          ========================================================================= */}
      <Section
        id="how-it-works"
        background="soft"
        eyebrow={howItWorks.eyebrow}
        heading={howItWorks.heading}
        lead={howItWorks.lead}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {howItWorks.steps.map((st) => (
            <div
              key={st.step}
              className="p-5 rounded-[12px] bg-white border border-[#E2E8F0] space-y-2.5 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-extrabold text-[#2563EB] block mb-1">
                  {st.step}
                </span>
                <h3 className="text-sm font-heading font-bold text-[#0B1F3A] mb-2">{st.action}</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">{st.detail}</p>
              </div>
              <div className="pt-3 border-t border-[#E2E8F0]/60">
                <span className="text-[11px] font-mono text-[#5B6B7F] uppercase tracking-wider">
                  Phase {st.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <LinkButton href="/how-it-works" variant="primary" size="md">
            Explore Full Technical Architecture &rarr;
          </LinkButton>
        </div>
      </Section>

      {/* =========================================================================
          8. USE CASES (6 CONCRETE SCENARIOS)
          ========================================================================= */}
      <Section
        id="use-cases"
        background="white"
        eyebrow={useCases.eyebrow}
        heading={useCases.heading}
        lead={useCases.lead}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.items.map((uc) => (
            <div
              key={uc.id}
              className="p-6 rounded-[12px] border border-[#E2E8F0] bg-[#F7F9FC] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded bg-white border border-[#E2E8F0] text-[11px] font-mono font-medium text-[#2563EB]">
                  {uc.category}
                </span>
                <h3 className="text-base font-heading font-bold text-[#0B1F3A]">{uc.title}</h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#0B1F3A] block">
                      Operational Scenario:
                    </span>
                    <span className="text-[#5B6B7F]">{uc.scenario}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B1F3A] block">
                      AI Detection Trigger:
                    </span>
                    <span className="text-[#5B6B7F]">{uc.detection}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] text-xs">
                <span className="font-semibold text-[#0B1F3A] block">Immediate Outcome:</span>
                <span className="text-[#2563EB] font-medium">{uc.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          9. INDUSTRIES SECTION
          ========================================================================= */}
      <Section
        id="industries"
        background="soft"
        eyebrow={industries.eyebrow}
        heading={industries.heading}
        lead={industries.lead}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.items.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="p-5 rounded-[12px] bg-white border border-[#E2E8F0] hover:border-[#2563EB] transition-colors group block"
            >
              <h3 className="text-sm font-heading font-bold text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors flex items-center justify-between">
                <span>{ind.name}</span>
                <span className="text-xs text-[#5B6B7F] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </h3>
              <p className="mt-2 text-xs text-[#5B6B7F] leading-relaxed">{ind.description}</p>
            </Link>
          ))}
        </div>

        {/* Institutional & Defence Cross-Links */}
        <div className="mt-8 p-5 rounded-[12px] bg-white border border-[#E2E8F0] grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {industries.institutionalCrossLinks.map((inst, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between gap-4 p-3 rounded-lg bg-[#F7F9FC]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#0B1F3A]">{inst.title}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[#5B6B7F]">
                    {inst.tag}
                  </span>
                </div>
                <p className="text-[11px] text-[#5B6B7F] mt-1">{inst.note}</p>
              </div>
              <Link
                href={inst.href}
                className="text-xs font-bold text-[#2563EB] hover:underline whitespace-nowrap self-center"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          10. WHY RESURGENIX (DIFFERENTIATORS)
          ========================================================================= */}
      <Section
        id="why-resurgenix"
        background="white"
        eyebrow={whyResurgenix.eyebrow}
        heading={whyResurgenix.heading}
        lead={whyResurgenix.lead}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyResurgenix.differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white space-y-3"
            >
              <div className="w-7 h-7 rounded-full bg-blue-50 text-[#2563EB] font-mono font-bold text-xs flex items-center justify-center">
                {idx + 1}
              </div>
              <h3 className="text-base font-heading font-bold text-[#0B1F3A]">{diff.title}</h3>
              <p className="text-xs font-medium text-[#2563EB]">{diff.summary}</p>
              <p className="text-xs text-[#5B6B7F] leading-relaxed pt-1 border-t border-[#E2E8F0]/60">
                {diff.technicalReality}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          11. PILOT PROOF (LOW-RISK PATHWAY)
          ========================================================================= */}
      <Section
        id="pilot-pathway"
        background="soft"
        eyebrow={pilotProof.eyebrow}
        heading={pilotProof.heading}
        lead={pilotProof.lead}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {pilotProof.steps.map((st) => (
              <div
                key={st.phase}
                className="p-4 rounded-[10px] bg-white border border-[#E2E8F0] text-center space-y-1.5"
              >
                <div className="text-[11px] font-mono font-bold text-[#2563EB]">{st.phase}</div>
                <div className="text-xs font-heading font-bold text-[#0B1F3A]">{st.title}</div>
                <p className="text-[11px] text-[#5B6B7F] leading-snug">{st.detail}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-[10px] bg-white border border-[#E2E8F0] text-center text-xs text-[#5B6B7F]">
            <span className="font-semibold text-[#0B1F3A]">Pilot Protocol Notice:</span>{" "}
            {pilotProof.truthNotice}
          </div>

          <div className="text-center pt-2">
            <LinkButton href="/request-pilot" variant="primary" size="md">
              Request a Controlled Pilot Program &rarr;
            </LinkButton>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          12. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <Section
        id="faq"
        background="white"
        eyebrow={faq.eyebrow}
        heading={faq.heading}
        lead={faq.lead}
      >
        <div className="max-w-3xl mx-auto">
          <Accordion
            items={faq.items.map((item) => ({
              question: item.question,
              answer: item.answer,
            }))}
          />
          <div className="mt-8 text-center text-xs text-[#5B6B7F]">
            Have a custom network or deployment question?{" "}
            <Link href="/contact" className="text-[#2563EB] font-bold hover:underline">
              Contact our engineering team in Kolkata &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          13. FINAL CONVERSION CTA SECTION
          ========================================================================= */}
      <section
        className="py-16 sm:py-20 bg-[#F7F9FC] border-t border-[#E2E8F0]"
        aria-label="Action Inquiry"
      >
        <Container size="md">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0B1F3A] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" aria-hidden="true" />
              <span>{finalCta.eyebrow}</span>
            </div>

            <h2 className="text-fluid-h2 font-heading font-extrabold text-[#0B1F3A] tracking-tight">
              {finalCta.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#5B6B7F] max-w-xl mx-auto leading-relaxed">
              {finalCta.lead}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <LinkButton href={finalCta.primaryCta.href} variant="primary" size="lg">
                {finalCta.primaryCta.label}
              </LinkButton>
              <LinkButton href={finalCta.secondaryCta.href} variant="secondary" size="lg">
                {finalCta.secondaryCta.label}
              </LinkButton>
            </div>

            <p className="text-xs text-[#5B6B7F] pt-2">{finalCta.contactNote}</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
