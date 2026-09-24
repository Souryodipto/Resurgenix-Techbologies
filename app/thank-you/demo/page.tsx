import type { Metadata } from "next";
import { ThankYouTemplate } from "@/components/sections/ThankYouTemplate";

export const metadata: Metadata = {
  title: "Demo Request Received | Resurgenix Technologies",
  description: "Thank you for requesting an enterprise video intelligence demonstration.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoThankYouPage() {
  return (
    <ThankYouTemplate
      type="demo"
      title="Thank You for Requesting a Demo"
      subtitle="Your demonstration request has been routed to our technical engineering and solutions team."
      conversionEvent="demo_request"
      nextSteps={[
        {
          number: "1",
          title: "Technical Requirement Review",
          description:
            "A solutions engineer evaluates your camera count, physical environment, and requested detection capabilities.",
        },
        {
          number: "2",
          title: "Discovery Call & Demonstration Setup",
          description:
            "We coordinate a convenient time for a focused demonstration demonstrating the relevant computer vision models.",
        },
        {
          number: "3",
          title: "Optional On-Site Assessment",
          description:
            "If applicable, our team conducts a remote or on-site RTSP stream inspection to confirm edge compute sizing.",
        },
      ]}
      primaryAction={{
        label: "Explore Solutions",
        href: "/solutions",
      }}
      secondaryAction={{
        label: "Read Architectural Guides",
        href: "/resources/how-ai-video-analytics-works",
      }}
    />
  );
}
