import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Request Received | Resurgenix Technologies",
  description: "Thank you for requesting an enterprise video intelligence demonstration.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function RequestDemoThankYouPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
        ✓
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
        Demo Request Received
      </h1>
      <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto">
        Thank you for contacting Resurgenix. Our engineering solutions team will review your
        requirements and reach out within 1 business day to coordinate the demonstration.
      </p>

      <div className="border border-slate-200 rounded-lg p-6 bg-slate-50 text-left max-w-lg mx-auto mb-8">
        <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Recommended Next Steps
        </h2>
        <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
          <li>
            Review our{" "}
            <Link href="/how-it-works" className="text-blue-600 hover:underline">
              Technical Architecture
            </Link>{" "}
            to see how RTSP streams connect.
          </li>
          <li>
            Explore our{" "}
            <Link href="/solutions" className="text-blue-600 hover:underline">
              Solutions Catalog
            </Link>{" "}
            for detailed feature specifications.
          </li>
          <li>
            For immediate queries, message our team on WhatsApp: <strong>+91 6290985464</strong>.
          </li>
        </ul>
      </div>

      <Link
        href="/"
        className="inline-block px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
