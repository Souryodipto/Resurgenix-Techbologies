import { siteConfig } from "./site.config";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavCategory {
  title: string;
  items: NavItem[];
}

export const headerNav = {
  solutionsMegaMenu: [
    {
      title: "Core Video Analytics",
      items: [
        {
          label: "AI Video Analytics",
          href: "/solutions/ai-video-analytics",
          badge: "Pilot",
          description: "Real-time person, vehicle, and object classification on existing cameras.",
        },
        {
          label: "ANPR & Vehicle Intelligence",
          href: "/solutions/anpr-vehicle-intelligence",
          badge: "In Dev",
          description: "License plate recognition and gate turnaround logging.",
        },
      ],
    },
    {
      title: "Access & Boundary Security",
      items: [
        {
          label: "Restricted Zone Detection",
          href: "/solutions/restricted-zone-unauthorized-entry-detection",
          badge: "Pilot",
          description: "Virtual spatial boundaries and real-time intrusion alerting.",
        },
        {
          label: "AI Attendance & Workforce",
          href: "/solutions/ai-attendance-workforce-intelligence",
          badge: "Pilot",
          description: "Consent-based contactless workforce attendance and floor logs.",
        },
        {
          label: "Enterprise Security",
          href: "/solutions/enterprise-security",
          badge: "In Dev",
          description: "Unified multi-campus surveillance intelligence and incident workflows.",
        },
      ],
    },
    {
      title: "Institutional & Infrastructure",
      items: [
        {
          label: "Smart City Video Intelligence",
          href: "/solutions/smart-city-video-intelligence",
          badge: "In Dev",
          description: "Public safety, crowd density, and urban traffic monitoring.",
        },
        {
          label: "Centralized Video Console",
          href: "/solutions/centralized-video-intelligence",
          badge: "In Dev",
          description: "Multi-site stream health diagnostics and searchable event logs.",
        },
        {
          label: "Defence & Border Surveillance",
          href: "/solutions/defence-security",
          badge: "Roadmap",
          description: "Air-gapped on-premise perimeter protection and border intelligence.",
        },
      ],
    },
  ],

  industriesDropdown: [
    {
      label: "Corporate & Enterprise",
      href: "/industries/corporate-enterprise",
      description: "Campuses, commercial real estate, and multi-floor IT parks.",
    },
    {
      label: "Manufacturing & Industrial",
      href: "/industries/manufacturing",
      description: "Hazardous machinery zones, worker safety, and plant perimeters.",
    },
    {
      label: "Logistics & Warehousing",
      href: "/industries/logistics-warehousing",
      description: "Gate ANPR, loading bay turnaround, and inventory protection.",
    },
    {
      label: "Healthcare & Hospitals",
      href: "/industries/healthcare",
      description: "ICU restricted zones, patient safety, and ambulance access.",
    },
    {
      label: "Government & Public Safety",
      href: "/industries/government-public-safety",
      description: "Civic infrastructure, municipal command centers, and public safety.",
    },
    {
      label: "Retail Chains",
      href: "/industries/retail",
      description: "Footfall trends, stockroom protection, and occupancy analytics.",
    },
    {
      label: "Hospitality & Hotels",
      href: "/industries/hospitality",
      description: "Guest floor security, service corridors, and perimeter monitoring.",
    },
  ],

  resourcesDropdown: [
    {
      label: "Resources & Insights Hub",
      href: "/resources",
      description: "Technical articles, guides, and compliance documentation.",
    },
    {
      label: "AI vs Traditional CCTV",
      href: "/compare/ai-cctv-vs-traditional-cctv",
      description: "Passive recording vs real-time automated detection.",
    },
    {
      label: "On-Premise vs Cloud Analytics",
      href: "/compare/on-premise-vs-cloud-video-analytics",
      description: "Bandwidth limits, air-gapped security, and data sovereignty.",
    },
    {
      label: "Edge AI vs Centralized VMS",
      href: "/compare/edge-ai-vs-centralized-vms",
      description: "Distributed edge processing vs centralized monolithic servers.",
    },
    {
      label: "Surveillance AI Glossary",
      href: "/glossary",
      description: "Key industry and technical terms explained clearly.",
    },
    {
      label: "Frequently Asked Questions",
      href: "/faq",
      description: "Common questions regarding camera compatibility, pilots, and pricing.",
    },
  ],

  aboutDropdown: [
    {
      label: "About Resurgenix",
      href: "/about",
      description: "Company overview, engineering vision, and leadership.",
    },
    {
      label: "Security & Privacy Governance",
      href: "/security-and-privacy",
      description: "DPDP Act alignment, data sovereignty, and ethical AI safeguards.",
    },
    {
      label: "System Integrator Partners",
      href: "/partners",
      description: "Channel partnership program, MAFs, and commercial opportunities.",
    },
    {
      label: "Kolkata & Eastern India Hub",
      href: "/locations/kolkata-eastern-india",
      description: "Our regional headquarters, operational roots, and engineering base.",
    },
    {
      label: "Contact Us",
      href: "/contact",
      description: "Direct email, phone, and prefilled WhatsApp communication.",
    },
  ],

  directLinks: [
    {
      label: "How It Works",
      href: "/how-it-works",
    },
  ],

  ctas: {
    whatsapp: {
      label: "WhatsApp us",
      href: siteConfig.contact.whatsappUrl,
    },
    primary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    pilot: {
      label: "Request a Pilot",
      href: "/request-pilot",
    },
  },
};

export const footerNav = {
  column1Solutions: [
    { label: "AI Video Analytics", href: "/solutions/ai-video-analytics" },
    { label: "AI Attendance & Workforce", href: "/solutions/ai-attendance-workforce-intelligence" },
    {
      label: "Restricted Zone Detection",
      href: "/solutions/restricted-zone-unauthorized-entry-detection",
    },
    { label: "Enterprise Security", href: "/solutions/enterprise-security" },
    { label: "ANPR & Vehicle Intelligence", href: "/solutions/anpr-vehicle-intelligence" },
    { label: "Centralized Video Console", href: "/solutions/centralized-video-intelligence" },
    { label: "Smart City Intelligence", href: "/solutions/smart-city-video-intelligence" },
    { label: "Defence & Security", href: "/solutions/defence-security" },
    { label: "Border Surveillance", href: "/solutions/border-surveillance" },
  ],
  column2Industries: [
    { label: "Corporate Campuses", href: "/industries/corporate-enterprise" },
    { label: "Manufacturing & Industrial", href: "/industries/manufacturing" },
    { label: "Logistics & Warehousing", href: "/industries/logistics-warehousing" },
    { label: "Healthcare & Hospitals", href: "/industries/healthcare" },
    { label: "Retail Chains", href: "/industries/retail" },
    { label: "Hospitality & Hotels", href: "/industries/hospitality" },
    { label: "Government & Public Safety", href: "/industries/government-public-safety" },
  ],
  column3Resources: [
    { label: "Resources Hub", href: "/resources" },
    { label: "How It Works Architecture", href: "/how-it-works" },
    { label: "AI CCTV vs Traditional CCTV", href: "/compare/ai-cctv-vs-traditional-cctv" },
    {
      label: "On-Premise vs Cloud Analytics",
      href: "/compare/on-premise-vs-cloud-video-analytics",
    },
    { label: "Edge AI vs Centralized VMS", href: "/compare/edge-ai-vs-centralized-vms" },
    { label: "Surveillance AI Glossary", href: "/glossary" },
    { label: "Frequently Asked Questions", href: "/faq" },
  ],
  column4Company: [
    { label: "About Resurgenix", href: "/about" },
    { label: "Security & Privacy Governance", href: "/security-and-privacy" },
    { label: "System Integrator Program", href: "/partners" },
    { label: "Kolkata & Eastern India Hub", href: "/locations/kolkata-eastern-india" },
    { label: "Request a Demo", href: "/request-demo" },
    { label: "Request a Pilot Program", href: "/request-pilot" },
    { label: "Contact Operations", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security Overview", href: "/security-and-privacy" },
  ],
};
