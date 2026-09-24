/**
 * Platform Capabilities Configuration
 *
 * Guardrail notice:
 * Capability life-cycle statuses are currently configured based on agreed default
 * assumptions and must be validated with the founder (see /docs/OPEN_ITEMS.md).
 * Every capability card and page MUST read its status from this single source of truth
 * and display the corresponding status badge.
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
      "Available for controlled enterprise pilot deployments on existing CCTV infrastructure.",
  },
  "in-development": {
    label: "In Active Development",
    variant: "in-development",
    textColor: "text-blue-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description:
      "Active engineering and internal validation; available for selective early-access pilots.",
  },
  roadmap: {
    label: "Roadmap Capability",
    variant: "roadmap",
    textColor: "text-slate-700",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-200",
    description:
      "Architectural roadmap; planned for specialized enterprise and institutional engagements.",
  },
};

export const capabilities: CapabilityItem[] = [
  // Pilot stage
  {
    slug: "ai-video-analytics",
    name: "AI Video Analytics",
    shortDescription:
      "Real-time person, vehicle, and object detection across live multi-camera feeds with automated event recognition.",
    status: "pilot",
    statusNote:
      "Available for controlled customer pilot deployments. Compatible with existing IP/RTSP streams.",
    category: "core-analytics",
  },
  {
    slug: "ai-attendance-workforce",
    name: "AI Attendance & Workforce Intelligence",
    shortDescription:
      "Automated attendance tracking and personnel movement monitoring using consent-based visual verification.",
    status: "pilot",
    statusNote:
      "Pilot-ready for commercial campuses and industrial work sites with consent-based privacy controls.",
    category: "security-access",
  },
  {
    slug: "restricted-zone-detection",
    name: "Restricted Zone & Unauthorized Entry Detection",
    shortDescription:
      "Automated real-time alerts when personnel or vehicles cross defined spatial boundaries or enter sensitive areas.",
    status: "pilot",
    statusNote:
      "Pilot-ready. Integrates with existing camera feeds to trigger immediate security operations alerts.",
    category: "security-access",
  },

  // In-development stage
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
  {
    slug: "face-verification-workflows",
    name: "Face Verification Workflows",
    shortDescription:
      "Consent-based facial verification for controlled access points, authorized personnel logs, and identity workflows.",
    status: "in-development",
    statusNote:
      "In active development with strict privacy safeguards. Designed for opt-in enterprise verification, not mass public identification.",
    category: "security-access",
  },
  {
    slug: "virtual-fence-perimeter",
    name: "Virtual Fence & Perimeter Intrusion Detection",
    shortDescription:
      "Software-defined tripwires, line-crossing detection, and night-time motion filtering to eliminate false alarms.",
    status: "in-development",
    statusNote:
      "In active validation for outdoor boundary security and perimeter surveillance applications.",
    category: "security-access",
  },
  {
    slug: "smart-city-analytics",
    name: "Smart City Video Intelligence",
    shortDescription:
      "Public safety monitoring, crowd density estimation, traffic movement analytics, and municipal command-center feeds.",
    status: "in-development",
    statusNote:
      "In active exploration for urban infrastructure authorities and centralized monitoring command centers.",
    category: "defence-institutional",
  },
  {
    slug: "centralized-dashboard",
    name: "Centralized Video Intelligence Dashboard",
    shortDescription:
      "Unified console for multi-site camera management, stream health diagnostics, event search, and role-based access.",
    status: "in-development",
    statusNote:
      "Core dashboard framework under active development; supports localized alerts and multi-site views.",
    category: "enterprise-ops",
  },

  // Roadmap stage
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
  {
    slug: "defence-security-monitoring",
    name: "Defence-Specific Surveillance Modules",
    shortDescription:
      "Hardened, air-gapped on-premise video analytics modules for high-security installations and defense infrastructure.",
    status: "roadmap",
    statusNote:
      "Roadmap capability. Publicly shareable generic capability specifications only; no operational specifics.",
    category: "defence-institutional",
  },
];

export function getCapabilityBySlug(slug: string): CapabilityItem | undefined {
  return capabilities.find((item) => item.slug === slug);
}

export function getCapabilitiesByStatus(status: CapabilityStatus): CapabilityItem[] {
  return capabilities.filter((item) => item.status === status);
}

export default capabilities;
