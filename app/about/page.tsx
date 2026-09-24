import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata: Metadata = {
  title: "About Resurgenix Technologies | Indian AI Video Intelligence",
  description:
    "Resurgenix Technologies builds the AI intelligence layer for existing CCTV infrastructure. Founded in Kolkata, West Bengal, focused on practical computer vision for enterprise and industrial physical security.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* 1. Page Header & Answer-First Summary */}
      <Section background="white" className="pt-8 pb-12 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Company Overview &amp; Mission
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              Turning Existing Physical Infrastructure into Real-Time Intelligent Systems
            </h1>
            <p className="text-lg sm:text-xl text-[#1F2937] leading-relaxed font-medium mb-6">
              Resurgenix Technologies Pvt. Ltd. (brand: Resurgenix) is an Indian artificial intelligence
              and computer vision technology company headquartered in Kolkata, West Bengal.
            </p>
            <p className="text-base text-[#5B6B7F] leading-relaxed">
              We engineer the software intelligence layer that connects to compatible existing IP cameras,
              NVRs, and RTSP video streams. Instead of replacing costly hardware or forcing security teams to
              monitor dozens of passive screens, Resurgenix automates detection, delivers instant operational
              alerts, and provides searchable visual event history across physical facilities.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. The Problem It Exists to Solve */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                The Operational Bottleneck
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight leading-snug mb-4">
                Millions of Cameras That Only Record, While Incidents Go Unnoticed
              </h2>
              <p className="text-sm text-[#5B6B7F] leading-relaxed mb-6">
                Enterprises, manufacturing plants, transport hubs, and public infrastructure have invested
                billions in surveillance cameras. Yet conventional CCTV remains fundamentally reactive: it
                passively records footage to hard drives for after-the-fact investigation once damage, theft,
                or safety breaches have already occurred.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
                <p className="text-xs font-semibold text-[#0B1F3A] mb-1">
                  The Human Attention Limit:
                </p>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">
                  Security operators cannot continuously watch multi-split monitor walls for hours without
                  severe fatigue and missed events. Organizations have physical eyes everywhere, but limited
                  intelligence behind those eyes.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Passive Footage Overload</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">
                  Terabytes of continuous video are archived every week, but 99% is never reviewed unless an
                  incident triggers an exhaustive, manual forensic search.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Late Response Times</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">
                  Perimeter breaches, unauthorized zone intrusions, and safety hazards are typically
                  discovered after the fact, rather than interrupted while in progress.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Fragmented Surveillance Silos</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">
                  Disparate camera brands, NVRs, and building sites operate in isolation, lacking a unified
                  software layer to correlate events across locations.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-sm mb-3">
                  04
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Expensive Rip-and-Replace</h3>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">
                  Proprietary smart camera upgrades often force facilities to discard functional cameras,
                  cabling, and power infrastructure, creating prohibitive upgrade costs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. The Company Story & Founder's Practical Voice */}
      <Section background="white" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2 text-center">
              Our Origin &amp; Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight text-center mb-8">
              &ldquo;Building practical AI systems that turn physical infrastructure into intelligent systems.&rdquo;
            </h2>

            <div className="prose prose-slate max-w-none text-base text-[#1F2937] space-y-5 leading-relaxed bg-[#F7F9FC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0]">
              <p>
                We started Resurgenix with a straightforward conviction: the world does not need more
                passive security cameras that simply generate unreviewed video files. Across factories,
                logistics depots, corporate campuses, and civic facilities in India, physical infrastructure
                already has eyes. What is missing is the intelligence layer behind those eyes.
              </p>
              <p>
                Our approach is not about speculative research or chasing artificial intelligence buzzwords.
                It is grounded in practical engineering: designing computer vision pipelines that run
                reliably on local edge hardware, interface with standard RTSP video feeds, and deliver
                actionable alerts that ground teams and security supervisors can act on immediately.
              </p>
              <p>
                By treating AI as an operational utility rather than an experimental showcase, we make
                high-capability video intelligence accessible to organizations that already have existing
                CCTV infrastructure in place—without requiring prohibitive capital expenditure or complex
                cloud migrations.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Product Approach: Intelligence Layer for Existing Infrastructure */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Product Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              The Intelligence Layer for Existing Infrastructure
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              We engineer modular software that sits on top of your current surveillance setup. You keep your
              cameras, cabling, and NVRs; Resurgenix adds real-time comprehension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Works with Existing Streams</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed mb-4">
                Connects directly to compatible IP cameras, NVRs, DVRs, and XVRs via standard RTSP feeds over
                your local network. Compatibility is verified during our initial technical assessment.
              </p>
              <Link
                href="/how-it-works"
                className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1"
              >
                Learn how the pipeline works &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Modular AI Capabilities</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed mb-4">
                Deploy only the detection models your facility needs—such as restricted zone entry, perimeter
                virtual fencing, workforce attendance, or vehicle intelligence.
              </p>
              <Link
                href="/solutions"
                className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1"
              >
                Browse modular solutions &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Edge &amp; Sovereign Processing</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed mb-4">
                Video is analyzed locally on on-premise edge appliances or private servers. Raw video never
                leaves your physical network unless you explicitly configure cloud routing.
              </p>
              <Link
                href="/security-and-privacy"
                className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1"
              >
                Review deployment security &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. What We Build vs What We Do Not Do */}
      <Section background="white" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Clarity &amp; Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              What We Build vs. What We Do Not Do
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              We maintain absolute clarity regarding our core engineering focus, our technological
              boundaries, and our commercial model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What We Build */}
            <div className="bg-[#F7F9FC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <h3 className="text-lg font-bold text-[#0B1F3A]">What We Build</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1F2937] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Computer Vision Software Pipelines:</strong> Real-time detection, spatial
                    tracking, and classification algorithms for people, vehicles, and objects.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Edge Analytics Engines:</strong> Optimized inference runtimes running on
                    local GPU workstations, industrial edge boxes, and on-premise servers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Centralized Operations Console:</strong> Unified dashboards with multi-stream
                    monitoring, event notifications, visual search, and tamper-evident audit history.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Hardware-Agnostic Stream Connectors:</strong> Interfacing with standard RTSP
                    streams from leading camera brands and existing video management systems.
                  </span>
                </li>
              </ul>
            </div>

            {/* What We Do Not Do */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">
                  ✕
                </span>
                <h3 className="text-lg font-bold text-[#0B1F3A]">What We Do Not Do</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">•</span>
                  <span>
                    <strong>We are NOT a CCTV reseller or camera manufacturer:</strong> We do not sell
                    generic off-the-shelf security cameras, run physical cable pulls, or sell bulk
                    surveillance hardware.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">•</span>
                  <span>
                    <strong>We do not force proprietary hardware lock-in:</strong> We do not require you
                    to purchase closed-ecosystem cameras to gain AI capabilities.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">•</span>
                  <span>
                    <strong>We do not sell consumer AI wrappers:</strong> We build deep-learning vision
                    pipelines engineered specifically for industrial and physical security workloads.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">•</span>
                  <span>
                    <strong>We do not build mass civic surveillance:</strong> We do not build public facial
                    identification databases or engage in indiscriminate tracking of private citizens.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Where We Are: Regional Roots */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Regional Operations &amp; Reach
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
              Headquartered in Kolkata, Serving Eastern India &amp; Beyond
            </h2>
            <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed mb-6">
              Resurgenix is incorporated and headquartered in Kolkata, West Bengal. Our primary engineering
              and operational focus centers on Kolkata, Kalyani, and the Eastern India industrial corridor
              (including Durgapur, Asansol, Haldia, and Kharagpur).
            </p>
            <p className="text-sm text-[#5B6B7F] leading-relaxed mb-6">
              Having our engineering base in Eastern India enables rapid on-site technical audits, direct
              camera stream evaluations, and responsive physical pilot support without the delays associated
              with distant vendors. As our commercial deployments expand across India, we maintain long-term
              aspirations to bring sovereign Indian computer vision engineering to international markets.
            </p>
            <Link
              href="/locations/kolkata-eastern-india"
              className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1"
            >
              Explore our Kolkata &amp; Eastern India operational capabilities &rarr;
            </Link>
          </div>
        </Container>
      </Section>

      {/* 7. Current Stage Stated Honestly */}
      <Section background="white" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-100">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Transparent Operational Status
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              Early Commercial and Pilot Stage
            </h2>
            <p className="text-sm text-[#1F2937] leading-relaxed mb-6 max-w-3xl">
              We state our stage clearly and honestly: Resurgenix is in an early commercial and pilot phase.
              We are actively focusing our engineering resources on qualified conversations across four key
              areas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                <span className="text-xs font-bold text-[#0B1F3A] block mb-1">Enterprise Pilots</span>
                <p className="text-[11px] text-[#5B6B7F] leading-relaxed">
                  Controlled evaluations on 3 to 10 live camera streams in corporate and industrial campuses.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                <span className="text-xs font-bold text-[#0B1F3A] block mb-1">Industrial Plants</span>
                <p className="text-[11px] text-[#5B6B7F] leading-relaxed">
                  Hazardous boundary enforcement, contractor safety verification, and asset protection.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                <span className="text-xs font-bold text-[#0B1F3A] block mb-1">Public &amp; Defence Sectors</span>
                <p className="text-[11px] text-[#5B6B7F] leading-relaxed">
                  Exploratory discussions for localized, sovereign edge video intelligence for public infrastructure.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                <span className="text-xs font-bold text-[#0B1F3A] block mb-1">Channel Partners</span>
                <p className="text-[11px] text-[#5B6B7F] leading-relaxed">
                  Collaborating with security system integrators (SIs) and VMS providers seeking software margins.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Founder Leadership Profile */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2 text-center">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight text-center mb-8">
              Engineering Leadership
            </h2>

            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <h3 className="text-xl font-extrabold text-[#0B1F3A]">Souryodipto Debnath</h3>
                  <p className="text-xs font-semibold text-[#2563EB] mt-0.5">
                    Founder, Resurgenix Technologies Pvt. Ltd.
                  </p>
                </div>
                <Badge variant="blue" size="sm">
                  Kolkata, West Bengal
                </Badge>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#5B6B7F] leading-relaxed mb-6">
                <p>
                  Background in Electronics &amp; Computer Science, Artificial Intelligence, Computer Vision,
                  Robotics, Edge Computing, and Product Development.
                </p>
                <p>
                  Focused on building practical, reliable AI systems that turn existing physical infrastructure
                  into intelligent operational assets. Leads architecture, model optimization, and edge pipeline
                  engineering at Resurgenix.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-[#5B6B7F]">
                <span>Technical Feasibility &amp; Pilot Architecture</span>
                <Link
                  href="/contact"
                  className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  Contact Founder &rarr;
                </Link>
              </div>
            </div>

            {/* Note: Other team members are intentionally omitted per brief rules until explicit role and consent are verified in docs/OPEN_ITEMS.md */}
            {/* Note: Personal LinkedIn is omitted per brief instructions as only company LinkedIn URL is provided */}
          </div>
        </Container>
      </Section>

      {/* 9. Recognition and Programs Block (Omitted pending founder verification per docs/OPEN_ITEMS.md) */}
      {/*
        RECOGNITION BLOCK RULE:
        Per project guidelines, this block lists ONLY items marked approved in /docs/OPEN_ITEMS.md.
        Currently, all traction and recognition items (IIM Calcutta Innovation Park, Techstorm 2026,
        JC Bose Science Fair, SIGNASS-2026) remain unverified [ ] in docs/OPEN_ITEMS.md.
        Per instructions: "If none are approved yet, render nothing and log it."
        This block is rendered as nothing and logged in OPEN_ITEMS.md.
      */}

      {/* 10. Call to Action */}
      <Section background="white" className="py-14 sm:py-16">
        <Container>
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Evaluate Resurgenix on Your Camera Feeds
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Schedule a technical demonstration or request a controlled pilot evaluation on your existing
                surveillance network.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton href="/request-demo" variant="primary" size="md">
                Request a Demo
              </LinkButton>
              <LinkButton
                href="/request-pilot"
                variant="secondary"
                size="md"
                className="text-slate-900 border-slate-300 hover:bg-slate-100"
              >
                Request a Pilot
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
