import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/content/industries";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Industry Verticals & Sector Surveillance | Resurgenix Technologies",
  description:
    "AI video intelligence tailored for manufacturing plants, corporate campuses, logistics yards, healthcare, retail, and public safety infrastructure.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industry Verticals & Sector Surveillance | Resurgenix Technologies",
    description:
      "AI video intelligence tailored for manufacturing plants, corporate campuses, logistics yards, healthcare, retail, and public safety infrastructure.",
    url: "/industries",
    type: "website",
  },
};

export default function IndustriesHubPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. Header Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-slate-500 mb-6 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium" aria-current="page">
              Industries
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4">
              Sector-Specific Video Intelligence
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              AI Video Intelligence by Industry Vertical
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every facility has distinct physical risks and operational rules. Resurgenix deploys
              tailored computer vision models on your existing CCTV infrastructure—from factory
              machine envelopes to hospital emergency bays and corporate server rooms.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Industry Verticals Grid */}
      <section className="py-14 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
              Enterprise &amp; Commercial Verticals
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Select an industry vertical to review operational challenges, detection scenarios, and
              neutral evaluation checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item) => (
              <div
                key={item.slug}
                className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-navy-900 leading-snug">
                      <Link
                        href={`/industries/${item.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <StatusBadge status={item.status} size="sm" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">{item.shortAnswer}</p>

                  {/* Operational Struggles Highlight */}
                  <div className="mb-5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Core Sector Challenges:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {item.struggles.slice(0, 2).map((st, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold shrink-0">•</span>
                          <span className="line-clamp-1">{st.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions Preview Tags */}
                  <div className="mb-6">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Applicable Solutions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.relevantSolutions.map((sol) => (
                        <Link
                          key={sol.slug}
                          href={`/solutions/${sol.slug}`}
                          className="px-2 py-0.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-blue-700 text-[11px] rounded transition-colors"
                        >
                          {sol.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    href={`/industries/${item.slug}`}
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Explore Sector &rarr;
                  </Link>
                  <Link
                    href={item.ctaPrimary.href}
                    className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {item.ctaPrimary.label}
                  </Link>
                </div>
              </div>
            ))}

            {/* Institutional Programs Card (Smart City) */}
            <div className="p-6 bg-slate-50/80 border border-slate-200 rounded-xl hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-navy-900 leading-snug">
                    <Link
                      href="/solutions/smart-city-video-intelligence"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Smart Cities &amp; Urban Transit
                    </Link>
                  </h3>
                  <StatusBadge status="in-development" size="sm" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  Large-scale computer vision telemetry for municipal Integrated Command and Control
                  Centers (ICCC), urban traffic corridors, and public safety surveillance networks.
                </p>

                <div className="mb-5 pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Institutional Focus:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0">•</span>
                      <span>Traffic congestion and choke point alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0">•</span>
                      <span>Open REST/MQTT telemetry to city ICCC</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <Link
                  href="/solutions/smart-city-video-intelligence"
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Smart City Solution &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Consult Team
                </Link>
              </div>
            </div>

            {/* Institutional Programs Card (Defence & Border) */}
            <div className="p-6 bg-slate-50/80 border border-slate-200 rounded-xl hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-navy-900 leading-snug">
                    <Link
                      href="/solutions/defence-security"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Defence &amp; Border Installations
                    </Link>
                  </h3>
                  <StatusBadge status="roadmap" size="sm" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  Generic public capability language for air-gapped perimeter defense, long-range
                  optical/thermal telemetry, and isolated command posts.
                </p>

                <div className="mb-5 pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Architectural Focus:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0">•</span>
                      <span>Fully air-gapped local server inference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0">•</span>
                      <span>Adversarial weather and foliage filtering</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <Link
                  href="/solutions/defence-security"
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Defence Solution &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Direct Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Evaluation Advisory Section */}
      <section className="py-14 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
              Sector evaluation advisory
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Evaluating computer vision analytics requires examining camera optics, lighting
              realities, and data sovereignty before hardware commitments:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <span className="text-blue-600 font-bold text-lg mb-2 block">01</span>
              <h3 className="text-sm font-bold text-navy-900 mb-2">Optical Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Confirm that existing cameras provide sufficient pixel density across targeted zones
                (e.g., minimum 80px inter-pupillary distance for face verification, clean vehicle
                approach angles for license plates).
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <span className="text-blue-600 font-bold text-lg mb-2 block">02</span>
              <h3 className="text-sm font-bold text-navy-900 mb-2">Data Sovereignty</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensure all video streams remain strictly within your local on-premise network or
                private data center. Resurgenix processes RTSP streams locally with zero external
                cloud forwarding.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <span className="text-blue-600 font-bold text-lg mb-2 block">03</span>
              <h3 className="text-sm font-bold text-navy-900 mb-2">Controlled Pilot</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Test 4 to 8 critical camera channels for 14 days to benchmark detection accuracy,
                response latency, and alert dispatch workflows under real operational conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conversion CTA Block */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Ready to evaluate AI video analytics in your sector?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Request an on-site feasibility assessment or pilot evaluation on your active cameras. No
            hardware replacement required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-demo"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/request-pilot"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold rounded-lg transition-colors"
            >
              Request a Pilot
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
