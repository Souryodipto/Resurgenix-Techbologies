"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/content/nav";
import { siteConfig } from "@/content/site.config";
import { ResurgenixLogo } from "./Header";
import { trackOutboundClick, trackEmailClick, trackPhoneClick } from "@/lib/analytics";

/**
 * Global Corporate Footer
 * Clean light theme with soft grey background (#F7F9FC), thin border (#E2E8F0),
 * 5 columns, verified contact details, social links, and entity statement.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#F7F9FC] border-t border-[#E2E8F0] text-[#1F2937]"
      aria-label="Site Footer"
    >
      {/* Upper Main Footer Grid */}
      <div className="py-14 sm:py-16">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Brand & Entity Summary (Spans 2 columns on large screens) */}
            <div className="lg:col-span-2 space-y-4">
              <Link
                href="/"
                className="inline-block rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
                aria-label={`${siteConfig.company.brandName} Homepage`}
              >
                <ResurgenixLogo />
              </Link>

              <p className="text-xs text-[#5B6B7F] leading-relaxed max-w-sm">
                Resurgenix Technologies Pvt. Ltd. builds AI-powered video intelligence systems that
                make existing CCTV infrastructure intelligent.
              </p>

              {/* Tagline / Brand Concept */}
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-mono font-medium text-[#0B1F3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" aria-hidden="true" />
                  {siteConfig.company.tagline}
                </span>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B6B7F] mb-2">
                  Official Channels
                </div>
                <div className="flex items-center gap-3">
                  {/* LinkedIn */}
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackOutboundClick("linkedin", siteConfig.social.linkedin)}
                    className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#0B1F3A] hover:text-[#2563EB] hover:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 transition-colors"
                    aria-label="Resurgenix LinkedIn Company Page (opens in new tab)"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackOutboundClick("instagram", siteConfig.social.instagram)}
                    className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#0B1F3A] hover:text-[#2563EB] hover:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 transition-colors"
                    aria-label="Resurgenix Instagram Profile (opens in new tab)"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 1: Solutions */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-4">
                Solutions
              </div>
              <ul className="space-y-2 text-xs" role="list">
                {footerNav.column1Solutions.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#5B6B7F] hover:text-[#2563EB] transition-colors focus:outline-none focus:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Industries */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-4">
                Industries
              </div>
              <ul className="space-y-2 text-xs" role="list">
                {footerNav.column2Industries.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#5B6B7F] hover:text-[#2563EB] transition-colors focus:outline-none focus:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-4">
                Resources
              </div>
              <ul className="space-y-2 text-xs" role="list">
                {footerNav.column3Resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#5B6B7F] hover:text-[#2563EB] transition-colors focus:outline-none focus:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company & Operations */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-4">
                Company &amp; Operations
              </div>
              <ul className="space-y-2 text-xs mb-6" role="list">
                {footerNav.column4Company.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#5B6B7F] hover:text-[#2563EB] transition-colors focus:outline-none focus:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Condensed Verified Recognition Mention */}
              <div className="mb-6 pt-3 border-t border-[#E2E8F0]">
                <Link
                  href="/about#recognition"
                  className="block text-[11px] font-semibold text-[#0B1F3A] hover:text-[#2563EB] transition-colors leading-relaxed"
                >
                  DPIIT-recognized startup · Exhibitor, Bharatiya Vyapar Mahotsav 2026
                </Link>
              </div>

              <div className="space-y-3 text-xs text-[#5B6B7F] pt-2 border-t border-[#E2E8F0]">
                <div>
                  <span className="block text-[11px] font-mono text-[#0B1F3A] font-semibold">
                    Headquarters:
                  </span>
                  <span>{siteConfig.company.fullHqDisplay}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#0B1F3A] font-semibold">
                    Direct Enquiries:
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    onClick={() => trackEmailClick("footer")}
                    className="text-[#2563EB] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#0B1F3A] font-semibold">
                    Telephone Support:
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    onClick={() => trackPhoneClick("footer")}
                    className="text-[#2563EB] hover:underline"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
                <div className="pt-2">
                  <Link
                    href="/request-pilot"
                    className="inline-block text-[11px] font-bold text-[#2563EB] hover:underline"
                  >
                    Request Controlled Pilot &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal & Copyright Sub-Strip */}
      <div className="border-t border-[#E2E8F0] py-6 bg-white">
        <Container size="lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6B7F]">
            <div className="text-center sm:text-left">
              &copy; {currentYear} {siteConfig.company.legalName}. All rights reserved.
            </div>

            <nav
              className="flex flex-wrap items-center justify-center gap-6"
              aria-label="Legal Links"
            >
              {footerNav.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#2563EB] transition-colors focus:outline-none focus:underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
