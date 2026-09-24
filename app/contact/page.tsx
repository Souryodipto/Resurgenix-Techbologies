import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Contact Resurgenix Technologies | Kolkata, India",
  description:
    "Get in touch with Resurgenix Technologies. Inquire about enterprise video analytics, pilot programs, or system integrator partnerships.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          Contact
        </span>
      </nav>

      <div className="max-w-2xl mb-10">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          Direct Communications
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-4">
          Connect with Our Engineering &amp; Operations Team
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Whether you want to discuss camera compatibility, schedule an on-site facility audit in
          Eastern India, or explore system integrator channel partnerships, we are here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Card */}
        <div className="space-y-6">
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <h2 className="text-base font-bold text-slate-900 mb-4">Direct Contact Points</h2>

            <div className="space-y-4 text-sm">
              <div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Phone
                </span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-slate-800 font-medium hover:underline"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Direct WhatsApp
                </span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition shadow-sm"
                >
                  <span>WhatsApp us (+91 6290985464)</span>
                </a>
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Headquarters
                </span>
                <p className="text-slate-800 font-medium">{siteConfig.company.fullHqDisplay}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Operational Focus: Kolkata, Kalyani, West Bengal, Eastern India
                </p>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Official Social Profiles
            </h3>
            <div className="flex items-center gap-4 text-xs font-medium">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn Profile &rarr;
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                Instagram (@resurgenix.official) &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-white">
          <h2 className="text-base font-bold text-slate-900 mb-4">Send an Inbound Message</h2>
          <form action="/contact/thank-you" method="GET" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="Vikram Sharma"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                Subject / Purpose *
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
              >
                <option value="General Inquiry">General Enterprise Inquiry</option>
                <option value="Pilot Assessment">Pilot Assessment Request</option>
                <option value="System Integrator Partnership">
                  System Integrator Channel Partnership
                </option>
                <option value="Institutional Consultation">
                  Government / Institutional Project
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full text-sm border border-slate-300 rounded px-3 py-2 bg-white focus:outline-blue-600"
                placeholder="Describe your facility requirements or camera infrastructure..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded text-sm transition shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
