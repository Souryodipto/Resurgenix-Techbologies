import type { Metadata } from "next";
import { ThankYouTemplate } from "@/components/sections/ThankYouTemplate";

export const metadata: Metadata = {
  title: "Message Received | Resurgenix Technologies",
  description: "Thank you for contacting Resurgenix Technologies.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThankYouPage() {
  return (
    <ThankYouTemplate
      type="contact"
      title="Message Received"
      subtitle="Thank you for reaching out to Resurgenix Technologies. Your enquiry has been received."
      conversionEvent="contact_submit"
      nextSteps={[
        {
          number: "1",
          title: "Inquiry Routing",
          description:
            "Your message is directed to the appropriate department (technical engineering, commercial solutions, or partnership desk).",
        },
        {
          number: "2",
          title: "Direct Response",
          description:
            "A member of our team will review your enquiry details and get in touch with relevant guidance or next steps.",
        },
      ]}
      primaryAction={{
        label: "Return to Homepage",
        href: "/",
      }}
      secondaryAction={{
        label: "Explore Solutions",
        href: "/solutions",
      }}
    />
  );
}
