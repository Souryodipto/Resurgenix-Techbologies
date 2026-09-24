export interface CategorizedFAQ {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const faqsData: CategorizedFAQ[] = [
  {
    category: "Platform & Capabilities",
    items: [
      {
        question: "What is Resurgenix Technologies?",
        answer:
          "Resurgenix Technologies is an AI-powered video intelligence company that builds software layers for existing CCTV surveillance infrastructure. Instead of replacing operational cameras, Resurgenix connects to compatible IP cameras and NVRs to deliver real-time incident detection, automated alerts, and operational visibility.",
      },
      {
        question: "How does Resurgenix differ from conventional CCTV systems?",
        answer:
          "Conventional CCTV systems primarily record historical video footage for manual review after an incident has already occurred. Resurgenix introduces an automated AI layer that analyzes video streams in real time, detecting unauthorized entries, boundary crossings, and anomalies to alert security operators within seconds.",
      },
      {
        question: "Is Resurgenix a CCTV camera manufacturer or reseller?",
        answer:
          "No. Resurgenix is an AI software and computer vision engineering company. We do not sell commodity camera hardware; we provide the intelligent software layer that empowers organizations to extract real-time value from their existing camera investments.",
      },
    ],
  },
  {
    category: "Hardware & Camera Compatibility",
    items: [
      {
        question: "Will we need to replace all our existing CCTV cameras?",
        answer:
          "In most cases, no. Resurgenix is designed to ingest standard RTSP and ONVIF video streams from compatible IP cameras, NVRs, DVRs, and XVRs across major brands (including Hikvision, Dahua, CP Plus, Axis, and Bosch). Camera compatibility is formally validated during our initial technical assessment.",
      },
      {
        question: "What are the minimum camera requirements to run AI analytics?",
        answer:
          "Cameras should ideally support standard RTSP streaming, H.264 or H.265 compression, and a minimum resolution of 1080p (2 MP) at 15 frames per second for spatial detection. Specific requirements vary based on the desired capability (e.g. gate ANPR vs. wide perimeter detection).",
      },
      {
        question: "Can Resurgenix run on analog CCTV cameras?",
        answer:
          "Analog cameras connected to modern DVRs or XVRs that expose RTSP video streams over the local network can often be supported. We evaluate existing DVR stream encoding during the technical assessment.",
      },
    ],
  },
  {
    category: "Deployment & Network Architecture",
    items: [
      {
        question: "Can the system operate completely offline in an air-gapped facility?",
        answer:
          "Yes. Our edge-first deployment architecture allows the entire computer vision pipeline to run locally on an on-premise edge server or workstation, with zero external internet connectivity or cloud data transmission required.",
      },
      {
        question: "Will video analytics saturate our corporate network bandwidth?",
        answer:
          "No. Because video frames are processed locally at the edge on the local network, raw video feeds never need to stream continuously across external corporate WAN connections. Only lightweight metadata alerts (a few kilobytes) are transmitted to the dashboard.",
      },
      {
        question: "What deployment models are supported?",
        answer:
          "Resurgenix supports fully on-premise edge deployments, centralized private enterprise server architectures, and secure hybrid configurations depending on organizational security policy and infrastructure topology.",
      },
    ],
  },
  {
    category: "Privacy, Compliance & Data Governance",
    items: [
      {
        question: "How does Resurgenix comply with India's DPDP Act 2023?",
        answer:
          "Resurgenix adopts a strict privacy-by-design architecture. Facial recognition features are limited to consent-based employee verification and opt-in access workflows. Biometric data is stored as encrypted mathematical vector templates on local servers rather than raw images, with complete audit logs and role-based access controls.",
      },
      {
        question: "Does Resurgenix conduct mass public facial identification?",
        answer:
          "No. Resurgenix does not engage in indiscriminate public biometric mass surveillance. Our models focus on spatial object detection, boundary protection, vehicle identification, and consent-based workforce management.",
      },
    ],
  },
  {
    category: "Pilots & Commercial Engagement",
    items: [
      {
        question: "What is the Resurgenix Pilot Program?",
        answer:
          "The Pilot Program is a controlled, low-risk proof-of-concept deployment on 3 to 5 critical existing camera streams. It allows enterprise security and facility teams to evaluate real-world detection accuracy, alert latency, and workflow integration within their live environment before committing to enterprise rollout.",
      },
      {
        question: "Why does Resurgenix not display public pricing on the website?",
        answer:
          "Enterprise video intelligence deployments vary significantly based on active camera channel counts, on-premise compute topology, software modules selected, and integration scope. We provide transparent, custom quotations following an initial assessment.",
      },
    ],
  },
];

export default faqsData;
