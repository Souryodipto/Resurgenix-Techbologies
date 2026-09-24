import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Request Received | Resurgenix Technologies",
  description: "Thank you for requesting an AI video intelligence pilot evaluation.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function RequestPilotThankYouPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
        ✓
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
        Pilot Evaluation Request Received
      </h1>
      <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto">
        Thank you for submitting your pilot parameters. A senior solutions engineer will contact you
        within 24 hours to schedule the preliminary camera stream compatibility review.
      </p>

      <div className="border border-slate-200 rounded-lg p-6 bg-slate-50 text-left max-w-lg mx-auto mb-8">
        <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          What Happens Next in the Pilot Flow
        </h2>
        <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside">
          <li>
            <strong>Compatibility Verification:</strong> We confirm your existing camera RTSP
            streams and resolution.
          </li>
          <li>
            <strong>Zone Definition:</strong> You select the 3 to 5 priority camera locations for
            evaluation.
          </li>
          <li>
            <strong>Deployment:</strong> We configure edge inference on a test appliance or secure
            local workstation.
          </li>
          <li>
            <strong>Evaluation Report:</strong> Receive verified incident logs, detection accuracy,
            and latency benchmarks.
          </li>
        </ol>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link
          href="/resources/evaluating-video-analytics-pilots"
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition"
        >
          Read the Pilot Evaluation Checklist
        </Link>
        <Link
          href="/"
          className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-50 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
