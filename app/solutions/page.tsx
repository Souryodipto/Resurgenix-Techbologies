import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/LinkButton";
import { solutions } from "@/content/solutions";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "AI Video Surveillance Solutions | Resurgenix Technologies",
  description:
    "Explore 9 modular AI video intelligence solutions designed for existing CCTV cameras. Real-time detection, unauthorized entry alerts, and workforce intelligence.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/solutions`,
  },
  openGraph: {
    title: "AI Video Surveillance Solutions | Resurgenix Technologies",
    description:
      "Explore 9 modular AI video intelligence solutions designed for existing CCTV cameras. Real-time detection, unauthorized entry alerts, and workforce intelligence.",
    url: `${siteConfig.siteUrl}/solutions`,
    siteName: siteConfig.company.brandName,
    images: [
      {
        url: "/images/resurgenix-video-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Resurgenix Solutions Overview",
      },
    ],
  },
};

export default function SolutionsHubPage() {
  const coreSolutions = solutions.filter((s) =>
    ["ai-video-analytics", "anpr-vehicle-intelligence"].includes(s.slug)
  );

  const securitySolutions = solutions.filter((s) =>
    [
      "restricted-zone-unauthorized-entry-detection",
      "ai-attendance-workforce-intelligence",
      "enterprise-security",
    ].includes(s.slug)
  );

  const institutionalSolutions = solutions.filter((s) =>
    [
      "smart-city-video-intelligence",
      "centralized-video-intelligence",
      "defence-security",
      "border-surveillance",
    ].includes(s.slug)
  );

  return (
    <div className="bg-white text-[#1F2937]">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="pt-8 pb-14 sm:pb-16 bg-white border-b border-[#E2E8F0]">
        <Container size="lg">
          <Breadcrumbs items={[{ label: "Solutions" }]} />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F9FC] border border-[#E2E8F0] text-[#0B1F3A] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" aria-hidden="true" />
              <span>MODULAR COMPUTER VISION PLATFORM</span>
            </div>

            <h1 className="text-fluid-h1 font-heading font-extrabold text-[#0B1F3A] tracking-tight leading-[1.12]">
              AI Video Intelligence Solutions for Existing CCTV
            </h1>

            <p className="text-base sm:text-lg text-[#5B6B7F] leading-relaxed">
              Resurgenix connects directly to compatible IP cameras, NVRs, and RTSP video streams.
              Choose modular computer vision capabilities to solve specific spatial security and
              operational challenges without costly equipment rip-and-replace.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <LinkButton href="/request-demo" variant="primary" size="md">
                Request a Demo
              </LinkButton>
              <LinkButton href="/request-pilot" variant="secondary" size="md">
                Request a Controlled Pilot
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          TIER 1: CORE VIDEO INTELLIGENCE
          ========================================================================= */}
      <Section
        id="core-intelligence"
        background="soft"
        eyebrow="TIER 1: PLATFORM PILLARS"
        heading="Core Video Intelligence &amp; Ingestion"
        lead="Foundation computer vision models for multi-camera entity detection, classification, and vehicular logging."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreSolutions.map((sol) => (
            <div
              key={sol.slug}
              className="p-6 rounded-[12px] bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#2563EB] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                    Core Capability
                  </span>
                  <StatusBadge status={sol.status} size="sm" />
                </div>

                <h2 className="text-lg font-heading font-bold text-[#0B1F3A]">
                  <Link href={`/solutions/${sol.slug}`} className="hover:text-[#2563EB]">
                    {sol.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">
                  {sol.shortAnswer}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#0B1F3A] block mb-1">
                    Key Deliverables:
                  </span>
                  <ul className="text-xs text-[#5B6B7F] space-y-1 list-disc list-inside">
                    {sol.capabilities.slice(0, 3).map((cap, i) => (
                      <li key={i}>{cap.title}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  Explore Solution &rarr;
                </Link>
                <Link
                  href="/request-demo"
                  className="text-xs text-[#5B6B7F] hover:text-[#0B1F3A] font-medium"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          TIER 2: SECURITY & ACCESS CONTROL
          ========================================================================= */}
      <Section
        id="security-access"
        background="white"
        eyebrow="TIER 2: BOUNDARIES &amp; WORKFORCE"
        heading="Security, Boundary &amp; Access Intelligence"
        lead="Enforce virtual spatial perimeters, consent-based workforce shift logs, and multi-campus security governance."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securitySolutions.map((sol) => (
            <div
              key={sol.slug}
              className="p-6 rounded-[12px] bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#2563EB] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                    Security Module
                  </span>
                  <StatusBadge status={sol.status} size="sm" />
                </div>

                <h2 className="text-base font-heading font-bold text-[#0B1F3A]">
                  <Link href={`/solutions/${sol.slug}`} className="hover:text-[#2563EB]">
                    {sol.title}
                  </Link>
                </h2>

                <p className="text-xs text-[#5B6B7F] leading-relaxed line-clamp-4">
                  {sol.shortAnswer}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  Explore Solution &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          TIER 3: INSTITUTIONAL & PUBLIC INFRASTRUCTURE
          ========================================================================= */}
      <Section
        id="institutional"
        background="soft"
        eyebrow="TIER 3: LARGE-SCALE INFRASTRUCTURE"
        heading="Institutional, Urban &amp; Defence Architectures"
        lead="Designed for multi-site enterprise operations centers, municipal command hubs, and sovereign defense installations."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {institutionalSolutions.map((sol) => (
            <div
              key={sol.slug}
              className="p-5 rounded-[12px] bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#2563EB] transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <StatusBadge status={sol.status} size="sm" />
                </div>

                <h2 className="text-sm font-heading font-bold text-[#0B1F3A]">
                  <Link href={`/solutions/${sol.slug}`} className="hover:text-[#2563EB]">
                    {sol.title}
                  </Link>
                </h2>

                <p className="text-xs text-[#5B6B7F] leading-relaxed line-clamp-4">
                  {sol.shortAnswer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2E8F0]">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          EVALUATE WITHOUT RIP-AND-REPLACE BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white border-t border-[#E2E8F0]">
        <Container size="md">
          <div className="p-8 rounded-[14px] bg-[#F7F9FC] border border-[#E2E8F0] text-center space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
              LOW-RISK PILOT EVALUATION
            </span>
            <h2 className="text-fluid-h3 font-heading font-bold text-[#0B1F3A]">
              Evaluate on 3 to 5 existing cameras before enterprise rollout
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7F] max-w-xl mx-auto leading-relaxed">
              We validate RTSP stream compatibility, lighting variations, and false alert
              suppression on your live facility feeds. No long-term lock-in or proprietary equipment
              required.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href="/request-pilot" variant="primary" size="md">
                Request a Controlled Pilot Program &rarr;
              </LinkButton>
              <LinkButton href="/how-it-works" variant="secondary" size="md">
                View 5-Step Deployment Lifecycle
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
