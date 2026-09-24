import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { PilotChecklistClient } from "@/components/sections/PilotChecklistClient";

export const metadata: Metadata = {
  title: "AI CCTV Pilot Readiness Checklist | Enterprise Evaluation Guide | Resurgenix",
  description:
    "Download our free, objective AI CCTV Pilot Readiness Checklist for CSOs and IT Heads. Audit camera protocols, pixel density, network bandwidth, and lighting before launching a pilot.",
};

export default function PilotReadinessChecklistPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
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
