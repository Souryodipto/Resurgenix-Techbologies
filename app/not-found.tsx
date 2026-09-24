import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { footerNav } from "@/content/nav";

export default function NotFound() {
  return (
    <div className="bg-white min-h-[75vh] py-16 sm:py-24 text-[#1F2937]">
      <Container size="lg">
        {/* Main Error Announcement */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2F7] text-[#0B1F3A] text-xs font-mono font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" aria-hidden="true" />
            <span>HTTP 404 &bull; ROUTE NOT FOUND</span>
          </div>

          <h1 className="text-fluid-h2 font-bold text-[#0B1F3A] tracking-tight">
            We couldn&apos;t locate that page
          </h1>

          <p className="mt-3 text-base text-[#5B6B7F] max-w-lg mx-auto">
            The link you accessed may have moved or is no longer available. You can navigate
            directly to our core platform resources below without search.
          </p>

          {/* Primary Recovery CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/" variant="primary" size="md">
              Return to Homepage
            </LinkButton>
            <LinkButton href="/solutions" variant="secondary" size="md">
              Explore All Solutions
            </LinkButton>
            <LinkButton href="/how-it-works" variant="ghost" size="md">
              How It Works &rarr;
            </LinkButton>
          </div>
        </div>

        {/* Search-Free Directory of Key Platform Pages */}
        <div className="mt-12 pt-12 border-t border-[#E2E8F0] grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solutions Column */}
          <div className="p-6 rounded-[12px] bg-[#F7F9FC] border border-[#E2E8F0]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
              Core Video Solutions
            </h2>
            <ul className="space-y-2 text-xs" role="list">
              {footerNav.column1Solutions.map((sol) => (
                <li key={sol.href}>
                  <Link
                    href={sol.href}
                    className="text-[#5B6B7F] hover:text-[#2563EB] hover:underline transition-colors block py-0.5"
                  >
                    {sol.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="p-6 rounded-[12px] bg-[#F7F9FC] border border-[#E2E8F0]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
              Industry Verticals
            </h2>
            <ul className="space-y-2 text-xs" role="list">
              {footerNav.column2Industries.map((ind) => (
                <li key={ind.href}>
                  <Link
                    href={ind.href}
                    className="text-[#5B6B7F] hover:text-[#2563EB] hover:underline transition-colors block py-0.5"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Reference & Contact Column */}
          <div className="p-6 rounded-[12px] bg-[#F7F9FC] border border-[#E2E8F0]">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
              Guides &amp; Contact
            </h2>
            <ul className="space-y-2 text-xs" role="list">
              <li>
                <Link
                  href="/resources"
                  className="text-[#5B6B7F] hover:text-[#2563EB] hover:underline transition-colors block py-0.5"
                >
                  Technical Articles &amp; Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/ai-cctv-vs-traditional-cctv"
                  className="text-[#5B6B7F] hover:text-[#2563EB] hover:underline transition-colors block py-0.5"
                >
                  AI CCTV vs. Traditional CCTV
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="text-[#5B6B7F] hover:text-[#2563EB] hover:underline transition-colors block py-0.5"
                >
                  Video Analytics Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#5B6B7F] hover:text-[#2563EB] hover:underline transition-colors block py-0.5"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/request-pilot"
                  className="text-[#2563EB] font-bold hover:underline transition-colors block py-0.5"
                >
                  Request a Controlled Pilot &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#5B6B7F] hover:text-[#2563EB] hover:underline transition-colors block py-0.5"
                >
                  Direct Operations &amp; Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
