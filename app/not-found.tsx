import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center px-4 py-16 text-center">
      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
        404 ERROR
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-2">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 max-w-md mb-8">
        The page you are looking for does not exist or may have been relocated.
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-sm transition"
        >
          Return to Homepage
        </Link>
        <Link
          href="/solutions"
          className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-50 transition"
        >
          View Solutions
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-50 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
