import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message Sent | Resurgenix Technologies",
  description: "Thank you for contacting Resurgenix Technologies.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactThankYouPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
        ✓
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Message Received</h1>
      <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto">
        Thank you for contacting us. Our operations team in Kolkata will review your inquiry and get
        back to you promptly.
      </p>

      <Link
        href="/"
        className="inline-block px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
