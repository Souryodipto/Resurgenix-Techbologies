import type { Metadata } from "next";
import Link from "next/link";
import { articles, comparisons } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ResourcesList } from "@/components/sections/ResourcesList";

export const metadata: Metadata = {
  title: "Resources, Guides & Surveillance Architecture Hub | Resurgenix",
  description:
    "Technical guides, compliance whitepapers, architectural comparisons, and checklists on AI video analytics, existing CCTV integration, and enterprise physical security.",
};

export default function ResourcesHubPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* 1. Page Header */}
      <Section background="white" className="pt-8 pb-12 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
            ]}
            className="mb-6"
          />

          <div className="max-w-4xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Surveillance Intelligence Knowledge Base
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              Engineering Guides, Comparisons &amp; Governance
            </h1>
            <p className="text-base sm:text-lg text-[#5B6B7F] leading-relaxed mb-6">
              Practical technical guides, architectural comparisons, and evaluation frameworks designed for
              Chief Security Officers, Plant Heads, and IT Infrastructure Directors evaluating computer vision
              for existing CCTV networks.
            </p>

            {/* Quick Links to Glossary, FAQ, & Lead Magnets */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Link
                href="/glossary"
                className="px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#E2E8F0] text-[#0B1F3A] font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition"
              >
                📚 Technical Glossary (26 terms) &rarr;
              </Link>
              <Link
                href="/faq"
                className="px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#E2E8F0] text-[#0B1F3A] font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition"
              >
                ❓ Frequently Asked Questions &rarr;
              </Link>
              <Link
                href="/resources/cctv-ai-readiness-assessment"
                className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-[#2563EB] font-semibold hover:bg-blue-100 transition"
              >
                ⚡ Interactive CCTV Readiness Assessment &rarr;
              </Link>
              <Link
                href="/resources/pilot-readiness-checklist"
                className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold hover:bg-emerald-100 transition"
              >
                📋 Pilot Readiness Checklist (PDF) &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Interactive Resources Directory */}
      <Section background="white" className="py-12">
        <Container>
          <ResourcesList articles={articles} comparisons={comparisons} />
        </Container>
      </Section>
    </main>
  );
}
