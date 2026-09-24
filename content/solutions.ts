import { SolutionEntry } from "./types";
import { getCapabilityBySlug } from "./capabilities";

function getStatusFor(slug: string) {
  const cap = getCapabilityBySlug(slug);
  return cap ? cap.status : "in-development";
}

export const solutions: SolutionEntry[] = [
  // 1. AI Video Analytics
  {
    slug: "ai-video-analytics",
    title: "AI Video Analytics",
    seoTitle: "AI Video Analytics Platform for Existing CCTV | Resurgenix",
    metaDescription:
      "Transform existing CCTV streams into real-time visual intelligence. Detect people, vehicles, and objects with automated alerts across compatible IP and RTSP cameras.",
    h1: "Real-Time AI Video Analytics for Existing CCTV Infrastructure",
    primaryKeyword: "AI CCTV video analytics",
    secondaryKeywords: [
      "AI video analytics platform",
      "real-time person detection CCTV",
      "multi-camera tracking software",
      "automated object classification",
    ],
    shortAnswer:
      "Resurgenix AI Video Analytics is an intelligence software layer that connects to compatible existing IP cameras, NVRs, and RTSP streams to automatically identify persons, vehicles, and abnormal events in real time. It eliminates the need for manual screen monitoring and triggers immediate security alerts without requiring complete camera hardware replacement.",
    problem:
      "Security teams cannot watch dozens of simultaneous camera feeds effectively, causing critical incidents to be missed and reviewed only after damage has occurred.",
    capabilities: [
      "Real-time person and vehicle classification",
      "Multi-camera spatial object tracking",
      "Automated event notification engine",
      "Historical video metadata search",
    ],
    howItWorks: [
      "Ingest live RTSP video feeds from compatible IP cameras and NVRs",
      "Run GPU-accelerated deep learning inference to classify entities",
      "Apply spatial rule-checks against defined security parameters",
      "Dispatch sub-second alerts to dashboard, webhooks, or mobile notifications",
    ],
    requirements: [
      "Standard IP cameras with RTSP/H.264/H.265 video stream support",
      "Local edge server or workstation with compatible GPU acceleration",
      "Local network connection between cameras and inference appliance",
    ],
    useCases: [
      "Perimeter and entry point monitoring across commercial facilities",
      "Vehicle movement and unauthorized parking tracking",
      "Crowd gathering and after-hours loitering detection",
    ],
    limitations: [
      "Inference accuracy requires adequate illumination and unoccluded camera angles",
      "Extreme weather conditions (heavy monsoon fog) may reduce detection distance",
    ],
    faqs: [
      {
        question: "Do I have to replace our existing CCTV cameras to run AI analytics?",
        answer:
          "No. Resurgenix connects directly to compatible existing IP cameras, RTSP streams, and NVRs over your local network, eliminating the need to rip and replace operational camera hardware.",
      },
      {
        question: "Can this system run entirely on-premise without an active internet connection?",
        answer:
          "Yes. Our edge architecture supports fully air-gapped, on-premise installations where all video processing and data retention remain strictly within your local facility network.",
      },
    ],
    relatedSlugs: [
      "restricted-zone-unauthorized-entry-detection",
      "anpr-vehicle-intelligence",
      "centralized-video-intelligence",
    ],
    ctaPrimary: {
      label: "Request a Pilot",
      href: "/request-pilot",
    },
    ctaSecondary: {
      label: "See How It Works",
      href: "/how-it-works",
    },
    status: getStatusFor("ai-video-analytics"),
  },

  // 2. AI Attendance & Workforce Intelligence
  {
    slug: "ai-attendance-workforce-intelligence",
    title: "AI Attendance & Workforce Intelligence",
    seoTitle: "AI Attendance & Workforce Monitoring CCTV Software | Resurgenix",
    metaDescription:
      "Automate workforce attendance and movement records using consent-based visual verification on existing facility cameras. Privacy-compliant and contactless.",
    h1: "Consent-Based AI Attendance & Workforce Intelligence",
    primaryKeyword: "AI attendance system CCTV",
    secondaryKeywords: [
      "workforce monitoring CCTV",
      "automated attendance camera",
      "consent-based visual verification",
      "contactless employee attendance",
    ],
    shortAnswer:
      "Resurgenix AI Attendance & Workforce Intelligence uses consent-based optical verification to record personnel shift check-ins, floor occupancy, and movement logs through existing facility cameras. Designed strictly for authorized enterprise environments, it eliminates biometric contact queues while maintaining complete audit trails aligned with Indian data protection norms.",
    problem:
      "Traditional biometric fingerprint turnstiles create hygiene issues, physical bottlenecks at shift changeovers, and fail to track post-entry floor occupancy or ghost attendance.",
    capabilities: [
      "Contactless shift check-in and check-out logging",
      "Opt-in personnel identity verification workflows",
      "Automated shift occupancy and muster reporting",
      "Privacy-by-design encrypted biometric template storage",
    ],
    howItWorks: [
      "Employees enroll via verified corporate consent workflows",
      "Entry cameras capture optical facial verification frames at checkpoints",
      "Edge server matches live frames against secure, localized vector templates",
      "Structured attendance records sync automatically with enterprise HRMS systems",
    ],
    requirements: [
      "Fixed overhead or eye-level IP cameras with minimum 1080p resolution",
      "Adequate front-facing lighting at designated entry checkpoints",
      "Explicit employee consent documentation for data fiduciary compliance",
    ],
    useCases: [
      "High-throughput shift changes in manufacturing and factory plants",
      "Corporate campus contactless entry and visitor verification",
      "Automated muster reporting for industrial emergency evacuations",
    ],
    limitations: [
      "Requires explicit optical angle alignment and front-facing visibility",
      "Extreme face coverings (helmets, welding shields) require checkpoint removal",
    ],
    faqs: [
      {
        question: "Is this system compliant with India's DPDP Act 2023?",
        answer:
          "Yes. The platform operates on a consent-first model for registered employees, storing localized cryptographic vector embeddings rather than raw biometric imagery, with strict purpose limitation and role-based access.",
      },
      {
        question: "Does it support integration with our existing HRMS / payroll software?",
        answer:
          "Yes. Structured attendance logs with timestamps and camera IDs can be exported via REST API webhooks or CSV/database connectors to your HRMS platform.",
      },
    ],
    relatedSlugs: [
      "ai-video-analytics",
      "restricted-zone-unauthorized-entry-detection",
      "enterprise-security",
    ],
    ctaPrimary: {
      label: "Request a Pilot",
      href: "/request-pilot",
    },
    ctaSecondary: {
      label: "Privacy & Compliance Overview",
      href: "/security-and-privacy",
    },
    status: getStatusFor("ai-attendance-workforce-intelligence"),
  },

  // 3. Restricted Zone & Unauthorized Entry Detection
  {
    slug: "restricted-zone-unauthorized-entry-detection",
    title: "Restricted Zone & Unauthorized Entry Detection",
    seoTitle: "Restricted Zone & Unauthorized Entry Detection CCTV | Resurgenix",
    metaDescription:
      "Automated real-time boundary breach and intrusion alerts on existing CCTV feeds. Protect server rooms, hazardous factory zones, and secure facilities.",
    h1: "Real-Time Restricted Zone & Unauthorized Entry Detection",
    primaryKeyword: "restricted zone detection",
    secondaryKeywords: [
      "unauthorized entry detection CCTV",
      "virtual boundary alert CCTV",
      "sensitive area surveillance",
      "intrusion alert software",
    ],
    shortAnswer:
      "Resurgenix Restricted Zone & Unauthorized Entry Detection applies virtual spatial boundaries across existing CCTV video feeds to instantly detect unauthorized human or vehicle presence. When a restricted line is crossed, the system alerts security operations within seconds, preventing unauthorized access to critical rooms, hazardous machinery, or sensitive assets.",
    problem:
      "Physical locks and manual guards cannot constantly protect every restricted door, hazardous industrial bay, or after-hours corridor across large enterprise facilities.",
    capabilities: [
      "Software-defined polygon and tripwire zone configuration",
      "Direction-aware line-crossing intrusion detection",
      "Human vs. animal/shadow false alarm suppression",
      "Instant visual snapshot dispatch to SOC workstations",
    ],
    howItWorks: [
      "Security administrators draw custom boundary zones directly on live camera feeds",
      "System monitors active streams using deep-learning spatial object tracking",
      "When an unapproved person or vehicle breaches the zone, an event is triggered",
      "Real-time visual alert and audible notification dispatch to security operators",
    ],
    requirements: [
      "Compatible RTSP IP camera covering the designated boundary or doorway",
      "Local edge server or on-premise compute appliance",
      "Minimum 15 FPS video stream for real-time tripwire tracking",
    ],
    useCases: [
      "Data center server room and telecom closet access monitoring",
      "Industrial hazardous chemical and high-voltage zone protection",
      "After-hours executive office and financial vault perimeter monitoring",
    ],
    limitations: [
      "Camera lenses must be kept clean and free from heavy spiderwebs or water streaks",
      "Cannot physically lock doors; functions as an automated detection and alerting layer",
    ],
    faqs: [
      {
        question: "How does this prevent false alarms caused by lighting or animals?",
        answer:
          "Unlike legacy pixel-motion detection, our deep learning models identify morphological human and vehicle shapes, filtering out wind-blown vegetation, shadows, and small animals.",
      },
      {
        question: "Can different alert schedules be set for day vs. night?",
        answer:
          "Yes. Zones can be configured with time-based rules (e.g. open access during working shift hours, strict unauthorized entry alerting after 8 PM).",
      },
    ],
    relatedSlugs: ["ai-video-analytics", "enterprise-security", "centralized-video-intelligence"],
    ctaPrimary: {
      label: "Request a Pilot",
      href: "/request-pilot",
    },
    ctaSecondary: {
      label: "Explore How It Works",
      href: "/how-it-works",
    },
    status: getStatusFor("restricted-zone-unauthorized-entry-detection"),
  },

  // 4. Enterprise Security
  {
    slug: "enterprise-security",
    title: "Enterprise Security Intelligence",
    seoTitle: "Enterprise Security AI Video Intelligence Platform | Resurgenix",
    metaDescription:
      "Multi-campus surveillance intelligence unifying existing CCTV into a centralized security layer with role-based access, automated alerts, and audit logs.",
    h1: "Enterprise-Grade Video Security Intelligence",
    primaryKeyword: "enterprise security AI video analytics",
    secondaryKeywords: [
      "multi-site security surveillance",
      "corporate campus CCTV AI",
      "centralized enterprise security",
      "video surveillance operations",
    ],
    shortAnswer:
      "Resurgenix Enterprise Security is a unified intelligence platform designed for multi-facility corporate estates and campuses. It aggregates live streams from disparate camera networks, applies automated incident detection rules, and provides centralized security operations centers with real-time situational alerts, role-based controls, and complete operational audit logs.",
    problem:
      "Multi-location enterprises suffer from fragmented surveillance silos, differing NVR brands across sites, and lack of central visibility during emergency incidents.",
    capabilities: [
      "Unified multi-site stream management and status monitoring",
      "Hierarchical role-based access control (RBAC) and audit trails",
      "Cross-camera incident timeline construction",
      "Automated security operations shift logging and reporting",
    ],
    howItWorks: [
      "Connect regional facility streams via local edge nodes or secure VPNs",
      "Run decentralized analytics locally while synchronizing lightweight event metadata",
      "Central command console aggregates alerts across all corporate locations",
      "Security managers review, assign, and document incident response actions",
    ],
    requirements: [
      "Multi-site IP network with standard RTSP-enabled video infrastructure",
      "Dedicated central management server or private enterprise cloud gateway",
      "Designated enterprise user directory integration (LDAP / SSO)",
    ],
    useCases: [
      "Corporate headquarters, IT tech parks, and regional branch networks",
      "Multi-building university campuses and educational institutions",
      "Commercial real estate developments and shared business complexes",
    ],
    limitations: [
      "Centralized streaming of high-resolution video requires sufficient inter-site WAN bandwidth; edge-first architecture is recommended to minimize bandwidth usage.",
    ],
    faqs: [
      {
        question: "Does this replace our existing VMS or NVR recorders?",
        answer:
          "No replacement required. Resurgenix operates as an intelligent overlay on top of existing NVRs and VMS systems, reading RTSP feeds directly without disrupting standard recording.",
      },
      {
        question: "What user permissions and audit capabilities are included?",
        answer:
          "The platform supports strict role-based access control (Admin, Security Supervisor, Operator, Auditor) with tamper-evident logs tracking every login, alert acknowledgement, and video export.",
      },
    ],
    relatedSlugs: [
      "centralized-video-intelligence",
      "ai-attendance-workforce-intelligence",
      "restricted-zone-unauthorized-entry-detection",
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Contact Sales",
      href: "/contact",
    },
    status: getStatusFor("enterprise-security"),
  },

  // 5. Defence & Security
  {
    slug: "defence-security",
    title: "Defence & Security Monitoring",
    seoTitle: "Defence & Military Installation Video Intelligence | Resurgenix",
    metaDescription:
      "Hardened, air-gapped on-premise video analytics modules for high-security installations, military bases, and critical national infrastructure.",
    h1: "Hardened Video Intelligence for Defence & Critical Security",
    primaryKeyword: "defence surveillance video analytics",
    secondaryKeywords: [
      "air-gapped CCTV analytics",
      "military installation perimeter",
      "critical infrastructure surveillance",
      "perimeter defense AI",
    ],
    shortAnswer:
      "Resurgenix Defence & Security Monitoring delivers air-gapped, on-premise video analytics specifically engineered for critical defense installations, ordnance depots, and high-security infrastructure. It operates entirely without internet access, providing perimeter tripwires, personnel verification, and vehicle movement intelligence with complete data sovereignty.",
    problem:
      "Critical security bases require continuous 24/7 perimeter vigilance under harsh operational conditions without ever transmitting sensitive imagery across external networks.",
    capabilities: [
      "Strictly air-gapped, offline edge inference deployment",
      "Long-range perimeter tripwire and line-crossing detection",
      "Thermal and low-light optical video stream processing",
      "Hardened local cryptographic storage and zero external data telemetry",
    ],
    howItWorks: [
      "Deploy localized ruggedized server nodes inside secured perimeter facilities",
      "Ingest isolated camera network feeds without external internet connectivity",
      "Process high-frame-rate computer vision models locally on edge GPUs",
      "Output direct hardware relay triggers or localized command-wall alerts",
    ],
    requirements: [
      "Isolated, closed-loop IP surveillance network",
      "Ruggedized on-premise compute hardware meeting operational temperature specifications",
      "Direct technical coordination with institutional security authorities",
    ],
    useCases: [
      "Perimeter intrusion detection around military depots and sensitive installations",
      "Access point verification for personnel and authorized tactical vehicles",
      "Night-time motion filtering along sensitive boundary fences",
    ],
    limitations: [
      "Public documentation contains generic capability specifications only; operational specifics are shared solely through approved institutional channels.",
    ],
    faqs: [
      {
        question: "Can this system function completely disconnected from the public internet?",
        answer:
          "Yes. Defence modules are designed for 100% offline, air-gapped deployment with zero external network connectivity or cloud telemetry.",
      },
      {
        question: "Does Resurgenix publish operational details of defence projects?",
        answer:
          "No. In strict compliance with security protocols, no operational deployment details, base locations, or sensitive specifications are published publicly.",
      },
    ],
    relatedSlugs: ["border-surveillance", "how-it-works", "security-and-privacy"],
    ctaPrimary: {
      label: "Request Institutional Assessment",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Security Architecture",
      href: "/security-and-privacy",
    },
    status: getStatusFor("defence-security"),
  },

  // 6. Border Surveillance
  {
    slug: "border-surveillance",
    title: "Border Surveillance Intelligence",
    seoTitle: "Border Surveillance AI Video Intelligence | Resurgenix",
    metaDescription:
      "Specialized visual intelligence for long-range boundary monitoring, night movement filtering, and terrain surveillance along international borders.",
    h1: "Long-Range Border Surveillance Visual Intelligence",
    primaryKeyword: "border surveillance AI analytics",
    secondaryKeywords: [
      "border perimeter monitoring",
      "night movement detection CCTV",
      "terrain surveillance analytics",
      "long-range optical intelligence",
    ],
    shortAnswer:
      "Resurgenix Border Surveillance Intelligence provides long-range computer vision analytics designed to detect human and vehicle infiltration across vast perimeter and frontier zones. Engineered to assist sentries in harsh outdoor conditions, it filters out environmental foliage movement and wildlife to focus attention on genuine intrusions.",
    problem:
      "Frontier sentries face extreme visual fatigue monitoring endless stretches of open terrain, riverine borders, and remote fences during night shifts and adverse weather.",
    capabilities: [
      "Long-range optical and thermal anomaly detection",
      "Environmental noise filtering (swaying trees, rain, stray animals)",
      "Multi-sensor spatial tracking across expansive geographical sectors",
      "Low-bandwidth tactical alert messaging to command outposts",
    ],
    howItWorks: [
      "Interface with long-range fixed, PTZ, or thermal border surveillance cameras",
      "Apply deep-learning motion segmentation to identify directional human movement",
      "Suppress non-threatening environmental vibrations and animal crossings",
      "Transmit verified intrusion vectors to tactical observation post consoles",
    ],
    requirements: [
      "High-power optical or thermal sensor feeds with stable mounting",
      "Hardened edge compute appliance designed for remote outpost power conditions",
      "Institutional validation and approved deployment authorization",
    ],
    useCases: [
      "Remote frontier boundary fence monitoring and infiltration detection",
      "Riverine and coastal approach corridor visual surveillance",
      "Critical transit corridor and high-altitude checkpoint protection",
    ],
    limitations: [
      "Detection range depends directly on optical sensor magnification and atmospheric visibility.",
      "Roadmap initiative. Only publicly shareable generic capability language is published.",
    ],
    faqs: [
      {
        question: "How does the system handle harsh environmental conditions like dense fog?",
        answer:
          "The system is designed to pair with thermal and dual-spectrum cameras, running specialized contrast-enhancement models to detect thermal human signatures through fog and total darkness.",
      },
      {
        question: "What is the deployment roadmap for border surveillance?",
        answer:
          "Border surveillance capabilities are in architectural planning for institutional partnerships and defense procurement channels.",
      },
    ],
    relatedSlugs: ["defence-security", "how-it-works", "contact"],
    ctaPrimary: {
      label: "Request Institutional Assessment",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Explore Solutions Hub",
      href: "/solutions",
    },
    status: getStatusFor("border-surveillance"),
  },

  // 7. Smart City Video Intelligence
  {
    slug: "smart-city-video-intelligence",
    title: "Smart City Video Intelligence",
    seoTitle: "Smart City AI Video Analytics & Traffic Intelligence | Resurgenix",
    metaDescription:
      "Scalable video analytics for smart cities and public safety. Traffic anomaly detection, crowd density monitoring, and command center metadata feeds.",
    h1: "AI Video Intelligence for Smart Cities & Public Infrastructure",
    primaryKeyword: "smart city video analytics India",
    secondaryKeywords: [
      "urban surveillance analytics",
      "municipal CCTV intelligence",
      "crowd management software",
      "ICCC video analytics layer",
    ],
    shortAnswer:
      "Resurgenix Smart City Video Intelligence delivers automated public safety analytics for municipal authorities and urban command centers. It transforms thousands of intersection and public CCTV streams into actionable data feeds, automatically detecting traffic congestion, wrong-way driving, illegal parking, and abnormal crowd density surges.",
    problem:
      "City Integrated Command and Control Centres (ICCCs) have thousands of camera feeds on massive video walls that human operators cannot monitor simultaneously in real time.",
    capabilities: [
      "Crowd density estimation and overcrowding threshold alerts",
      "Traffic flow anomaly detection (congestion, wrong-way driving)",
      "Automated license plate recognition and vehicle classification",
      "Open API metadata integration with municipal ICCC platforms",
    ],
    howItWorks: [
      "Ingest standard ONVIF/RTSP streams from municipal intersection cameras",
      "Analyze urban traffic flow and pedestrian density using edge servers",
      "Generate structured spatial alerts when safety or traffic rules are violated",
      "Feed standardized metadata into city dashboards via open REST/MQTT APIs",
    ],
    requirements: [
      "Municipal fiber/broadband CCTV network with standard RTSP access",
      "Central or edge-distributed GPU servers sized for city channel counts",
      "Integration alignment with city ICCC software platform standards",
    ],
    useCases: [
      "Urban intersection traffic monitoring and red-light/wrong-way violations",
      "Public square, transit hub, and religious festival crowd management",
      "Municipal waste dumping and public encroachment monitoring",
    ],
    limitations: [
      "City-scale analytics require staged deployment planning across high-priority intersections before city-wide expansion.",
    ],
    faqs: [
      {
        question: "Can this integrate with our existing city ICCC platform?",
        answer:
          "Yes. Resurgenix exports structured JSON event data and alert snapshots via open REST APIs, webhooks, and MQTT brokers for integration into existing ICCC command software.",
      },
      {
        question: "Does it comply with Make in India public procurement norms?",
        answer:
          "Yes. Resurgenix is an indigenous Indian technology company developed in India, supporting national public procurement preferences.",
      },
    ],
    relatedSlugs: [
      "anpr-vehicle-intelligence",
      "centralized-video-intelligence",
      "industries/government-public-safety",
    ],
    ctaPrimary: {
      label: "Talk to Our Team",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Explore Public Safety",
      href: "/industries/government-public-safety",
    },
    status: getStatusFor("smart-city-video-intelligence"),
  },

  // 8. ANPR & Vehicle Intelligence
  {
    slug: "anpr-vehicle-intelligence",
    title: "ANPR & Vehicle Intelligence",
    seoTitle: "ANPR Software & Vehicle Intelligence CCTV | Resurgenix",
    metaDescription:
      "Automated number plate recognition and vehicle classification for commercial gates, logistics yards, and smart parking. Optimized for Indian license plates.",
    h1: "Automated Number Plate Recognition (ANPR) & Vehicle Intelligence",
    primaryKeyword: "ANPR system India",
    secondaryKeywords: [
      "automatic number plate recognition",
      "vehicle entry exit camera",
      "commercial ANPR software",
      "license plate recognition CCTV",
    ],
    shortAnswer:
      "Resurgenix ANPR & Vehicle Intelligence uses deep learning computer vision to read vehicle license plates and classify vehicle categories (cars, trucks, motorcycles, commercial vehicles) from live camera streams. Optimized for Indian plate formats and diverse lighting, it automates gate access, logistics turnaround, and vehicle security logs.",
    problem:
      "Manual vehicle logbooks at industrial gates and commercial loading docks cause long queues, human transcription errors, and unverified vehicle entry.",
    capabilities: [
      "High-accuracy optical character recognition for Indian vehicle number plates",
      "Vehicle classification by type (two-wheeler, LMV, commercial truck, bus)",
      "Automated entry and exit timestamp logging with vehicle image snapshots",
      "Whitelist / blacklist automated barrier gate trigger integration",
    ],
    howItWorks: [
      "Camera captures vehicle approaching entry or exit lane",
      "System detects vehicle bounding box and extracts license plate zone",
      "OCR model transcribes plate characters and validates against format rules",
      "Event is logged, matched against database lists, and can trigger gate relays",
    ],
    requirements: [
      "Dedicated entry/exit lane camera positioned at appropriate height and angle",
      "Minimum 1080p resolution with adequate lane illumination or IR capability",
      "Edge computing appliance running GPU-accelerated OCR models",
    ],
    useCases: [
      "Industrial factory and warehouse gate logistics management",
      "Corporate tech park automated parking access and barrier control",
      "Municipal toll plaza and vehicle monitoring checkpoints",
    ],
    limitations: [
      "Highly damaged, non-standard font, or illegible plates require human verification fallback.",
      "Lane speed should generally remain below 40 km/h for standard gate cameras.",
    ],
    faqs: [
      {
        question: "Does this work with customized or non-standard Indian number plates?",
        answer:
          "Our OCR model is specifically trained on Indian vehicle plate variations, high-security registration plates (HSRP), and common regional formats, with continuous model refinement.",
      },
      {
        question: "Can ANPR trigger our automatic boom barriers?",
        answer:
          "Yes. The system can interface with standard relay controllers and access control hardware to open barrier gates automatically for whitelisted vehicles.",
      },
    ],
    relatedSlugs: [
      "ai-video-analytics",
      "smart-city-video-intelligence",
      "centralized-video-intelligence",
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Logistics Use Cases",
      href: "/industries/logistics-warehousing",
    },
    status: getStatusFor("anpr-vehicle-intelligence"),
  },

  // 9. Centralized Video Intelligence
  {
    slug: "centralized-video-intelligence",
    title: "Centralized Video Intelligence",
    seoTitle: "Centralized Video Intelligence Dashboard | Resurgenix",
    metaDescription:
      "Unified multi-camera management console. Stream health monitoring, AI alert dispatch, searchable video event logs, and role-based permissions.",
    h1: "Centralized Video Intelligence & Operations Dashboard",
    primaryKeyword: "centralized video intelligence dashboard",
    secondaryKeywords: [
      "multi-camera management dashboard",
      "CCTV stream health monitoring",
      "centralized security console",
      "video surveillance operations center",
    ],
    shortAnswer:
      "Resurgenix Centralized Video Intelligence is a browser-based operations console that unifies live feeds, automated AI alerts, and camera health diagnostics across your entire surveillance network. It provides security managers with searchable event histories, role-based controls, and cross-site visibility without replacing local video recorders.",
    problem:
      "Security managers with cameras spread across multiple buildings or cities have no single screen to view system health, verify active alerts, or search past incidents.",
    capabilities: [
      "Unified multi-site stream viewing and status aggregation",
      "Automated camera stream health and offline failure detection",
      "Searchable event history filtered by date, camera, event, or object type",
      "Granular role-based user management (Admin, Supervisor, Operator)",
    ],
    howItWorks: [
      "Edge nodes at each location process local video feeds and extract event metadata",
      "Lightweight encrypted alert packets sync to the central management dashboard",
      "Operators monitor live alert feeds, acknowledge events, and trigger workflows",
      "Automated daily health diagnostics report offline cameras or stream drops",
    ],
    requirements: [
      "Standard modern web browser (Chrome, Firefox, Edge) for operator access",
      "Centralized server or secure on-premise workstation hosting web console",
      "Network connectivity between local edge nodes and central console",
    ],
    useCases: [
      "Centralized security operations centers (SOC) for corporate campuses",
      "Multi-branch retail and bank monitoring headquarters",
      "Industrial plant command centers managing multi-building facilities",
    ],
    limitations: [
      "Does not store months of raw 4K video centrally; raw video stays on local NVRs/edge storage to avoid saturating enterprise WAN connections.",
    ],
    faqs: [
      {
        question: "Can multiple security guards access the dashboard simultaneously?",
        answer:
          "Yes. The console supports multi-user concurrent access with granular permissions, ensuring operators only see the camera feeds and alerts assigned to their site.",
      },
      {
        question: "What happens if a camera loses signal or goes offline?",
        answer:
          "The system automatically detects video stream loss, RTSP timeouts, or camera tampering, immediately alerting the security operations manager.",
      },
    ],
    relatedSlugs: [
      "enterprise-security",
      "ai-video-analytics",
      "restricted-zone-unauthorized-entry-detection",
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Technical Architecture",
      href: "/how-it-works",
    },
    status: getStatusFor("centralized-video-intelligence"),
  },
];

export function getSolutionBySlug(slug: string): SolutionEntry | undefined {
  return solutions.find((s) => s.slug === slug);
}

export default solutions;
