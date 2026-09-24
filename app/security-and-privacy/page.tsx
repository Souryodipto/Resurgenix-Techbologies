import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Callout } from "@/components/ui/Callout";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata: Metadata = {
  title: "Security, Privacy & Data Governance Architecture | Resurgenix",
  description:
    "Honest, non-marketing overview of Resurgenix video processing architecture: edge and on-premise deployment, access control, auditability, data governance, and privacy design.",
};

const securityFaqs = [
  {
    question: "Does Resurgenix send raw CCTV video streams to external cloud servers?",
    answer:
      "In standard edge and on-premise deployments, no. All video decoding, neural network inference, and frame analysis occur locally within your physical facility on edge appliances or your internal server network. Only lightweight structured event metadata (JSON alerts, timestamps, and optional cropped alert snapshots) are routed, and only if configured.",
  },
  {
    question: "Can Resurgenix operate on an air-gapped or isolated local network?",
    answer:
      "Yes. The edge inference engine and local management console can be deployed on a completely air-gapped local area network (LAN) with no outbound internet access. In this configuration, model updates and system maintenance are performed via local administrative access.",
  },
  {
    question: "How is access to camera feeds and alert logs controlled?",
    answer:
      "We implement granular Role-Based Access Control (RBAC). System permissions are segmented into distinct operational tiers: Administrator, Security Supervisor, Station Operator, and Compliance Auditor. Access can be restricted at the individual camera feed, zone, or site level.",
  },
  {
    question: "How does the platform handle data retention and purge schedules?",
    answer:
      "Data retention periods are fully configurable and set directly by the customer. The platform does not enforce perpetual video archiving. Automated purge policies can be configured to delete alert snapshots, event logs, and temporary caches after a customer-specified number of days.",
  },
  {
    question: "Are face-related features used for public mass surveillance or citizen tracking?",
    answer:
      "No. Resurgenix explicitly does not build or position software for indiscriminate public crowd identification or unconsented mass surveillance. Facial verification capabilities are strictly confined to consent-based operational workflows, such as voluntary employee shift attendance and verified contractor access.",
  },
  {
    question: "What network bandwidth is required between cameras and the edge appliance?",
    answer:
      "Because video feeds are ingested locally over your facility LAN via standard RTSP/ONVIF streams, zero external internet bandwidth is consumed for video processing. Local network load is equivalent to standard camera-to-NVR streaming (typically 2 to 4 Mbps per 1080p H.264/H.265 stream).",
  },
  {
    question: "How does the system detect and report camera failures or stream tampering?",
    answer:
      "The platform includes automated camera health diagnostics that monitor stream heartbeat, frame rates, signal loss, network packet drops, and optical occlusion (such as a blocked or repositioned camera lens). Operators receive proactive notifications if any camera feed becomes unavailable.",
  },
  {
    question: "What certifications does Resurgenix hold?",
    answer:
      "We do not claim certifications we do not hold. Resurgenix is in an early commercial stage and has not yet completed third-party audits for formal certifications like ISO 27001 or SOC 2. Instead, our software is architected with technical capabilities—including on-premise data residency, RBAC, data minimization, and audit logging—designed to assist customers in fulfilling their own internal governance and statutory compliance obligations.",
  },
];

export default function SecurityAndPrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* 1. Header & Answer-First Overview */}
      <Section background="white" className="pt-8 pb-12 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Security & Privacy", href: "/security-and-privacy" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <Badge variant="blue" size="sm" className="mb-3">
              Data Governance &amp; Security Architecture
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              Security, Privacy &amp; Deployment Architecture
            </h1>
            <p className="text-lg text-[#1F2937] leading-relaxed font-medium mb-6">
              An honest, non-marketing overview of how Resurgenix processes video data, enforces access
              controls, maintains auditability, and protects data sovereignty.
            </p>
            <p className="text-base text-[#5B6B7F] leading-relaxed">
              Surveillance intelligence must protect physical operations without creating cyber vulnerabilities
              or compromising privacy. Our platform is built around local data containment, strict role-based
              access, and customer-controlled retention.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Honest Certification Disclaimer Banner */}
      <Section background="soft" className="py-6 border-b border-[#E2E8F0]">
        <Container>
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-sm max-w-4xl">
            <div className="flex items-start gap-3">
              <span className="text-base text-[#2563EB] mt-0.5" aria-hidden="true">
                🛡️
              </span>
              <div>
                <h2 className="text-sm font-bold text-[#0B1F3A] mb-1">
                  Honest Certification Policy: We Do Not Claim Certifications We Do Not Hold
                </h2>
                <p className="text-xs text-[#5B6B7F] leading-relaxed">
                  Resurgenix is in an early commercial and pilot stage. We do not currently hold formal
                  third-party certifications such as ISO/IEC 27001, SOC 2 Type II, or BIS compliance stamps.
                  We never make claims of being &ldquo;100% secure&rdquo;. Instead, we design our software
                  architecture—local on-premise execution, granular RBAC, immutable event logging, and
                  customer-controlled data retention—to support enterprise customers in satisfying their own
                  internal compliance and data governance obligations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Deployment Options & Video Data Locality */}
      <Section background="white" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Architecture &amp; Data Locality
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              Deployment Options: Where Video Is Processed &amp; Stored
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              Video surveillance files contain sensitive operational and spatial data. We offer flexible
              deployment models so enterprise security and IT teams can choose exactly where processing
              occurs and where data resides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Edge */}
            <div className="bg-[#F7F9FC] p-6 rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-[#0B1F3A]">1. Edge Appliance Deployment</h3>
                <Badge variant="blue" size="sm">
                  Recommended for Industrial &amp; Remote
                </Badge>
              </div>
              <p className="text-xs text-[#5B6B7F] leading-relaxed mb-4">
                Compact GPU-accelerated appliances installed locally on the facility LAN, ingesting RTSP feeds
                directly from nearby switches.
              </p>
              <div className="space-y-2 text-xs text-[#1F2937] border-t border-[#E2E8F0] pt-4">
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Where Video is Processed:</span>{" "}
                  <span className="text-[#5B6B7F]">Directly on the local edge hardware appliance.</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Where Video is Stored:</span>{" "}
                  <span className="text-[#5B6B7F]">
                    On existing customer NVR/DVR or local appliance disk. Never leaves the physical site.
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">External Bandwidth:</span>{" "}
                  <span className="text-[#5B6B7F]">
                    Zero KB for video frames. Only optional JSON alert telemetry is routed.
                  </span>
                </div>
              </div>
            </div>

            {/* On-Premise Server */}
            <div className="bg-[#F7F9FC] p-6 rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-[#0B1F3A]">2. On-Premise Server Deployment</h3>
                <Badge variant="blue" size="sm">
                  Recommended for Multi-Camera Campuses
                </Badge>
              </div>
              <p className="text-xs text-[#5B6B7F] leading-relaxed mb-4">
                Deployed on customer-supplied server hardware or virtualized infrastructure in the internal
                corporate data center.
              </p>
              <div className="space-y-2 text-xs text-[#1F2937] border-t border-[#E2E8F0] pt-4">
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Where Video is Processed:</span>{" "}
                  <span className="text-[#5B6B7F]">Internal enterprise server room / private data center.</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Where Video is Stored:</span>{" "}
                  <span className="text-[#5B6B7F]">
                    Customer enterprise SAN, NAS, or centralized recording servers.
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">External Bandwidth:</span>{" "}
                  <span className="text-[#5B6B7F]">
                    Fully air-gapped capable; complete internal network containment.
                  </span>
                </div>
              </div>
            </div>

            {/* Hybrid */}
            <div className="bg-[#F7F9FC] p-6 rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-[#0B1F3A]">3. Hybrid Architecture</h3>
                <Badge variant="neutral" size="sm">
                  Distributed Multi-Site Enterprises
                </Badge>
              </div>
              <p className="text-xs text-[#5B6B7F] leading-relaxed mb-4">
                Localized video inference at each branch or factory, with centralized multi-site dashboard
                aggregation for enterprise security operations.
              </p>
              <div className="space-y-2 text-xs text-[#1F2937] border-t border-[#E2E8F0] pt-4">
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Where Video is Processed:</span>{" "}
                  <span className="text-[#5B6B7F]">Locally at each distributed facility edge node.</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Where Video is Stored:</span>{" "}
                  <span className="text-[#5B6B7F]">Local branch storage; raw video stays at the branch.</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">External Bandwidth:</span>{" "}
                  <span className="text-[#5B6B7F]">
                    Minimal outbound traffic (heartbeat telemetry, incident counts, authorized alerts).
                  </span>
                </div>
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-[#F7F9FC] p-6 rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-[#0B1F3A]">4. Dedicated Cloud Instance</h3>
                <Badge variant="neutral" size="sm">
                  Light Commercial &amp; Distributed Retail
                </Badge>
              </div>
              <p className="text-xs text-[#5B6B7F] leading-relaxed mb-4">
                Deployed in a dedicated customer cloud virtual private cloud (VPC) where local GPU hardware is
                operationally impractical.
              </p>
              <div className="space-y-2 text-xs text-[#1F2937] border-t border-[#E2E8F0] pt-4">
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Where Video is Processed:</span>{" "}
                  <span className="text-[#5B6B7F]">Isolated customer VPC cloud compute cluster.</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">Where Video is Stored:</span>{" "}
                  <span className="text-[#5B6B7F]">
                    Customer-managed encrypted cloud object storage buckets.
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B1F3A]">External Bandwidth:</span>{" "}
                  <span className="text-[#5B6B7F]">
                    Requires continuous upstream camera bandwidth; protected via TLS encryption.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#5B6B7F] text-center">
            Need guidance on network topology?{" "}
            <Link href="/how-it-works" className="text-[#2563EB] font-semibold hover:underline">
              Read how the video pipeline integrates with local infrastructure &rarr;
            </Link>
          </p>
        </Container>
      </Section>

      {/* 4. Access Control & User Management */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Identity &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              Access Control &amp; User Permission Tiers
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              To prevent unauthorized surveillance monitoring or unauthorized configuration changes, the
              platform enforces strict Role-Based Access Control (RBAC) and individualized user accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                Tier 01
              </span>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Super Administrator</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Full administrative scope: camera stream onboarding, AI model pipeline allocation, user
                provisioning, network parameters, and system purge policies.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                Tier 02
              </span>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Security Supervisor</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Operational control: virtual boundary zone configuration, alert threshold calibration,
                shift scheduling, and incident report generation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                Tier 03
              </span>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Station Operator</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Live monitoring role: viewing authorized camera feeds, receiving real-time intrusion alerts,
                and acknowledging operational alarms. Cannot edit zones or users.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                Tier 04
              </span>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Compliance Auditor</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Read-only governance role: reviewing system audit logs, user login history, alert response
                metrics, and data retention compliance without stream access.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Auditability & Data Governance Principles */}
      <Section background="white" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Auditability */}
            <div className="bg-[#F7F9FC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Operational Accountability
              </span>
              <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-4">
                Tamper-Evident Auditability &amp; Event Logging
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed mb-4">
                Every operator action within the platform is recorded in an immutable, searchable event
                history. This ensures complete transparency for internal security investigations and external
                compliance reviews.
              </p>
              <ul className="space-y-2 text-xs text-[#1F2937]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    <strong>User Session Auditing:</strong> Logins, logouts, failed authentication attempts,
                    and IP addresses are recorded.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    <strong>Stream Access Logging:</strong> Exact timestamps of when an operator accesses a
                    live stream or downloads an alert clip.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    <strong>Configuration Change History:</strong> Modifications to virtual boundaries,
                    sensitivity thresholds, and notification recipients are tracked with user attribution.
                  </span>
                </li>
              </ul>
            </div>

            {/* Data Governance Principles */}
            <div className="bg-[#F7F9FC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Data Protection
              </span>
              <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-4">
                Data Governance &amp; Customer-Set Retention
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed mb-4">
                We believe video data governance must be customer-controlled, adhering to the principle of
                data minimization rather than perpetual hoarding.
              </p>
              <ul className="space-y-2 text-xs text-[#1F2937]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    <strong>Data Minimization:</strong> By default, our vision pipeline extracts and stores
                    structured event metadata (bounding boxes, classifications, timestamps) rather than
                    creating duplicate video archives.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    <strong>Customer-Set Retention Periods:</strong> You define how long alert snapshots and
                    event records are retained (e.g., 30, 60, or 90 days) based on your corporate policy.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    <strong>Automated Purge Policies:</strong> Expired event records and cached temporary
                    frames are automatically scrubbed on schedule, eliminating unmonitored data accumulation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Privacy Approach for Face-Related Features */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Privacy by Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              Our Privacy Approach for Face-Related Features
            </h2>
            <p className="text-sm text-[#5B6B7F] leading-relaxed">
              Biometric features require strict boundaries, clear purpose limitation, and unequivocal user
              consent. Here is how Resurgenix designs and deploys facial verification capabilities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Consent-Based Enrolment</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Facial verification is strictly confined to opt-in workflows—such as authorized staff shift
                attendance or registered contractor verification. Features are generated only after explicit
                enrolment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Purpose Limitation</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                Biometric representations are used solely to verify identity at authorized checkpoints. They
                are never repurposed for behavioral analytics, advertising profiling, or cross-platform
                tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-2">Zero Public Mass-Surveillance</h3>
              <p className="text-xs text-[#5B6B7F] leading-relaxed">
                We do not position, sell, or deploy our software for unconsented public crowd facial
                identification, indiscriminate public scraping, or mass citizen indexing.
              </p>
            </div>
          </div>

          <Callout type="Compliance" title="Regulatory Alignment">
            <p className="text-xs text-slate-700 leading-relaxed">
              While Resurgenix does not hold independent legal compliance certifications, our facial
              verification workflows are engineered with technical controls—such as localized storage,
              purpose limitation, and consent-driven enrollment—designed to help enterprise clients operate in
              harmony with data protection regulations, including the Digital Personal Data Protection (DPDP)
              Act, 2023. For details, read our{" "}
              <Link
                href="/resources/cctv-dpdp-act-compliance-guide"
                className="text-[#2563EB] font-medium underline"
              >
                CCTV DPDP Act Compliance Guide
              </Link>
              .
            </p>
          </Callout>
        </Container>
      </Section>

      {/* 7. System Reliability & Camera Health Diagnostics */}
      <Section background="white" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Operational Reliability
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
                Automated Camera Health &amp; Tamper Diagnostics
              </h2>
              <p className="text-sm text-[#5B6B7F] leading-relaxed mb-6">
                An AI analytics platform is only as reliable as the camera streams feeding it. Resurgenix
                includes automated health diagnostics that continuously audit the optical and network status
                of every connected stream.
              </p>
              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0]">
                <p className="text-xs font-bold text-[#0B1F3A] mb-1">Zero Silent Failures</p>
                <p className="text-xs text-[#5B6B7F]">
                  Security personnel are immediately alerted if a camera feed is disrupted, avoiding the
                  dangerous scenario of blind surveillance zones going unnoticed for days.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">Signal Loss Detection</h3>
                <p className="text-xs text-[#5B6B7F]">
                  Instant notification when an RTSP stream drops, network switch fails, or power is cut.
                </p>
              </div>
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">Lens Occlusion &amp; Tamper</h3>
                <p className="text-xs text-[#5B6B7F]">
                  Detects when a camera lens is spray-painted, physically blocked, redirected, or defocused.
                </p>
              </div>
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">Stream Jitter &amp; Packet Drop</h3>
                <p className="text-xs text-[#5B6B7F]">
                  Monitors frame rate drops and network latency that could degrade computer vision accuracy.
                </p>
              </div>
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">Low-Light &amp; Glare Warnings</h3>
                <p className="text-xs text-[#5B6B7F]">
                  Flags illumination issues where IR illuminator failure or severe headlight glare compromises
                  detection.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Questions Security Teams Ask Us (FAQ) */}
      <Section background="soft" className="py-14 sm:py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Infosec &amp; CISO Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
                Questions Security Teams Ask Us
              </h2>
              <p className="text-sm text-[#5B6B7F] leading-relaxed">
                Direct, technical answers to the most common questions raised by enterprise IT and physical
                security evaluation teams.
              </p>
            </div>

            <Accordion items={securityFaqs} allowMultiple={false} />
          </div>
        </Container>
      </Section>

      {/* 9. Next Steps Call to Action */}
      <Section background="white" className="py-14 sm:py-16">
        <Container>
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Discuss Your Network &amp; Security Requirements
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Speak directly with our engineering team about deployment architecture, bandwidth sizing,
                and on-premise pilot evaluation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton href="/request-pilot" variant="primary" size="md">
                Request a Pilot Assessment
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
        </Container>
      </Section>
    </main>
  );
}
