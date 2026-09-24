import { siteConfig } from "./site.config";

export interface PageSeoItem {
  path: string;
  title: string; // Under 60 chars
  description: string; // Under 160 chars
  canonical: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: "Informational" | "Commercial" | "Transactional" | "Navigational" | "Comparison" | "Trust";
  funnelStage: "TOFU" | "MOFU" | "BOFU" | "Post-Conversion" | "Utility";
  noIndex?: boolean;
}

const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

export const seoDataMap: Record<string, PageSeoItem> = {
  // Core Platform Pages
  "/": {
    path: "/",
    title: "Resurgenix — AI Video Intelligence for CCTV",
    description:
      "Transform existing CCTV cameras into real-time security systems. Detect intrusions, restricted zones, and safety anomalies at the edge with zero rip-and-replace.",
    canonical: `${baseUrl}/`,
    h1: "Your cameras already see. Resurgenix helps them understand.",
    primaryKeyword: "AI video analytics platform",
    secondaryKeywords: ["AI CCTV", "edge video analytics", "real-time CCTV detection", "video intelligence India"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/how-it-works": {
    path: "/how-it-works",
    title: "How It Works: Edge AI CCTV Architecture | Resurgenix",
    description:
      "See how Resurgenix adds an AI layer to existing IP cameras via RTSP. Local edge decoding, deep neural inference in 30ms, and zero cloud bandwidth strain.",
    canonical: `${baseUrl}/how-it-works`,
    h1: "How Resurgenix Adds AI to Existing CCTV Infrastructure",
    primaryKeyword: "how AI video analytics works",
    secondaryKeywords: ["RTSP video analytics", "edge AI CCTV architecture", "CCTV AI layer", "on-premise video analytics"],
    intent: "Informational",
    funnelStage: "MOFU",
  },
  "/solutions": {
    path: "/solutions",
    title: "AI Video Intelligence Solutions | Resurgenix",
    description:
      "Explore 9 modular AI video analytics solutions for existing CCTV: intrusion detection, virtual fences, ANPR, workforce intelligence, and smart cities.",
    canonical: `${baseUrl}/solutions`,
    h1: "Modular AI Video Intelligence Solutions for Existing CCTV",
    primaryKeyword: "intelligent video surveillance solutions",
    secondaryKeywords: ["video analytics solutions", "AI CCTV solutions India", "enterprise video intelligence"],
    intent: "Commercial",
    funnelStage: "MOFU",
  },

  // 9 Solutions
  "/solutions/ai-video-analytics": {
    path: "/solutions/ai-video-analytics",
    title: "AI Video Analytics for Existing CCTV | Resurgenix",
    description:
      "Real-time object detection, classification, and tracking for multi-camera CCTV networks. Upgrade legacy streams to automated security alerts without new cameras.",
    canonical: `${baseUrl}/solutions/ai-video-analytics`,
    h1: "AI Video Analytics for Existing CCTV Infrastructure",
    primaryKeyword: "AI CCTV video analytics",
    secondaryKeywords: ["real-time video analytics", "CCTV object detection", "IP camera analytics"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/solutions/ai-attendance-workforce-intelligence": {
    path: "/solutions/ai-attendance-workforce-intelligence",
    title: "AI Workforce Intelligence & Attendance | Resurgenix",
    description:
      "Automated workforce attendance, shift muster logging, and floor intelligence using existing CCTV feeds with consent-first privacy safeguards.",
    canonical: `${baseUrl}/solutions/ai-attendance-workforce-intelligence`,
    h1: "AI Attendance & Workforce Intelligence via Existing CCTV",
    primaryKeyword: "AI attendance system CCTV",
    secondaryKeywords: ["workforce video intelligence", "contactless CCTV attendance", "factory floor intelligence"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/solutions/restricted-zone-unauthorized-entry-detection": {
    path: "/solutions/restricted-zone-unauthorized-entry-detection",
    title: "Restricted Zone & Unauthorized Entry Detection | Resurgenix",
    description:
      "Enforce spatial virtual safety envelopes and after-hours entry rules across critical zones. Get real-time alerts and evidentiary video clips in seconds.",
    canonical: `${baseUrl}/solutions/restricted-zone-unauthorized-entry-detection`,
    h1: "Restricted Zone & Unauthorized Entry Detection",
    primaryKeyword: "restricted zone detection CCTV",
    secondaryKeywords: ["unauthorized entry alert", "virtual safety envelope", "shop floor exclusion zone"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/solutions/enterprise-security": {
    path: "/solutions/enterprise-security",
    title: "Enterprise Security Video Intelligence | Resurgenix",
    description:
      "Centralized video intelligence for corporate campuses and multi-site facilities. Tailgating alerts, after-hours monitoring, and tamper-evident audit logs.",
    canonical: `${baseUrl}/solutions/enterprise-security`,
    h1: "Enterprise Security Video Intelligence for Campuses",
    primaryKeyword: "enterprise security AI video analytics",
    secondaryKeywords: ["corporate CCTV analytics", "tailgating detection", "multi-facility video surveillance"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/solutions/defence-security": {
    path: "/solutions/defence-security",
    title: "Defence & Critical Infrastructure Security | Resurgenix",
    description:
      "Hardened, on-premise video surveillance intelligence for military bases, radar perimeters, and critical assets. Fully operational on air-gapped networks.",
    canonical: `${baseUrl}/solutions/defence-security`,
    h1: "Defence & Critical Infrastructure Surveillance",
    primaryKeyword: "defence surveillance video analytics",
    secondaryKeywords: ["military CCTV analytics", "air-gapped video intelligence", "tactical perimeter security"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/solutions/border-surveillance": {
    path: "/solutions/border-surveillance",
    title: "Border Surveillance Video Intelligence | Resurgenix",
    description:
      "Long-range optical and thermal video intelligence for border security. Real-time crawler, human, and vehicle classification across remote frontiers.",
    canonical: `${baseUrl}/solutions/border-surveillance`,
    h1: "Border Surveillance Video Intelligence",
    primaryKeyword: "border surveillance AI analytics",
    secondaryKeywords: ["long-range CCTV analytics", "perimeter border security", "thermal vision analytics"],
    intent: "Commercial",
    funnelStage: "MOFU",
  },
  "/solutions/smart-city-video-intelligence": {
    path: "/solutions/smart-city-video-intelligence",
    title: "Smart City Video Intelligence & Public Safety | Resurgenix",
    description:
      "Municipal video intelligence for Integrated Command and Control Centers (ICCC). Crowd density estimation, transit monitoring, and multi-agency alerts.",
    canonical: `${baseUrl}/solutions/smart-city-video-intelligence`,
    h1: "Smart City Video Intelligence for Public Safety",
    primaryKeyword: "smart city video analytics India",
    secondaryKeywords: ["municipal CCTV analytics", "ICCC video intelligence", "crowd density analytics"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/solutions/anpr-vehicle-intelligence": {
    path: "/solutions/anpr-vehicle-intelligence",
    title: "ANPR & Vehicle Intelligence Systems | Resurgenix",
    description:
      "High-accuracy automated number plate recognition and vehicle classification for Indian gates, weighbridges, and logistics hubs. Connects to existing cameras.",
    canonical: `${baseUrl}/solutions/anpr-vehicle-intelligence`,
    h1: "ANPR & Vehicle Intelligence for Commercial Facilities",
    primaryKeyword: "ANPR system India",
    secondaryKeywords: ["license plate recognition CCTV", "vehicle classification", "automated gate entry system"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/solutions/centralized-video-intelligence": {
    path: "/solutions/centralized-video-intelligence",
    title: "Centralized Video Intelligence Dashboard | Resurgenix",
    description:
      "Unified multi-site surveillance control. Connect hundreds of distributed NVR and RTSP streams to one lightweight operational dashboard with zero WAN strain.",
    canonical: `${baseUrl}/solutions/centralized-video-intelligence`,
    h1: "Centralized Multi-Site Video Intelligence Dashboard",
    primaryKeyword: "centralized video intelligence dashboard",
    secondaryKeywords: ["multi-site CCTV management", "centralized NVR monitoring", "distributed video intelligence"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },

  // Industries Hub & 7 Verticals
  "/industries": {
    path: "/industries",
    title: "Industry Video Intelligence Solutions | Resurgenix",
    description:
      "Tailored AI video analytics for manufacturing, logistics, corporate campuses, healthcare, smart cities, and retail using existing surveillance cameras.",
    canonical: `${baseUrl}/industries`,
    h1: "Industry-Specific AI Video Intelligence Solutions",
    primaryKeyword: "enterprise video analytics industries",
    secondaryKeywords: ["industrial CCTV analytics", "sector surveillance AI", "enterprise camera intelligence"],
    intent: "Commercial",
    funnelStage: "MOFU",
  },
  "/industries/corporate-enterprise": {
    path: "/industries/corporate-enterprise",
    title: "AI CCTV for Corporate & Tech Campuses | Resurgenix",
    description:
      "Protect corporate headquarters, R&D centers, and server rooms. Tailgating alerts, visitor zone compliance, and centralized multi-building oversight.",
    canonical: `${baseUrl}/industries/corporate-enterprise`,
    h1: "AI Video Intelligence for Corporate & Tech Campuses",
    primaryKeyword: "AI CCTV for corporate offices",
    secondaryKeywords: ["corporate campus security", "server room CCTV monitoring", "facility access analytics"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/industries/manufacturing": {
    path: "/industries/manufacturing",
    title: "AI Video Analytics for Manufacturing Plants | Resurgenix",
    description:
      "Enhance shop-floor safety, enforce hazardous machinery exclusion envelopes, and detect PPE non-compliance in real time using existing factory CCTV.",
    canonical: `${baseUrl}/industries/manufacturing`,
    h1: "AI Video Analytics for Manufacturing & Industrial Safety",
    primaryKeyword: "AI CCTV for manufacturing",
    secondaryKeywords: ["shop floor safety CCTV", "factory exclusion zone detection", "manufacturing video analytics"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/industries/government-public-safety": {
    path: "/industries/government-public-safety",
    title: "Government & Public Safety Video Analytics | Resurgenix",
    description:
      "AI video intelligence for public infrastructure, administrative headquarters, and civic safety. Open RTSP stream integration with municipal command centers.",
    canonical: `${baseUrl}/industries/government-public-safety`,
    h1: "Government & Public Safety Video Intelligence",
    primaryKeyword: "government CCTV video analytics",
    secondaryKeywords: ["public safety video surveillance", "civic transit analytics", "smart governance CCTV"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/industries/logistics-warehousing": {
    path: "/industries/logistics-warehousing",
    title: "Warehouse & Logistics Video Analytics | Resurgenix",
    description:
      "Streamline loading dock turnaround, track truck dwell times, and enforce perimeter container yard security with AI edge video intelligence.",
    canonical: `${baseUrl}/industries/logistics-warehousing`,
    h1: "AI Video Analytics for Logistics & Warehousing",
    primaryKeyword: "warehouse CCTV video analytics",
    secondaryKeywords: ["loading dock turnaround tracking", "container yard surveillance", "logistics park ANPR"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/industries/healthcare": {
    path: "/industries/healthcare",
    title: "Healthcare & Hospital Video Analytics | Resurgenix",
    description:
      "Secure pharmacy storage, monitor emergency ambulance bays, and protect restricted ICU wards with privacy-preserving hospital video analytics.",
    canonical: `${baseUrl}/industries/healthcare`,
    h1: "Hospital & Healthcare Facility Video Intelligence",
    primaryKeyword: "hospital CCTV video analytics",
    secondaryKeywords: ["healthcare security CCTV", "pharmacy restriction monitoring", "ambulance bay analytics"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/industries/retail": {
    path: "/industries/retail",
    title: "Retail & Commercial Space Video Analytics | Resurgenix",
    description:
      "Optimize checkout queue alerts, detect after-hours stockroom breaches, and understand customer footfall dynamics using existing in-store cameras.",
    canonical: `${baseUrl}/industries/retail`,
    h1: "AI Video Analytics for Retail & Commercial Spaces",
    primaryKeyword: "retail CCTV video analytics",
    secondaryKeywords: ["retail queue alert CCTV", "store footfall analytics", "loss prevention video intelligence"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/industries/hospitality": {
    path: "/industries/hospitality",
    title: "Hospitality & Hotel Video Security Analytics | Resurgenix",
    description:
      "Monitor hotel service corridors, secure guest pools after hours, and manage vehicle arrival queues seamlessly with edge AI camera intelligence.",
    canonical: `${baseUrl}/industries/hospitality`,
    h1: "Hospitality & Hotel Video Security Intelligence",
    primaryKeyword: "hotel CCTV security analytics",
    secondaryKeywords: ["hotel perimeter security", "hospitality service corridor monitoring", "guest area safety CCTV"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },

  // Supporting Hubs
  "/resources": {
    path: "/resources",
    title: "AI Video Surveillance Resources & Guides | Resurgenix",
    description:
      "Technical guides, camera compatibility checklists, compliance walkthroughs, and objective comparisons for enterprise security and IT leaders.",
    canonical: `${baseUrl}/resources`,
    h1: "AI Video Surveillance Resources, Guides & Architecture",
    primaryKeyword: "AI video surveillance resources",
    secondaryKeywords: ["video analytics guides", "CCTV AI knowledge base", "security engineering whitepapers"],
    intent: "Informational",
    funnelStage: "TOFU",
  },
  "/glossary": {
    path: "/glossary",
    title: "Surveillance & AI Computer Vision Glossary | Resurgenix",
    description:
      "Authoritative definitions for 26 key surveillance and AI terms: RTSP, ONVIF, NVR, DVR, Edge AI, Inference, ANPR, Virtual Fence, and WDR.",
    canonical: `${baseUrl}/glossary`,
    h1: "Surveillance & AI Computer Vision Technical Glossary",
    primaryKeyword: "video analytics terminology glossary",
    secondaryKeywords: ["surveillance AI terms", "CCTV technical definitions", "computer vision glossary"],
    intent: "Informational",
    funnelStage: "TOFU",
  },
  "/faq": {
    path: "/faq",
    title: "Frequently Asked Questions: AI CCTV Systems | Resurgenix",
    description:
      "Clear answers to 16 key questions about AI video analytics, camera compatibility, local edge appliances, bandwidth, privacy, and pilot timelines.",
    canonical: `${baseUrl}/faq`,
    h1: "Frequently Asked Questions About AI Video Intelligence",
    primaryKeyword: "AI CCTV FAQ",
    secondaryKeywords: ["video analytics questions", "CCTV compatibility FAQ", "edge AI surveillance FAQ"],
    intent: "Informational",
    funnelStage: "MOFU",
  },

  // Pillar Article
  "/resources/ai-video-analytics-guide": {
    path: "/resources/ai-video-analytics-guide",
    title: "AI Video Analytics: Complete Guide | Resurgenix",
    description:
      "The definitive guide to AI video analytics. Learn the 5-stage pipeline, hardware prerequisites, edge vs cloud economics, and real-world deployment rules.",
    canonical: `${baseUrl}/resources/ai-video-analytics-guide`,
    h1: "AI Video Analytics: What It Is, How It Works and Where It Fits",
    primaryKeyword: "what is AI video analytics",
    secondaryKeywords: ["video analytics guide", "computer vision CCTV", "edge surveillance architecture"],
    intent: "Informational",
    funnelStage: "TOFU",
  },

  // Lead Magnets
  "/resources/pilot-readiness-checklist": {
    path: "/resources/pilot-readiness-checklist",
    title: "AI CCTV Pilot Readiness Checklist (PDF) | Resurgenix",
    description:
      "Download our 16-point technical due diligence checklist for CSOs and IT Heads. Audit RTSP support, angles, bandwidth, and lighting before launching a pilot.",
    canonical: `${baseUrl}/resources/pilot-readiness-checklist`,
    h1: "AI CCTV Pilot Readiness Checklist",
    primaryKeyword: "AI CCTV pilot checklist",
    secondaryKeywords: ["video analytics pilot readiness", "CCTV audit checklist", "security pilot evaluation"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/resources/cctv-ai-readiness-assessment": {
    path: "/resources/cctv-ai-readiness-assessment",
    title: "Is Your CCTV Ready for AI? Self-Assessment | Resurgenix",
    description:
      "Take our 2-minute qualitative readiness assessment to evaluate your camera hardware, native resolution, local network switches, and lighting conditions.",
    canonical: `${baseUrl}/resources/cctv-ai-readiness-assessment`,
    h1: "Is Your CCTV Ready for AI? Interactive Self-Assessment",
    primaryKeyword: "CCTV AI readiness assessment",
    secondaryKeywords: ["camera compatibility check", "AI CCTV evaluation tool", "video analytics audit"],
    intent: "Commercial",
    funnelStage: "MOFU",
  },

  // 3 Neutral Comparisons
  "/compare/traditional-cctv-vs-ai-video-analytics": {
    path: "/compare/traditional-cctv-vs-ai-video-analytics",
    title: "Traditional CCTV vs AI Video Analytics | Resurgenix",
    description:
      "Objective architectural comparison across 8 criteria: features, deployment, integration, security, scalability, cost model, maintenance, and limits.",
    canonical: `${baseUrl}/compare/traditional-cctv-vs-ai-video-analytics`,
    h1: "Traditional CCTV vs AI Video Analytics: Architecture Comparison",
    primaryKeyword: "traditional CCTV vs AI video analytics",
    secondaryKeywords: ["AI CCTV comparison", "passive CCTV vs active AI", "video analytics evaluation"],
    intent: "Comparison",
    funnelStage: "MOFU",
  },
  "/compare/on-premise-vs-cloud-vs-edge-video-analytics": {
    path: "/compare/on-premise-vs-cloud-vs-edge-video-analytics",
    title: "On-Premise vs Cloud vs Edge Video Analytics | Resurgenix",
    description:
      "Compare video analytics architectures on latency, WAN bandwidth consumption, DPDP data privacy compliance, maintenance overhead, and total cost.",
    canonical: `${baseUrl}/compare/on-premise-vs-cloud-vs-edge-video-analytics`,
    h1: "On-Premise vs Cloud vs Edge Video Analytics Comparison",
    primaryKeyword: "on-premise vs cloud vs edge video analytics",
    secondaryKeywords: ["edge vs cloud CCTV", "video analytics latency comparison", "surveillance bandwidth cost"],
    intent: "Comparison",
    funnelStage: "MOFU",
  },
  "/compare/build-vs-buy-ai-video-analytics": {
    path: "/compare/build-vs-buy-ai-video-analytics",
    title: "Build vs Buy for AI Video Analytics | Resurgenix",
    description:
      "A technical and economic comparison for enterprise engineering heads. Compare internal model training, hardware drivers, and maintenance against buying.",
    canonical: `${baseUrl}/compare/build-vs-buy-ai-video-analytics`,
    h1: "Build vs Buy for Enterprise AI Video Analytics",
    primaryKeyword: "build vs buy AI video analytics",
    secondaryKeywords: ["in-house computer vision vs vendor", "video analytics TCO", "custom CCTV AI development"],
    intent: "Comparison",
    funnelStage: "BOFU",
  },

  // Trust, Locations & Conversion
  "/about": {
    path: "/about",
    title: "About Resurgenix: Practical AI Video Systems | Resurgenix",
    description:
      "Learn about Resurgenix Technologies, founded in Kolkata by Souryodipto Debnath. Turning existing physical surveillance infrastructure into intelligent systems.",
    canonical: `${baseUrl}/about`,
    h1: "About Resurgenix Technologies",
    primaryKeyword: "about Resurgenix Technologies",
    secondaryKeywords: ["Souryodipto Debnath founder", "AI video analytics Kolkata", "computer vision startup India"],
    intent: "Trust",
    funnelStage: "MOFU",
  },
  "/security-and-privacy": {
    path: "/security-and-privacy",
    title: "Enterprise Security, Privacy & DPDP Compliance | Resurgenix",
    description:
      "Explore our on-premise edge architecture, role-based access control, cryptographic audit logs, camera health diagnostics, and DPDP compliance approach.",
    canonical: `${baseUrl}/security-and-privacy`,
    h1: "Enterprise Security, Privacy & Data Governance",
    primaryKeyword: "CCTV security and DPDP compliance",
    secondaryKeywords: ["video surveillance data privacy", "air-gapped CCTV analytics", "CCTV audit logging"],
    intent: "Trust",
    funnelStage: "MOFU",
  },
  "/partners": {
    path: "/partners",
    title: "System Integrator & Partner Program | Resurgenix",
    description:
      "Partner with Resurgenix. Deliver AI video intelligence on your clients' existing CCTV cameras with protected margins, pre-sales support, and joint pilots.",
    canonical: `${baseUrl}/partners`,
    h1: "System Integrator & Channel Partner Program",
    primaryKeyword: "video analytics system integrator partner India",
    secondaryKeywords: ["CCTV partner program", "AI surveillance distributor", "security SI partnership"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/locations/kolkata-eastern-india": {
    path: "/locations/kolkata-eastern-india",
    title: "AI Video Analytics Kolkata & Eastern India | Resurgenix",
    description:
      "Headquartered in Kolkata with direct engineering support across Kalyani, Durgapur, Haldia, and Eastern India industrial corridors. On-site camera audits.",
    canonical: `${baseUrl}/locations/kolkata-eastern-india`,
    h1: "AI Video Analytics for Kolkata & Eastern India",
    primaryKeyword: "AI video analytics Kolkata",
    secondaryKeywords: ["CCTV analytics West Bengal", "Eastern India industrial security", "Kolkata CCTV AI"],
    intent: "Commercial",
    funnelStage: "BOFU",
  },
  "/request-demo": {
    path: "/request-demo",
    title: "Request an Enterprise Video Intelligence Demo | Resurgenix",
    description:
      "Schedule a technical demonstration of Resurgenix. See real-time intrusion alerting, virtual fencing, and ANPR on simulated or sample camera streams.",
    canonical: `${baseUrl}/request-demo`,
    h1: "Request an Enterprise Video Intelligence Demo",
    primaryKeyword: "request video analytics demo",
    secondaryKeywords: ["schedule CCTV AI demo", "enterprise surveillance demo", "Resurgenix demo"],
    intent: "Transactional",
    funnelStage: "BOFU",
  },
  "/request-pilot": {
    path: "/request-pilot",
    title: "Request a 14-Day On-Site AI CCTV Pilot | Resurgenix",
    description:
      "Deploy a controlled 14-day evaluation on 3 to 5 existing camera feeds. Benchmark real-time detection, measure false positive rates, and audit compatibility.",
    canonical: `${baseUrl}/request-pilot`,
    h1: "Request a Controlled 14-Day On-Site AI CCTV Pilot",
    primaryKeyword: "request AI CCTV pilot",
    secondaryKeywords: ["video analytics pilot program", "CCTV AI POC evaluation", "on-site surveillance trial"],
    intent: "Transactional",
    funnelStage: "BOFU",
  },
  "/contact": {
    path: "/contact",
    title: "Contact Resurgenix Technologies | Kolkata, India",
    description:
      "Get in touch with our engineering team in Kolkata. Inquire about enterprise pilots, compatibility audits, and system integration partnerships.",
    canonical: `${baseUrl}/contact`,
    h1: "Contact Resurgenix Technologies",
    primaryKeyword: "contact Resurgenix Technologies",
    secondaryKeywords: ["Resurgenix phone number", "Resurgenix email Kolkata", "AI surveillance inquiry"],
    intent: "Navigational",
    funnelStage: "BOFU",
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Resurgenix Technologies",
    description:
      "Privacy policy for Resurgenix Technologies. Explains how website lead data is collected, handled, and protected in compliance with Indian privacy laws.",
    canonical: `${baseUrl}/privacy-policy`,
    h1: "Privacy Policy",
    primaryKeyword: "Resurgenix privacy policy",
    secondaryKeywords: ["data protection policy", "website privacy notice"],
    intent: "Trust",
    funnelStage: "Utility",
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Service | Resurgenix Technologies",
    description:
      "Terms of service governing the use of the Resurgenix Technologies website, technical content, assessment tools, and lead qualification requests.",
    canonical: `${baseUrl}/terms`,
    h1: "Terms of Service",
    primaryKeyword: "Resurgenix terms of service",
    secondaryKeywords: ["terms and conditions", "website legal terms"],
    intent: "Trust",
    funnelStage: "Utility",
  },

  // Noindex Utility / Thank-you Pages
  "/design-system": {
    path: "/design-system",
    title: "Design System Showcase | Resurgenix",
    description: "Internal design system component showcase.",
    canonical: `${baseUrl}/design-system`,
    h1: "Design System Showcase",
    primaryKeyword: "design system",
    secondaryKeywords: [],
    intent: "Navigational",
    funnelStage: "Utility",
    noIndex: true,
  },
  "/thank-you/demo": {
    path: "/thank-you/demo",
    title: "Demo Request Received | Resurgenix",
    description: "Thank you for requesting an enterprise video intelligence demonstration.",
    canonical: `${baseUrl}/thank-you/demo`,
    h1: "Demo Request Received",
    primaryKeyword: "demo received",
    secondaryKeywords: [],
    intent: "Navigational",
    funnelStage: "Post-Conversion",
    noIndex: true,
  },
  "/thank-you/pilot": {
    path: "/thank-you/pilot",
    title: "Pilot Request Received | Resurgenix",
    description: "Thank you for requesting an on-site AI CCTV pilot evaluation.",
    canonical: `${baseUrl}/thank-you/pilot`,
    h1: "Pilot Request Received",
    primaryKeyword: "pilot received",
    secondaryKeywords: [],
    intent: "Navigational",
    funnelStage: "Post-Conversion",
    noIndex: true,
  },
  "/thank-you/contact": {
    path: "/thank-you/contact",
    title: "Message Received | Resurgenix",
    description: "Thank you for contacting Resurgenix Technologies.",
    canonical: `${baseUrl}/thank-you/contact`,
    h1: "Message Received",
    primaryKeyword: "contact received",
    secondaryKeywords: [],
    intent: "Navigational",
    funnelStage: "Post-Conversion",
    noIndex: true,
  },
  "/thank-you/partner": {
    path: "/thank-you/partner",
    title: "Partner Application Received | Resurgenix",
    description: "Thank you for applying to the Resurgenix Partner Program.",
    canonical: `${baseUrl}/thank-you/partner`,
    h1: "Partner Application Received",
    primaryKeyword: "partner received",
    secondaryKeywords: [],
    intent: "Navigational",
    funnelStage: "Post-Conversion",
    noIndex: true,
  },
};

/**
 * Helper to retrieve SEO metadata by route pathname.
 */
export function getPageSeo(pathname: string): PageSeoItem | undefined {
  const normalized = pathname === "" ? "/" : pathname.replace(/\/$/, "");
  return seoDataMap[normalized];
}
