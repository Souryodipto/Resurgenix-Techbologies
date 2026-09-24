import type { Metadata } from "next";
import { ThankYouTemplate } from "@/components/sections/ThankYouTemplate";

export const metadata: Metadata = {
  title: "Partner Application Received | Resurgenix Technologies",
  description: "Thank you for applying to the Resurgenix Partner & System Integrator Program.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PartnerThankYouPage() {
  return (
    <ThankYouTemplate
      type="partner"
      title="Partner Application Received"
      subtitle="Thank you for your interest in partnering with Resurgenix Technologies as a System Integrator or Technology Partner."
      conversionEvent="partner_submit"
      nextSteps={[
        {
          number: "1",
          title: "Territory & Capability Evaluation",
          description:
            "Our alliance lead reviews your regional presence, current client base, and technical installation capabilities.",
        },
        {
          number: "2",
          title: "Partner Briefing Call",
          description:
            "We schedule an introductory discussion to review commercial margins, software licensing tiers, and demonstration access.",
        },
        {
          number: "3",
          title: "Partner Enablement & Demo Kit",
          description:
            "Approved partners receive software sandbox access, tender authorization support (MAF), and technical presales training.",
        },
      ]}
      primaryAction={{
        label: "Explore Solutions",
        href: "/solutions",
      }}
      secondaryAction={{
        label: "Return to Homepage",
        href: "/",
      }}
    />
  );
}
