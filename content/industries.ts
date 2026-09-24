import { IndustryEntry } from "./types";

export const industries: IndustryEntry[] = [
  // 1. Corporate & Enterprise
  {
    slug: "corporate-enterprise",
    title: "Corporate & Enterprise Campuses",
    seoTitle: "AI CCTV for Corporate Offices & Campuses | Resurgenix",
    metaDescription:
      "Modernize corporate office surveillance. Automated unauthorized entry alerts, executive floor access monitoring, and contactless attendance on existing cameras.",
    h1: "AI Video Intelligence for Corporate Offices & Commercial Campuses",
    primaryKeyword: "AI CCTV for corporate offices",
    secondaryKeywords: [
      "enterprise security AI video analytics",
      "commercial campus surveillance",
      "multi-site office security CCTV",
      "contactless office attendance camera",
    ],
    shortAnswer:
      "Resurgenix transforms corporate office CCTV into an active security and operational system. By connecting to existing facility cameras, the platform provides automated alerts for unauthorized entry to server rooms and executive floors, contactless employee attendance logging, and centralized multi-branch visibility without replacing existing surveillance hardware.",
    problem:
      "Corporate security teams manage hundreds of cameras across multi-story buildings and regional offices, struggling to spot unauthorized visitors, tailgating, or empty floor security breaches in real time.",
    capabilities: [
      "Executive floor and server room unauthorized entry detection",
      "Consent-based contactless workforce attendance verification",
      "After-hours movement detection and perimeter line-crossing",
      "Unified multi-branch surveillance monitoring console",
    ],
    howItWorks: [
      "Connect corporate floor IP cameras to localized edge nodes via existing LAN",
      "Configure virtual boundary zones around sensitive IT rooms and executive suites",
      "Run real-time inference to detect zone breaches, sending instant alerts to reception/SOC",
      "Aggregate multi-branch incident telemetry onto a centralized management screen",
    ],
    requirements: [
      "Standard corporate IP surveillance cameras with RTSP support",
      "Local corporate LAN connectivity between cameras and on-premise compute",
      "Corporate policy alignment for opt-in workforce verification",
    ],
    useCases: [
      "Data center and critical server room access breach protection",
      "Lobby and turnstile visitor flow and tailgating detection",
      "Multi-city branch office centralized security supervision",
    ],
    limitations: [
      "Requires adequate ceiling or wall camera mounting angles covering designated doorways and corridors.",
    ],
    faqs: [
      {
        question: "Can our existing corporate IP cameras support this AI software?",
        answer:
          "Yes. Any standard IP camera delivering an RTSP stream (including Hikvision, Dahua, CP Plus, Axis, and Bosch) can connect to the Resurgenix intelligence layer.",
      },
      {
        question: "How is employee privacy protected during workforce monitoring?",
        answer:
          "Our system operates strictly on an opt-in, consent-first basis for registered personnel, storing encrypted mathematical vectors rather than raw video feeds, in alignment with India's DPDP Act.",
      },
    ],
    relatedSlugs: [
      "solutions/enterprise-security",
      "solutions/ai-attendance-workforce-intelligence",
      "solutions/restricted-zone-unauthorized-entry-detection",
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Explore Solutions",
      href: "/solutions",
    },
    status: "in-development",
  },

  // 2. Manufacturing & Industrial
  {
    slug: "manufacturing",
    title: "Manufacturing & Industrial Facilities",
    seoTitle: "AI CCTV for Manufacturing & Industrial Plants | Resurgenix",
    metaDescription:
      "Industrial video intelligence for factory floors and perimeters. Restricted machinery zones, worker attendance, and boundary intrusion alerts on existing CCTV.",
    h1: "AI Video Intelligence for Manufacturing & Industrial Facilities",
    primaryKeyword: "AI CCTV for manufacturing",
    secondaryKeywords: [
      "AI security for industrial facilities",
      "factory worker safety CCTV",
      "industrial perimeter protection",
      "restricted area detection factory",
    ],
    shortAnswer:
      "Resurgenix brings automated intelligence to factory and industrial CCTV networks. By integrating with existing plant cameras, the system instantly detects workers entering hazardous machinery zones, alerts on perimeter boundary breaches, and automates shift attendance, dramatically reducing workplace accidents and asset pilferage without infrastructure disruption.",
    problem:
      "Heavy industrial plants have vast physical perimeters, dangerous machinery bays, and multi-shift workforces where safety supervisors cannot visually track every blind spot simultaneously.",
    capabilities: [
      "Restricted zone alerts around active machinery and high-voltage zones",
      "Perimeter fence intrusion detection with animal/weather noise filtering",
      "High-throughput optical shift attendance tracking at plant gates",
      "Loading bay and commercial truck movement logging",
    ],
    howItWorks: [
      "Tether existing industrial plant cameras to on-premise ruggedized edge servers",
      "Map hazard boundaries, conveyor tripwires, and perimeter fence lines in software",
      "Process high-frame-rate computer vision models locally on plant edge hardware",
      "Trigger immediate hooter relays, control room alerts, or mobile supervisor notifications",
    ],
    requirements: [
      "Existing IP or NVR-connected cameras covering plant perimeters and key zones",
      "Local plant edge server (operates 100% offline without internet dependencies)",
      "Dust and moisture protected server housing for factory environments",
    ],
    useCases: [
      "High-risk steel, cement, chemical, and automotive production floors",
      "Raw material yard perimeter intrusion and pilferage prevention",
      "Shift-change biometric turnstile bottleneck elimination",
    ],
    limitations: [
      "Heavy industrial dust on camera lenses requires routine maintenance to maintain optical clarity.",
    ],
    faqs: [
      {
        question: "Can the system operate if our plant internet connection drops?",
        answer:
          "Yes. Resurgenix deploys an edge-first architecture where all video processing and safety alerts run locally on-premise without requiring outside internet.",
      },
      {
        question: "Can we test this on 3 to 5 critical plant cameras first?",
        answer:
          "Yes. We offer a structured Pilot Program specifically designed for plant heads to evaluate detection accuracy on high-risk factory zones before wider rollout.",
      },
    ],
    relatedSlugs: [
      "solutions/restricted-zone-unauthorized-entry-detection",
      "solutions/ai-video-analytics",
      "solutions/ai-attendance-workforce-intelligence",
    ],
    ctaPrimary: {
      label: "Request a Pilot",
      href: "/request-pilot",
    },
    ctaSecondary: {
      label: "See How It Works",
      href: "/how-it-works",
    },
    status: "pilot",
  },

  // 3. Government & Public Safety
  {
    slug: "government-public-safety",
    title: "Government & Public Safety",
    seoTitle: "Government & Public Safety CCTV Video Analytics | Resurgenix",
    metaDescription:
      "Intelligent video surveillance analytics for municipal authorities, police departments, and public infrastructure. Real-time incident detection and ICCC integration.",
    h1: "Intelligent Video Analytics for Government & Public Safety",
    primaryKeyword: "government CCTV video analytics",
    secondaryKeywords: [
      "public safety video surveillance",
      "ICCC analytics layer",
      "municipal command center AI",
      "Make in India CCTV software",
    ],
    shortAnswer:
      "Resurgenix delivers sovereign, Make-in-India video intelligence for public infrastructure, government facilities, and municipal command centers. It enhances public safety operations by automatically detecting overcrowding, traffic congestion, perimeter incursions, and vehicle license plates, feeding structured data into Integrated Command and Control Centres (ICCC).",
    problem:
      "Public safety agencies and municipal command centers operate massive video walls with thousands of street cameras, overwhelming human operators and delaying incident response times.",
    capabilities: [
      "Public area crowd density estimation and congestion alerts",
      "Vehicle plate recognition and traffic violation event detection",
      "Government building perimeter intrusion and unauthorized access monitoring",
      "Open API integration for municipal ICCC and emergency dispatch platforms",
    ],
    howItWorks: [
      "Ingest city or institutional surveillance feeds via standard ONVIF/RTSP protocols",
      "Process video streams on domestic on-premise GPU servers ensuring data sovereignty",
      "Identify abnormal events and traffic incidents using deep learning spatial models",
      "Publish structured incident alerts to municipal command dashboards via secure APIs",
    ],
    requirements: [
      "Municipal or institutional IP surveillance network with standard stream access",
      "Dedicated server infrastructure compliant with government cybersecurity guidelines",
      "Institutional alignment with public procurement norms",
    ],
    useCases: [
      "Municipal civic centers, administrative complexes, and public plazas",
      "Transit intersections, bus terminals, and public railway approaches",
      "Government ministry complexes and institutional administrative zones",
    ],
    limitations: [
      "Public mass surveillance face identification is strictly excluded; system focuses on spatial safety, vehicle tracking, and crowd density.",
    ],
    faqs: [
      {
        question: "Does Resurgenix meet Make in India (MII) public procurement criteria?",
        answer:
          "Yes. Resurgenix is an indigenous Indian technology company developed in India, qualifying under domestic public procurement preference frameworks.",
      },
      {
        question: "How does the system integrate with existing smart city command software?",
        answer:
          "We provide standardized REST APIs, webhooks, and MQTT feeds to stream real-time alert metadata and event snapshots directly into third-party ICCC software.",
      },
    ],
    relatedSlugs: [
      "solutions/smart-city-video-intelligence",
      "solutions/anpr-vehicle-intelligence",
      "security-and-privacy",
    ],
    ctaPrimary: {
      label: "Talk to Our Team",
      href: "/contact",
    },
    ctaSecondary: {
      label: "View Smart City Solution",
      href: "/solutions/smart-city-video-intelligence",
    },
    status: "in-development",
  },

  // 4. Logistics & Warehousing
  {
    slug: "logistics-warehousing",
    title: "Logistics & Warehousing",
    seoTitle: "Warehouse CCTV Analytics & Yard Video Intelligence | Resurgenix",
    metaDescription:
      "Automate warehouse and logistics yard surveillance. ANPR truck logging, loading bay occupancy, restricted inventory zones, and perimeter security on existing CCTV.",
    h1: "AI Video Intelligence for Logistics Yards & Warehouses",
    primaryKeyword: "warehouse CCTV video analytics",
    secondaryKeywords: [
      "logistics yard surveillance",
      "loading dock monitoring CCTV",
      "vehicle movement tracking warehouse",
      "inventory protection video analytics",
    ],
    shortAnswer:
      "Resurgenix streamlines logistics yards, fulfillment hubs, and warehouses through automated camera intelligence. Connecting directly to existing facility cameras, the system automates truck number plate logging, monitors loading dock turnaround times, and protects high-value inventory zones from unauthorized entry without requiring new sensor hardware.",
    problem:
      "Expansive logistics parks and distribution centers struggle with loading bay bottlenecks, unverified vehicle dwell times, and cargo pilferage across unmonitored blind spots.",
    capabilities: [
      "Automated license plate recognition (ANPR) at entry and exit gates",
      "Loading dock bay occupancy and turnaround duration monitoring",
      "High-value bonded inventory restricted zone intrusion alerting",
      "After-hours perimeter fence intrusion detection across large yards",
    ],
    howItWorks: [
      "Interface yard gate and warehouse cameras with on-site edge analytics server",
      "Recognize incoming trucks via OCR models, logging timestamps and plate numbers",
      "Track loading dock activity and flag prolonged vehicle idle times",
      "Send immediate visual alerts if personnel enter high-value storage zones unescorted",
    ],
    requirements: [
      "Standard IP cameras covering gate entry lanes, loading docks, and aisles",
      "On-premise edge computing appliance or local logistics hub server",
      "Local network connectivity across warehouse buildings",
    ],
    useCases: [
      "E-commerce fulfillment centers and parcel sorting facilities",
      "Third-party logistics (3PL) multi-client warehousing yards",
      "Cold storage facilities and bonded pharmaceutical warehouses",
    ],
    limitations: [
      "High-speed vehicle approaches must be routed through standard gate chicanes for optimal plate capture.",
    ],
    faqs: [
      {
        question: "Can ANPR integrate with our Warehouse Management System (WMS)?",
        answer:
          "Yes. Vehicle timestamps, plate numbers, and dock assignment data can be pushed via API webhooks directly into your WMS or ERP platform.",
      },
      {
        question: "How does it protect high-value inventory areas?",
        answer:
          "You can draw virtual polygon boundaries around secured cages. Any unauthorized entry immediately triggers a visual snapshot alert to the yard supervisor.",
      },
    ],
    relatedSlugs: [
      "solutions/anpr-vehicle-intelligence",
      "solutions/restricted-zone-unauthorized-entry-detection",
      "solutions/ai-video-analytics",
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Explore ANPR Capabilities",
      href: "/solutions/anpr-vehicle-intelligence",
    },
    status: "in-development",
  },

  // 5. Healthcare & Hospitals
  {
    slug: "healthcare",
    title: "Healthcare & Hospitals",
    seoTitle: "Hospital CCTV Analytics & Patient Safety Intelligence | Resurgenix",
    metaDescription:
      "Video intelligence for hospitals and healthcare campuses. ICU restricted area protection, ambulance bay clearance, and patient safety alerts on existing CCTV.",
    h1: "AI Video Intelligence for Hospitals & Healthcare Facilities",
    primaryKeyword: "hospital CCTV video analytics",
    secondaryKeywords: [
      "hospital restricted area monitoring",
      "patient safety CCTV intelligence",
      "healthcare facility surveillance",
      "ambulance bay CCTV monitoring",
    ],
    shortAnswer:
      "Resurgenix enhances healthcare facility security by adding an automated intelligence layer to hospital CCTV networks. The system protects sterile ICUs and newborn wards from unauthorized visitors, ensures emergency ambulance bays remain unobstructed, and alerts facility staff to unattended restricted areas while strictly preserving patient privacy.",
    problem:
      "Hospitals must balance open public access with strict protection of critical clinical suites, managing overcrowded corridors, visitor surges, and sensitive drug storage areas.",
    capabilities: [
      "Restricted zone alerts for sterile surgical suites, ICUs, and pharmacies",
      "Emergency ambulance bay blockage and unauthorized parking detection",
      "Corridor overcrowding and after-hours loitering detection",
      "Privacy-by-design architecture ensuring clinical zones remain unrecorded",
    ],
    howItWorks: [
      "Connect corridor, entryway, and bay cameras to secure hospital edge appliances",
      "Designate boundary zones around ICU entryways and emergency access lanes",
      "Detect unauthorized visitor entries and lane obstructions in real time",
      "Alert hospital facility controllers and security teams instantly",
    ],
    requirements: [
      "Existing IP camera network covering common corridors and facility perimeters",
      "On-premise edge server keeping all video strictly within the hospital network",
      "Hospital administrative approval for security zone mapping",
    ],
    useCases: [
      "Sterile operating room corridors and neonatal intensive care unit (NICU) access",
      "Central pharmacy and narcotic medication storage vault protection",
      "Emergency department ambulance triage driveway monitoring",
    ],
    limitations: [
      "System is strictly for security and common areas; patient treatment rooms and diagnostic examination suites are never monitored.",
    ],
    faqs: [
      {
        question: "How does this platform address strict hospital patient privacy rules?",
        answer:
          "Resurgenix is deployed exclusively in public corridors, entrances, and restricted storage doors. It operates on localized on-premise hardware with zero cloud transmission.",
      },
      {
        question: "Can it alert when a private car blocks the ambulance bay?",
        answer:
          "Yes. Virtual zones mapped over ambulance parking bays trigger an alert if an unauthorized vehicle remains stationary for more than a configured duration.",
      },
    ],
    relatedSlugs: [
      "solutions/restricted-zone-unauthorized-entry-detection",
      "solutions/enterprise-security",
      "security-and-privacy",
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Privacy Overview",
      href: "/security-and-privacy",
    },
    status: "in-development",
  },

  // 6. Retail & Commercial
  {
    slug: "retail",
    title: "Retail Chains & Commercial Spaces",
    seoTitle: "Retail CCTV Video Analytics & Footfall Intelligence | Resurgenix",
    metaDescription:
      "Transform retail CCTV into actionable security and operational intelligence. Customer footfall counting, stockroom entry alerts, and occupancy monitoring.",
    h1: "AI Video Intelligence for Retail Chains & Commercial Spaces",
    primaryKeyword: "retail CCTV video analytics",
    secondaryKeywords: [
      "retail footfall counter camera",
      "store occupancy monitoring",
      "retail stockroom security CCTV",
      "commercial loss prevention video",
    ],
    shortAnswer:
      "Resurgenix transforms standard retail CCTV cameras into double-duty security and operational intelligence assets. The platform monitors store occupancy and customer footfall trends while simultaneously protecting back-office cash rooms and stockrooms from unauthorized access, providing retail managers with actionable store metrics without extra hardware.",
    problem:
      "Retailers operate cameras purely for passive post-theft recording, failing to capture customer footfall data or prevent unauthorized stockroom intrusions in real time.",
    capabilities: [
      "Automated customer footfall counting at store entrances",
      "Restricted stockroom and cash office unauthorized access alerting",
      "Store occupancy and queue density monitoring",
      "After-hours movement detection in locked retail premises",
    ],
    howItWorks: [
      "Ingest overhead entrance and stockroom camera feeds into a compact store edge node",
      "Count crossing directions to calculate live footfall metrics without storing personal data",
      "Trigger instant supervisor alerts if an unauthorized person breaches stockroom zones",
      "Sync daily summary statistics to a centralized multi-store executive dashboard",
    ],
    requirements: [
      "Standard IP ceiling cameras overlooking store entrances and cash/stockroom doors",
      "Compact on-site edge appliance or local store workstation",
      "Broadband uplink for lightweight daily metadata reporting",
    ],
    useCases: [
      "Apparel and electronics retail stores and supermarket chains",
      "Multi-brand shopping mall common corridors and entry vestibules",
      "Luxury showroom stockroom and high-value display protection",
    ],
    limitations: [
      "Highly crowded group entrances require top-down camera positioning for precise individual footfall counting.",
    ],
    faqs: [
      {
        question: "Does customer footfall counting require capturing customer faces?",
        answer:
          "No. Footfall counting uses anonymous spatial person detection and trajectory tracking, without identifying, storing, or processing customer facial identities.",
      },
      {
        question: "Can multi-store retail brands view all locations on one screen?",
        answer:
          "Yes. Our centralized dashboard consolidates footfall metrics and security alerts from across all regional retail stores into a single web view.",
      },
    ],
    relatedSlugs: [
      "solutions/ai-video-analytics",
      "solutions/anpr-vehicle-intelligence",
      "solutions/centralized-video-intelligence",
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Explore Solutions",
      href: "/solutions",
    },
    status: "in-development",
  },

  // 7. Hospitality & Hotels
  {
    slug: "hospitality",
    title: "Hospitality & Hotels",
    seoTitle: "Hotel CCTV Video Analytics & Guest Security | Resurgenix",
    metaDescription:
      "Intelligent video surveillance for hotels and resorts. Protect guest floors, service corridors, and back-of-house facilities on existing CCTV infrastructure.",
    h1: "AI Video Intelligence for Hotels & Hospitality Properties",
    primaryKeyword: "hotel CCTV security analytics",
    secondaryKeywords: [
      "hospitality video surveillance",
      "guest floor security CCTV",
      "hotel perimeter monitoring",
      "back of house restricted area alert",
    ],
    shortAnswer:
      "Resurgenix brings discrete, proactive security to luxury hotels, resorts, and hospitality properties. Operating seamlessly over existing camera streams, it monitors perimeter boundaries, safeguards back-of-house kitchen and asset storage areas, and detects unauthorized loitering on guest floors without intrusive visible hardware or compromising guest privacy.",
    problem:
      "Hotels must deliver exceptional guest hospitality while quietly maintaining strict perimeter security and preventing unauthorized access to private guest floors and service zones.",
    capabilities: [
      "Guest floor elevator lobby and service stairwell unauthorized access monitoring",
      "Back-of-house kitchen, liquor store, and linen vault boundary alerts",
      "Hotel perimeter, pool deck, and outdoor recreational area night monitoring",
      "Driveway and valet lane vehicle arrival and dwell time tracking",
    ],
    howItWorks: [
      "Connect hotel hallway, service corridor, and perimeter cameras to local server",
      "Configure discrete alert zones around service areas and after-hours outdoor pools",
      "Notify security duty officers quietly on mobile or SOC consoles when an anomaly occurs",
      "Maintain timestamped visual audit logs for prompt guest dispute resolution",
    ],
    requirements: [
      "Existing IP camera network covering common public and service corridors",
      "Local hotel security server running on-premise inference software",
      "Adherence to hotel brand guest privacy standards",
    ],
    useCases: [
      "Luxury business hotels and boutique metropolitan properties",
      "Sprawling resort perimeters and private beach access zones",
      "Convention center banquet halls and exhibition loading docks",
    ],
    limitations: [
      "Surveillance is restricted entirely to public corridors, grounds, and service areas; guest rooms and private suites are strictly excluded.",
    ],
    faqs: [
      {
        question: "How does the system ensure hotel guest privacy is respected?",
        answer:
          "Cameras are deployed strictly in public circulation corridors and back-of-house zones. No facial databases of guests are built; the system detects spatial movement and zone breaches anonymously.",
      },
      {
        question: "Can it alert our staff when vehicles enter the hotel portico?",
        answer:
          "Yes. Portico arrival cameras can detect approaching vehicles and trigger valet or front-desk notifications for VIP arrivals.",
      },
    ],
    relatedSlugs: [
      "solutions/restricted-zone-unauthorized-entry-detection",
      "solutions/enterprise-security",
      "solutions/anpr-vehicle-intelligence",
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Explore Solutions",
      href: "/solutions",
    },
    status: "in-development",
  },
];

export function getIndustryBySlug(slug: string): IndustryEntry | undefined {
  return industries.find((i) => i.slug === slug);
}

export default industries;
