import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbListSchema } from "@/components/seo/schema";

const PilotChecklistClient = dynamic(
  () =>
    import("@/components/sections/PilotChecklistClient").then(
      (mod) => mod.PilotChecklistClient
    ),
  {
    loading: () => (
      <div className="p-8 text-center bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl text-xs text-[#5B6B7F]">
        Loading evaluation checklist...
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "AI CCTV Pilot Readiness Checklist (PDF) | Resurgenix",
  description:
    "Download our free, objective AI CCTV Pilot Readiness Checklist for CSOs and IT Heads. Audit camera protocols, pixel density, network bandwidth, and lighting before launching a pilot.",
};

export default function PilotReadinessChecklistPage() {
  const breadcrumbsSchema = getBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Pilot Readiness Checklist", url: "/resources/pilot-readiness-checklist" },
  ]);

  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <JsonLd schema={breadcrumbsSchema} />
      <Section background="white" className="pt-8 pb-12 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Pilot Readiness Checklist", href: "/resources/pilot-readiness-checklist" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Technical Due Diligence Tool
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              AI CCTV Pilot Readiness Checklist
            </h1>
            <p className="text-base sm:text-lg text-[#5B6B7F] leading-relaxed">
              An objective, 16-point technical evaluation checklist designed for enterprise Chief Security
              Officers, Plant Heads, and IT Infrastructure Directors. Audit camera protocol support, optical
              vantage points, network throughput, and operational rules before committing to an on-site pilot.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <PilotChecklistClient />
          </div>
        </Container>
      </Section>
    </main>
  );
}
