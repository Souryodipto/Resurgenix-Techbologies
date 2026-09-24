import { SolutionEntry } from "./types";

export const solutions: SolutionEntry[] = [
  // =========================================================================
  // 1. AI Video Analytics (Platform Pillar)
  // =========================================================================
  {
    slug: "ai-video-analytics",
    title: "AI Video Analytics",
    seoTitle: "AI CCTV Video Analytics Platform | Resurgenix",
    metaDescription:
      "Add real-time AI video analytics to existing CCTV cameras. Detect people, vehicles, and objects with sub-second alerts without replacing camera hardware.",
    h1: "AI Video Analytics for Existing CCTV Infrastructure",
    primaryKeyword: "AI CCTV video analytics",
    secondaryKeywords: [
      "AI video analytics platform",
      "real-time person detection CCTV",
      "multi-camera tracking software",
      "automated object classification",
    ],
    shortAnswer:
      "Resurgenix AI Video Analytics is an intelligence software layer for enterprise and industrial security teams to detect people, vehicles, and abnormal events in real time on existing cameras. It works by ingesting RTSP video streams into edge or on-premise deep learning models. Unlike closed hardware systems, it eliminates complete rip-and-replace equipment replacement.",
    problemTitle: "Manual Screen Scrubbing vs. Active Incident Prevention",
    problem:
      "Most commercial and industrial security operations center (SOC) operators monitor between 16 and 64 camera streams simultaneously. Human attention degrades sharply within 20 minutes of continuous viewing, leading to missed intrusions, tailgating incidents, and unauthorized vehicle entries. When a security event occurs, teams lose hours manually rewinding and scrubbing fragmented NVR channels.",
    problemPoints: [
      "Operator fatigue causes critical perimeter breaches and unauthorized entries to go unnoticed in real time.",
      "Post-event investigations require hours of manual video review across disjointed local recorders.",
      "Upgrading to proprietary AI cameras requires scrapping functioning hardware and re-cabling entire facilities.",
      "Continuous streaming to public cloud analytics creates heavy corporate network bandwidth congestion.",
    ],
    stepFlow: [
      {
        step: "01",
        title: "RTSP Video Ingestion",
        description:
          "Connect to existing standard IP cameras and NVRs via local RTSP/ONVIF streams without touching physical camera mounts.",
      },
      {
        step: "02",
        title: "Edge Computer Vision Inference",
        description:
          "Deploy deep learning models on local GPU hardware to detect, track, and classify persons, vehicles, and objects in milliseconds.",
      },
      {
        step: "03",
        title: "Spatial Rule Evaluation",
        description:
          "Evaluate entity coordinates against user-configured spatial tripwires, intrusion polygons, and operating shift schedules.",
      },
      {
        step: "04",
        title: "Sub-Second Alert Dispatch",
        description:
          "When a violation is confirmed, trigger visual bounding boxes, audio chimes, and instant dashboard notifications with photo evidence.",
      },
      {
        step: "05",
        title: "Structured Event Logging",
        description:
          "Record indexed metadata, timestamps, and camera IDs in an auditable local database for rapid historical retrieval.",
      },
    ],
    capabilities: [
      {
        title: "Person & Vehicle Classification",
        description:
          "Distinguishes between humans, motor vehicles, two-wheelers, and environmental movement to reduce false alerts.",
      },
      {
        title: "Multi-Camera Spatial Tracking",
        description:
          "Tracks detected entities across sequential camera fields of view to preserve directional context.",
      },
      {
        title: "Occupancy & Crowd Density Monitoring",
        description:
          "Estimates human density in defined operational zones and triggers threshold alerts when limits are exceeded.",
      },
      {
        title: "Camera Stream Health Diagnostics",
        description:
          "Monitors video stream connectivity, identifying offline feeds, sudden camera occlusion, and stream freezes.",
      },
    ],
    operatorReceives: [
      {
        item: "Sub-Second Visual Alert",
        detail:
          "Highlighted bounding box overlay on the live security console with an audible chime.",
      },
      {
        item: "High-Resolution Event Snapshot",
        detail:
          "JPEG image capture displaying the target, timestamp, camera location, and rule violation type.",
      },
      {
        item: "10-Second Event Video Clip",
        detail:
          "Automated video snippet capturing 5 seconds before and 5 seconds after the detection trigger.",
      },
      {
        item: "Indexed Audit Log Entry",
        detail:
          "Searchable database record containing timestamp, camera ID, target classification, and operator sign-off.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Camera Types",
        specification: "Standard IP / Network Cameras",
        notes: "Bullet, dome, or PTZ cameras supporting digital video streaming.",
      },
      {
        parameter: "Streaming Protocol",
        specification: "RTSP (H.264 / H.265) / ONVIF Profile S",
        notes: "Direct stream from camera IP or central NVR/DVR sub-stream.",
      },
      {
        parameter: "Resolution & Frame Rate",
        specification: "1080p (1920x1080) @ 15 to 25 FPS recommended",
        notes: "720p supported for basic spatial detection; 15 FPS optimal for edge compute.",
      },
      {
        parameter: "Network Infrastructure",
        specification: "Local Gigabit LAN (2 to 4 Mbps per stream)",
        notes: "Video traffic remains on local subnet; no continuous WAN upload required.",
      },
      {
        parameter: "Compute Environment",
        specification: "Edge Server / Workstation with NVIDIA GPU",
        notes: "Sized based on concurrent active analytical channels (e.g., 8, 16, or 32 streams).",
      },
      {
        parameter: "Event Storage",
        specification: "Local SSD / Network Attached Storage (NAS)",
        notes: "Dedicated storage for snapshot telemetry and short verification clips.",
      },
    ],
    deploymentOptions: [
      {
        model: "Local Edge Server",
        fit: "High security, bandwidth-constrained industrial plants and corporate campuses.",
        details:
          "All video decoding and model inference execute inside the local perimeter. Video streams never touch public networks.",
      },
      {
        model: "Centralized On-Premise",
        fit: "Large multi-building enterprise campuses with high-speed internal fiber networks.",
        details:
          "Camera streams feed into a central server rack in the main data center, consolidating GPU resources.",
      },
      {
        model: "Hybrid Architecture",
        fit: "Multi-branch commercial banks, retail chains, and distributed regional offices.",
        details:
          "Edge compute runs local detection and only dispatches low-bandwidth JSON alert metadata and snapshots to cloud consoles.",
      },
      {
        model: "Cloud Deployment",
        fit: "Sites with high-bandwidth optical fiber connections and centralized cloud mandates.",
        details:
          "Video streams ingest to secure private cloud instances where corporate data residency policies permit.",
      },
    ],
    useCases: [
      {
        title: "Perimeter Line Crossing at Corporate Park",
        scenario:
          "An intruder attempts to climb an exterior campus boundary fence after business hours.",
        detection:
          "Spatial tripwire module identifies a human body vector intersecting the boundary line.",
        outcome:
          "Security console triggers an immediate alarm, and guards intercept the individual within 45 seconds.",
      },
      {
        title: "Unauthorized Vehicle Entry at Logistics Gate",
        scenario:
          "A commercial delivery truck enters a restricted warehousing bay without a registered delivery pass.",
        detection:
          "Vehicle classification model registers truck presence in a designated staff-only loading zone.",
        outcome:
          "Gate supervisor receives instant snapshot alert and halts the vehicle before it enters the warehouse.",
      },
      {
        title: "After-Hours Loitering Outside Banking Server Room",
        scenario:
          "An individual loiters outside a secure IT server room corridor for longer than 3 minutes at night.",
        detection:
          "Loitering analytics module measures stationary target duration inside the defined sensitive zone.",
        outcome:
          "Alert escalates directly to the Chief Security Officer and duty manager workstation.",
      },
      {
        title: "Overcrowding in Factory Assembly Section",
        scenario:
          "Workers congregate in an emergency evacuation passage during an unscheduled machine stoppage.",
        detection:
          "Crowd density module detects 12 persons inside a passage with a safety limit of 4.",
        outcome: "Floor supervisor receives automated alert on tablet and disperses the corridor.",
      },
    ],
    pilotValidation: [
      "Camera mounting angles and height suitability across test channels.",
      "Lighting thresholds during day-to-night transitions and artificial lighting.",
      "Target detection distance and pixel density on target (PPM).",
      "Network throughput and stream stability under 24/7 continuous ingestion.",
      "False alarm suppression against windblown foliage, shadows, and rain.",
    ],
    limitations: [
      "Detection reliability decreases when targets are heavily occluded by physical structures.",
      "Extreme environmental conditions such as dense monsoon fog significantly reduce optical range.",
      "Cameras mounted at extreme vertical angles directly overhead reduce person classification accuracy.",
      "Low-resolution analog video converted through legacy baluns may not provide adequate pixel density.",
    ],
    relevantIndustries: [
      {
        name: "Corporate & Enterprise",
        slug: "corporate-enterprise",
        context: "Campus security, perimeter protection, and executive area access monitoring.",
      },
      {
        name: "Manufacturing & Industrial",
        slug: "manufacturing",
        context: "Plant perimeter security, hazardous machinery zones, and shift operations.",
      },
      {
        name: "Logistics & Warehousing",
        slug: "logistics-warehousing",
        context: "Loading dock vehicle tracking, inventory protection, and perimeter surveillance.",
      },
      {
        name: "Healthcare & Hospitals",
        slug: "healthcare",
        context: "Restricted pharmacy protection, emergency bay access, and staff safety.",
      },
    ],
    faqs: [
      {
        question: "Do we need to replace our existing CCTV cameras to use this solution?",
        answer:
          "No. Resurgenix connects directly to compatible existing IP cameras, NVRs, and RTSP video feeds over your local network. You do not need to replace operational cameras or install proprietary smart cameras.",
      },
      {
        question: "Which camera brands are supported?",
        answer:
          "Our software is hardware-agnostic and compatible with major camera brands including Hikvision, CP Plus, Dahua, Axis, Hanwha Vision, Honeywell, and Bosch that support standard RTSP streaming.",
      },
      {
        question: "Does video analytics require sending video feeds to the cloud?",
        answer:
          "No. By default, Resurgenix processes video locally on edge appliances or on-premise servers within your local facility network. Video feeds do not leave your premises unless you specifically select a cloud deployment.",
      },
      {
        question: "How are false alarms handled?",
        answer:
          "Our models utilize spatial bounding boxes and trajectory analysis to filter out common environmental noise such as moving tree branches, small stray animals, shadows, and headlights.",
      },
      {
        question: "How long does it take to deploy a pilot on our site?",
        answer:
          "A typical controlled pilot on 3 to 5 existing camera streams can be configured within 1 to 2 business days following initial technical stream validation.",
      },
    ],
    relatedSolutions: [
      {
        title: "Restricted Zone Detection",
        slug: "restricted-zone-unauthorized-entry-detection",
        status: "pilot",
        description: "Enforce virtual boundaries and receive sub-second intrusion alerts.",
      },
      {
        title: "ANPR & Vehicle Intelligence",
        slug: "anpr-vehicle-intelligence",
        status: "in-development",
        description: "Automate license plate recognition and gate entry logging.",
      },
      {
        title: "Centralized Video Intelligence",
        slug: "centralized-video-intelligence",
        status: "in-development",
        description: "Aggregate multi-site camera streams and health diagnostics into one console.",
      },
    ],
    relatedResources: [
      {
        title: "How AI Video Analytics Works with Existing CCTV",
        href: "/resources/how-ai-video-analytics-works",
        type: "guide",
      },
      {
        title: "AI CCTV vs. Traditional CCTV Comparison",
        href: "/compare/ai-cctv-vs-traditional-cctv",
        type: "comparison",
      },
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Request a Pilot Program",
      href: "/request-pilot",
    },
    status: "pilot",
  },

  // =========================================================================
  // 2. AI Attendance & Workforce Intelligence
  // =========================================================================
  {
    slug: "ai-attendance-workforce-intelligence",
    title: "AI Attendance & Workforce Intelligence",
    seoTitle: "AI Attendance System CCTV & Workforce Intelligence | Resurgenix",
    metaDescription:
      "Automate workforce shift attendance and zone occupancy using existing CCTV cameras with consent-based enrollment and strict DPDP Act privacy safeguards.",
    h1: "Consent-Based AI Attendance & Workforce Intelligence",
    primaryKeyword: "AI attendance system CCTV",
    secondaryKeywords: [
      "workforce monitoring CCTV",
      "automated attendance camera",
      "consent-based visual verification",
      "industrial shift attendance",
    ],
    shortAnswer:
      "Resurgenix AI Attendance & Workforce Intelligence is a consent-based computer vision system for enterprise and manufacturing facilities to automate shift logging and zone occupancy tracking. It works by verifying enrolled personnel through existing entry-point camera streams. Unlike contact biometrics or covert surveillance, it relies on voluntary enrollment, DPDP Act compliance, and zero personal tracking.",
    problemTitle: "Biometric Smudges, Queues & Ghost Worker Discrepancies",
    problem:
      "Industrial manufacturing plants, construction facilities, and commercial campuses struggle with traditional biometric fingerprint scanners. In dusty industrial environments, greasy fingers cause turnstile queues and recurring scanner failures. Manual paper muster rolls and swipe cards lead to buddy-punching, ghost-worker payroll inflation, and time-office disputes.",
    problemPoints: [
      "Physical fingerprint scanners frequently fail in industrial environments due to dust, oil, and worn ridges.",
      "Shift changes create long worker bottlenecks at physical turnstiles, delaying production lines.",
      "Buddy punching and card sharing create significant payroll leakage across contractor rosters.",
      "Manual reconciliation between gate security logs and contractor bills consumes days of HR time.",
    ],
    specialNotice: {
      type: "privacy",
      title: "Privacy by Design & DPDP Act Alignment",
      content:
        "This capability operates exclusively on an opt-in, consent-based framework aligned with India's Digital Personal Data Protection (DPDP) Act 2023. Personnel must be voluntarily enrolled. The system does not conduct covert tracking, indiscriminate public facial recognition, or emotional profiling. Data is encrypted and retained under transparent corporate governance policies.",
    },
    stepFlow: [
      {
        step: "01",
        title: "Consent-Based Enrollment",
        description:
          "Workers and employees voluntarily enroll by providing reference photographs and signed consent per corporate HR policy.",
      },
      {
        step: "02",
        title: "Entry Camera Stream Ingest",
        description:
          "Existing IP cameras positioned at turnstiles, main gates, or reception desks capture optical frames as personnel enter.",
      },
      {
        step: "03",
        title: "Localized Edge Verification",
        description:
          "Edge deep learning models match facial geometry vectors against the enrolled database locally within the facility LAN.",
      },
      {
        step: "04",
        title: "Automated Timestamp Logging",
        description:
          "The system records precise arrival timestamps, employee IDs, and entry gate tags into the local attendance database.",
      },
      {
        step: "05",
        title: "HR & Payroll Synchronization",
        description:
          "Verified daily shift logs synchronize with ERP, HRMS, and contractor payroll systems via secure API webhooks.",
      },
    ],
    capabilities: [
      {
        title: "Contactless Shift Attendance",
        description:
          "Logs verified arrivals and departures without physical contact or queuing at entry turnstiles.",
      },
      {
        title: "Contractor Roster Verification",
        description:
          "Compares on-site contractor headcount against daily contractor agency invoices to prevent ghost billing.",
      },
      {
        title: "Zone Occupancy Tracking",
        description:
          "Monitors aggregate personnel counts across factory bays, cafeterias, and operational floors for safety.",
      },
      {
        title: "Overstay & Absence Exceptions",
        description:
          "Flags shifts where required specialized operators are absent from designated machine cells.",
      },
    ],
    operatorReceives: [
      {
        item: "Real-Time Entry Log Entry",
        detail:
          "Digital record with employee ID, department, gate identifier, and millisecond-accurate timestamp.",
      },
      {
        item: "Unenrolled Visitor Notification",
        detail:
          "Visual prompt on security terminal when an individual entering staff gates lacks active enrollment.",
      },
      {
        item: "Daily Shift Summary Report",
        detail:
          "Automated export showing present headcount, late arrivals, shift transfers, and contractor totals.",
      },
      {
        item: "Auditable Consent Records",
        detail:
          "Immutable verification logs ensuring compliance with statutory labor records and privacy audits.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Camera Position",
        specification: "Eye-level or 15-degree down-tilt at choke points",
        notes: "Positioned directly facing entry turnstiles or security clearance lanes.",
      },
      {
        parameter: "Lighting Condition",
        specification: "Minimum 150 to 300 Lux uniform illumination",
        notes: "Avoid direct backlighting from exterior sunlight behind the subject.",
      },
      {
        parameter: "Camera Resolution",
        specification: "1080p (1920x1080) with clear optical lens",
        notes:
          "Target face must measure at least 80 pixels between eye centers for reliable verification.",
      },
      {
        parameter: "Network Security",
        specification: "Isolated VLAN with local encrypted database",
        notes: "Biometric vectors stored in encrypted format; raw images restricted.",
      },
      {
        parameter: "Processing Location",
        specification: "On-Premise Edge Appliance",
        notes: "Zero cloud transmission of biometric vectors to ensure data sovereignty.",
      },
      {
        parameter: "ERP Integration",
        specification: "REST API / Webhooks / CSV Export",
        notes: "Compatible with SAP, Oracle, Darwinbox, and legacy industrial attendance software.",
      },
    ],
    deploymentOptions: [
      {
        model: "On-Premise Appliance",
        fit: "Manufacturing plants, corporate HQs, and industrial sites requiring strict data containment.",
        details:
          "Hardware resides in the local server room. Facial feature vectors never leave the physical facility.",
      },
      {
        model: "Private Cloud Synchronized",
        fit: "Multi-branch enterprises with centralized HR and distributed corporate offices.",
        details:
          "Edge verification runs locally at each office, and attendance records sync over encrypted TLS to corporate HRMS.",
      },
      {
        model: "Hybrid Industrial",
        fit: "Remote mining sites and manufacturing corridors with intermittent internet access.",
        details:
          "Operates fully offline for attendance logging, batch-uploading records once connection restores.",
      },
    ],
    useCases: [
      {
        title: "Shift Change at Manufacturing Plant",
        scenario:
          "400 factory workers arrive within a 15-minute window during morning shift rotation.",
        detection:
          "Turnstile cameras verify enrolled workers as they walk through, processing 30 persons per minute.",
        outcome:
          "Turnstile queues are eliminated, shift begins on schedule, and attendance syncs to ERP.",
      },
      {
        title: "Contractor Headcount Audit at Logistics Hub",
        scenario: "Third-party staffing agency bills for 85 daily loading dock workers.",
        detection:
          "Camera verification records only 62 unique enrolled contractor passes throughout the shift.",
        outcome:
          "Facility manager eliminates ghost-worker overbilling, saving significant payroll leakage.",
      },
      {
        title: "Authorized Machine Operator Presence",
        scenario:
          "A high-risk CNC cutting machine cell requires certified operator presence before startup.",
        detection:
          "Floor camera confirms the registered certified operator is present inside the operating booth.",
        outcome:
          "Industrial safety compliance is maintained with automated photographic audit trails.",
      },
      {
        title: "Unenrolled Visitor at Executive Entrance",
        scenario:
          "An unidentified person accompanies an employee through a staff-only side entrance.",
        detection:
          "System logs the employee's arrival and immediately alerts security of an unenrolled accompanying guest.",
        outcome:
          "Reception officer intercepts the visitor politely to issue a standard guest badge.",
      },
    ],
    pilotValidation: [
      "Worker throughput speed through entry choke points during peak arrival windows.",
      "Enrollment image capture quality and geometric template accuracy.",
      "Resilience against varying shift lighting and ambient shadows.",
      "Integration compatibility with client's existing payroll and time-office software.",
      "User acceptance and consent documentation verification.",
    ],
    limitations: [
      "Requires willing participation; personnel wearing full-face coverings or dark tinted visors cannot be verified.",
      "Drastic backlight glare from glass atrium doors can blind optical sensors if lighting is uncompensated.",
      "Cannot function as covert surveillance; camera placement must be clearly marked and disclosed.",
      "Face templates degrade if enrollment photos are low-resolution or outdated by several years.",
    ],
    relevantIndustries: [
      {
        name: "Manufacturing & Industrial",
        slug: "manufacturing",
        context:
          "High-volume shift rotation, contractor workforce audits, and plant gate management.",
      },
      {
        name: "Corporate & Enterprise",
        slug: "corporate-enterprise",
        context:
          "Contactless office attendance, visitor escort compliance, and cafeteria floor analytics.",
      },
      {
        name: "Logistics & Warehousing",
        slug: "logistics-warehousing",
        context: "Loading dock shift tracking and temporary warehouse labor payroll verification.",
      },
      {
        name: "Healthcare & Hospitals",
        slug: "healthcare",
        context:
          "Contactless clinical staff attendance ensuring sterile entry without touching physical surfaces.",
      },
    ],
    faqs: [
      {
        question: "Is this compliant with India's DPDP Act 2023?",
        answer:
          "Yes. Our architecture is designed with privacy-by-design principles. Personnel enrollment requires explicit consent, biometric data is encrypted at rest and in transit, and individuals have the right to request deletion of their biometric templates.",
      },
      {
        question: "Does the system track employees throughout the day across the office?",
        answer:
          "No. Resurgenix does not conduct continuous employee tracking or productivity surveillance. The system operates strictly at designated entry/exit checkpoints to record shift arrival and departure timestamps.",
      },
      {
        question: "What happens if a worker has grease or dirt on their hands?",
        answer:
          "Unlike fingerprint biometrics, optical camera verification does not require physical contact, making it completely immune to dirty, dusty, or worn fingertips common in manufacturing plants.",
      },
      {
        question: "Can people fool the camera with a printed photograph or smartphone screen?",
        answer:
          "Our system incorporates anti-spoofing liveness checks that analyze frame texture, spatial depth, and micro-motion to reject flat paper photos and digital screen displays.",
      },
      {
        question: "How does this integrate with our current HRMS?",
        answer:
          "Resurgenix provides RESTful APIs, automated database webhooks, and scheduled CSV/Excel exports that integrate seamlessly with major HRMS platforms including SAP, Darwinbox, and custom ERPs.",
      },
    ],
    relatedSolutions: [
      {
        title: "AI Video Analytics",
        slug: "ai-video-analytics",
        status: "pilot",
        description: "General person, vehicle, and spatial event detection across CCTV feeds.",
      },
      {
        title: "Restricted Zone Detection",
        slug: "restricted-zone-unauthorized-entry-detection",
        status: "pilot",
        description:
          "Enforce virtual boundaries around sensitive server rooms and hazardous areas.",
      },
      {
        title: "Enterprise Security",
        slug: "enterprise-security",
        status: "in-development",
        description: "Campus-wide multi-camera monitoring and unified incident management.",
      },
    ],
    relatedResources: [
      {
        title: "CCTV Surveillance and DPDP Act Compliance Guide",
        href: "/resources/cctv-dpdp-act-compliance-guide",
        type: "guide",
      },
      {
        title: "Evaluating Video Analytics Pilots Checklist",
        href: "/resources/evaluating-video-analytics-pilots",
        type: "guide",
      },
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Request a Pilot Program",
      href: "/request-pilot",
    },
    status: "pilot",
  },

  // =========================================================================
  // 3. Restricted Zone & Unauthorized Entry Detection
  // =========================================================================
  {
    slug: "restricted-zone-unauthorized-entry-detection",
    title: "Restricted Zone Detection",
    seoTitle: "Restricted Zone Detection & Unauthorized Entry CCTV | Resurgenix",
    metaDescription:
      "Automate virtual boundary enforcement and unauthorized entry detection on existing CCTV cameras. Sub-second alerts for server rooms, hazardous bays, and perimeters.",
    h1: "Real-Time Restricted Zone & Unauthorized Entry Detection",
    primaryKeyword: "restricted zone detection",
    secondaryKeywords: [
      "unauthorized entry detection",
      "virtual boundary alert CCTV",
      "sensitive area monitoring",
      "virtual fence intrusion detection",
    ],
    shortAnswer:
      "Resurgenix Restricted Zone Detection is an automated spatial monitoring system for facility and security managers to prevent unauthorized entry into hazardous, high-value, or secure operational areas. It works by drawing virtual polygon boundaries over existing CCTV feeds and evaluating intrusion rules. Unlike passive recording, it issues sub-second alerts with snapshot evidence when breaches occur.",
    problemTitle: "Unguarded Sensitive Areas & Delayed Physical Alarms",
    problem:
      "Every enterprise has critical areas that should never have unescorted personnel: data center server rooms, chemical storage tanks, high-voltage electrical substations, and inventory vaults. Physical locks and card readers only protect physical doors; they cannot detect open doors, tailgating, or boundary breaches along open factory floors and outdoor perimeters. By the time physical security discovers a breach, equipment may be compromised or inventory stolen.",
    problemPoints: [
      "Tailgating through card-access doors leaves unauthorized visitors unmonitored inside secure corridors.",
      "Hazardous industrial zones (robotic arms, furnace areas) risk severe worker injury without real-time boundary warnings.",
      "Perimeter fences along extensive campus boundaries are impossible to monitor continuously with foot patrols.",
      "Conventional motion detectors trigger constant false alarms from stray animals, weather, and light reflections.",
    ],
    stepFlow: [
      {
        step: "01",
        title: "Virtual Zone Definition",
        description:
          "Security managers draw custom virtual polygon boundaries and tripwire vectors directly onto camera feeds via web console.",
      },
      {
        step: "02",
        title: "Operating Schedule Configuration",
        description:
          "Assign temporal rules to each zone (e.g., active 24/7 for server rooms, or active only between 7:00 PM and 6:00 AM for warehouses).",
      },
      {
        step: "03",
        title: "Real-Time Target Tracking",
        description:
          "Edge computer vision models track human and vehicular coordinates, projecting their foot-point trajectory onto the ground plane.",
      },
      {
        step: "04",
        title: "Rule Breach Verification",
        description:
          "When a target intersects a prohibited boundary outside authorized parameters, the system validates the breach in under 500 milliseconds.",
      },
      {
        step: "05",
        title: "Instant Multi-Channel Dispatch",
        description:
          "Dispatches live camera popup, visual bounding box, audible console chime, and email/SMS snapshot alerts to security guards.",
      },
    ],
    capabilities: [
      {
        title: "Virtual Polygon Boundaries",
        description:
          "Enforce multi-point spatial geofences around sensitive equipment, walkways, or inventory racks.",
      },
      {
        title: "Directional Tripwires",
        description:
          "Detect entry while allowing authorized exit, or trigger alerts only when boundaries are crossed in specific directions.",
      },
      {
        title: "Time-Based Scheduling",
        description:
          "Automatically enable strict security alerts during night shifts and switch to occupancy monitoring during business hours.",
      },
      {
        title: "Photographic Evidence Capture",
        description:
          "Instantly captures high-resolution incident frames with red bounding boxes and exact timestamp watermarks.",
      },
    ],
    operatorReceives: [
      {
        item: "High-Priority Visual Banner",
        detail:
          "Console screen switches to the breach camera feed with a glowing red boundary overlay.",
      },
      {
        item: "Audible SOC Chime",
        detail:
          "Distinct alert sound prompting immediate operator acknowledgment on the central workstation.",
      },
      {
        item: "Instant Mobile Notification",
        detail:
          "Push notification or instant message sent to patrol guard smartphones with the breach snapshot.",
      },
      {
        item: "Event Audit Timeline Record",
        detail:
          "Immutable incident log recording timestamp, zone name, target classification, and guard response time.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Camera Type",
        specification: "Standard Fixed IP Camera",
        notes: "Fixed lens cameras provide steady, calibrated coordinates for virtual polygons.",
      },
      {
        parameter: "Mounting Height",
        specification: "2.5 to 5 meters above ground level",
        notes: "Moderate angle ensures clear line-of-sight to feet and boundary ground plane.",
      },
      {
        parameter: "RTSP Video Stream",
        specification: "1080p @ 15 to 20 FPS (H.264/H.265)",
        notes: "Sub-stream ingestion acceptable to optimize local network bandwidth.",
      },
      {
        parameter: "Illumination Baseline",
        specification: "Minimum 20 Lux or IR illumination at night",
        notes: "Infrared-enabled cameras perform reliably in total darkness up to IR rating.",
      },
      {
        parameter: "Processing Engine",
        specification: "Local Edge Server / GPU Appliance",
        notes: "Processes frames locally to guarantee sub-second alert latency.",
      },
      {
        parameter: "Alert Integrations",
        specification: "Webhook / SMTP Email / Relay Output",
        notes: "Can trigger physical sirens, strobe lights, or third-party VMS software.",
      },
    ],
    deploymentOptions: [
      {
        model: "Local Edge Appliance",
        fit: "Industrial plants, server rooms, and critical facilities requiring sub-second physical alarm triggering.",
        details:
          "Runs 100% on-premise. Can close a hardware dry-contact relay to sound a physical siren or flash a strobe light.",
      },
      {
        model: "Centralized Campus Server",
        fit: "Large corporate IT parks and multi-floor commercial complexes.",
        details:
          "Aggregates boundary rules across 50+ campus cameras on a rack-mounted server in the central control room.",
      },
      {
        model: "Hybrid Multi-Site",
        fit: "Distributed logistics yards, retail warehouses, and remote electrical substations.",
        details:
          "Edge appliances process feeds locally at each substation and send lightweight JSON alert notifications to central HQ.",
      },
    ],
    useCases: [
      {
        title: "After-Hours Data Center Server Room Breach",
        scenario:
          "An unauthorized cleaning contractor opens a server suite door at 1:30 AM without a work permit.",
        detection:
          "Virtual polygon around the server rack corridor triggers within 300ms of the door opening.",
        outcome:
          "SOC console sounds alert; on-duty security guard arrives within 60 seconds to inspect credentials.",
      },
      {
        title: "Dangerous Overhead Crane Operating Zone",
        scenario:
          "A factory worker inadvertently walks beneath an active overhead gantry crane moving steel coils.",
        detection:
          "Dynamic safety zone drawn beneath the crane's travel path registers a pedestrian entry.",
        outcome:
          "Automated audio speaker sounds a spoken safety warning, prompting the worker to step back immediately.",
      },
      {
        title: "Perimeter Wall Intrusion at Industrial Plant",
        scenario:
          "An intruder scales an exterior perimeter wall behind the raw material scrap yard at night.",
        detection:
          "Tripwire line drawn along the inner perimeter fence detects human movement descending the wall.",
        outcome:
          "Perimeter floodlight activates automatically and security patrol jeep is dispatched to the coordinate.",
      },
      {
        title: "Hospital Restricted Pharmacy Intrusion",
        scenario:
          "An individual slips into a locked pharmaceutical storage room during ward shift handover.",
        detection:
          "Camera overlooking the narcotics vault flags unauthorized person presence in the restricted room.",
        outcome:
          "Chief Nursing Officer and security supervisor receive immediate snapshot alert on mobile devices.",
      },
    ],
    pilotValidation: [
      "Precision of virtual boundary polygon coordinates across target distances.",
      "Alert trigger speed and latency under continuous peak video load.",
      "False positive suppression during heavy rain, shifting shadows, and headlight sweeps.",
      "Night-time IR illumination consistency and contrast against background walls.",
      "Integration with physical alarms and guard notification channels.",
    ],
    limitations: [
      "PTZ cameras actively panning cannot maintain static virtual polygon boundaries (fixed cameras required).",
      "Severe optical obstructions (stacked pallets, parked trucks) blocking the zone will obscure target detection.",
      "Extremely low light below camera IR illumination capability will cause target classification dropouts.",
      "Cameras with severe fish-eye distortion require optical calibration to prevent boundary coordinate warping.",
    ],
    relevantIndustries: [
      {
        name: "Corporate & Enterprise",
        slug: "corporate-enterprise",
        context: "Data center server rooms, executive suites, and secure document archives.",
      },
      {
        name: "Manufacturing & Industrial",
        slug: "manufacturing",
        context: "High-voltage machinery, chemical storage tanks, and perimeter security fences.",
      },
      {
        name: "Logistics & Warehousing",
        slug: "logistics-warehousing",
        context: "High-value bonded inventory cages, loading docks, and exterior truck yards.",
      },
      {
        name: "Healthcare & Hospitals",
        slug: "healthcare",
        context:
          "Pediatric ward security, intensive care units, and restricted pharmaceutical vaults.",
      },
    ],
    faqs: [
      {
        question: "How difficult is it to configure the restricted zones?",
        answer:
          "Zones are configured in minutes using our intuitive web-based interface. Administrators simply click on the live camera view to draw virtual polygon boundaries or tripwires and assign schedule rules.",
      },
      {
        question: "Can we set different rules for different times of day?",
        answer:
          "Yes. You can configure granular time schedules for each zone. For example, a warehouse bay can be open for workers during daytime shifts but trigger high-priority alerts if entered after 8:00 PM.",
      },
      {
        question: "Will moving shadows or stray cats trigger false alarms?",
        answer:
          "No. Our vision models specifically classify target categories, differentiating human bodies and vehicles from stray animals, tree branches, rain, and light reflections.",
      },
      {
        question: "Can the system trigger physical sirens or strobe lights?",
        answer:
          "Yes. Our edge software can interface with standard network relay modules (I/O controllers) to close dry-contact circuits that trigger physical sirens, strobe lights, or door locking mechanisms.",
      },
      {
        question: "What hardware is required on site?",
        answer:
          "A compact on-premise edge server or industrial PC equipped with a supported GPU is placed on your local network. It connects directly to your existing IP cameras via RTSP without additional sensors.",
      },
    ],
    relatedSolutions: [
      {
        title: "AI Video Analytics",
        slug: "ai-video-analytics",
        status: "pilot",
        description: "Multi-camera object detection and tracking on existing CCTV feeds.",
      },
      {
        title: "Enterprise Security",
        slug: "enterprise-security",
        status: "in-development",
        description: "Unified multi-campus surveillance management and incident workflows.",
      },
      {
        title: "Centralized Video Intelligence",
        slug: "centralized-video-intelligence",
        status: "in-development",
        description: "Consolidated camera health and multi-facility event console.",
      },
    ],
    relatedResources: [
      {
        title: "How AI Video Analytics Works with Existing CCTV",
        href: "/resources/how-ai-video-analytics-works",
        type: "guide",
      },
      {
        title: "Evaluating Video Analytics Pilots Checklist",
        href: "/resources/evaluating-video-analytics-pilots",
        type: "guide",
      },
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Request a Pilot Program",
      href: "/request-pilot",
    },
    status: "pilot",
  },

  // =========================================================================
  // 4. Enterprise Security (In Development)
  // =========================================================================
  {
    slug: "enterprise-security",
    title: "Enterprise Security Intelligence",
    seoTitle: "Enterprise Security Video Analytics | Resurgenix",
    metaDescription:
      "Unified multi-site video analytics for corporate campuses and commercial real estate. Centralized alerts, operator audit trails, and role-based access.",
    h1: "Multi-Campus Enterprise Security Video Intelligence",
    primaryKeyword: "enterprise security AI video analytics",
    secondaryKeywords: [
      "AI CCTV for corporate offices",
      "commercial campus surveillance",
      "multi-site office security",
      "centralized security operations",
    ],
    shortAnswer:
      "Resurgenix Enterprise Security is a centralized intelligence module for corporate security directors to monitor multi-building campuses, enforce after-hours access rules, and aggregate incident reporting. It works by consolidating multi-camera feeds into unified role-based operational dashboards. Unlike fragmented single-DVR setups, it connects distributed facility surveillance into one auditable operational view.",
    problemTitle: "Fragmented Security Operations Across Distributed Campuses",
    problem:
      "Large corporations operate across multiple buildings, regional corporate branches, and commercial IT parks. Each site often runs independent legacy DVRs or VMS software with no unified operational oversight. Central security leadership cannot verify whether remote guards are active, response times are lagging, or incident logs are being accurately maintained.",
    problemPoints: [
      "Security leaders lack centralized visibility across geographically distributed corporate offices.",
      "Inconsistent incident reporting between regional branches creates corporate compliance vulnerabilities.",
      "Auditing operator response times to security events across multiple shifts is virtually impossible.",
      "Legacy enterprise VMS systems charge expensive recurring license fees per camera channel.",
    ],
    specialNotice: {
      type: "under-development",
      title: "Capability Under Active Development",
      content:
        "This capability is under active development and internal validation. Core spatial analytics modules are operational; multi-site enterprise management and tenant orchestration are available for early-access evaluation pilots.",
    },
    stepFlow: [
      {
        step: "01",
        title: "Multi-Facility Stream Mapping",
        description:
          "Map camera endpoints across corporate headquarters, regional branches, and data centers into logical organizational tiers.",
      },
      {
        step: "02",
        title: "Role-Based Access Configuration",
        description:
          "Define user permissions (e.g., local guards view floor cameras; corporate CSO views multi-city analytics summaries).",
      },
      {
        step: "03",
        title: "Distributed Edge Analytics",
        description:
          "Edge appliances process video feeds locally at each campus to maintain low latency and eliminate WAN congestion.",
      },
      {
        step: "04",
        title: "Telemetry & Alert Aggregation",
        description:
          "Lightweight incident metadata, timestamps, and alert snapshots synchronize over secure tunnels to central command.",
      },
      {
        step: "05",
        title: "Executive Audit & Compliance",
        description:
          "Corporate security executives access real-time incident heatmaps, guard response metrics, and compliance reports.",
      },
    ],
    capabilities: [
      {
        title: "Multi-Site Incident Dashboard",
        description:
          "Consolidates real-time event alerts from across multiple corporate facilities onto a single monitoring pane.",
      },
      {
        title: "Granular Role-Based Access (RBAC)",
        description:
          "Restricts camera feeds and configuration permissions based on user operational role and physical facility clearance.",
      },
      {
        title: "Operator Response Auditing",
        description:
          "Tracks the exact duration from alert dispatch to operator acknowledgment and incident resolution logging.",
      },
      {
        title: "Compliance & Audit Reporting",
        description:
          "Generates automated PDF/CSV reports documenting security events, alarm frequencies, and stream uptime for internal audits.",
      },
    ],
    operatorReceives: [
      {
        item: "Consolidated Enterprise Alert Feed",
        detail:
          "Real-time chronological feed of security events across all linked corporate campuses.",
      },
      {
        item: "Facility Status Health Map",
        detail:
          "Interactive geographic overview showing camera online status and active alert levels per facility.",
      },
      {
        item: "Operator Acknowledgment Prompts",
        detail:
          "Mandatory incident resolution workflows requiring operators to categorize and close alarms.",
      },
      {
        item: "Executive Compliance Exports",
        detail:
          "Weekly and monthly security governance summaries suitable for corporate risk management committees.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Supported Infrastructures",
        specification: "Standard IP CCTV / Existing VMS",
        notes: "Integrates alongside existing Milestone, Genetec, or standalone NVR systems.",
      },
      {
        parameter: "Network Architecture",
        specification: "Corporate SD-WAN / Secure VPN",
        notes: "Low bandwidth requirement (5 to 10 Kbps per site for alert telemetry sync).",
      },
      {
        parameter: "Central Management",
        specification: "Private Cloud or Central Data Center",
        notes: "Hosts the centralized web portal, user directory, and consolidated audit database.",
      },
      {
        parameter: "Directory Integration",
        specification: "SAML 2.0 / Active Directory / SSO",
        notes: "Enterprise single sign-on support for corporate identity management.",
      },
      {
        parameter: "Edge Hardware Baseline",
        specification: "Rack-mounted GPU Edge Server per site",
        notes: "Performs local model inference and stream buffering within each branch perimeter.",
      },
      {
        parameter: "Data Encryption",
        specification: "TLS 1.3 in transit, AES-256 at rest",
        notes: "Meets enterprise information security guidelines for incident data.",
      },
    ],
    deploymentOptions: [
      {
        model: "Distributed Edge + Centralized Cloud",
        fit: "National corporate enterprises with offices in multiple metropolitan cities.",
        details:
          "Edge appliances process video in each city, sending only encrypted metadata to a centralized management portal.",
      },
      {
        model: "Fully On-Premise Enterprise",
        fit: "Financial institutions, BFSI headquarters, and data centers with air-gap mandates.",
        details:
          "Central management runs entirely within the private corporate intranet with zero public internet dependencies.",
      },
    ],
    useCases: [
      {
        title: "Unified Command for Multi-City IT Campuses",
        scenario:
          "Corporate CSO in Kolkata oversees security operations for offices in Bengaluru, Mumbai, and NCR.",
        detection:
          "Central dashboard highlights an unauthorized night intrusion at the Bengaluru equipment store.",
        outcome:
          "CSO verifies local guard dispatch within 45 seconds and monitors incident resolution in real time.",
      },
      {
        title: "Guard Response Time Accountability",
        scenario:
          "A commercial real estate park tests whether night patrol guards acknowledge intrusion chimes.",
        detection:
          "System logs that a perimeter tripwire alert remained unacknowledged for 8 minutes on the third shift.",
        outcome:
          "Facility director receives an automated escalation notice and addresses guard post negligence.",
      },
      {
        title: "Executive Floor Tailgating Prevention",
        scenario:
          "Multiple visitors enter an executive boardroom corridor behind a single badged employee.",
        detection:
          "Vision analytics flags an occupancy count discrepancy at the security vestibule.",
        outcome:
          "Security desk is alerted to verify badges for the unbadged accompanying individuals.",
      },
      {
        title: "Corporate Audit Log Evidentiary Export",
        scenario:
          "Internal audit requires a complete record of server room entries and breaches over the past quarter.",
        detection: "System filters indexed database entries for the server room camera channels.",
        outcome:
          "Comprehensive auditable report with timestamps and snapshot attachments is exported in 2 minutes.",
      },
    ],
    pilotValidation: [
      "Telemetry synchronization stability across corporate SD-WAN connections.",
      "Role-based permission enforcement across multi-tiered operator groups.",
      "Latency of alert propagation from branch edge hardware to central console.",
      "Scalability of concurrent camera stream ingestion across distributed sites.",
    ],
    limitations: [
      "Requires reliable intra-branch network connectivity for centralized alert telemetry synchronization.",
      "Multi-tenant configurations require corporate IT alignment for subnet routing and firewall rules.",
      "Full active directory integration requires enterprise IT coordination during setup phase.",
    ],
    relevantIndustries: [
      {
        name: "Corporate & Enterprise",
        slug: "corporate-enterprise",
        context:
          "Multi-floor commercial towers, corporate IT campuses, and commercial real estate hubs.",
      },
      {
        name: "Healthcare & Hospitals",
        slug: "healthcare",
        context: "Multi-building hospital networks requiring centralized emergency management.",
      },
      {
        name: "Logistics & Warehousing",
        slug: "logistics-warehousing",
        context: "National distribution centers and regional cross-dock warehouse facilities.",
      },
    ],
    faqs: [
      {
        question: "Can this system integrate with our existing VMS like Milestone or Genetec?",
        answer:
          "Yes. Resurgenix is engineered to ingest sub-streams directly from existing camera streams or alongside traditional VMS installations, operating as an intelligent analytics and alerting layer.",
      },
      {
        question: "Does enterprise monitoring stream full video across our corporate WAN?",
        answer:
          "No. Video inference executes locally on edge hardware at each facility. Only lightweight JSON telemetry, event timestamps, and event snapshots travel across the WAN, preserving network bandwidth.",
      },
      {
        question: "How does role-based access control work?",
        answer:
          "Administrators can assign granular permissions by user role and location. A guard at Branch A sees only Branch A cameras, while regional security managers see aggregated metrics for their jurisdiction.",
      },
      {
        question: "Can we export incident reports for compliance audits?",
        answer:
          "Yes. All detected events, operator response times, and incident closures are recorded in an auditable database with one-click export to PDF or CSV format.",
      },
      {
        question: "Is single sign-on (SSO) supported?",
        answer:
          "Yes. Our enterprise architecture supports SAML 2.0 and standard identity providers for corporate user provisioning.",
      },
    ],
    relatedSolutions: [
      {
        title: "AI Video Analytics",
        slug: "ai-video-analytics",
        status: "pilot",
        description: "Core real-time person, vehicle, and object classification on existing CCTV.",
      },
      {
        title: "Centralized Video Intelligence",
        slug: "centralized-video-intelligence",
        status: "in-development",
        description: "Multi-site camera health diagnostics and searchable event console.",
      },
      {
        title: "Restricted Zone Detection",
        slug: "restricted-zone-unauthorized-entry-detection",
        status: "pilot",
        description: "Virtual boundary enforcement and unauthorized entry alerts.",
      },
    ],
    relatedResources: [
      {
        title: "Edge AI vs. Centralized VMS Comparison",
        href: "/compare/edge-ai-vs-centralized-vms",
        type: "comparison",
      },
      {
        title: "On-Premise vs. Cloud Video Analytics",
        href: "/compare/on-premise-vs-cloud-video-analytics",
        type: "comparison",
      },
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Talk to Engineering",
      href: "/contact",
    },
    status: "in-development",
  },

  // =========================================================================
  // 5. Defence & Security (Roadmap)
  // =========================================================================
  {
    slug: "defence-security",
    title: "Defence & Security Monitoring",
    seoTitle: "Defence Surveillance Video Analytics | Resurgenix",
    metaDescription:
      "Air-gapped on-premise video analytics architecture for perimeter monitoring and high-security installations. Public capability specifications only.",
    h1: "Air-Gapped Video Intelligence Architecture for High-Security Installations",
    primaryKeyword: "defence surveillance video analytics",
    secondaryKeywords: [
      "air-gapped CCTV analytics",
      "military installation perimeter",
      "hardened surveillance software",
      "sovereign defense video intelligence",
    ],
    shortAnswer:
      "Resurgenix Defence Security Monitoring is an air-gapped on-premise architecture concept for institutional security authorities to maintain long-range perimeter awareness and high-security installation monitoring. It is designed to work by processing optical and thermal video streams locally without cloud transmission. Unlike commercial SaaS analytics, it operates in strict air-gapped, sovereign network environments.",
    problemTitle: "Perimeter Security in Air-Gapped High-Consequence Environments",
    problem:
      "High-security installations, defense depots, critical infrastructure utilities, and sensitive government assets require continuous situational awareness along extensive physical boundaries. Conventional commercial video analytics solutions frequently rely on external cloud dependencies, automatic external telemetry, or unvetted foreign software stacks that violate stringent sovereign defense security mandates.",
    problemPoints: [
      "Commercial cloud video analytics introduce severe operational security vulnerabilities in sovereign defense networks.",
      "Extensive installation perimeters are susceptible to blind spots during nighttime and adverse weather.",
      "Foreign VMS software stacks carry unverified supply chain dependencies and data leakage risks.",
      "High false alarm rates from conventional motion sensors desensitize security quick-reaction teams.",
    ],
    specialNotice: {
      type: "engagement",
      title: "Confidential Institutional Engagement",
      content:
        "This capability represents a strategic architectural roadmap area. The specifications presented on this page are generic, publicly shareable capability concepts only. Resurgenix does not disclose installation specifics, technical parameters, or operational projects publicly. Discussions are handled strictly through direct, confidential conversations.",
    },
    stepFlow: [
      {
        step: "01",
        title: "Isolated Stream Ingestion",
        description:
          "Ingest optical and thermal video feeds over a physically isolated, air-gapped local fiber network.",
      },
      {
        step: "02",
        title: "Hardened Local Inference",
        description:
          "Execute deep learning models on sovereign on-premise compute nodes with zero external internet routing.",
      },
      {
        step: "03",
        title: "Multi-Spectral Target Filtering",
        description:
          "Correlate optical and thermal detections to filter environmental noise, foliage movement, and wildlife.",
      },
      {
        step: "04",
        title: "Perimeter Boundary Evaluation",
        description:
          "Evaluate target distance, speed, and approach trajectory against multi-layered standoff perimeter lines.",
      },
      {
        step: "05",
        title: "Tactical Console Notification",
        description:
          "Feed verified alert telemetry directly into hardened local command-and-control operations centers.",
      },
    ],
    capabilities: [
      {
        title: "Air-Gapped Local Operation",
        description:
          "Designed to function entirely without external internet connectivity, external licensing servers, or cloud dependencies.",
      },
      {
        title: "Long-Range Perimeter Monitoring",
        description:
          "Spatial detection algorithms optimized for boundary lines, fences, and standoff security zones.",
      },
      {
        title: "Optical & Thermal Stream Ingestion",
        description:
          "Capable of processing dual-spectrum optical and infrared thermal feeds for night-time target discrimination.",
      },
      {
        title: "Secure Command-Center Feeds",
        description:
          "Standardized telemetry interfaces designed for integration into local tactical display systems.",
      },
    ],
    operatorReceives: [
      {
        item: "Tactical Standoff Alert",
        detail:
          "Real-time visual prompt marking target position and approach vector relative to the perimeter wall.",
      },
      {
        item: "Dual-Spectrum Snapshot",
        detail:
          "Combined optical and thermal evidence frame capturing target shape and heat signature.",
      },
      {
        item: "Encrypted Audit Telemetry",
        detail:
          "Hardened local incident record stored with cryptographic tamper-evident verification.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Network Environment",
        specification: "Physically Isolated Air-Gapped Network",
        notes: "Strictly zero public internet or cloud connectivity.",
      },
      {
        parameter: "Sensor Compatibility",
        specification: "Standard Optical & Thermal IP Cameras",
        notes: "RTSP streams over local shielded fiber or copper Ethernet.",
      },
      {
        parameter: "Compute Platform",
        specification: "Hardened On-Premise GPU Workstations",
        notes: "Ruggedized industrial server hardware located within secure on-site server rooms.",
      },
      {
        parameter: "Operating System",
        specification: "Hardened Enterprise Linux Baseline",
        notes: "Configured with minimal attack surface, disabled peripheral ports, and RBAC.",
      },
      {
        parameter: "Software Stack",
        specification: "Indigenous Software Codebase",
        notes:
          "Developed indigenously in India with full domestic control over model weights and updates.",
      },
    ],
    deploymentOptions: [
      {
        model: "Air-Gapped Sovereign On-Premise",
        fit: "Defense installations, strategic government complexes, and critical infrastructure assets.",
        details:
          "All software binaries, model weights, and databases reside entirely on local client-owned hardware.",
      },
    ],
    useCases: [
      {
        title: "Standoff Perimeter Staging Detection",
        scenario:
          "Movement is detected 20 meters outside an exterior facility perimeter fence at night.",
        detection:
          "Long-range vision model identifies human approach vector moving toward the physical fence.",
        outcome:
          "Tactical console sounds alert, enabling security teams to illuminate the standoff zone.",
      },
      {
        title: "Restricted Ammunition Depot Access",
        scenario:
          "An unauthorized vehicle approaches an isolated storage depot gate outside operating hours.",
        detection:
          "Boundary intrusion detection registers vehicular entry into the designated clear zone.",
        outcome:
          "Automated alert triggers immediate checkpoint verification and gate lockdown protocols.",
      },
    ],
    pilotValidation: [
      "Zero-leakage air-gap compliance and offline license validation.",
      "Thermal and optical sensor stream compatibility over local fiber runs.",
      "Target detection range and false alert suppression in rugged terrain.",
    ],
    limitations: [
      "Physical capability specifications and trials are subject to institutional vetting and confidentiality agreements.",
      "Cannot operate on consumer-grade analog cameras without dedicated digital encoder interfaces.",
      "Thermal sensor resolution dictates maximum reliable detection distance.",
    ],
    relevantIndustries: [
      {
        name: "Government & Public Safety",
        slug: "government-public-safety",
        context:
          "Municipal command centers, public infrastructure security, and institutional assets.",
      },
      {
        name: "Manufacturing & Industrial",
        slug: "manufacturing",
        context:
          "Critical chemical manufacturing, defense industrial supply chains, and power utilities.",
      },
    ],
    faqs: [
      {
        question: "Can this system function completely without an internet connection?",
        answer:
          "Yes. Our defense architecture is designed specifically for air-gapped environments. Model inference, database logging, and user authentication operate 100% on local hardware with zero external network connectivity.",
      },
      {
        question: "Are foreign cloud services or external model APIs used?",
        answer:
          "No. All computer vision models are packaged and executed locally on the deployed edge hardware. No third-party foreign cloud APIs or external data transfers are involved.",
      },
      {
        question: "How are confidential evaluations conducted?",
        answer:
          "Institutional and defense discussions are handled through direct, confidential channels following appropriate nondisclosure protocols. Technical specifications are shared on a need-to-know basis.",
      },
      {
        question: "Is thermal camera streaming supported?",
        answer:
          "Yes. The architecture supports standard thermal and optical IP camera feeds that provide standard RTSP video streams.",
      },
    ],
    relatedSolutions: [
      {
        title: "Border Surveillance",
        slug: "border-surveillance",
        status: "roadmap",
        description: "Specialized visual intelligence for rugged geographic boundaries.",
      },
      {
        title: "Restricted Zone Detection",
        slug: "restricted-zone-unauthorized-entry-detection",
        status: "pilot",
        description: "Virtual boundary enforcement and real-time intrusion alerting.",
      },
      {
        title: "AI Video Analytics",
        slug: "ai-video-analytics",
        status: "pilot",
        description: "Real-time person and vehicle classification platform layer.",
      },
    ],
    relatedResources: [
      {
        title: "On-Premise vs. Cloud Video Analytics",
        href: "/compare/on-premise-vs-cloud-video-analytics",
        type: "comparison",
      },
      {
        title: "How AI Video Analytics Works with Existing CCTV",
        href: "/resources/how-ai-video-analytics-works",
        type: "guide",
      },
    ],
    ctaPrimary: {
      label: "Request a Confidential Discussion",
      href: "/contact",
    },
    status: "roadmap",
  },

  // =========================================================================
  // 6. Border Surveillance (Roadmap)
  // =========================================================================
  {
    slug: "border-surveillance",
    title: "Border Surveillance Intelligence",
    seoTitle: "Border Surveillance Video Analytics Architecture | Resurgenix",
    metaDescription:
      "Architectural planning for long-range boundary monitoring, night movement filtering, and rugged terrain video surveillance. Conceptual roadmap only.",
    h1: "Long-Range Border Surveillance Intelligence Architecture",
    primaryKeyword: "border surveillance video analytics",
    secondaryKeywords: [
      "border surveillance AI analytics",
      "long-range perimeter monitoring",
      "terrain video intelligence",
      "air-gapped border security",
    ],
    shortAnswer:
      "Resurgenix Border Surveillance is a specialized architectural initiative for institutional security agencies to evaluate long-range perimeter intrusion and movement detection along isolated geographical boundaries. It is designed to work by filtering environmental noise across thermal and optical streams. Unlike urban CCTV analytics, it addresses sparse power, low bandwidth, and rugged operational conditions.",
    problemTitle: "Boundary Monitoring in Harsh, Sparse Infrastructure Terrain",
    problem:
      "Monitoring geographical boundaries, riverine borders, and remote perimeter corridors presents extreme technical challenges: lack of continuous grid power, sparse network backhaul, extreme weather variations, and high environmental clutter from moving vegetation and wildlife. Operators stationed at remote outposts cannot maintain continuous 24-hour visual focus across dozens of expansive panoramic monitors.",
    problemPoints: [
      "Sparse network backhaul prevents streaming raw high-definition video back to central command posts.",
      "Wildlife, vegetation, and weather fluctuations cause massive false alarm volumes in traditional motion systems.",
      "Remote border outposts require autonomous edge intelligence that functions during communication blackouts.",
      "Extreme temperature swings and dust require hardened edge compute and resilient model architectures.",
    ],
    specialNotice: {
      type: "under-development",
      title: "Strategic Architectural Roadmap Initiative",
      content:
        "This capability represents a strategic architectural research and planning initiative. The specifications presented are conceptual frameworks for specialized institutional and government engagements. No operational deployments are claimed.",
    },
    stepFlow: [
      {
        step: "01",
        title: "Remote Sensor Capture",
        description:
          "Capture optical and infrared feeds from long-range boundary camera towers and tactical masts.",
      },
      {
        step: "02",
        title: "Outpost Edge Processing",
        description:
          "Process frames on low-power, ruggedized edge computing units situated directly at remote forward posts.",
      },
      {
        step: "03",
        title: "Environmental Clutter Rejection",
        description:
          "Apply specialized models trained to reject windblown tall grass, dust storms, and non-human wildlife.",
      },
      {
        step: "04",
        title: "Low-Bandwidth Alert Transmission",
        description:
          "Transmit compressed alert telemetry and thumbnail coordinates over low-bandwidth tactical radio or satellite links.",
      },
    ],
    capabilities: [
      {
        title: "Autonomous Forward Edge Inference",
        description:
          "Designed to operate continuously at forward outposts without requiring high-bandwidth central connection.",
      },
      {
        title: "Long-Range Silhouette Classification",
        description:
          "Algorithms designed to classify human and vehicular movement patterns at extended optical distances.",
      },
      {
        title: "Low-Bandwidth Telemetry Encoding",
        description:
          "Encodes alert coordinates into lightweight data packets suitable for constrained communication links.",
      },
    ],
    operatorReceives: [
      {
        item: "Tactical Intrusion Coordinate",
        detail: "Sector identifier and estimated distance vector for confirmed boundary approach.",
      },
      {
        item: "Ultra-Compressed Evidence Thumbnail",
        detail: "Lightweight visual verification snippet optimized for low-bandwidth field radios.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Operational Environment",
        specification: "Rugged Forward Operating Posts",
        notes: "Designed for solar-assisted battery or tactical generator power profiles.",
      },
      {
        parameter: "Camera Sensor Baseline",
        specification: "Long-Range Optical & Thermal Imaging",
        notes: "Standard RTSP output from ruggedized pan-tilt or fixed mast sensors.",
      },
      {
        parameter: "Data Transmission",
        specification: "Tactical Radio / Satellite / Fiber Backhaul",
        notes: "Operates with sub-100 Kbps data bandwidth for alert telemetry.",
      },
      {
        parameter: "Hardware Architecture",
        specification: "Fanless Industrial Edge Inference Units",
        notes: "Wide-temperature rated hardware (-20°C to +60°C operating tolerance).",
      },
    ],
    deploymentOptions: [
      {
        model: "Isolated Tactical Outpost",
        fit: "Remote forward observation posts and isolated perimeter watchtowers.",
        details:
          "Complete detection and alerting operate autonomously on site, notifying local quick-reaction personnel.",
      },
    ],
    useCases: [
      {
        title: "Night-Time Riverine Boundary Movement",
        scenario:
          "Unidentified movement is detected near an isolated riverine border bank at 3:00 AM.",
        detection: "Thermal model distinguishes human crawling posture from river current ripples.",
        outcome:
          "Local forward post operator receives tactical coordinates for immediate spotlight verification.",
      },
      {
        title: "Remote Staging Area Vehicle Approach",
        scenario: "A vehicle stops 100 meters short of an unauthorized boundary access track.",
        detection: "Vision model registers vehicle silhouette in a restricted tactical corridor.",
        outcome: "Alert coordinates transmitted to sector command over tactical field network.",
      },
    ],
    pilotValidation: [
      "Hardware power efficiency under solar and battery fluctuating voltage.",
      "Thermal sensor detection range under varied atmospheric humidity.",
      "Telemetry packet delivery reliability over simulated degraded network links.",
    ],
    limitations: [
      "Conceptual capability area under strategic planning; requires institutional research collaboration.",
      "Extreme atmospheric mirage (heat shimmer) at midday limits optical detection range.",
      "Cannot replace human physical verification; serves as an automated early-warning cueing mechanism.",
    ],
    relevantIndustries: [
      {
        name: "Government & Public Safety",
        slug: "government-public-safety",
        context:
          "National border security, sovereign infrastructure, and municipal command centers.",
      },
    ],
    faqs: [
      {
        question: "Is this capability currently commercially deployed?",
        answer:
          "No. Border Surveillance is a strategic roadmap and research capability area. Specifications represent architectural planning for institutional stakeholders.",
      },
      {
        question: "How does it handle low-bandwidth field communication?",
        answer:
          "The architecture executes full video processing at the forward post edge, transmitting only lightweight metadata packets (under 10 Kbps) over tactical radios.",
      },
      {
        question: "How can institutions explore this technology?",
        answer:
          "Government agencies and authorized institutional partners can contact our engineering leadership for confidential technical alignment discussions.",
      },
    ],
    relatedSolutions: [
      {
        title: "Defence & Security",
        slug: "defence-security",
        status: "roadmap",
        description: "Hardened air-gapped on-premise monitoring for strategic installations.",
      },
      {
        title: "Restricted Zone Detection",
        slug: "restricted-zone-unauthorized-entry-detection",
        status: "pilot",
        description: "Virtual boundary tripwires and real-time spatial intrusion alerts.",
      },
    ],
    relatedResources: [
      {
        title: "On-Premise vs. Cloud Video Analytics",
        href: "/compare/on-premise-vs-cloud-video-analytics",
        type: "comparison",
      },
    ],
    ctaPrimary: {
      label: "Contact Engineering",
      href: "/contact",
    },
    status: "roadmap",
  },

  // =========================================================================
  // 7. Smart City Video Intelligence (In Development)
  // =========================================================================
  {
    slug: "smart-city-video-intelligence",
    title: "Smart City Video Intelligence",
    seoTitle: "Smart City Video Analytics India | Resurgenix",
    metaDescription:
      "Municipal video analytics architecture for crowd density, traffic bottlenecks, and public safety incident monitoring in urban command centers (ICCC).",
    h1: "Municipal AI Video Intelligence for Urban Command Centers",
    primaryKeyword: "smart city video analytics India",
    secondaryKeywords: [
      "urban surveillance analytics",
      "municipal CCTV intelligence",
      "crowd management software",
      "ICCC video analytics layer",
    ],
    shortAnswer:
      "Resurgenix Smart City Video Intelligence is a municipal analytics architecture for urban administrators and traffic authorities to monitor vehicular flow, detect roadway bottlenecks, and identify public safety incidents. It works by ingesting municipal camera streams into command-and-control dashboards. Unlike closed proprietary VMS solutions, it integrates modularly with open urban data exchange frameworks.",
    problemTitle: "Urban Camera Saturation in Integrated Command & Control Centers",
    problem:
      "Indian smart cities and municipal corporations have deployed thousands of CCTV cameras across traffic intersections, transit hubs, and public spaces. Integrated Command and Control Centers (ICCCs) face an overwhelming volume of video data. Operators cannot track thousands of streams manually, resulting in delayed responses to traffic gridlock, illegal dumping, and public safety incidents.",
    problemPoints: [
      "Thousands of city camera feeds overwhelm ICCC visual wall displays and operator capacity.",
      "Traffic bottlenecks and unauthorized roadside encroachments are identified only after citizen complaints.",
      "Legacy VMS software charges exorbitant annual maintenance and proprietary software licensing fees.",
      "Strict legal and policy frameworks govern urban data privacy and public facial recognition.",
    ],
    specialNotice: {
      type: "smart-city",
      title: "Regulatory Policy & Privacy Governance Notice",
      content:
        "City-wide video analytics deployments must operate in strict compliance with municipal guidelines, state public safety acts, and India's Digital Personal Data Protection (DPDP) Act 2023. Any face-related visual processing requires explicit statutory authorization, documented legal review, and strict data governance policies by the governing municipal authority.",
    },
    stepFlow: [
      {
        step: "01",
        title: "City Camera Stream Aggregation",
        description:
          "Ingest RTSP streams from existing municipal traffic cameras, transit hubs, and public safety poles.",
      },
      {
        step: "02",
        title: "Distributed Edge & ICCC Processing",
        description:
          "Deploy modular computer vision software on edge appliances at major intersections or centralized ICCC servers.",
      },
      {
        step: "03",
        title: "Urban Event Detection",
        description:
          "Analyze traffic flow density, wrong-way driving, vehicle breakdown blockages, and unusual crowd gatherings.",
      },
      {
        step: "04",
        title: "Integrated Command Feed",
        description:
          "Deliver standardized alert telemetry into municipal GIS dashboards and traffic enforcement systems.",
      },
    ],
    capabilities: [
      {
        title: "Urban Traffic Flow Analytics",
        description:
          "Measures vehicle volume, identifies lane blockages, and flags wrong-way driving at major city junctions.",
      },
      {
        title: "Crowd Density & Gathering Detection",
        description:
          "Estimates pedestrian density in public transit hubs, religious venues, and civic plazas to prevent stampedes.",
      },
      {
        title: "Illegal Roadside Encroachment Alerts",
        description:
          "Identifies unauthorized vehicle parking or vendor encroachment inside marked arterial roadway clearways.",
      },
      {
        title: "ICCC Platform Interoperability",
        description:
          "Outputs standard REST APIs and Webhook alerts compatible with major Indian smart city ICCC software suites.",
      },
    ],
    operatorReceives: [
      {
        item: "GIS Map Incident Pin",
        detail:
          "Interactive map coordinate highlighting location, camera ID, and nature of the urban traffic incident.",
      },
      {
        item: "Traffic Congestion Metric",
        detail:
          "Real-time density score and queue length estimate for monitored intersection approaches.",
      },
      {
        item: "Public Safety Video Snapshot",
        detail:
          "High-resolution incident snapshot dispatched directly to traffic control room dispatchers.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Camera Infrastructure",
        specification: "Standard City Surveillance IP Cameras",
        notes:
          "Compatible with existing Pole-mounted IP cameras deployed under smart city contracts.",
      },
      {
        parameter: "Video Stream Protocol",
        specification: "RTSP (H.264/H.265) over City Optical Ring",
        notes: "Streams ingested via municipal fiber network at 1080p or 720p resolution.",
      },
      {
        parameter: "Integration Protocol",
        specification: "RESTful JSON APIs / MQTT / Webhooks",
        notes: "Standardized integration with ICCC master system integrators.",
      },
      {
        parameter: "Compute Baseline",
        specification: "Centralized ICCC GPU Server Cluster",
        notes: "Enterprise GPU compute installed within the municipal data center.",
      },
    ],
    deploymentOptions: [
      {
        model: "Centralized Municipal Data Center",
        fit: "Integrated Command and Control Centers (ICCC) managing city-wide optical fiber networks.",
        details:
          "All analytical processing resides on sovereign servers inside the municipal corporation data center.",
      },
      {
        model: "Edge-at-Junction Appliance",
        fit: "Traffic intersections with local edge compute cabinets to minimize fiber backbone bandwidth.",
        details:
          "Edge appliances process local cameras and transmit only metadata and incident alerts back to the ICCC.",
      },
    ],
    useCases: [
      {
        title: "Traffic Junction Gridlock Detection",
        scenario:
          "A disabled bus blocks two central lanes at a major commercial intersection during rush hour.",
        detection:
          "Traffic analytics identifies stationary vehicular obstruction exceeding 2 minutes in active lanes.",
        outcome:
          "ICCC operator alerts nearest traffic sergeant to redirect traffic and dispatch a towing unit.",
      },
      {
        title: "Crowd Surge Monitoring at Transit Terminal",
        scenario:
          "Suburban train arrival causes sudden pedestrian surge at a metro station exit concourse.",
        detection:
          "Crowd density module detects human concentration exceeding safety threshold per square meter.",
        outcome:
          "Transit security dispatches crowd marshals to open secondary exit gates, preventing stampedes.",
      },
    ],
    pilotValidation: [
      "Stream reliability over municipal fiber networks during peak bandwidth periods.",
      "Traffic classification accuracy under varied Indian vehicle types (auto-rickshaws, two-wheelers, buses).",
      "Crowd density estimation calibration during high-footfall religious and festival gatherings.",
    ],
    limitations: [
      "In-development architectural capability requiring formal municipal or system integrator partnership.",
      "Heavily cluttered traffic conditions (mixed non-lane traffic) require specialized model calibration.",
      "Monsoon downpours and waterlogging reflections may reduce optical detection clarity at road level.",
    ],
    relevantIndustries: [
      {
        name: "Government & Public Safety",
        slug: "government-public-safety",
        context:
          "Municipal corporations, smart city SPVs, traffic police departments, and public safety command centers.",
      },
    ],
    faqs: [
      {
        question: "Does this solution require replacing municipal cameras?",
        answer:
          "No. Resurgenix is designed to ingest standard RTSP streams from cameras already installed across the city, eliminating hardware replacement costs.",
      },
      {
        question: "Can this integrate with our existing ICCC software platform?",
        answer:
          "Yes. Our software exposes open REST APIs, Webhooks, and standard metadata formats that allow Master System Integrators (MSIs) to embed alert feeds into central GIS dashboards.",
      },
      {
        question: "How are citizen privacy concerns addressed?",
        answer:
          "Urban traffic and crowd density analytics operate on object bounding boxes and aggregate counts without personal profiling. Any face-related applications require explicit statutory authorization and legal review.",
      },
    ],
    relatedSolutions: [
      {
        title: "ANPR & Vehicle Intelligence",
        slug: "anpr-vehicle-intelligence",
        status: "in-development",
        description: "License plate recognition and vehicular gate turnaround analytics.",
      },
      {
        title: "Centralized Video Intelligence",
        slug: "centralized-video-intelligence",
        status: "in-development",
        description: "Consolidated multi-camera management and health diagnostics.",
      },
    ],
    relatedResources: [
      {
        title: "CCTV Surveillance and DPDP Act Compliance Guide",
        href: "/resources/cctv-dpdp-act-compliance-guide",
        type: "guide",
      },
    ],
    ctaPrimary: {
      label: "Request a Technical Consultation",
      href: "/contact",
    },
    status: "in-development",
  },

  // =========================================================================
  // 8. ANPR & Vehicle Intelligence (In Development)
  // =========================================================================
  {
    slug: "anpr-vehicle-intelligence",
    title: "ANPR & Vehicle Intelligence",
    seoTitle: "ANPR System India & Vehicle Intelligence CCTV | Resurgenix",
    metaDescription:
      "Automated license plate recognition and vehicle classification for existing CCTV cameras at industrial gates, logistics yards, and commercial campuses.",
    h1: "AI-Powered ANPR & Vehicle Gate Intelligence",
    primaryKeyword: "ANPR system India",
    secondaryKeywords: [
      "automatic number plate recognition",
      "vehicle entry exit camera",
      "commercial ANPR software",
      "gate vehicle turnaround tracking",
    ],
    shortAnswer:
      "Resurgenix ANPR & Vehicle Intelligence is an optical license plate recognition system for logistics hubs and commercial facilities to automate gate turnaround and identify unauthorized vehicles. It works by capturing high-resolution vehicle frames at entry checkpoints and extracting alphanumeric characters. Unlike manual logbooks, it creates searchable digital vehicle registries and boom-barrier triggers.",
    problemTitle: "Slow Gate Checkpoints, Manual Logbooks & Stolen Vehicle Risks",
    problem:
      "Security checkpoints at logistics warehouses, manufacturing plants, and corporate tech parks rely on guards manually scribbling license plate numbers in paper registers. This causes vehicle congestion, delayed transport turnaround, and human transcription errors. Security teams have no automated way to detect blacklisted trucks, unregistered visitor cars, or transport delays.",
    problemPoints: [
      "Manual vehicle logging causes major truck bottlenecks at logistics gates and commercial entry points.",
      "Handwritten paper logbooks are prone to illegible handwriting, human error, and missing timestamps.",
      "Unregistered and unauthorized vehicles enter facility premises without automated verification.",
      "Lack of digital vehicle records makes tracking internal yard turnaround and loading times impossible.",
    ],
    specialNotice: {
      type: "anpr",
      title: "Optical Accuracy & Site Condition Notice",
      content:
        "ANPR recognition accuracy depends on physical camera mounting angles (under 30 degrees), adequate non-glare illumination, vehicle approach speed (under 25 km/h at gates), and physical license plate condition (standardized font, unbent, clean plates). Specific optical requirements are validated during site technical assessments.",
    },
    stepFlow: [
      {
        step: "01",
        title: "Vehicle Approach Detection",
        description:
          "Optical camera registers an approaching motor vehicle in the gate lane and triggers frame analysis.",
      },
      {
        step: "02",
        title: "License Plate Localization",
        description:
          "Deep learning model locates the rectangular number plate region on the vehicle front or rear bumper.",
      },
      {
        step: "03",
        title: "Character Optical Recognition",
        description:
          "OCR engine decodes alphanumeric characters, state codes, and vehicle registration numbers.",
      },
      {
        step: "04",
        title: "Vehicle Classification",
        description:
          "Classifies vehicle category (commercial truck, passenger car, two-wheeler) to verify access authorization.",
      },
      {
        step: "05",
        title: "Gate Action & Logging",
        description:
          "Checks plate against whitelist database, logs arrival timestamp, and can signal boom-barrier opening.",
      },
    ],
    capabilities: [
      {
        title: "High-Accuracy Plate Extraction",
        description:
          "Trained on Indian vehicle registration plate formats, standard fonts, and high-security registration plates (HSRP).",
      },
      {
        title: "Vehicle Category Classification",
        description:
          "Distinguishes heavy commercial multi-axle trucks, light commercial vehicles, passenger sedans, and two-wheelers.",
      },
      {
        title: "Automated Whitelist / Blacklist Matching",
        description:
          "Instantly alerts guards when a blacklisted vehicle approaches or triggers barrier opening for authorized staff.",
      },
      {
        title: "Turnaround Time (TAT) Tracking",
        description:
          "Calculates exact duration from gate entry to exit to identify logistics and loading bay bottlenecks.",
      },
    ],
    operatorReceives: [
      {
        item: "Gate Dashboard Entry Card",
        detail:
          "Display showing vehicle photo, cropped plate image, decoded text, and authorization status.",
      },
      {
        item: "Unauthorized Vehicle Warning",
        detail:
          "Visual and audible alert on checkpoint screen when an unregistered vehicle approaches the boom barrier.",
      },
      {
        item: "Searchable Vehicle Log",
        detail:
          "Search by full or partial plate number to locate exact entry/exit timestamps and camera snapshots.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Camera Placement",
        specification: "Mounting height 1.2 to 2.0 meters, angle < 30°",
        notes: "Direct line-of-sight to front/rear vehicle bumper at gate approach.",
      },
      {
        parameter: "Camera Optics",
        specification: "Varifocal lens with fast shutter speed (1/500s+)",
        notes: "Fast shutter prevents motion blur and headlight glare blooming.",
      },
      {
        parameter: "Plate Pixel Density",
        specification: "Minimum 150 pixels across the license plate width",
        notes: "Essential for reliable optical character recognition.",
      },
      {
        parameter: "Illumination Condition",
        specification: "Anti-glare IR illuminator or white LED spotlight",
        notes: "Prevents high-beam headlight flare from blinding camera sensor at night.",
      },
      {
        parameter: "Processing Location",
        specification: "Local Gate Edge PC / Server",
        notes: "Processes frames locally in under 400 milliseconds for gate barrier triggers.",
      },
    ],
    deploymentOptions: [
      {
        model: "Local Gate Edge Appliance",
        fit: "Factory gates, commercial parking barriers, and logistics warehouse checkpoints.",
        details:
          "Operates locally at the security gatehouse to trigger physical boom barrier relays with zero latency.",
      },
      {
        model: "Centralized Multi-Gate Server",
        fit: "Large multi-gate industrial parks and commercial campus perimeters.",
        details:
          "Processes 4 to 8 gate lanes simultaneously on a central server in the security command room.",
      },
    ],
    useCases: [
      {
        title: "Automated Factory Gate Pass Entry",
        scenario:
          "Registered supply chain truck arrives at a manufacturing plant raw materials gate.",
        detection:
          "ANPR module reads plate number, matches against daily delivery schedule, and verifies vehicle type.",
        outcome:
          "Boom barrier opens automatically; entry timestamp is logged into ERP without guard intervention.",
      },
      {
        title: "Blacklisted Vehicle Detection at Corporate Campus",
        scenario:
          "A vehicle previously flagged for unauthorized parking or security infraction approaches main gate.",
        detection: "Plate characters match internal security blacklist database.",
        outcome:
          "Gate barrier remains locked and guard console alerts officers to conduct physical inspection.",
      },
      {
        title: "Warehouse Loading Bay Turnaround Time Tracking",
        scenario:
          "Logistics director tracks how long contract trucks take from entry gate to loading dock exit.",
        detection: "System matches entry plate timestamp with exit gate plate timestamp.",
        outcome: "Automated report highlights carrier detention times and loading inefficiencies.",
      },
    ],
    pilotValidation: [
      "Camera shutter speed and optical zoom tuning against headlight glare.",
      "OCR character accuracy across clean, dirty, and non-standard vehicle plates.",
      "Boom barrier relay trigger latency and integration reliability.",
      "Vehicle classification accuracy under varied approach speeds.",
    ],
    limitations: [
      "Severely damaged, mud-covered, or folded license plates cannot be decoded optically.",
      "Non-standard handwritten or stylized vanity fonts may result in partial character errors.",
      "High approach speeds exceeding 30 km/h at steep angles cause motion blur without specialized fast-shutter cameras.",
    ],
    relevantIndustries: [
      {
        name: "Logistics & Warehousing",
        slug: "logistics-warehousing",
        context: "Gate turnaround, truck tracking, and loading dock access automation.",
      },
      {
        name: "Manufacturing & Industrial",
        slug: "manufacturing",
        context:
          "Plant entry gate security, contractor vehicle passes, and raw material transport logs.",
      },
      {
        name: "Corporate & Enterprise",
        slug: "corporate-enterprise",
        context:
          "Employee parking authorization, visitor vehicle logging, and perimeter gate control.",
      },
    ],
    faqs: [
      {
        question: "Can our existing gate CCTV cameras be used for ANPR?",
        answer:
          "Existing cameras can be used if they provide adequate resolution (150+ pixels across the plate), a shallow mounting angle (under 30 degrees), and a fast shutter speed to prevent motion blur and headlight glare.",
      },
      {
        question: "How does the system handle night-time vehicle headlights?",
        answer:
          "We configure cameras with specialized fast shutter speeds (1/500s or faster) and anti-glare infrared illumination to prevent headlight blooming from washing out the plate characters.",
      },
      {
        question: "Can ANPR automatically open our boom barrier?",
        answer:
          "Yes. Our edge software can interface with standard relay controllers to send an open signal to the gate barrier when a whitelisted plate is verified.",
      },
      {
        question: "Does the system support Indian state codes and HSRP plates?",
        answer:
          "Yes. Our models are specifically trained on Indian vehicle registration plate formats, state codes, and High Security Registration Plates (HSRP).",
      },
    ],
    relatedSolutions: [
      {
        title: "AI Video Analytics",
        slug: "ai-video-analytics",
        status: "pilot",
        description: "Comprehensive person and vehicle detection on existing cameras.",
      },
      {
        title: "Restricted Zone Detection",
        slug: "restricted-zone-unauthorized-entry-detection",
        status: "pilot",
        description: "Virtual boundary intrusion alerts for sensitive facility yards.",
      },
    ],
    relatedResources: [
      {
        title: "How AI Video Analytics Works with Existing CCTV",
        href: "/resources/how-ai-video-analytics-works",
        type: "guide",
      },
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Request a Pilot Program",
      href: "/request-pilot",
    },
    status: "in-development",
  },

  // =========================================================================
  // 9. Centralized Video Intelligence (In Development)
  // =========================================================================
  {
    slug: "centralized-video-intelligence",
    title: "Centralized Video Intelligence",
    seoTitle: "Centralized Video Intelligence Dashboard | Resurgenix",
    metaDescription:
      "Unified multi-site video management console. Aggregate camera stream health, searchable event metadata, and operator role management from one interface.",
    h1: "Centralized Video Intelligence & Multi-Site Management Console",
    primaryKeyword: "centralized video intelligence dashboard",
    secondaryKeywords: [
      "multi-camera management dashboard",
      "CCTV stream health monitoring",
      "centralized security console",
      "video analytics dashboard",
    ],
    shortAnswer:
      "Resurgenix Centralized Video Intelligence is a unified monitoring console for multi-location enterprises to manage distributed camera networks, stream health statuses, and incident logs from one interface. It works by aggregating edge metadata and alert telemetry over secure network tunnels. Unlike isolated branch NVRs, it delivers consolidated situational visibility across regional facilities.",
    problemTitle: "Silent Camera Failures & Blind Spots Across Multiple Sites",
    problem:
      "Enterprises operating multiple buildings, manufacturing facilities, or retail branches rarely know when a remote camera goes offline, gets covered by dust, or is intentionally misdirected. When an incident occurs, security discovers too late that critical cameras were disconnected weeks ago. Furthermore, searching for specific historical events across 10 different branch DVRs requires physically visiting each location.",
    problemPoints: [
      "Cameras fail silently due to power outages, cable cuts, or network glitches without triggering admin alerts.",
      "Searching for past incidents requires manual inspection of isolated, uncoordinated local recorders.",
      "Security managers have no unified view of regional alert volumes, false alarm rates, or guard responses.",
      "Maintaining user permissions and firmware across dozens of remote NVRs is an administrative nightmare.",
    ],
    specialNotice: {
      type: "under-development",
      title: "Capability Under Active Development",
      content:
        "This centralized management console is in active engineering. Core multi-camera health monitoring and unified alert logging are functional; multi-tenant administration is available for early evaluation pilots.",
    },
    stepFlow: [
      {
        step: "01",
        title: "Edge Metadata Tunneling",
        description:
          "Local edge appliances monitor on-site cameras and transmit lightweight telemetry and health pings to central command.",
      },
      {
        step: "02",
        title: "Stream Health Diagnostic Check",
        description:
          "System runs continuous checks for RTSP dropouts, video signal loss, lens occlusion, and frame rate degradation.",
      },
      {
        step: "03",
        title: "Unified Event Indexing",
        description:
          "All spatial intrusion alerts, vehicle detections, and attendance logs across all branches are indexed into a searchable schema.",
      },
      {
        step: "04",
        title: "Centralized Console Visualization",
        description:
          "Operators monitor live camera status grids, real-time alert tickers, and interactive site maps from any browser.",
      },
    ],
    capabilities: [
      {
        title: "Automated Stream Health Diagnostics",
        description:
          "Identifies camera disconnections, frozen video frames, and optical occlusion immediately without manual checks.",
      },
      {
        title: "Unified Fast Event Search",
        description:
          "Search historical events across all cameras by timestamp, location, target classification (person/vehicle), and rule type.",
      },
      {
        title: "Centralized User & Role Management",
        description:
          "Assign and revoke operator viewing privileges, administrative settings, and export permissions from a single panel.",
      },
      {
        title: "Fleet Firmware & Model Management",
        description:
          "Remotely update edge analytics models and detection rule configurations across distributed facilities.",
      },
    ],
    operatorReceives: [
      {
        item: "Camera Health Matrix",
        detail:
          "Real-time dashboard grid showing green/red connectivity status and stream bitrates for every camera.",
      },
      {
        item: "Unified Chronological Alert Log",
        detail:
          "Consolidated ticker displaying alerts from all enterprise sites with one-click snapshot verification.",
      },
      {
        item: "System Downtime Notifications",
        detail:
          "Immediate alert when a critical security camera drops offline for longer than 60 seconds.",
      },
    ],
    requirementsTable: [
      {
        parameter: "Client Browser",
        specification: "Modern Web Browser (Chrome, Edge, Firefox)",
        notes: "Zero client-side desktop software installation required.",
      },
      {
        parameter: "Central Server Platform",
        specification: "On-Premise Server / Private Cloud VM",
        notes: "Hosts the centralized database, web server, and API gateway.",
      },
      {
        parameter: "Network Connectivity",
        specification: "Secure HTTPS / WSS over corporate WAN or VPN",
        notes: "Requires minimal telemetry bandwidth (under 20 Kbps per connected site).",
      },
      {
        parameter: "Camera Ingest Limits",
        specification: "Scalable architecture supporting 10 to 500+ streams",
        notes: "Distributed edge processing allows central console to scale seamlessly.",
      },
    ],
    deploymentOptions: [
      {
        model: "Private Cloud Central Console",
        fit: "Multi-branch commercial banks, retail chains, and corporate enterprises.",
        details:
          "Central web console hosted on corporate cloud; edge appliances at branches sync telemetry via TLS.",
      },
      {
        model: "On-Premise Control Room Server",
        fit: "Single-campus industrial plants and critical infrastructure facilities.",
        details:
          "Server deployed on the local LAN server room, driving the security operations center video wall.",
      },
    ],
    useCases: [
      {
        title: "Silent Camera Cable Cut Detection",
        scenario:
          "A back-alley camera at a regional warehouse is accidentally disconnected during electrical maintenance.",
        detection:
          "Health diagnostic module flags RTSP stream timeout within 30 seconds of signal loss.",
        outcome:
          "Central SOC dispatches a maintenance ticket immediately, preventing a 3-week blind spot.",
      },
      {
        title: "Rapid Multi-Branch Incident Search",
        scenario:
          "Corporate security needs to verify whether a specific transport truck visited 3 regional plants yesterday.",
        detection: "Operator enters vehicle plate letters into the centralized search bar.",
        outcome:
          "System returns matching timestamps, camera snapshots, and entry gate records across all 3 sites in 5 seconds.",
      },
    ],
    pilotValidation: [
      "Stream health alert responsiveness upon simulated network disconnects.",
      "Query speed across historical indexed metadata records.",
      "Bandwidth consumption over corporate SD-WAN under continuous telemetry sync.",
    ],
    limitations: [
      "Does not store continuous 24/7 raw video centrally; stores metadata, snapshots, and short event clips.",
      "Branch-level internet outage temporarily pauses central telemetry until reconnection.",
    ],
    relevantIndustries: [
      {
        name: "Corporate & Enterprise",
        slug: "corporate-enterprise",
        context: "Multi-site corporate campuses, commercial branch networks, and IT hubs.",
      },
      {
        name: "Logistics & Warehousing",
        slug: "logistics-warehousing",
        context: "Distributed warehouse networks and regional transport hubs.",
      },
      {
        name: "Retail Chains & Commercial Hubs",
        slug: "retail",
        context: "Multi-store retail chains requiring centralized camera uptime oversight.",
      },
    ],
    faqs: [
      {
        question: "Does the central dashboard require high internet bandwidth?",
        answer:
          "No. Because video inference occurs locally on edge hardware at each facility, only lightweight JSON metadata and event snapshots are sent to the central dashboard, consuming negligible bandwidth.",
      },
      {
        question: "Can we view live video feeds from the central console?",
        answer:
          "Yes. Operators can click on any camera channel or event alert to pull up an on-demand live RTSP stream over secure corporate network tunnels.",
      },
      {
        question: "How does it detect if a camera is covered or spray-painted?",
        answer:
          "Our optical health algorithms detect sudden frame occlusion, drastic contrast loss, and lens obstruction, alerting operators that a camera has been tampered with.",
      },
    ],
    relatedSolutions: [
      {
        title: "AI Video Analytics",
        slug: "ai-video-analytics",
        status: "pilot",
        description: "Core real-time person, vehicle, and object classification on existing CCTV.",
      },
      {
        title: "Enterprise Security",
        slug: "enterprise-security",
        status: "in-development",
        description: "Multi-campus monitoring, operator response auditing, and access control.",
      },
    ],
    relatedResources: [
      {
        title: "Edge AI vs. Centralized VMS Comparison",
        href: "/compare/edge-ai-vs-centralized-vms",
        type: "comparison",
      },
    ],
    ctaPrimary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    ctaSecondary: {
      label: "Request a Pilot Program",
      href: "/request-pilot",
    },
    status: "in-development",
  },
];

export function getSolutionBySlug(slug: string): SolutionEntry | undefined {
  return solutions.find((s) => s.slug === slug);
}

export default solutions;
