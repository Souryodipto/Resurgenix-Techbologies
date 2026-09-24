import type { Metadata } from "next";
import { ThankYouTemplate } from "@/components/sections/ThankYouTemplate";

export const metadata: Metadata = {
  title: "Pilot Request Received | Resurgenix Technologies",
  description: "Thank you for requesting an on-premise video analytics pilot program.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PilotThankYouPage() {
  return (
    <ThankYouTemplate
      type="pilot"
      title="Pilot Evaluation Request Received"
      subtitle="We have received your pilot evaluation specifications for testing on your existing CCTV infrastructure."
      conversionEvent="pilot_request"
      nextSteps={[
        {
          number: "1",
          title: "Preliminary Feasibility Review",
          description:
            "We inspect your designated camera count, physical zone geometry, and preferred deployment architecture (edge or on-premise).",
        },
        {
          number: "2",
          title: "Optical Stream Assessment",
          description:
            "We verify RTSP stream accessibility, resolution (1080p recommended), illumination levels, and mounting angles.",
        },
        {
          number: "3",
          title: "Pilot Scope & Agreement",
          description:
            "Together, we finalize the 4 to 8 camera test footprint, detection parameters, and ground-truth validation criteria.",
        },
      ]}
      primaryAction={{
        label: "Review Pilot Evaluation Checklist",
        href: "/resources/evaluating-video-analytics-pilots",
      }}
      secondaryAction={{
        label: "Return to Homepage",
        href: "/",
      }}
    />
  );
}
