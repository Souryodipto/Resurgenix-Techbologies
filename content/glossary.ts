import { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "rtsp",
    term: "RTSP (Real-Time Streaming Protocol)",
    acronym: "RTSP",
    shortDefinition:
      "A standard network protocol designed to establish and control real-time media streams between cameras, NVRs, and video analytics software.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["ai-video-analytics", "centralized-video-intelligence"],
  },
  {
    slug: "onvif",
    term: "ONVIF (Open Network Video Interface Forum)",
    acronym: "ONVIF",
    shortDefinition:
      "An open global industry forum that defines standardized communication protocols (Profiles S, G, T) between IP physical security products.",
    category: "Compliance & Standards",
    relatedSolutionSlugs: ["ai-video-analytics", "smart-city-video-intelligence"],
  },
  {
    slug: "edge-ai",
    term: "Edge AI (Edge Computing in Surveillance)",
    acronym: "Edge AI",
    shortDefinition:
      "Executing computer vision and deep learning inference directly on localized hardware appliances close to cameras, eliminating external bandwidth dependencies.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["ai-video-analytics", "restricted-zone-unauthorized-entry-detection"],
  },
  {
    slug: "vms",
    term: "VMS (Video Management Software)",
    acronym: "VMS",
    shortDefinition:
      "Software that manages camera feeds, records video streams to storage, and provides an interface for security operators to view live and recorded surveillance.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["enterprise-security", "centralized-video-intelligence"],
  },
  {
    slug: "anpr",
    term: "ANPR (Automatic Number Plate Recognition)",
    acronym: "ANPR",
    shortDefinition:
      "A computer vision technology that uses optical character recognition (OCR) to read vehicle registration plates automatically from video feeds.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["anpr-vehicle-intelligence", "smart-city-video-intelligence"],
  },
  {
    slug: "restricted-zone-detection",
    term: "Restricted Zone Detection",
    shortDefinition:
      "A spatial surveillance analytics feature that triggers immediate alerts when unauthorized persons or vehicles enter a defined virtual polygon on a camera feed.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["restricted-zone-unauthorized-entry-detection", "enterprise-security"],
  },
  {
    slug: "virtual-fence",
    term: "Virtual Fence & Tripwire Detection",
    shortDefinition:
      "Software-defined boundary lines overlaid on camera streams that detect directional crossings, filtering out wind-blown vegetation and animal movement.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["restricted-zone-unauthorized-entry-detection", "defence-security"],
  },
  {
    slug: "dpdp-act",
    term: "DPDP Act 2023 (Digital Personal Data Protection Act)",
    acronym: "DPDP",
    shortDefinition:
      "India's comprehensive privacy legislation governing the processing of digital personal data, including identifiable biometric and video surveillance footage.",
    category: "Compliance & Standards",
    relatedSolutionSlugs: ["ai-attendance-workforce-intelligence", "enterprise-security"],
  },
  {
    slug: "nvr-dvr-xvr",
    term: "NVR / DVR / XVR",
    acronym: "NVR",
    shortDefinition:
      "Network Video Recorders (IP), Digital Video Recorders (analog), and hybrid video recorders used to encode, store, and manage physical CCTV video streams.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["ai-video-analytics", "centralized-video-intelligence"],
  },
  {
    slug: "tensorrt",
    term: "TensorRT & GPU-Accelerated Inference",
    acronym: "TensorRT",
    shortDefinition:
      "A high-performance deep learning inference library by NVIDIA that optimizes neural network models to achieve real-time, low-latency video stream processing.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["ai-video-analytics", "anpr-vehicle-intelligence"],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
