/* Draft, requires legal review before launch. */

import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Privacy Policy | Resurgenix Technologies Pvt. Ltd.",
  description:
    "Privacy Policy for Resurgenix Technologies website. Details data collection from inquiry forms, analytics, data retention, user rights under Indian law, and contact information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <Section background="white" className="pt-8 pb-14">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Legal &amp; Data Governance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#5B6B7F] mb-6">
              Last Updated: March 2026 | Effective Date: March 2026
            </p>

            {/* Visible Legal Disclaimer Notice */}
            <Callout type="Note" title="Draft Policy Notice" className="mb-8">
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Notice:</strong> This document is a preliminary operational draft prepared for the{" "}
                {siteConfig.company.legalName} B2B website. It requires formal legal review before public
                launch and does not constitute formal legal advice.
              </p>
            </Callout>

            <div className="prose prose-slate max-w-none text-sm text-[#1F2937] space-y-6 leading-relaxed">
              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">1. Overview &amp; Scope</h2>
                <p>
                  This Privacy Policy applies to {siteConfig.company.legalName} (&ldquo;Resurgenix&rdquo;,
                  &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) in connection with personal and
                  business data collected through our public website (resurgenixtechnologies.com), inquiry forms,
                  demo requests, pilot applications, and direct email communications.
                </p>
                <p>
                  This website is an informational and business-to-business (B2B) communications channel. This
                  policy explains what information we collect from visitors, how we use it, how we safeguard it,
                  and your rights under applicable Indian laws, including the Digital Personal Data Protection
                  (DPDP) Act, 2023.
                </p>
              </section>

              <section className="bg-[#F7F9FC] p-5 rounded-xl border border-[#E2E8F0]">
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">
                  2. Critical Distinction: Website Inquiries vs. Customer Video Feeds
                </h2>
                <p className="text-xs text-[#5B6B7F] leading-relaxed mb-3">
                  It is important to understand the boundary between this website and our video intelligence
                  software platform:
                </p>
                <ul className="text-xs text-[#1F2937] space-y-2 list-disc list-inside">
                  <li>
                    <strong>Website Data:</strong> Covers contact details and analytics submitted by website
                    visitors through lead forms.
                  </li>
                  <li>
                    <strong>Customer Surveillance Video:</strong> Raw video feeds, camera streams, and on-site
                    facial or vehicle detections processed during enterprise pilot evaluations or commercial
                    deployments operate on-premise within the customer&apos;s physical network. Raw video feeds are
                    governed by separate Master Services Agreements (MSAs) or Data Processing Agreements (DPAs)
                    and are <strong>never</strong> transmitted, hosted, or ingested through this public website.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">3. Information We Collect</h2>
                <p>We collect information in two ways: information you provide directly, and automated data.</p>
                <div className="space-y-3 mt-3">
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F3A]">A. Information You Submit Directly</h3>
                    <p className="text-xs text-[#5B6B7F]">
                      When you submit a Demo Request, Pilot Assessment Form, Partner Inquiry, or Contact Form, we
                      may collect:
                    </p>
                    <ul className="text-xs text-[#5B6B7F] list-disc list-inside mt-1 space-y-1">
                      <li>Full name and professional job title</li>
                      <li>Work email address and business telephone/WhatsApp number</li>
                      <li>Company / organization name and industry sector</li>
                      <li>
                        Operational facility parameters (estimated camera count, number of sites, existing NVR/DVR
                        brands, primary operational needs, timeline)
                      </li>
                      <li>Any project details or comments voluntarily provided in message fields</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F3A]">B. Automated Technical &amp; Analytics Data</h3>
                    <p className="text-xs text-[#5B6B7F]">
                      When you browse our website, our web server and privacy-conscious analytics tools may
                      automatically log:
                    </p>
                    <ul className="text-xs text-[#5B6B7F] list-disc list-inside mt-1 space-y-1">
                      <li>IP address (for geographic routing and security rate-limiting)</li>
                      <li>Browser type, version, and device operating system</li>
                      <li>Referring website URL and exit pages</li>
                      <li>Pages visited, duration of visit, and navigation paths</li>
                      <li>Timestamps and form interaction telemetry (e.g. anti-bot timing checks)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F3A]">C. Resurgenix Website Assistant (Chatbot)</h3>
                    <p className="text-xs text-[#5B6B7F]">
                      Conversations with the Resurgenix Website Assistant are strictly session-only and retained
                      solely in ephemeral browser memory. Conversations are never recorded into model training
                      sets, never retained as permanent transcripts, and never linked to your personal identity
                      unless you explicitly submit an inquiry through the &ldquo;Request a Callback&rdquo; mini-form.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">4. How We Use Collected Data</h2>
                <p>We use the data collected on our website strictly for lawful business purposes, including:</p>
                <ul className="text-xs text-[#5B6B7F] list-disc list-inside space-y-1 mt-2">
                  <li>Evaluating and responding to your product demo or pilot assessment inquiries</li>
                  <li>Conducting pre-sales technical feasibility evaluations for existing camera infrastructure</li>
                  <li>Communicating with prospective system integrators and channel partners</li>
                  <li>Sending requested technical documentation, case studies, or architectural whitepapers</li>
                  <li>
                    Protecting our website against automated spam, credential stuffing, and Distributed
                    Denial-of-Service (DDoS) abuse
                  </li>
                  <li>Analyzing aggregate website performance to optimize usability and navigation</li>
                </ul>
                <p className="mt-2 text-xs font-semibold text-[#0B1F3A]">
                  We do NOT sell, rent, or lease your corporate contact information to third-party marketing brokers.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">5. Data Retention</h2>
                <p>
                  Contact information submitted through lead forms is retained for as long as necessary to fulfill
                  the business inquiry, evaluate pilot feasibility, or maintain an active commercial dialogue, or
                  as required by applicable Indian commercial and tax accounting laws.
                </p>
                <p>
                  If you wish to have your contact details removed from our CRM or communication records, you may
                  contact our data governance point of contact at any time. Server security access logs are
                  automatically rotated and purged on a standard 30-to-90 day cycle.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">6. Data Sharing &amp; Subprocessors</h2>
                <p>
                  We share personal information only with trusted third-party service providers that help us operate
                  our web infrastructure, under strict confidentiality and security obligations:
                </p>
                <ul className="text-xs text-[#5B6B7F] list-disc list-inside space-y-1 mt-2">
                  <li>
                    <strong>Hosting Infrastructure:</strong> Vercel and secure cloud hosting providers for web
                    serving.
                  </li>
                  <li>
                    <strong>Transactional Email Delivery:</strong> Resend or equivalent transactional SMTP relays to
                    deliver form notifications to our engineering team.
                  </li>
                  <li>
                    <strong>Security Verification:</strong> Cloudflare Turnstile or equivalent automated anti-bot
                    verification services.
                  </li>
                  <li>
                    <strong>Legal &amp; Law Enforcement:</strong> We may disclose information if required to do so by
                    Indian courts, law enforcement agencies, or statutory regulatory bodies under applicable laws.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">7. Cookies &amp; Tracking Technologies</h2>
                <p>
                  We use cookies and similar browser storage mechanisms solely for functional and analytical
                  purposes:
                </p>
                <ul className="text-xs text-[#5B6B7F] list-disc list-inside space-y-1 mt-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for site navigation, form state retention, and
                    security rate limiting.
                  </li>
                  <li>
                    <strong>Attribution &amp; Analytics:</strong> Lightweight first-party tokens to understand
                    campaign referral sources and improve page clarity.
                  </li>
                </ul>
                <p className="mt-2 text-xs text-[#5B6B7F]">
                  We do not deploy invasive third-party cross-site advertising trackers or behavioural retargeting
                  pixels on this website. You can manage or disable cookies through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">
                  8. Your Rights Under Indian Data Protection Law
                </h2>
                <p>
                  In alignment with the principles of India&apos;s Digital Personal Data Protection (DPDP) Act, 2023,
                  you have the following rights regarding the personal data we hold about you:
                </p>
                <ul className="text-xs text-[#5B6B7F] list-disc list-inside space-y-1 mt-2">
                  <li>
                    <strong>Right to Access:</strong> You may request a summary of the personal data you have
                    submitted to us.
                  </li>
                  <li>
                    <strong>Right to Correction &amp; Erasure:</strong> You may request correction of inaccurate
                    records or complete deletion of your corporate contact record.
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> You may opt out of receiving further business
                    communications from us at any time.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">9. Security Safeguards</h2>
                <p>
                  We implement reasonable administrative, technical, and physical security measures—including TLS
                  encryption in transit, access-controlled email routing, and firewalled database storage—to protect
                  submitted inquiry information against unauthorized access, loss, or alteration.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">10. Contact &amp; Grievance Redressal</h2>
                <p>
                  For any privacy inquiries, requests to exercise your data rights, or data protection grievances,
                  please write to our designated data governance point of contact:
                </p>
                <div className="bg-[#F7F9FC] p-4 rounded-xl border border-[#E2E8F0] text-xs text-[#1F2937] space-y-1 mt-3">
                  <p>
                    <strong>Entity:</strong> {siteConfig.company.legalName}
                  </p>
                  <p>
                    <strong>Attention:</strong> Data Governance &amp; Grievance Officer
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#2563EB] font-semibold underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p>
                    <strong>Headquarters:</strong> {siteConfig.company.fullHqDisplay}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
