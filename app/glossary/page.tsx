import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/content/glossary";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { GlossaryList } from "@/components/sections/GlossaryList";

export const metadata: Metadata = {
  title: "Surveillance AI & Computer Vision Glossary | Resurgenix Technologies",
  description:
    "A clear, practical technical glossary of terms in video analytics, camera protocols (RTSP, ONVIF, NVR, DVR, XVR), edge AI, DPDP Act compliance, and physical security intelligence.",
};

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <Section background="white" className="pt-8 pb-12 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Glossary", href: "/glossary" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Technical Reference &amp; Terminology
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              Surveillance AI &amp; Video Intelligence Glossary
            </h1>
            <p className="text-base sm:text-lg text-[#5B6B7F] leading-relaxed">
              Clear, practical definitions of video streaming protocols, computer vision architectures,
              hardware components, and regulatory terms commonly used across enterprise surveillance and physical
              security projects.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <GlossaryList terms={glossaryTerms} />

            <div className="mt-14 p-6 sm:p-8 bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-[#0B1F3A]">
                  Looking for in-depth technical guides?
                </h3>
                <p className="text-xs text-[#5B6B7F] mt-1">
                  Explore our comprehensive guides on adding AI to existing CCTV and evaluating pilot deployments.
                </p>
              </div>
              <Link
                href="/resources"
                className="px-5 py-2.5 rounded-lg bg-[#2563EB] text-white font-medium hover:bg-[#1D4ED8] text-xs shadow-xs transition whitespace-nowrap"
              >
                Browse Resources Hub &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
