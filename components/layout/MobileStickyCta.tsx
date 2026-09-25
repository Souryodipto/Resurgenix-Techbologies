"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site.config";

/**
 * Mobile Sticky Conversion Bar
 * Displays on mobile screens only (< 768px) after scrolling past the hero section.
 * Automatically hidden on dedicated form pages (/request-demo, /request-pilot, /contact).
 */
export function MobileStickyCta() {
  const pathname = usePathname();
  const isFormRoute =
    pathname.startsWith("/request-demo") ||
    pathname.startsWith("/request-pilot") ||
    pathname.startsWith("/contact");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user has scrolled past 250px
      setIsScrolled(window.scrollY > 250);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isFormRoute || !isScrolled) {
    return null;
  }

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-45 bg-white border-t border-[#E2E8F0] shadow-lg p-3 flex items-center gap-3 animate-in slide-in-from-bottom duration-200"
      role="region"
      aria-label="Quick Conversion Bar"
    >
      {/* Primary Action Button */}
      <Link
        href="/request-demo"
        className="flex-1 inline-flex items-center justify-center min-h-[46px] px-4 rounded-[10px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
      >
        Request a Demo
      </Link>

      {/* Direct Telephone Dial Button */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="inline-flex items-center justify-center w-12 min-h-[46px] rounded-[10px] bg-[#F7F9FC] border border-[#E2E8F0] text-[#0B1F3A] hover:bg-[#EEF2F7] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 transition-colors"
        aria-label={`Call Resurgenix directly at ${siteConfig.contact.displayPhone}`}
      >
        <svg
          className="w-5 h-5 text-[#2563EB]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </div>
  );
}

export default MobileStickyCta;
