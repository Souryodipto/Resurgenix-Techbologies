/**
 * Platform Capabilities Configuration
 *
 * Single source of truth for platform capability lifecycle statuses:
 * - "pilot": Tested on existing CCTV streams and available for controlled customer pilot deployments.
 * - "in-development": Active engineering and internal validation; available for selective early-access pilots.
 * - "roadmap": Conceptual/architectural planning for specialized institutional deployments.
 *
 * Every solution page and capability card reads its status from here and renders a visible StatusBadge.
 */

export type CapabilityStatus = "pilot" | "in-development" | "roadmap";

export interface CapabilityItem {
  slug: string;
  name: string;
  shortDescription: string;
  status: CapabilityStatus;
  statusNote: string;
  category: "core-analytics" | "security-access" | "enterprise-ops" | "defence-institutional";
}

export interface StatusBadgeConfig {
  label: string;
  variant: "pilot" | "in-development" | "roadmap";
  textColor: string;
  bgColor: string;
  borderColor: string;
  description: string;
}

export const STATUS_CONFIG: Record<CapabilityStatus, StatusBadgeConfig> = {
  pilot: {
    label: "Pilot Available",
    variant: "pilot",
    textColor: "text-emerald-800",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description:
      "Available for controlled enterprise pilot deployments on compatible existing CCTV infrastructure.",
  },
  "in-development": {
    label: "In Active Development",
    variant: "in-development",
    textColor: "text-blue-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description:
      "Active engineering and internal validation; selective early-access trials available upon evaluation.",
  },
  roadmap: {
    label: "Roadmap Capability",
    variant: "roadmap",
    textColor: "text-slate-700",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-200",
    description:
      "Architectural planning; designed for specialized institutional, governmental, and defense engagements.",
  },
};

export const capabilities: CapabilityItem[] = [
  // 1. Core Analytics (Pilot Available)
  {
    slug: "ai-video-analytics",
    name: "AI Video Analytics",
    shortDescription:
      "Real-time person, vehicle, and object detection across live multi-camera feeds with automated event recognition.",
    status: "pilot",
    statusNote:
      "Available for controlled customer pilot deployments. Connects directly to compatible IP/RTSP streams.",
    category: "core-analytics",
  },
  // 2. Attendance & Workforce (Pilot Available)
  {
    slug: "ai-attendance-workforce-intelligence",
    name: "AI Attendance & Workforce Intelligence",
    shortDescription:
      "Automated attendance tracking and personnel movement monitoring using consent-based visual verification.",
    status: "pilot",
    statusNote:
      "Pilot-ready for commercial campuses and industrial work sites with consent-based privacy controls.",
    category: "security-access",
  },
  // 3. Restricted Zone & Unauthorized Entry (Pilot Available)
  {
    slug: "restricted-zone-unauthorized-entry-detection",
    name: "Restricted Zone & Unauthorized Entry Detection",
    shortDescription:
      "Automated real-time alerts when personnel or vehicles cross defined spatial boundaries or enter sensitive areas.",
    status: "pilot",
    statusNote:
      "Pilot-ready. Integrates with existing camera feeds to trigger immediate security operations alerts.",
    category: "security-access",
  },
  // 4. Enterprise Security (In Development)
  {
    slug: "enterprise-security",
    name: "Enterprise Security Intelligence",
    shortDescription:
      "Campus-wide multi-camera monitoring, virtual boundaries, after-hours movement detection, and centralized alerts.",
    status: "in-development",
    statusNote:
      "Active development. Core detection modules validated; multi-building orchestration under pilot testing.",
    category: "enterprise-ops",
  },
  // 5. Defence & Security (Roadmap)
  {
    slug: "defence-security",
    name: "Defence & Security Monitoring",
    shortDescription:
      "Hardened, air-gapped on-premise video analytics modules for high-security installations and defense infrastructure.",
    status: "roadmap",
    statusNote:
      "Roadmap capability. Publicly shareable generic capability specifications only; no operational specifics.",
    category: "defence-institutional",
  },
  // 6. Border Surveillance (Roadmap)
  {
    slug: "border-surveillance",
    name: "Border Surveillance Intelligence",
    shortDescription:
      "Specialized visual intelligence for long-range boundary monitoring, night movement filtering, and terrain surveillance.",
    status: "roadmap",
    statusNote:
      "Roadmap initiative. Conceptual and architectural planning for institutional border security operations.",
    category: "defence-institutional",
  },
  // 7. Smart City Video Intelligence (In Development)
  {
    slug: "smart-city-video-intelligence",
    name: "Smart City Video Intelligence",
    shortDescription:
      "Public safety monitoring, crowd density estimation, traffic movement analytics, and municipal command-center feeds.",
    status: "in-development",
    statusNote:
      "In active exploration for urban infrastructure authorities and centralized monitoring command centers.",
    category: "defence-institutional",
  },
  // 8. ANPR & Vehicle Intelligence (In Development)
  {
    slug: "anpr-vehicle-intelligence",
    name: "ANPR & Vehicle Intelligence",
    shortDescription:
      "Automated number plate recognition, vehicle classification, and entry/exit timestamp logging.",
    status: "in-development",
    statusNote:
      "In active engineering. Model optimization underway for standard Indian license plate formats and illumination variants.",
    category: "core-analytics",
  },
  // 9. Centralized Video Intelligence (In Development)
  {
    slug: "centralized-video-intelligence",
    name: "Centralized Video Intelligence",
    shortDescription:
      "Unified console for multi-site camera management, stream health diagnostics, event search, and role-based access.",
    status: "in-development",
    statusNote:
      "Core dashboard framework under active development; supports localized alerts and multi-site views.",
    category: "enterprise-ops",
  },
];

export function getCapabilityBySlug(slug: string): CapabilityItem | undefined {
  return capabilities.find((item) => item.slug === slug);
}

export function getCapabilitiesByStatus(status: CapabilityStatus): CapabilityItem[] {
  return capabilities.filter((item) => item.status === status);
}

export default capabilities;
