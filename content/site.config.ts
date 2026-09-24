/**
 * Resurgenix Technologies Corporate Site Configuration
 *
 * Guardrail notice:
 * All constants exported from this file reflect verified facts or explicitly
 * documented assumptions from /docs/PROJECT_BRIEF.md.
 * Unknown or unverified details are logged in /docs/OPEN_ITEMS.md.
 */

export interface SiteConfig {
  company: {
    legalName: string;
    brandName: string;
    tagline: string;
    supportingTagline: string;
    brandConceptHindi: string;
    description: string;
    hqCity: string;
    state: string;
    country: string;
    fullHqDisplay: string;
    operationalFocus: string[];
    foundedYear?: number;
  };
  contact: {
    email: string;
    phone: string;
    displayPhone: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  social: {
    linkedin: string;
    instagram: string;
  };
  siteUrl: string;
  isAssumedUrl: boolean;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    pilot: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
}

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const defaultSiteUrl = "https://resurgenixtechnologies.com";

export const siteConfig: SiteConfig = {
  company: {
    legalName: "Resurgenix Technologies Pvt. Ltd.",
    brandName: "Resurgenix",
    tagline: "Your cameras already see. Resurgenix helps them understand.",
    supportingTagline: "Building the brain of the eyes.",
    brandConceptHindi: "Dekhe Bhi, Samjhe Bhi.",
    description:
      "Resurgenix Technologies builds AI-powered video intelligence systems that transform existing CCTV infrastructure into intelligent, real-time security and operational platforms.",
    hqCity: "Kolkata",
    state: "West Bengal",
    country: "India",
    fullHqDisplay: "Kolkata, West Bengal, India",
    operationalFocus: ["Kolkata", "Kalyani", "West Bengal", "Eastern India", "India"],
  },
  contact: {
    email: "admin@resurgenixtechnologies.com",
    phone: "+916290985464",
    displayPhone: "+91 6290985464",
    whatsappNumber: "+916290985464",
    // Prefilled WhatsApp message for inbound business inquiries
    whatsappUrl: `https://wa.me/916290985464?text=${encodeURIComponent(
      "Hello Resurgenix team, I am interested in exploring an AI video intelligence pilot for our surveillance infrastructure."
    )}`,
  },
  social: {
    linkedin: "https://www.linkedin.com/company/resurgenix-technologies-private-limited",
    instagram: "https://www.instagram.com/resurgenix.official",
  },
  siteUrl: rawSiteUrl || defaultSiteUrl,
  isAssumedUrl: !rawSiteUrl,
  cta: {
    primary: {
      label: "Request a Demo",
      href: "/request-demo",
    },
    pilot: {
      label: "Request a Pilot",
      href: "/request-pilot",
    },
    secondary: {
      label: "Explore Solutions",
      href: "/solutions",
    },
  },
};

export default siteConfig;
