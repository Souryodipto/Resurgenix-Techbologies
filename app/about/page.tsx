import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "About Resurgenix Technologies | Indian AI Video Intelligence",
  description:
    "Learn about Resurgenix Technologies, founded in Kolkata, West Bengal. Building practical computer vision intelligence for enterprise and industrial infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          About
        </span>
      </nav>

      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
        Company Overview &amp; Leadership
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-6">
        Building the Brain Behind Physical Security Eyes
      </h1>

      <p className="text-base text-slate-700 leading-relaxed mb-6">
        {siteConfig.company.legalName} (brand: {siteConfig.company.brandName}) is an Indian
        artificial intelligence and computer vision technology company headquartered in{" "}
        {siteConfig.company.fullHqDisplay}.
      </p>

      <p className="text-base text-slate-700 leading-relaxed mb-8">
        Organizations worldwide have invested billions in physical surveillance cameras, yet
        conventional CCTV only records video passively. Our mission is to add an intelligent
        software layer on top of existing surveillance infrastructure—moving from passive footage
        storage toward real-time spatial detection and automated security intelligence.
      </p>

      {/* Leadership Profile */}
      <div className="border border-slate-200 rounded-lg p-6 bg-slate-50 mb-10">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
          Engineering Leadership
        </h2>
        <h3 className="text-xl font-bold text-slate-900">Souryodipto Debnath</h3>
        <p className="text-xs text-blue-700 font-medium mb-3">
          Founder, Resurgenix Technologies Pvt. Ltd.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Background in Electronics &amp; Computer Science, Artificial Intelligence, Computer
          Vision, Robotics, and Edge Computing. Focused on building practical, reliable AI systems
          that turn existing physical infrastructure into intelligent operational assets.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/how-it-works"
          className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm shadow-sm transition"
        >
          Explore Technical Architecture
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 text-sm transition"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  );
}
