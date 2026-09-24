import { ComparisonEntry } from "../types";

export const comparisonsData: ComparisonEntry[] = [
  {
    slug: "traditional-cctv-vs-ai-video-analytics",
    title: "Traditional CCTV vs. AI Video Analytics: Architecture, Detection & Operations",
    seoTitle: "Traditional CCTV vs AI Video Analytics: Complete Comparison | Resurgenix",
    metaDescription:
      "Compare traditional CCTV surveillance with AI video analytics across features, deployment, integration, security, scalability, cost model, maintenance, and limitations.",
    h1: "Traditional CCTV vs. AI Video Analytics: Architectural Comparison",
    primaryKeyword: "traditional CCTV vs AI video analytics",
    shortSummary:
      "Conventional CCTV surveillance is fundamentally passive: it records video footage to hard drives for human review after an incident has already occurred. AI video analytics introduces an intelligent software layer that continuously analyzes live camera feeds, detecting spatial events in real time and notifying operators within seconds.",
    entityA: "AI Video Intelligence (Software Layer)",
    entityB: "Traditional Conventional CCTV",
    criteria: [
      {
        feature: "Features & Detection Capabilities",
        descriptionA:
          "Automated real-time event detection: person/vehicle classification, directional line-crossing, virtual polygon entry, loitering, and optical anomaly detection in sub-second latency.",
        descriptionB:
          "Passive continuous or motion-triggered video recording; no semantic understanding of people vs. animals vs. shadows; requires manual forensic review after incidents.",
      },
      {
        feature: "Deployment Model",
        descriptionA:
          "Modular software layer running on local edge appliances, private on-premise servers, or hybrid topologies connected to the local surveillance LAN.",
        descriptionB:
          "Hardware-centric installation: standalone cameras wired directly via coaxial or Ethernet to local NVR/DVR storage units in a security control room.",
      },
      {
        feature: "Integration with Existing Infrastructure",
        descriptionA:
          "Ingests standard RTSP and ONVIF video streams directly from existing compatible IP cameras and NVRs; eliminates the need for full hardware replacement.",
        descriptionB:
          "Tied to specific camera hardware protocols or proprietary NVR firmware; expanding capabilities traditionally requires replacing physical cameras.",
      },
      {
        feature: "Security, Privacy & Compliance",
        descriptionA:
          "Granular Role-Based Access Control (RBAC), tamper-evident audit logging of all operator actions, data minimization policies, and localized on-premise storage supporting DPDP compliance.",
        descriptionB:
          "Basic password protection on NVRs; limited user accounting; widespread manual exporting of unencrypted raw video onto USB drives with minimal audit tracking.",
      },
      {
        feature: "Scalability",
        descriptionA:
          "Scales dynamically by allocating compute resources across camera channels or adding modular edge nodes across distributed facilities under a unified dashboard.",
        descriptionB:
          "Scales linearly with physical recorder ports (e.g. 16, 32, 64-channel NVRs); adds monitor wall clutter that degrades human operator attention.",
      },
      {
        feature: "Cost Model",
        descriptionA:
          "Software license and support model layered on existing capital expenditure; low incremental cost per channel compared to physical infrastructure replacement.",
        descriptionB:
          "Heavy upfront capital expenditure (CapEx) for cameras, cabling, and storage with recurring hardware depreciation and physical maintenance costs.",
      },
      {
        feature: "Maintenance & System Health",
        descriptionA:
          "Continuous automated camera health diagnostics: alerts operators immediately upon signal loss, lens occlusion, tampering, or low-light degradation.",
        descriptionB:
          "Manual health inspection; camera disconnections, blurred lenses, or failed hard drives frequently go unnoticed until footage is needed.",
      },
      {
        feature: "Operational Limitations",
        descriptionA:
          "Detection accuracy is dependent on camera angle, adequate target pixel density (e.g. 80+ pixels across faces), optical focus, and environmental lighting.",
        descriptionB:
          "Constrained by human attention limits; security research demonstrates that operators miss up to 95% of screen activity after 20 minutes of continuous monitoring.",
      },
    ],
    verdict:
      "Traditional CCTV and AI video analytics are not mutually exclusive. AI video intelligence functions as an operational software layer on top of existing surveillance investments, transforming passive footage archives into proactive physical security systems.",
    relatedSlugs: [
      "how-it-works",
      "solutions/ai-video-analytics",
      "solutions/restricted-zone-unauthorized-entry-detection",
      "request-pilot",
    ],
  },
  {
    slug: "on-premise-vs-cloud-vs-edge-video-analytics",
    title: "On-Premise vs. Cloud vs. Edge Video Analytics: Infrastructure & Governance",
    seoTitle: "On-Premise vs Cloud vs Edge Video Analytics | Resurgenix",
    metaDescription:
      "Compare on-premise, cloud, and edge video analytics across features, deployment, bandwidth, security, scalability, cost model, maintenance, and limitations.",
    h1: "On-Premise vs. Cloud vs. Edge Video Analytics: Architectural Evaluation",
    primaryKeyword: "on-premise vs cloud vs edge video analytics",
    shortSummary:
      "Selecting the right deployment architecture for video analytics dictates network bandwidth demands, latency, data sovereignty compliance, and operational resilience. This guide objectively evaluates on-premise servers, cloud surveillance, and local edge computing architectures for Indian enterprise facilities.",
    entityA: "Edge & On-Premise Architecture",
    entityB: "Pure Cloud Video Analytics",
    criteria: [
      {
        feature: "Features & Detection Speed",
        descriptionA:
          "Sub-second local neural network inference; immediate triggering of local sirens, physical boom barriers, and control room alarms without internet latency.",
        descriptionB:
          "Detection latency depends on WAN uplink speed and cloud processing queues (typically 1.5 to 5 seconds); alerts routed via cloud push notifications.",
      },
      {
        feature: "Deployment Model",
        descriptionA:
          "Hardware appliances installed on the local facility LAN or enterprise data center; fully operational in air-gapped or restricted-access environments.",
        descriptionB:
          "Cloud-hosted SaaS model; requires camera streams or video bridges to stream continuously to public cloud data centers over broadband connections.",
      },
      {
        feature: "Integration with Facility Hardware",
        descriptionA:
          "Direct integration with local network I/O relays (Modbus TCP), physical access control turnstiles, and existing NVR/DVR video switches on the LAN.",
        descriptionB:
          "Integration relies on cloud webhooks and APIs; cannot directly actuate physical relays or dry-contact barriers without a secondary local bridge.",
      },
      {
        feature: "Security & Data Sovereignty",
        descriptionA:
          "100% data residency; raw video streams never leave the enterprise intranet, aligning directly with strict corporate policies and India's DPDP Act requirements.",
        descriptionB:
          "Continuous transmission of identifiable video data to external cloud servers; requires third-party data processing agreements and recurring audits.",
      },
      {
        feature: "Scalability & Bandwidth Impact",
        descriptionA:
          "Zero external WAN bandwidth consumed for video frames; local LAN handles RTSP traffic; adding cameras requires sizing local GPU nodes.",
        descriptionB:
          "Saturates uplink bandwidth (2 to 4 Mbps per 1080p camera continuously); streaming 50+ cameras requires prohibitive, dedicated high-cost internet lines.",
      },
      {
        feature: "Cost Model",
        descriptionA:
          "Predictable software licensing plus local edge GPU hardware; no variable cloud egress or recurring per-gigabyte streaming bandwidth charges.",
        descriptionB:
          "Recurring monthly SaaS subscription per camera plus substantial continuous commercial internet bandwidth and cloud storage costs.",
      },
      {
        feature: "Maintenance & Uptime Resilience",
        descriptionA:
          "Functions continuously during ISP outages; local edge nodes process video even if external fiber lines are severed; hardware managed by local IT.",
        descriptionB:
          "Surveillance intelligence and alerting completely halt during local internet disruptions; platform maintenance handled entirely by the SaaS provider.",
      },
      {
        feature: "Operational Limitations",
        descriptionA:
          "Requires physical space, power, and periodic hardware lifecycle management for local edge boxes or rackmount server nodes.",
        descriptionB:
          "Impractical for high-density camera deployments (30+ cameras per site) in Indian industrial locations where enterprise uplink bandwidth is constrained.",
      },
    ],
    verdict:
      "For industrial plants, critical infrastructure, campuses, and data-sensitive Indian enterprises, on-premise edge architecture delivers the superior combination of sub-second response times, zero WAN bandwidth saturation, and complete data sovereignty.",
    relatedSlugs: [
      "security-and-privacy",
      "how-it-works",
      "solutions/enterprise-security",
      "request-demo",
    ],
  },
  {
    slug: "build-vs-buy-ai-video-analytics",
    title: "Build vs. Buy for AI Video Analytics: Engineering Feasibility & TCO",
    seoTitle: "Build vs Buy for AI Video Analytics: Enterprise Guide | Resurgenix",
    metaDescription:
      "A pragmatic evaluation for CTOs and CSOs comparing in-house computer vision engineering with enterprise video intelligence platforms. Development timeline, TCO, maintenance, and operational risk.",
    h1: "Build vs. Buy for AI Video Analytics: Enterprise Evaluation Guide",
    primaryKeyword: "build vs buy AI video analytics",
    shortSummary:
      "Engineering leaders frequently evaluate whether to build custom computer vision models in-house using open-source libraries or deploy an established video intelligence platform. This objective analysis compares true total cost of ownership, operational reliability, camera driver maintenance, and deployment speed.",
    entityA: "Commercial Video Intelligence Platform",
    entityB: "In-House Custom Engineering",
    criteria: [
      {
        feature: "Features & Production Readiness",
        descriptionA:
          "Pre-validated pipelines for boundary tripwires, restricted zones, ANPR, camera health diagnostics, multi-camera management, and audit logging out of the box.",
        descriptionB:
          "Open-source models (YOLO, OpenCV) require building custom spatial geometry engines, alert routing, user permission hierarchies, and multi-stream decoders from scratch.",
      },
      {
        feature: "Deployment Timeline",
        descriptionA:
          "Pilot deployment on 3 to 5 live facility feeds within 1 to 2 weeks; full commercial deployment across enterprise sites within weeks.",
        descriptionB:
          "Typically requires 9 to 18 months of software engineering, stream pipeline optimization, hardware testing, and UI development before initial pilot.",
      },
      {
        feature: "Integration & Stream Stability",
        descriptionA:
          "Battle-tested RTSP stream ingest handling frame drops, H.264/H.265 codec quirks, timestamp jitter, and multi-vendor NVR disconnects automatically.",
        descriptionB:
          "In-house teams frequently underestimate the complexity of managing multi-threaded RTSP packet decoding, memory leaks, and GPU VRAM fragmentation across diverse camera models.",
      },
      {
        feature: "Security & Governance Tooling",
        descriptionA:
          "Built-in Role-Based Access Control, session management, immutable operator audit trails, and customer-set data retention policies ready for compliance audits.",
        descriptionB:
          "Security, RBAC, session tokens, audit trail hashing, and privacy controls must be architected, developed, and maintained independently.",
      },
      {
        feature: "Scalability Across Sites",
        descriptionA:
          "Distributed edge clustering and unified management consoles designed specifically for multi-facility and multi-building enterprise oversight.",
        descriptionB:
          "Scaling custom scripts across multiple remote locations requires building proprietary remote fleet management, container orchestration, and telemetry monitoring.",
      },
      {
        feature: "Cost Model & Total Cost of Ownership (TCO)",
        descriptionA:
          "Predictable software licensing and support; eliminates need for specialized in-house computer vision and edge MLOps engineering teams.",
        descriptionB:
          "High continuous engineering salaries (CV engineers, full-stack, DevOps), compute training infrastructure, and long-term technical debt maintenance costs.",
      },
      {
        feature: "Long-Term Maintenance & Updates",
        descriptionA:
          "Vendor provides continuous neural network optimization, TensorRT runtime updates, new camera protocol drivers, and bug fixes under maintenance agreements.",
        descriptionB:
          "Firmware updates on third-party cameras, OS kernel patches, or CUDA driver updates can silently break in-house pipelines, requiring dedicated internal developer maintenance.",
      },
      {
        feature: "Operational Limitations",
        descriptionA:
          "Customization is bounded by the platform's modular API and configuration parameters, though specialized operational workflows are easily tailored.",
        descriptionB:
          "High key-person dependency: if lead computer vision engineers depart the organization, custom in-house video analytics codebases often become unmaintainable.",
      },
    ],
    verdict:
      "Unless video surveillance analytics is a company's core intellectual property, building from scratch introduces significant engineering delay, hidden infrastructure costs, and operational risk. Deploying an established software layer on existing CCTV delivers faster ROI and lower total cost of ownership.",
    relatedSlugs: [
      "how-it-works",
      "solutions/ai-video-analytics",
      "request-pilot",
      "contact",
    ],
  },
];

// Helper to look up comparison including legacy aliases
export function getComparisonBySlug(slug: string): ComparisonEntry | undefined {
  if (slug === "ai-cctv-vs-traditional-cctv") {
    return comparisonsData.find((c) => c.slug === "traditional-cctv-vs-ai-video-analytics");
  }
  if (slug === "on-premise-vs-cloud-video-analytics") {
    return comparisonsData.find((c) => c.slug === "on-premise-vs-cloud-vs-edge-video-analytics");
  }
  if (slug === "edge-ai-vs-centralized-vms") {
    return comparisonsData.find((c) => c.slug === "on-premise-vs-cloud-vs-edge-video-analytics");
  }
  return comparisonsData.find((c) => c.slug === slug);
}
