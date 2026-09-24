/**
 * Resurgenix Technologies - Canonical Entity Facts & Knowledge Graph Grounding
 *
 * This file acts as the single source of truth for all corporate facts, entity attributes,
 * and technical specifications referenced across SEO metadata, JSON-LD schemas, and AI search (GEO).
 * Strictly adheres to verified information: no invented awards, ratings, or unverified claims.
 */

export interface CompanyEntity {
  legalName: string;
  brandName: string;
  alternateNames: string[];
  tagline: string;
  supportingTagline: string;
  brandConceptHindi: string;
  description: string;
  shortDescription: string;
  founder: {
    name: string;
    role: string;
    background: string;
  };
  headquarters: {
    locality: string;
    region: string;
    country: string;
    display: string;
  };
  operationalFocus: string[];
  contact: {
    email: string;
    phone: string;
    displayPhone: string;
    whatsappNumber: string;
  };
  social: {
    linkedin: string;
    instagram: string;
  };
  coreArchitecture: {
    inputProtocols: string[];
    videoCodecs: string[];
    deploymentModels: string[];
    processingLatencyMs: string;
    hardwareApproach: string;
  };
  knowsAbout: string[];
  verifiedPrograms: string[];
}

export const companyFacts: CompanyEntity = {
  legalName: "Resurgenix Technologies Pvt. Ltd.",
  brandName: "Resurgenix",
  alternateNames: ["Resurgenix Technologies", "Resurgenix AI"],
  tagline: "Your cameras already see. Resurgenix helps them understand.",
  supportingTagline: "Building the brain of the eyes.",
  brandConceptHindi: "Dekhe Bhi, Samjhe Bhi.",
  description:
    "Resurgenix Technologies builds an AI-powered video intelligence software layer that connects to existing CCTV and IP camera infrastructure via standard RTSP streams, delivering real-time anomaly detection, perimeter virtual fencing, restricted zone monitoring, and operational intelligence without replacing camera hardware.",
  shortDescription:
    "AI video intelligence layer that turns existing CCTV cameras into real-time detection systems.",
  founder: {
    name: "Souryodipto Debnath",
    role: "Founder",
    background: "Electronics and Computer Science, AI, Computer Vision, Robotics, Edge Computing",
  },
  headquarters: {
    locality: "Kolkata",
    region: "West Bengal",
    country: "IN",
    display: "Kolkata, West Bengal, India",
  },
  operationalFocus: [
    "Kolkata",
    "Kalyani",
    "Durgapur",
    "Haldia",
    "West Bengal",
    "Eastern India",
    "India",
  ],
  contact: {
    email: "admin@resurgenixtechnologies.com",
    phone: "+916290985464",
    displayPhone: "+91 6290985464",
    whatsappNumber: "+916290985464",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/resurgenix-technologies-private-limited",
    instagram: "https://www.instagram.com/resurgenix.official",
  },
  coreArchitecture: {
    inputProtocols: ["RTSP", "ONVIF (Profile S, T, G)"],
    videoCodecs: ["H.264", "H.265 / HEVC"],
    deploymentModels: [
      "On-Premise Edge Appliance",
      "Local Enterprise Server",
      "Air-Gapped Industrial Network",
      "Hybrid Telemetry",
    ],
    processingLatencyMs: "30 to 80 milliseconds per frame",
    hardwareApproach:
      "Software and edge intelligence layer on top of existing customer IP cameras and NVR/DVRs (zero hardware rip-and-replace)",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Computer Vision",
    "Video Analytics",
    "Closed-Circuit Television (CCTV)",
    "Edge AI Computing",
    "Real-Time Object Detection",
    "Perimeter Intrusion Detection",
    "Virtual Fencing",
    "Automatic Number Plate Recognition (ANPR)",
    "Restricted Zone Safety Envelopes",
    "Digital Personal Data Protection Act (DPDP Act India)",
    "RTSP Stream Processing",
    "ONVIF Standards",
  ],
  verifiedPrograms: [
    "Portfolio Company at IIM Calcutta Innovation Park (IIMCIP)",
    "Recognized Startup under Startup India (DPIIT)",
  ],
};
