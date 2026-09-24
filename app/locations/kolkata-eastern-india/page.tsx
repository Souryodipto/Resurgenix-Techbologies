import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata: Metadata = {
  title: "AI Video Analytics in Kolkata, Kalyani & Eastern India | Resurgenix",
  description:
    "Deploy AI video analytics across Kolkata, Kalyani, and Eastern India industrial corridors. On-site camera stream audits, local edge deployment, and direct engineering support.",
};

const regionalCorridors = [
  {
    name: "Kolkata & New Town IT / Corporate Corridors",
    geography: "Salt Lake Sector V, Rajarhat New Town, CBD",
    focus:
      "Enterprise campuses, IT/ITeS commercial towers, corporate headquarters, and high-density office parks requiring automated workforce attendance, turnstile tailgating detection, and visitor zone governance.",
    link: "/industries/corporate-enterprise",
    linkText: "Corporate Enterprise Solutions",
  },
  {
    name: "Durgapur – Asansol Industrial & Steel Belt",
    geography: "Paschim Bardhaman industrial cluster",
    focus:
      "Heavy engineering plants, integrated steel mills, thermal power facilities, and mining infrastructure requiring hazardous machinery exclusion zones, virtual boundary tripwires, and perimeter breach alerting.",
    link: "/industries/manufacturing",
    linkText: "Manufacturing & Industrial Solutions",
  },
  {
    name: "Haldia Port & Petrochemical Industrial Zone",
    geography: "Purba Medinipur coastal industrial belt",
    focus:
      "Petrochemical refineries, bulk cargo port terminals, chemical storage complexes, and bonded storage areas requiring 24/7 night movement detection, perimeter intrusion alerts, and tanker movement monitoring.",
    link: "/solutions/restricted-zone-unauthorized-entry-detection",
    linkText: "Restricted Zone Detection",
  },
  {
    name: "Kalyani Educational, Healthcare & Research Hub",
    geography: "Nadia district / Kalyani industrial & institutional area",
    focus:
      "Academic campuses, research institutes, healthcare facilities, and manufacturing units requiring multi-building perimeter oversight, vehicular gate access logging, and sensitive ward access control.",
    link: "/industries/healthcare",
    linkText: "Healthcare & Campus Security",
  },
  {
    name: "Kharagpur & Dankuni Logistics & Freight Corridor",
    geography: "National Highway freight nodes & multimodal hubs",
    focus:
      "Warehousing parks, distribution centers, container freight stations, and multimodal logistics yards requiring automated truck turn-around monitoring, dock dwell alerts, and ANPR vehicle logging.",
    link: "/industries/logistics-warehousing",
    linkText: "Logistics & Warehouse Analytics",
  },
];

const proximityBenefits = [
  {
    title: "Rapid On-Site Optical & Network Audits",
    description:
      "Because our engineering core is headquartered in Kolkata, our engineers can be physically on-site at your facility within hours to inspect camera mount angles, stream bitrate, lens cleanliness, and LAN bandwidth headroom.",
  },
  {
    title: "Direct Edge Hardware Setup & Calibration",
    description:
      "We assist your security and IT teams directly with on-premise edge appliance installation, RTSP stream mapping, and spatial virtual boundary drawing on live facility feeds.",
  },
  {
    title: "In-Person Pilot Threshold Tuning",
    description:
      "Every industrial plant has unique lighting, vibrations, and vehicle movement patterns. We calibrate detection sensitivity and filter nuisance events on-site, ensuring high operational precision from day one.",
  },
  {
    title: "Zero Travel Latency for Pilot Evaluations",
    description:
      "Avoid coordinating across distant time zones or waiting for fly-in technicians from Western or Southern India. Eastern India enterprises receive direct, locally accountable engineering partnership.",
  },
];

export default function KolkataEasternIndiaPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* 1. Page Header & Regional Answer-First Summary */}
      <Section background="white" className="pt-8 pb-12 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/about" },
              { label: "Kolkata & Eastern India", href: "/locations/kolkata-eastern-india" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Regional Operations Hub
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              AI Video Intelligence Engineered in Kolkata for Eastern India
            </h1>
            <p className="text-lg text-[#1F2937] leading-relaxed font-medium mb-6">
              Resurgenix Technologies is proudly incorporated and headquartered in Kolkata, West Bengal.
              We provide enterprise, industrial, healthcare, and infrastructure operators across Eastern India
              with direct on-site camera audits, edge video analytics deployment, and hands-on pilot support.
            </p>
            <p className="text-base text-[#5B6B7F] leading-relaxed">
              Instead of relying on distant vendors or generic software delivered over remote calls, Eastern
              India industrial plants and campuses benefit from our direct engineering proximity. We connect
              our modular AI vision layer to your existing CCTV cameras, helping security teams detect events
              in real time without replacing their surveillance investments.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Why Regional Proximity Matters */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Proximity &amp; Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              The Value of Local Engineering Presence
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              Deploying computer vision on live enterprise camera networks is not a one-click software download.
              It requires physical understanding of camera vantage points, lighting transitions, and network
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {proximityBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{benefit.title}</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Eastern India Industrial & Campus Corridors */}
      <Section background="white" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Regional Focus Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              Serving Key Industrial &amp; Enterprise Corridors
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              We focus our on-ground deployment capabilities across critical economic and industrial zones in
              West Bengal and neighbouring Eastern India hubs.
            </p>
          </div>

          <div className="space-y-4">
            {regionalCorridors.map((corridor, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] p-6 rounded-xl border border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-[#0B1F3A]">{corridor.name}</h3>
                    <span className="text-[11px] font-mono text-[#5B6B7F] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                      {corridor.geography}
                    </span>
                  </div>
                  <p className="text-xs text-[#5B6B7F] leading-relaxed">{corridor.focus}</p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href={corridor.link}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    {corridor.linkText} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Local Deployment Methodology */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Engagement Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              How Eastern India Organizations Start
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              A transparent, low-risk process designed to validate computer vision accuracy on your actual
              operational camera streams before any broad rollout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-mono font-bold text-[#2563EB] block mb-1">Phase 1</span>
              <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">Facility Assessment</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Initial review of your facility layout, high-priority zones, camera makes, and RTSP stream
                availability.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-mono font-bold text-[#2563EB] block mb-1">Phase 2</span>
              <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">On-Site Stream Audit</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Our engineers visit your site in Kolkata, Kalyani, or nearby corridors to verify network
                bandwidth and stream stability.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-mono font-bold text-[#2563EB] block mb-1">Phase 3</span>
              <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">Controlled Pilot Setup</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Deploy local edge compute on 3 to 5 priority streams (e.g. perimeter fences, dispatch docks,
                restricted rooms).
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-mono font-bold text-[#2563EB] block mb-1">Phase 4</span>
              <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">Review &amp; Scale</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Review detection accuracy, false alert filtering, and operator workflow fit before planning
                multi-camera expansion.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Contact & Regional Action Block */}
      <Section background="white" className="py-14 sm:py-16">
        <Container>
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <Badge variant="blue" size="sm" className="mb-3 text-blue-200 bg-blue-900/60 border-blue-700">
                Kolkata Headquarters
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Request an On-Site Pilot Assessment in Eastern India
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Speak directly with our Kolkata engineering team to schedule a technical walkthrough or camera
                feasibility inspection at your plant, campus, or facility.
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p>
                  <strong>Headquarters:</strong> {siteConfig.company.fullHqDisplay}
                </p>
                <p>
                  <strong>Direct Email:</strong>{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p>
                  <strong>Phone / WhatsApp:</strong> {siteConfig.contact.displayPhone}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <LinkButton href="/request-pilot" variant="primary" size="md">
                Request a Pilot Assessment
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="secondary"
                size="md"
                className="text-slate-900 border-slate-300 hover:bg-slate-100"
              >
                Contact Regional Team
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
