import { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "rtsp",
    term: "RTSP (Real-Time Streaming Protocol)",
    acronym: "RTSP",
    shortDefinition:
      "A standard application-level network protocol designed to establish and control real-time media streams between IP cameras, NVRs, and AI video analytics software pipelines.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["ai-video-analytics", "centralized-video-intelligence"],
  },
  {
    slug: "onvif",
    term: "ONVIF (Open Network Video Interface Forum)",
    acronym: "ONVIF",
    shortDefinition:
      "An open industry standard that defines standardized communication protocols (such as Profile S for streaming and Profile T for advanced video) between IP surveillance products.",
    category: "Compliance & Standards",
    relatedSolutionSlugs: ["ai-video-analytics", "smart-city-video-intelligence"],
  },
  {
    slug: "nvr",
    term: "NVR (Network Video Recorder)",
    acronym: "NVR",
    shortDefinition:
      "A specialized computing appliance that captures, encodes, and records digital video streams transmitted over an IP local area network from IP security cameras.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["ai-video-analytics", "centralized-video-intelligence"],
  },
  {
    slug: "dvr",
    term: "DVR (Digital Video Recorder)",
    acronym: "DVR",
    shortDefinition:
      "A recording unit that receives analog video feeds via coaxial cables and digitizes them for storage, often integrated into modern AI platforms via video encoders or hybrid setups.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["ai-video-analytics"],
  },
  {
    slug: "xvr",
    term: "XVR (Hybrid Video Recorder)",
    acronym: "XVR",
    shortDefinition:
      "A hybrid digital video recorder capable of simultaneously ingesting analog, HD-over-coax (HDCVI, AHD, TVI), and digital IP camera streams on the same chassis.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["ai-video-analytics", "centralized-video-intelligence"],
  },
  {
    slug: "vms",
    term: "VMS (Video Management Software)",
    acronym: "VMS",
    shortDefinition:
      "Enterprise software that manages multi-camera recording, video playback, permission management, and camera health monitoring across distributed facilities.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["enterprise-security", "centralized-video-intelligence"],
  },
  {
    slug: "edge-ai",
    term: "Edge AI (Edge Computing in Video Surveillance)",
    acronym: "Edge AI",
    shortDefinition:
      "Running deep learning and computer vision inference directly on localized hardware appliances within a facility's local network, eliminating external cloud bandwidth consumption.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["ai-video-analytics", "restricted-zone-unauthorized-entry-detection"],
  },
  {
    slug: "inference",
    term: "Inference (Neural Network Inference)",
    acronym: "Inference",
    shortDefinition:
      "The process of running live video frames through a pre-trained neural network to detect, classify, and track objects (such as people, vehicles, or safety violations) in real time.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["ai-video-analytics", "anpr-vehicle-intelligence"],
  },
  {
    slug: "false-positive",
    term: "False Positive (Nuisance Alarm)",
    shortDefinition:
      "An erroneous detection event triggered by non-threatening stimuli (such as headlights, windblown foliage, shadows, or animals) that AI spatial filtering is designed to suppress.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["restricted-zone-unauthorized-entry-detection", "defence-security"],
  },
  {
    slug: "anpr",
    term: "ANPR (Automatic Number Plate Recognition)",
    acronym: "ANPR",
    shortDefinition:
      "An optical character recognition (OCR) and computer vision pipeline that automatically reads and records vehicle registration plates from camera feeds at facility gates.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["anpr-vehicle-intelligence", "smart-city-video-intelligence"],
  },
  {
    slug: "virtual-fence",
    term: "Virtual Fence & Tripwire Detection",
    shortDefinition:
      "A software-defined boundary line configured on a camera stream that triggers an alert when a person or vehicle crosses in a specified direction, replacing mechanical tripwires.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["restricted-zone-unauthorized-entry-detection", "defence-security"],
  },
  {
    slug: "perimeter-intrusion-detection",
    term: "PID (Perimeter Intrusion Detection)",
    acronym: "PID",
    shortDefinition:
      "Automated surveillance capabilities that monitor outer fence lines and boundary perimeters to detect unauthorized physical incursions before intruders reach facility buildings.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["restricted-zone-unauthorized-entry-detection", "defence-security"],
  },
  {
    slug: "restricted-zone-detection",
    term: "Restricted Zone Detection",
    shortDefinition:
      "A spatial computer vision rule where a polygonal area on a camera stream is marked as restricted, triggering immediate alerts if unauthorized personnel or vehicles enter.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["restricted-zone-unauthorized-entry-detection", "enterprise-security"],
  },
  {
    slug: "bounding-box",
    term: "Bounding Box (Spatial Detection Coordinate)",
    shortDefinition:
      "An imaginary or rendered rectangular coordinate frame enclosing a detected object (person, vehicle, or tool) within an image frame, indicating its spatial position and dimensions.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["ai-video-analytics"],
  },
  {
    slug: "optical-occlusion",
    term: "Camera Occlusion & Tamper Detection",
    shortDefinition:
      "An automated camera health check that identifies when a camera lens is spray-painted, physically covered, displaced, or significantly defocused.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["centralized-video-intelligence"],
  },
  {
    slug: "air-gapped-network",
    term: "Air-Gapped Network (Isolated Surveillance LAN)",
    shortDefinition:
      "A physically and logically isolated computer network that has zero physical or wireless connections to the public internet, commonly mandated in defence and heavy industry.",
    category: "Compliance & Standards",
    relatedSolutionSlugs: ["defence-security", "enterprise-security"],
  },
  {
    slug: "data-minimization",
    term: "Data Minimization",
    shortDefinition:
      "The architectural principle of capturing, processing, and storing only the specific event metadata and short alert clips required for security operations, avoiding perpetual hoarding.",
    category: "Compliance & Standards",
    relatedSolutionSlugs: ["enterprise-security", "ai-attendance-workforce-intelligence"],
  },
  {
    slug: "rbac",
    term: "RBAC (Role-Based Access Control)",
    acronym: "RBAC",
    shortDefinition:
      "A security mechanism that restricts system access and stream viewing permissions based on an individual operator's verified organizational role and operational need.",
    category: "Compliance & Standards",
    relatedSolutionSlugs: ["enterprise-security", "centralized-video-intelligence"],
  },
  {
    slug: "inter-pupillary-distance",
    term: "IPD (Inter-Pupillary Distance)",
    acronym: "IPD",
    shortDefinition:
      "The physical pixel distance between human eye centers on an optical camera sensor, used as a key technical threshold to determine facial verification feasibility.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["ai-attendance-workforce-intelligence"],
  },
  {
    slug: "dpdp-act",
    term: "DPDP Act 2023 (Digital Personal Data Protection Act)",
    acronym: "DPDP",
    shortDefinition:
      "India's statutory data protection law governing digital personal data, establishing fiduciary responsibilities and individual consent requirements for identifiable biometric video.",
    category: "Compliance & Standards",
    relatedSolutionSlugs: ["ai-attendance-workforce-intelligence", "enterprise-security"],
  },
  {
    slug: "modbus-tcp-relay",
    term: "Network I/O Relay (Modbus TCP / IP Relay)",
    acronym: "I/O Relay",
    shortDefinition:
      "Hardware modules that convert software alert triggers into physical electrical signals, activating sirens, strobe lights, or automated boom barrier gates upon an AI event.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["restricted-zone-unauthorized-entry-detection", "anpr-vehicle-intelligence"],
  },
  {
    slug: "fps",
    term: "Frame Rate (FPS - Frames Per Second)",
    acronym: "FPS",
    shortDefinition:
      "The frequency at which consecutive image frames are captured and streamed by a camera, typically balanced between 10 to 25 FPS to optimize AI inference throughput.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["ai-video-analytics"],
  },
  {
    slug: "poe",
    term: "PoE (Power over Ethernet)",
    acronym: "PoE",
    shortDefinition:
      "A networking technology (IEEE 802.3af/at) that delivers both electrical power and data connectivity to IP surveillance cameras over a single Category 5e/6 Ethernet cable.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["ai-video-analytics"],
  },
  {
    slug: "ptz-camera",
    term: "PTZ Camera (Pan-Tilt-Zoom)",
    acronym: "PTZ",
    shortDefinition:
      "A motorized surveillance camera capable of directional and optical zoom control, often paired with fixed wide-angle cameras for automated target tracking.",
    category: "Surveillance Hardware",
    relatedSolutionSlugs: ["smart-city-video-intelligence", "defence-security"],
  },
  {
    slug: "tensorrt",
    term: "TensorRT",
    acronym: "TensorRT",
    shortDefinition:
      "An advanced deep learning inference optimizer by NVIDIA that accelerates neural network models on edge GPU hardware to deliver sub-second video analytics latency.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["ai-video-analytics"],
  },
  {
    slug: "deep-learning",
    term: "Deep Learning in Computer Vision",
    shortDefinition:
      "Multi-layered neural network architectures (such as convolutional networks and vision transformers) trained to recognize complex spatial patterns and semantics in raw video frames.",
    category: "AI & Computer Vision",
    relatedSolutionSlugs: ["ai-video-analytics", "anpr-vehicle-intelligence"],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
