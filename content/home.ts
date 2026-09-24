import { siteConfig } from "./site.config";

export interface CapabilitySummary {
  title: string;
  slug: string;
  whatItDoes: string;
  whyItMatters: string;
  status: "pilot" | "in-development" | "roadmap";
  badgeText: string;
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  metricOrImpact: string;
}

export interface UseCase {
  id: string;
  title: string;
  category: string;
  scenario: string;
  detection: string;
  outcome: string;
}

export interface Differentiator {
  title: string;
  summary: string;
  technicalReality: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  slug?: string;
}

export const homeContent = {
  hero: {
    eyebrow: "AI Video Intelligence",
    h1: "Your cameras already see. Resurgenix helps them understand.",
    subhead:
      "Resurgenix adds an AI layer to existing CCTV infrastructure, giving security and operations teams real-time event detection and immediate alerts instead of hours of passive footage.",
    primaryCta: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "See How It Works",
      href: "/how-it-works",
    },
    compatibilityNotice:
      "Works with compatible existing IP cameras, NVRs and RTSP streams. Compatibility is validated during technical assessment.",
  },

  videoSection: {
    eyebrow: "SYSTEM OVERVIEW",
    heading: "What Resurgenix can do",
    lead: "A 60-second architectural overview explaining how the Resurgenix intelligence layer connects to existing camera infrastructure to deliver sub-second event alerts.",
    honestCaption:
      "Illustrative visualization. Actual production deployments depend on site camera angles, lighting conditions, and network assessment.",
    transcriptTitle: "Read complete video transcript (60 seconds)",
    transcriptLines: [
      "1. Most organizations already have hundreds of cameras.",
      "2. But cameras only record. Someone has to be watching at exactly the right moment.",
      "3. Your cameras already see.",
      "4. Resurgenix adds an AI layer on top of the cameras you already have.",
      "5. It detects people, vehicles and restricted-zone entries in real time.",
      "6. The right person is alerted, with the evidence, at the right moment.",
      "7. From factories and warehouses to hospitals and cities.",
      "8. Your cameras already see. Resurgenix helps them understand. Dekhe bhi, samjhe bhi.",
    ],
  },

  trustStrip: {
    items: [
      { label: "Engineering Heritage", value: "Built in India" },
      { label: "Technical Leadership", value: "Founder-Led Architecture" },
      { label: "Current Lifecycle", value: "Pilot-Stage Deployments" },
      { label: "Infrastructure Approach", value: "Zero Hardware Rip-and-Replace" },
    ],
  },

  problems: {
    eyebrow: "THE OPERATIONAL GAP",
    heading: "Eyes everywhere, limited intelligence behind them",
    lead: "Most commercial and industrial facilities have invested heavily in camera coverage, but passive recording creates critical operational vulnerabilities.",
    items: [
      {
        id: "scrubbing",
        title: "Post-Incident Forensic Scrubbing",
        description:
          "Security teams spend hours rewinding multi-channel NVR footage after a theft, breach, or safety accident has already occurred, rather than preventing it in progress.",
        metricOrImpact: "Forensic delay: 2 to 8 hours to find single breach events",
      },
      {
        id: "fatigue",
        title: "Screen Fatigue & Human Monitoring Limits",
        description:
          "Operators watching 16 to 64 camera monitors simultaneously experience cognitive saturation within 20 minutes, inevitably missing subtle unauthorized entries and perimeter line crossings.",
        metricOrImpact:
          "Human attention drops significantly after 20 minutes of continuous screen monitoring",
      },
      {
        id: "restricted-zones",
        title: "Unenforced Restricted Zones",
        description:
          "Hazardous manufacturing sections, IT server rooms, and warehouse inventory vaults remain unguarded when security personnel are patrolling elsewhere on campus.",
        metricOrImpact: "Unnoticed breaches often go undetected until physical stock audits",
      },
      {
        id: "rip-replace",
        title: "Prohibitive Hardware Rip-and-Replace Costs",
        description:
          "Proprietary smart cameras and closed foreign VMS solutions require organizations to scrap functioning optical hardware and run expensive new structured cabling.",
        metricOrImpact: "Traditional upgrades cost 4x to 10x more than edge software layers",
      },
      {
        id: "bandwidth",
        title: "Cloud Video Streaming Bandwidth Bottlenecks",
        description:
          "Streaming dozens of continuous 1080p feeds to public cloud servers congests corporate WAN connections and introduces regulatory compliance risks under Indian data protection frameworks.",
        metricOrImpact: "Continuous cloud streaming demands 2–4 Mbps per camera channel",
      },
      {
        id: "siloed-sites",
        title: "Fragmented Multi-Site Surveillance",
        description:
          "Branch facilities, manufacturing plants, and regional offices operate isolated DVRs without centralized health tracking or unified incident visibility.",
        metricOrImpact: "Zero consolidated operational visibility across distributed campuses",
      },
    ] as PainPoint[],
  },

  solution: {
    eyebrow: "THE RESURGENIX ARCHITECTURE",
    heading: "Building the brain of the eyes",
    supportingLine: "Dekhe Bhi, Samjhe Bhi.",
    description:
      "Resurgenix deploys an intelligent vision software layer on local edge servers or centralized on-premise compute. By ingesting standard RTSP video feeds from your existing CCTV cameras, our computer vision models detect and classify critical operational events in real time.",
    transformationSteps: [
      {
        step: "01",
        name: "Existing CCTV",
        description: "Compatible IP cameras, NVRs, and RTSP streams",
      },
      {
        step: "02",
        name: "AI Vision Layer",
        description: "Edge inference appliances or on-prem servers",
      },
      {
        step: "03",
        name: "Real-Time Detection",
        description: "Spatial object, person, and boundary classification",
      },
      {
        step: "04",
        name: "Spatial Understanding",
        description: "Context evaluation against pre-configured rules",
      },
      {
        step: "05",
        name: "Instant Alerts",
        description: "Sub-second notifications via dashboard and webhooks",
      },
      {
        step: "06",
        name: "Actionable Intelligence",
        description: "Auditable incident records and operational logs",
      },
    ],
  },

  capabilities: {
    eyebrow: "MODULAR AI PLATFORM",
    heading: "Core platform capabilities",
    lead: "Activate specific computer vision capabilities on your existing streams. Evaluate in a controlled pilot before scaling across facilities.",
    items: [
      {
        title: "AI Video Analytics",
        slug: "ai-video-analytics",
        whatItDoes:
          "Classifies people, vehicles, and objects across multiple simultaneous RTSP camera channels with spatial bounding overlays.",
        whyItMatters:
          "Transforms passive recording feeds into active monitoring streams that automatically highlight noteworthy visual anomalies.",
        status: "pilot",
        badgeText: "Pilot Available",
      },
      {
        title: "Restricted Zone & Intrusion Detection",
        slug: "restricted-zone-unauthorized-entry-detection",
        whatItDoes:
          "Monitors virtual spatial boundaries and triggers sub-second alerts when unauthorized personnel or vehicles cross defined lines.",
        whyItMatters:
          "Prevents perimeter breaches, unauthorized server room entries, and machinery zone intrusions before physical damage occurs.",
        status: "pilot",
        badgeText: "Pilot Available",
      },
      {
        title: "AI Attendance & Workforce Intelligence",
        slug: "ai-attendance-workforce-intelligence",
        whatItDoes:
          "Provides contactless workforce attendance verification and zone occupancy tracking using optical verification workflows.",
        whyItMatters:
          "Eliminates biometric smudge errors in industrial environments and maintains auditable, consent-based time-office logs.",
        status: "pilot",
        badgeText: "Pilot Available",
      },
      {
        title: "ANPR & Vehicle Intelligence",
        slug: "anpr-vehicle-intelligence",
        whatItDoes:
          "Recognizes vehicle number plates, identifies vehicle types, and logs entry and exit timestamps at access gates.",
        whyItMatters:
          "Automates gate turnaround logging, restricts unauthorized vehicles, and flags unrecognized delivery trucks at logistics hubs.",
        status: "in-development",
        badgeText: "In Development",
      },
      {
        title: "Centralized Video Intelligence",
        slug: "centralized-video-intelligence",
        whatItDoes:
          "Consolidates stream health diagnostics, camera online/offline statuses, and multi-facility event logs into a unified dashboard.",
        whyItMatters:
          "Gives regional security operations centers total visibility across distributed branches without manual site checks.",
        status: "in-development",
        badgeText: "In Development",
      },
      {
        title: "Enterprise Security Monitoring",
        slug: "enterprise-security",
        whatItDoes:
          "Delivers end-to-end incident verification workflows, operator audit trails, and role-based access control for corporate teams.",
        whyItMatters:
          "Ensures compliance with internal governance standards and creates structured evidentiary records for enterprise audits.",
        status: "in-development",
        badgeText: "In Development",
      },
    ] as CapabilitySummary[],
  },

  howItWorks: {
    eyebrow: "DEPLOYMENT LIFECYCLE",
    heading: "From existing streams to live intelligence in five steps",
    lead: "A disciplined engineering workflow designed to validate camera suitability before any operational commitment.",
    steps: [
      {
        step: "01",
        name: "Connect",
        action: "Connect Existing Streams",
        detail:
          "Ingest standard RTSP or ONVIF video feeds from your compatible IP cameras and NVRs without rewiring or replacing optical equipment.",
      },
      {
        step: "02",
        name: "Configure",
        action: "Define Rules & Zones",
        detail:
          "Draw virtual perimeter boundaries, mark restricted corridors, set operational hours, and specify authorized personnel parameters.",
      },
      {
        step: "03",
        name: "Detect",
        action: "Local Edge Inference",
        detail:
          "Resurgenix computer vision models process video frames locally on edge hardware, filtering environmental noise and classifying targets.",
      },
      {
        step: "04",
        name: "Alert",
        action: "Sub-Second Dispatch",
        detail:
          "When a rule breach occurs, the system dispatches instant alerts with snapshot evidence to the security console and designated personnel.",
      },
      {
        step: "05",
        name: "Review",
        action: "Operational Audit & Action",
        detail:
          "Security teams verify the event snapshot, log the resolution status, and maintain immutable audit records for compliance.",
      },
    ],
  },

  useCases: {
    eyebrow: "OPERATIONAL SCENARIOS",
    heading: "Real-world incident detection in action",
    lead: "Concrete scenarios where automated computer vision prevents security oversights across enterprise facilities.",
    items: [
      {
        id: "restricted-after-hours",
        title: "After-Hours Restricted Corridor Entry",
        category: "Corporate & BFSI",
        scenario:
          "An individual enters an executive floor or core data center corridor at 2:15 AM outside authorized operating shifts.",
        detection:
          "Spatial boundary tripwire triggers instantly when person bounding box intersects the virtual restricted zone.",
        outcome:
          "Security console sounds visual and audio alert with camera snapshot. Guard dispatches within 30 seconds.",
      },
      {
        id: "workforce-attendance",
        title: "Industrial Shift Attendance Verification",
        category: "Manufacturing",
        scenario:
          "Contractor and permanent workforce enter the plant through designated turnstile lanes during morning shift change.",
        detection:
          "Optical camera feed registers authorized personnel entry smoothly without physical touch contact or fingerprint smudges.",
        outcome:
          "Shift roster updates automatically in local database. Time-office eliminates manual attendance discrepancy disputes.",
      },
      {
        id: "gate-turnaround",
        title: "Unregistered Vehicle at Logistics Gate",
        category: "Warehousing",
        scenario:
          "A commercial transport truck approaches the factory loading dock without a prior gate pass entry in the system.",
        detection:
          "ANPR module reads number plate characters and checks against authorized delivery schedule.",
        outcome:
          "Gate boom barrier remains closed; security checkpoint receives immediate alert with vehicle classification snapshot.",
      },
      {
        id: "yard-night-movement",
        title: "Night-Time Movement in Raw Material Yard",
        category: "Heavy Industry",
        scenario:
          "Movement is detected near valuable scrap metal or copper stockpiles in a low-light peripheral industrial yard.",
        detection:
          "Vision model distinguishes human shape from stray animals or windblown foliage, rejecting false environmental alarms.",
        outcome:
          "Centralized monitoring station receives verified human intrusion alert with zoomed target tracking box.",
      },
      {
        id: "perimeter-approach",
        title: "Virtual Fence Perimeter Approach",
        category: "Critical Infrastructure",
        scenario:
          "An unauthorized individual approaches an exterior boundary wall where physical patrolling occurs only hourly.",
        detection:
          "Virtual tripwire drawn 3 meters inside the boundary wall registers approaching trajectory vector.",
        outcome:
          "Proactive alert dispatched before physical climbing or wall breach occurs, enabling preemptive intervention.",
      },
      {
        id: "stream-tamper",
        title: "Camera Lens Tamper & Offline Alert",
        category: "Enterprise Security",
        scenario:
          "A critical hallway camera is covered, misdirected, or disconnected from the local network switch.",
        detection:
          "Health diagnostic module detects sudden frame occlusion, lens blocking, or RTSP stream timeout.",
        outcome:
          "SOC console flags high-priority hardware diagnostic ticket immediately, preventing intentional blind spots.",
      },
    ] as UseCase[],
  },

  industries: {
    eyebrow: "SECTOR DEPLOYMENTS",
    heading: "Tailored to high-accountability environments",
    lead: "Engineered to solve distinct spatial monitoring challenges across private enterprise and public operations.",
    items: [
      {
        name: "Corporate & Enterprise",
        slug: "corporate-enterprise",
        description:
          "Campus perimeter protection, server room access control, and executive floor intrusion monitoring.",
      },
      {
        name: "Manufacturing & Industrial",
        slug: "manufacturing",
        description:
          "Hazardous machinery perimeter alerts, PPE compliance verification, and shift attendance tracking.",
      },
      {
        name: "Logistics & Warehousing",
        slug: "logistics-warehousing",
        description:
          "Loading dock vehicle turnaround, inventory cage protection, and gate ANPR logging.",
      },
      {
        name: "Healthcare & Hospitals",
        slug: "healthcare",
        description:
          "ICU restricted area entry warnings, newborn ward protection, and emergency bay access monitoring.",
      },
      {
        name: "Retail Chains & Commercial Hubs",
        slug: "retail",
        description:
          "After-hours stockroom alerts, multi-branch stream health oversight, and store access logs.",
      },
      {
        name: "Hospitality & Hotels",
        slug: "hospitality",
        description:
          "Guest floor security, service corridor access control, and baggage intake monitoring.",
      },
    ],
    institutionalCrossLinks: [
      {
        title: "Smart City Video Intelligence",
        href: "/solutions/smart-city-video-intelligence",
        tag: "In Development",
        note: "Explore our municipal crowd flow and urban intersection analytics architecture.",
      },
      {
        title: "Defence & Border Surveillance",
        href: "/solutions/defence-security",
        tag: "Roadmap",
        note: "Learn about air-gapped on-premise perimeter intelligence modules.",
      },
    ],
  },

  whyResurgenix: {
    eyebrow: "ARCHITECTURAL ADVANTAGES",
    heading: "Engineered for real-world enterprise infrastructure",
    lead: "A principled alternative to proprietary hardware lock-in and prohibitive foreign licensing models.",
    differentiators: [
      {
        title: "Works with Your Existing CCTV",
        summary: "Zero camera replacements or proprietary hardware lock-in.",
        technicalReality:
          "Ingests standard RTSP and ONVIF streams from Hikvision, Dahua, CP Plus, Axis, Hanwha, and other standard IP camera brands.",
      },
      {
        title: "Local Edge Processing for Data Privacy",
        summary: "Video feeds stay inside your corporate perimeter.",
        technicalReality:
          "Inference executes on local edge servers or on-premise appliances. Raw video never streams over public clouds unless explicitly requested.",
      },
      {
        title: "Sub-Second Alerting vs. Hours of Rewind",
        summary: "Active threat interception instead of historical forensics.",
        technicalReality:
          "Computer vision models classify spatial events in milliseconds, pushing instantaneous alerts with snapshot evidence to security workstations.",
      },
      {
        title: "Modular Capability Enablement",
        summary: "Deploy only the analytics modules your site requires.",
        technicalReality:
          "Activate restricted zone detection on perimeter cameras and workforce attendance at entry gates without purchasing monolithic VMS suites.",
      },
      {
        title: "Controlled, Low-Risk Pilot Evaluation",
        summary: "Prove detection accuracy on 3 to 5 cameras before committing.",
        technicalReality:
          "Structured proof-of-concept program validates stream compatibility, false-alert thresholds, and lighting resilience on your actual site.",
      },
      {
        title: "Engineered in India for Indian Infrastructure",
        summary: "Resilient to challenging lighting, dust, and variable bandwidth.",
        technicalReality:
          "Developed in Kolkata, West Bengal with direct access to local engineering support, timely firmware updates, and regulatory DPDP Act alignment.",
      },
    ] as Differentiator[],
  },

  pilotProof: {
    eyebrow: "LOW-RISK EVALUATION",
    heading: "Start with a pilot on your existing cameras",
    lead: "We believe enterprise software should prove its value on your actual camera feeds before you make any capital commitment.",
    steps: [
      {
        phase: "Step 1",
        title: "Technical Discovery Call",
        detail:
          "Review camera make/model inventory, network topology, and specific operational pain points.",
      },
      {
        phase: "Step 2",
        title: "Stream Compatibility Assessment",
        detail:
          "Verify RTSP stream stability, frame rate, resolution, and lens angle suitability across test locations.",
      },
      {
        phase: "Step 3",
        title: "Controlled Pilot Deployment",
        detail:
          "Connect 3 to 5 priority camera feeds to a test instance. Configure spatial zones and detection rules.",
      },
      {
        phase: "Step 4",
        title: "Operational Review & Metrics",
        detail:
          "Evaluate detection accuracy, false positive rates, and alert responsiveness with your security team.",
      },
      {
        phase: "Step 5",
        title: "Enterprise Rollout Plan",
        detail:
          "Scale across additional camera channels, multi-site branches, and integrated operational dashboards.",
      },
    ],
    truthNotice:
      "Structured pilot programs evaluate 3 to 5 high-priority camera channels. Verification parameters are documented transparently during the technical assessment.",
  },

  faq: {
    eyebrow: "CLEAR ANSWERS",
    heading: "Frequently asked questions",
    lead: "Direct answers to key technical, compatibility, and procurement questions.",
    items: [
      {
        question: "Do we need to replace our existing CCTV cameras to use Resurgenix?",
        answer:
          "No. Resurgenix is engineered specifically to connect to your existing CCTV cameras. As long as your IP cameras or NVR/DVR units support standard RTSP (Real-Time Streaming Protocol) or ONVIF feeds, our software layer can ingest and analyze the video without replacing any hardware or running new cables.",
      },
      {
        question: "Which camera brands and models are compatible?",
        answer:
          "Resurgenix is hardware-agnostic and compatible with major commercial camera brands including Hikvision, CP Plus, Dahua, Axis, Hanwha Vision, Honeywell, and Uniview that support standard RTSP streaming. We validate stream resolution, frame rate, and compression during the initial technical assessment.",
      },
      {
        question: "How and where are real-time alerts delivered?",
        answer:
          "Alerts are delivered within seconds to the centralized Resurgenix security dashboard, complete with a visual snapshot of the detected target, timestamp, and camera location. Alerts can also be configured to dispatch via webhook, email, or instant messaging integrations to designated on-duty officers.",
      },
      {
        question: "Where does video processing take place — on-premise or cloud?",
        answer:
          "By default, Resurgenix executes video inference locally on edge computing hardware or an on-premise server located within your facility's local network. Raw video footage never leaves your premises, ensuring compliance with corporate data security standards and eliminating heavy internet bandwidth requirements.",
      },
      {
        question: "How does Resurgenix handle employee privacy and DPDP Act compliance?",
        answer:
          "We follow a strict privacy-by-design architecture aligned with India's Digital Personal Data Protection (DPDP) Act 2023. Spatial monitoring (restricted zone detection, vehicle counting) operates on object bounding boxes without personal profiling. Workforce attendance features require explicit corporate enrollment and consent-based optical verification workflows.",
      },
      {
        question: "How does a controlled pilot deployment work?",
        answer:
          "Our pilot program allows enterprise security teams to evaluate Resurgenix on 3 to 5 critical camera channels with zero disruption to daily operations. We assess camera angles, deploy the software on test edge hardware, configure your custom detection zones, and measure detection accuracy and alert speed over a structured evaluation period.",
      },
      {
        question: "What does Resurgenix cost?",
        answer:
          "Resurgenix is priced on a modular per-channel software licensing model based on the number of active camera streams and specific AI modules enabled. Contact our team for an enterprise quotation tailored to your camera count and facility requirements.",
      },
    ] as FaqItem[],
  },

  finalCta: {
    eyebrow: "TAKE THE FIRST STEP",
    heading: "Ready to see what this could look like in your organization?",
    lead: "Schedule a 30-minute technical consultation with our engineering team. We will review your existing camera layout and identify high-value pilot detection zones.",
    primaryCta: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "Request a Pilot Program",
      href: "/request-pilot",
    },
    contactNote: `Or speak directly with our team in Kolkata: ${siteConfig.contact.displayPhone} | ${siteConfig.contact.email}`,
  },
};
