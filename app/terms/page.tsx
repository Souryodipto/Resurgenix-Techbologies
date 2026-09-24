/* Draft, requires legal review before launch. */

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Terms of Service | Resurgenix Technologies Pvt. Ltd.",
  description:
    "Terms of Service and website usage agreement for Resurgenix Technologies Pvt. Ltd. Covers intellectual property, permissible use, technical disclaimers, and Indian jurisdiction.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <Section background="white" className="pt-8 pb-14">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Terms of Service", href: "/terms" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Legal Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-xs text-[#5B6B7F] mb-6">
              Last Updated: March 2026 | Effective Date: March 2026
            </p>

            {/* Visible Legal Disclaimer Notice */}
            <Callout type="Note" title="Draft Agreement Notice" className="mb-8">
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Notice:</strong> This document is a preliminary operational draft prepared for the{" "}
                {siteConfig.company.legalName} B2B website. It requires formal legal review before public
                launch and does not constitute formal legal advice.
              </p>
            </Callout>

            <div className="prose prose-slate max-w-none text-sm text-[#1F2937] space-y-6 leading-relaxed">
              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">1. Acceptance of Terms</h2>
                <p>
                  Welcome to the website of {siteConfig.company.legalName} (&ldquo;Resurgenix&rdquo;,
                  &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing
                  or browsing this website (resurgenixtechnologies.com), submitting inquiries via our lead forms,
                  or requesting demonstrations and pilot evaluations, you agree to be bound by these Terms of
                  Service and our{" "}
                  <Link href="/privacy-policy" className="text-[#2563EB] font-medium underline">
                    Privacy Policy
                  </Link>
                  . If you do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">2. Nature of Website &amp; Informational Content</h2>
                <p>
                  This website is provided for informational and enterprise pre-sales evaluation purposes.
                  Descriptions of computer vision capabilities, detection pipelines, deployment architectures,
                  and operational scenarios describe software capabilities that are either commercially
                  available, in pilot deployment, or marked as under engineering development.
                </p>
                <p>
                  Nothing on this website constitutes a binding offer, contractual warranty, or guarantee of
                  compatibility with any specific camera model, NVR brand, or network topology. Technical
                  compatibility is confirmed on a case-by-case basis through our formal engineering assessment.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">3. Intellectual Property Rights</h2>
                <p>
                  All content published on this website—including but not limited to text, architectural diagrams,
                  system flowcharts, illustrative dashboard interfaces, brand marks, logos (&ldquo;Resurgenix&rdquo;),
                  product taglines (&ldquo;Your cameras already see. Resurgenix helps them understand.&rdquo;),
                  and underlying software code—is the proprietary intellectual property of{" "}
                  {siteConfig.company.legalName} or its licensors, protected under the Indian Copyright Act, 1957,
                  Trade Marks Act, 1999, and international intellectual property conventions.
                </p>
                <p>
                  You may not copy, reproduce, scrape, modify, reverse engineer, republish, or distribute any
                  materials from this website without prior express written permission from Resurgenix.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">4. Permissible Website Use &amp; Form Submissions</h2>
                <p>You agree to use this website solely for legitimate business evaluation purposes. You agree not to:</p>
                <ul className="text-xs text-[#5B6B7F] list-disc list-inside space-y-1 mt-2">
                  <li>
                    Submit false, fraudulent, automated, or misleading information through our demo, pilot,
                    partner, or contact forms.
                  </li>
                  <li>
                    Use automated scrapers, crawlers, bots, or extraction scripts to harvest data or attempt to
                    bypass rate limits.
                  </li>
                  <li>
                    Attempt to probe, scan, or test the vulnerability of the website, hosting infrastructure, or
                    API endpoints.
                  </li>
                  <li>
                    Introduce malicious software, viruses, trojans, or automated scripts intended to disrupt website
                    operations.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">
                  5. Commercial Engagements, Pilots &amp; Formal Contracts
                </h2>
                <p>
                  Submitting a demo request or pilot application through this website does not create a binding
                  commercial agreement, vendor relationship, or service guarantee.
                </p>
                <p>
                  Formal pilot evaluations, hardware integrations, software licenses, service level agreements
                  (SLAs), and data processing terms are strictly governed by separate, mutually executed Master
                  Services Agreements (MSAs), Statements of Work (SOWs), or Pilot Evaluation Agreements. In the
                  event of any conflict between this website and an executed enterprise agreement, the executed
                  contract shall govern.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">6. Disclaimer of Warranties</h2>
                <p>
                  This website and its content are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo;
                  basis without warranties of any kind, whether express, statutory, or implied, including but not
                  limited to implied warranties of merchantability, fitness for a particular purpose, or
                  uninterrupted availability.
                </p>
                <p>
                  While we make reasonable efforts to maintain current and accurate technical descriptions, we do
                  not warrant that descriptions of capabilities, latency figures, or optical specifications are
                  exhaustive or free from typographical errors.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable Indian law, in no event shall{" "}
                  {siteConfig.company.legalName}, its directors, officers, employees, or affiliates be liable for
                  any indirect, consequential, incidental, special, or punitive damages arising out of or in
                  connection with your access to or inability to access this website, even if advised of the
                  possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">8. Governing Law &amp; Dispute Resolution</h2>
                <p>
                  These Terms of Service and any dispute, claim, or controversy arising out of or related to this
                  website shall be governed by and construed in accordance with the laws of the Republic of India,
                  without regard to conflict of laws principles.
                </p>
                <p>
                  You agree that any legal suit, action, or proceeding arising out of or relating to these Terms
                  shall be instituted exclusively in the competent civil courts of <strong>Kolkata, West Bengal,
                  India</strong>, and you expressly submit to the personal and subject-matter jurisdiction of such
                  courts.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">9. Modifications to Terms</h2>
                <p>
                  We reserve the right to amend these Terms of Service at any time. Changes will be posted to this
                  page with an updated revision date. Your continued access to the website following the posting of
                  changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0B1F3A] mb-2">10. Contact Information</h2>
                <p>For questions regarding these Terms of Service, please contact us at:</p>
                <div className="bg-[#F7F9FC] p-4 rounded-xl border border-[#E2E8F0] text-xs text-[#1F2937] space-y-1 mt-3">
                  <p>
                    <strong>Company:</strong> {siteConfig.company.legalName}
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
                    <strong>Jurisdiction:</strong> Kolkata, West Bengal, India
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
