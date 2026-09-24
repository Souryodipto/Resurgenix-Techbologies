import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Contact Sales & Operations | Resurgenix Technologies",
  description:
    "Get in touch with the Resurgenix engineering and solutions team in Kolkata, West Bengal, India for enterprise video intelligence enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sales & Operations | Resurgenix Technologies",
    description:
      "Get in touch with the Resurgenix engineering and solutions team in Kolkata, West Bengal, India.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-slate-500 mb-6 flex items-center gap-2"
        >
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-medium" aria-current="page">
            Contact
          </span>
        </nav>

        {/* Header Block */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Direct Communications
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Connect with our team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you have questions about camera compatibility, stream requirements, enterprise
            partnerships, or our product roadmap, our engineering and leadership team is here to
            help.
          </p>
        </div>

        {/* Two-Column Grid: Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <h2 className="text-lg font-bold text-navy-900 mb-4">Send us an enquiry</h2>
            <ContactForm />
          </div>

          {/* Right Column: Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
              <h2 className="text-base font-bold text-navy-900 mb-4">Direct Contact Channels</h2>

              <div className="space-y-4 text-xs">
                {/* WhatsApp Button */}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors shadow-xs"
                >
                  <span className="text-xl">💬</span>
                  <div>
                    <span className="font-bold block text-sm">Message on WhatsApp</span>
                    <span className="text-emerald-100 text-[11px]">
                      Instant founder &amp; engineering channel
                    </span>
                  </div>
                </a>

                {/* Email */}
                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-bold text-blue-600 hover:text-blue-800"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">
                    For enterprise RFPs, technical questions, and demo requests.
                  </p>
                </div>

                {/* Phone */}
                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Telephone
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm font-bold text-slate-900 hover:text-slate-700"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Available during standard Indian business hours (IST).
                  </p>
                </div>

                {/* Headquarters Location (Strictly city/state/country, no street address) */}
                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Headquarters
                  </span>
                  <p className="text-sm font-bold text-navy-900">Kolkata, West Bengal, India</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Operating regionally across Kolkata, Kalyani, and Eastern India.
                  </p>
                </div>

                {/* Social Channels */}
                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                    Professional Networks
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-semibold text-xs border border-slate-200 transition-colors"
                    >
                      LinkedIn Page &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Next Step Cards */}
            <div className="p-5 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-slate-700">
              <h3 className="font-bold text-blue-900 mb-1">
                Looking for a Demonstration or Pilot?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                If you are looking to test video analytics capabilities or run an evaluation on
                existing CCTV cameras, use our dedicated request pathways:
              </p>
              <div className="space-y-1.5 font-semibold text-blue-700">
                <div>
                  <Link href="/request-demo" className="hover:underline">
                    &bull; Schedule an Enterprise Demo &rarr;
                  </Link>
                </div>
                <div>
                  <Link href="/request-pilot" className="hover:underline">
                    &bull; Request an On-Site Pilot Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
