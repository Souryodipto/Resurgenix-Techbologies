import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbListSchema } from "@/components/seo/schema";

const CCTVReadinessAssessment = dynamic(
  () =>
    import("@/components/sections/CCTVReadinessAssessment").then(
      (mod) => mod.CCTVReadinessAssessment
    ),
  {
    loading: () => (
      <div className="p-8 text-center bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl text-xs text-[#5B6B7F]">
        Loading readiness assessment...
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Is Your CCTV Ready for AI? Self-Assessment | Resurgenix",
  description:
    "Evaluate your existing CCTV camera hardware, resolution, network architecture, and operational environment with our 2-minute qualitative readiness assessment.",
};

export default function CCTVReadinessAssessmentPage() {
  const breadcrumbsSchema = getBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "CCTV AI Readiness Assessment", url: "/resources/cctv-ai-readiness-assessment" },
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
              { label: "CCTV AI Readiness Assessment", href: "/resources/cctv-ai-readiness-assessment" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Interactive Self-Assessment
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              Is Your CCTV Ready for AI?
            </h1>
            <p className="text-base sm:text-lg text-[#5B6B7F] leading-relaxed">
              Before planning a video intelligence rollout, discover whether your existing surveillance cameras,
              native resolutions, local network switches, and lighting conditions can support computer vision
              detection without replacing your hardware.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <CCTVReadinessAssessment />
          </div>
        </Container>
      </Section>
    </main>
  );
}
