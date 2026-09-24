import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { PartnerForm } from "@/components/forms/PartnerForm";

export const metadata: Metadata = {
  title: "Partner Program: System Integrators & Channel Partners | Resurgenix",
  description:
    "Partner with Resurgenix Technologies. Collaborate on AI video intelligence upgrades for existing CCTV installations. For system integrators, CCTV contractors, and security providers.",
};

const partnerProfiles = [
  {
    title: "System Integrators (SIs)",
    description:
      "Enterprise and industrial systems integrators delivering end-to-end security, network, and automation infrastructure who want to deliver high-margin software upgrades without replacing functional camera hardware.",
  },
  {
    title: "CCTV & VMS Integrators",
    description:
      "Video surveillance contractors and VMS installation partners looking to upgrade existing customer accounts from passive footage recording to real-time spatial detection and automated alerting.",
  },
  {
    title: "Managed Security & Guarding Providers",
    description:
      "Physical security guarding agencies and Central Monitoring Stations (CMS) looking to alleviate guard screen fatigue, automate perimeter intrusion alerting, and provide faster response dispatch.",
  },
  {
    title: "IT & Infrastructure Channel Partners",
    description:
      "Value-Added Resellers (VARs) and corporate IT distributors seeking to expand recurring annual software maintenance contract (AMC) revenue across industrial and commercial accounts.",
  },
  {
    title: "Technology & Hardware Partners",
    description:
      "Edge GPU appliance manufacturers, industrial automation suppliers, and VMS platform developers seeking joint technical validation, API interoperability, and bundled solution deployments.",
  },
];

const partnerBenefits = [
  {
    title: "Software Margin & Recurring Revenue",
    description:
      "Earn attractive software licensing margins and ongoing annual software maintenance (AMC) renewals on existing CCTV accounts, offsetting commoditizing camera hardware margins.",
  },
  {
    title: "Opportunity & Deal Registration",
    description:
      "Protect your pre-sales engineering and account discovery efforts through formal deal registration and qualified lead protection for regional enterprise projects.",
  },
  {
    title: "Pre-Sales Engineering Support",
    description:
      "Direct collaboration with Resurgenix computer vision engineers to review client camera layouts, assess RTSP stream quality, and size edge GPU compute appliances accurately.",
  },
  {
    title: "Tender & RFP Documentation",
    description:
      "Access comprehensive technical compliance matrices, architectural schematics, and Manufacturer Authorization Form (MAF) documentation where formally approved.",
  },
  {
    title: "Joint Pilot Deployment Assistance",
    description:
      "Receive hands-on engineering support during initial on-site pilot evaluations, field calibration, virtual boundary configuration, and threshold tuning on live client feeds.",
  },
  {
    title: "Indian Support & Rapid Customization",
    description:
      "Direct access to our Kolkata engineering team for localized technical support and responsive adaptation to specific Indian industrial and commercial operational workflows.",
  },
];

const onboardingSteps = [
  {
    step: "01",
    title: "Submit Partner Enquiry",
    description:
      "Complete the partner form below with your company profile, geographic focus, and typical camera installation base.",
  },
  {
    step: "02",
    title: "Commercial & Regional Discovery",
    description:
      "A 30-minute discovery call with our partnerships team to evaluate market overlap, partner tiering, and commercial collaboration models.",
  },
  {
    step: "03",
    title: "Technical Enablement",
    description:
      "Walkthrough of the Resurgenix platform, stream integration requirements, edge hardware sizing, and alert routing configurations.",
  },
  {
    step: "04",
    title: "Joint Pilot or Tender Bid",
    description:
      "Co-deploy a controlled pilot evaluation on a priority client facility or collaborate on an enterprise security tender submission.",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* 1. Header & Answer-First Overview */}
      <Section background="white" className="pt-8 pb-12 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Partners", href: "/partners" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Channel Ecosystem &amp; System Integrators
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              Partner with Resurgenix: Deliver AI Video Intelligence to Your Client Base
            </h1>
            <p className="text-lg text-[#1F2937] leading-relaxed font-medium mb-6">
              Empower your enterprise customers to transform passive CCTV into real-time security
              intelligence—without replacing their existing cameras or cabling infrastructure.
            </p>
            <p className="text-base text-[#5B6B7F] leading-relaxed">
              We collaborate with system integrators, security contractors, and channel distributors across
              India. By adding Resurgenix&apos;s modular AI vision software layer to your client&apos;s
              installed camera base, you create high-value software margins and strengthen long-term client
              retention.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Who We Want to Work With */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Partner Profiles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              Who We Collaborate With
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              Our partner ecosystem is designed for technology and security organizations that manage or
              upgrade physical surveillance networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerProfiles.map((profile, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{profile.title}</h3>
                  <p className="text-xs text-[#5B6B7F] leading-relaxed">{profile.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-blue-50/60 p-6 rounded-xl border border-blue-200 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Have a Unique Use Case?</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">
                  We frequently discuss custom pilot architectures for specialized industrial, logistics, and
                  civic environments.
                </p>
              </div>
              <Link
                href="/contact"
                className="text-xs font-semibold text-[#2563EB] hover:underline mt-4 inline-block"
              >
                Speak with our engineering team &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. What Partners Get (Collaboration Model) */}
      <Section background="white" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Commercial &amp; Technical Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              What Partners Receive
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              A transparent, supportive collaboration model without inflated promises or invented terms.
              We provide the tools and engineering backing you need to win and execute projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#F7F9FC] p-6 rounded-xl border border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{benefit.title}</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5B6B7F]">
            <span>
              Interested in how our software interacts with existing camera networks?
            </span>
            <Link href="/how-it-works" className="font-semibold text-[#2563EB] hover:underline">
              Review technical architecture &rarr;
            </Link>
          </div>
        </Container>
      </Section>

      {/* 4. How to Start (Onboarding Steps) */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Onboarding Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              How to Start Working with Resurgenix
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              A straightforward four-step process to begin evaluating joint opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {onboardingSteps.map((stepItem, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                <span className="text-xs font-mono font-bold text-[#2563EB] block mb-2">
                  Step {stepItem.step}
                </span>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">{stepItem.title}</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">{stepItem.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Partner Inquiry Form Section */}
      <Section background="white" className="py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Partner Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
                Submit a Partnership Inquiry
              </h2>
              <p className="text-sm text-[#5B6B7F] leading-relaxed">
                Provide details about your integration business and geographic coverage. Our channel team
                will respond to schedule an initial discovery conversation.
              </p>
            </div>

            <div className="bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm">
              <PartnerForm />
            </div>

            <p className="text-xs text-center text-[#5B6B7F] mt-6">
              Looking for client-side evaluation instead?{" "}
              <Link href="/request-demo" className="text-[#2563EB] font-semibold hover:underline">
                Request an enterprise product demonstration
              </Link>{" "}
              or{" "}
              <Link href="/request-pilot" className="text-[#2563EB] font-semibold hover:underline">
                apply for a customer pilot
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
