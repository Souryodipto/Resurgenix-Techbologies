import { ResourceArticle, ComparisonEntry } from "./types";

export const articles: ResourceArticle[] = [
  {
    slug: "how-ai-video-analytics-works",
    title: "How to Add AI to Existing CCTV Infrastructure Without Replacing Cameras",
    seoTitle: "How AI Video Analytics Works with Existing CCTV Cameras | Resurgenix",
    metaDescription:
      "A technical guide explaining how modern edge computer vision connects to existing RTSP/ONVIF IP cameras and NVRs without expensive hardware replacement.",
    h1: "How to Add AI Video Analytics to Existing CCTV Infrastructure",
    primaryKeyword: "how AI video analytics works with existing CCTV",
    category: "architecture",
    publishDate: "2026-03-15",
    readTime: "6 min read",
    shortSummary:
      "Most enterprise surveillance cameras sit idle, recording gigabytes of unwatched video. This technical guide outlines how edge AI appliances ingest standard RTSP video feeds from existing IP cameras and NVRs, applying deep-learning spatial models locally to detect unauthorized entry and anomalies in sub-second latency.",
    relatedSlugs: ["solutions/ai-video-analytics", "how-it-works", "request-pilot"],
  },
  {
    slug: "cctv-dpdp-act-compliance-guide",
    title: "CCTV Surveillance and India's DPDP Act 2023: An Enterprise Compliance Guide",
    seoTitle: "CCTV Surveillance & DPDP Act 2023 Compliance Guide | Resurgenix",
    metaDescription:
      "Understand the legal classification of CCTV footage under India's Digital Personal Data Protection Act 2023, data fiduciary obligations, and consent-based verification.",
    h1: "CCTV Surveillance & the DPDP Act 2023: Enterprise Compliance Guide",
    primaryKeyword: "CCTV surveillance and DPDP Act India",
    category: "compliance",
    publishDate: "2026-03-18",
    readTime: "8 min read",
    shortSummary:
      "Under India's Digital Personal Data Protection (DPDP) Act 2023, identifiable CCTV video is classified as digital personal data. This guide details privacy-by-design architecture, mandatory notice requirements, consent-based employee verification, and on-premise retention protocols to insulate enterprise security leaders from regulatory penalties.",
    relatedSlugs: ["security-and-privacy", "solutions/ai-attendance-workforce-intelligence"],
  },
  {
    slug: "evaluating-video-analytics-pilots",
    title: "Evaluating AI Video Analytics Pilots: A Checklist for Enterprise Security Teams",
    seoTitle: "Evaluating Video Analytics Pilots: A Checklist for Security Teams | Resurgenix",
    metaDescription:
      "A structured technical framework for CSOs and plant heads evaluating computer vision pilots: camera selection, illumination testing, and latency benchmarks.",
    h1: "Evaluating AI Video Analytics Pilots: A Practical Checklist",
    primaryKeyword: "video analytics pilot evaluation checklist",
    category: "guide",
    publishDate: "2026-03-20",
    readTime: "7 min read",
    shortSummary:
      "Before committing to a site-wide enterprise rollout, testing AI analytics in a controlled 3-to-5 camera pilot is essential. This operational checklist helps security heads evaluate false alarm suppression, optical angle suitability, edge server sizing, and alert dispatch reliability on active facility feeds.",
    relatedSlugs: [
      "request-pilot",
      "how-it-works",
      "solutions/restricted-zone-unauthorized-entry-detection",
    ],
  },
];

export const comparisons: ComparisonEntry[] = [
  {
    slug: "ai-cctv-vs-traditional-cctv",
    title: "AI CCTV vs. Traditional CCTV: Moving from Passive Recording to Active Detection",
    seoTitle: "AI CCTV vs Traditional CCTV: Complete Comparison Guide | Resurgenix",
    metaDescription:
      "Compare AI CCTV and traditional video surveillance across incident detection speed, operator fatigue, false alarm rates, and infrastructure costs.",
    h1: "AI CCTV vs. Traditional CCTV: Key Differences & Comparison",
    primaryKeyword: "AI CCTV vs traditional CCTV",
    shortSummary:
      "Conventional CCTV was designed to store historical evidence for post-incident review, while AI CCTV actively interprets video streams to alert security teams during an event. This guide compares both approaches across operational efficiency, response latency, and total cost of ownership.",
    entityA: "AI Video Intelligence (Resurgenix)",
    entityB: "Traditional Conventional CCTV",
    criteria: [
      {
        feature: "Incident Detection",
        descriptionA:
          "Automated, sub-second detection of defined spatial events (breaches, entry, crowd surge).",
        descriptionB:
          "Passive recording; relies on human operators staring at screens or post-incident review.",
      },
      {
        feature: "Operator Fatigue",
        descriptionA:
          "System filters 95%+ of environmental noise, alerting staff only on genuine anomalies.",
        descriptionB:
          "Guards suffer severe attention fatigue after watching multiple monitors for 20+ minutes.",
      },
      {
        feature: "Search & Investigation",
        descriptionA:
          "Instant metadata search by entity type, timestamp, camera ID, and spatial zone.",
        descriptionB: "Scrubbing through hours of recorded tape across individual NVR timelines.",
      },
      {
        feature: "Hardware Requirement",
        descriptionA:
          "Works as an intelligence overlay on compatible existing IP cameras and NVRs.",
        descriptionB:
          "Standard camera recording; adding intelligence historically required proprietary cameras.",
      },
    ],
    verdict:
      "AI CCTV does not replace traditional surveillance infrastructure—it equips existing camera investments with the cognitive capability to spot and report security incidents before losses occur.",
    relatedSlugs: ["how-it-works", "solutions/ai-video-analytics", "request-demo"],
  },
  {
    slug: "on-premise-vs-cloud-video-analytics",
    title: "On-Premise vs. Cloud Video Analytics: Bandwidth, Security & Latency Compared",
    seoTitle: "On-Premise vs Cloud Video Analytics Comparison | Resurgenix",
    metaDescription:
      "Compare on-premise edge video analytics with cloud surveillance. Evaluate network bandwidth limits, air-gapped security, and data sovereignty in India.",
    h1: "On-Premise Edge vs. Cloud Video Analytics: Architectural Comparison",
    primaryKeyword: "on-premise vs cloud video analytics",
    shortSummary:
      "Streaming multiple 4K/1080p camera feeds continuously to public clouds can saturate enterprise internet uplinks and violate data sovereignty mandates. This comparison outlines why edge and on-premise architectures offer superior reliability and compliance for Indian facilities.",
    entityA: "On-Premise Edge Analytics",
    entityB: "Pure Cloud Surveillance",
    criteria: [
      {
        feature: "Bandwidth Consumption",
        descriptionA:
          "Near zero external WAN usage; raw video stays on the local network; only text alerts sync.",
        descriptionB:
          "High continuous WAN bandwidth required (2–4 Mbps per camera stream continuously).",
      },
      {
        feature: "Internet Dependency",
        descriptionA:
          "100% operational offline; detection and local alarms continue even if internet drops.",
        descriptionB:
          "System functionality and alerting halt if external internet connection is interrupted.",
      },
      {
        feature: "Data Sovereignty & DPDP",
        descriptionA:
          "Video footage remains strictly on physical local premises under complete client control.",
        descriptionB:
          "Personal video data transmitted to third-party cloud data centers, requiring compliance audits.",
      },
      {
        feature: "Latency",
        descriptionA: "Sub-second localized inference on edge GPU hardware.",
        descriptionB:
          "Latency varies based on external network traffic and cloud server queuing (1–5 seconds).",
      },
    ],
    verdict:
      "For manufacturing plants, corporate server rooms, and critical infrastructure in India, on-premise edge analytics delivers unmatched operational uptime, sub-second response times, and compliance with data sovereignty laws.",
    relatedSlugs: ["security-and-privacy", "how-it-works", "request-pilot"],
  },
  {
    slug: "edge-ai-vs-centralized-vms",
    title: "Edge AI vs. Centralized VMS Servers: Architecture Guide for Security Teams",
    seoTitle: "Edge AI vs Centralized VMS Server Architecture | Resurgenix",
    metaDescription:
      "Compare distributed Edge AI analytics with monolithic centralized VMS servers. Sizing, compute costs, failure domains, and scalability.",
    h1: "Edge AI vs. Centralized VMS Servers: Technical Architecture Comparison",
    primaryKeyword: "edge AI vs centralized VMS",
    shortSummary:
      "Traditional enterprise surveillance relies on massive, power-hungry centralized VMS servers to process all facility streams in a single room. Distributed edge computing places compact GPU inference appliances closer to camera groups, reducing single points of failure and compute overhead.",
    entityA: "Distributed Edge AI Nodes",
    entityB: "Monolithic Centralized VMS Server",
    criteria: [
      {
        feature: "Failure Resilience",
        descriptionA:
          "Decoupled edge nodes mean an issue on one node does not impact monitoring at other buildings.",
        descriptionB:
          "Single point of failure: if the central VMS server crashes, all analytics across all cameras go down.",
      },
      {
        feature: "Scalability",
        descriptionA:
          "Scale modularly by adding compact edge appliances as new camera clusters are deployed.",
        descriptionB:
          "Requires massive upfront server sizing and expensive multi-tier VMS channel licensing.",
      },
      {
        feature: "Local Network Load",
        descriptionA:
          "Video traffic stays localized within individual floor/building network switches.",
        descriptionB:
          "All video streams converge on core backbone switches, creating network congestion.",
      },
    ],
    verdict:
      "A hybrid model—deploying distributed edge processing near camera clusters paired with a centralized management console—provides the optimal balance of resilience, low latency, and unified administrative control.",
    relatedSlugs: ["how-it-works", "solutions/centralized-video-intelligence", "request-demo"],
  },
];

export function getArticleBySlug(slug: string): ResourceArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getComparisonBySlug(slug: string): ComparisonEntry | undefined {
  return comparisons.find((c) => c.slug === slug);
}
