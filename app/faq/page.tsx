import type { Metadata } from "next";
import { faqsData } from "@/content/faqs";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Resurgenix Technologies",
  description:
    "Direct, practical answers to frequent questions regarding camera compatibility, pilot deployments, edge computing, DPDP privacy compliance, and enterprise security.",
};

export default function FAQHubPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* Page Header */}
      <Section background="white" className="pt-8 pb-12 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "FAQ", href: "/faq" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Answers &amp; Technical Clarifications
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#5B6B7F] leading-relaxed">
              Direct, technical answers to the most common questions asked by enterprise Chief Security
              Officers, Plant Heads, and IT Infrastructure Directors evaluating AI video analytics for existing
              CCTV networks.
            </p>
          </div>
        </Container>
      </Section>

      {/* Categorized FAQ Sections */}
      <Section background="white" className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {faqsData.map((category, catIdx) => (
              <div
                key={category.category}
                id={`category-${catIdx}`}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E2E8F0]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" aria-hidden="true" />
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A]">
                    {category.category}
                  </h2>
                </div>

                <Accordion
                  items={category.items.map((item) => ({
                    question: item.question,
                    answer: (
                      <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">
                        {item.answer}
                      </p>
                    ),
                  }))}
                  allowMultiple={false}
                />
              </div>
            ))}

            {/* Bottom Contact & Pilot Block */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                  Have a question not covered here?
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our engineering team is available to review your camera layout, network topology, and
                  specific detection requirements.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <LinkButton href="/request-pilot" variant="primary" size="md">
                  Request a Pilot
                </LinkButton>
                <LinkButton
                  href="/contact"
                  variant="secondary"
                  size="md"
                  className="text-slate-900 border-slate-300 hover:bg-slate-100"
                >
                  Contact Engineering
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
