"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    __resurgenix_consent?: boolean;
  }
}

/**
 * Lightweight, non-intrusive Cookie & Analytics Consent Notice
 * Stores preference in localStorage ("accepted" | "declined") and exposes
 * window.__resurgenix_consent flag for Step 14 analytics loading.
 */
export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("resurgenix_cookie_consent");
      if (!stored) {
        // Small delay so it does not jump immediately during initial render
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      } else {
        window.__resurgenix_consent = stored === "accepted";
      }
    } catch {
      // LocalStorage access restricted in some private browsing modes
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    try {
      localStorage.setItem("resurgenix_cookie_consent", accepted ? "accepted" : "declined");
    } catch {
      // Ignore storage errors
    }
    window.__resurgenix_consent = accepted;
    setIsVisible(false);

    // Fire consent event for any listening scripts
    if (typeof window !== "undefined") {
      try {
        window.dispatchEvent(
          new CustomEvent("resurgenix_consent_updated", { detail: { accepted } })
        );
      } catch {
        // Safe no-op
      }
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 p-4 rounded-[12px] bg-white border border-[#E2E8F0] shadow-xl animate-in slide-in-from-bottom duration-200"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4]" aria-hidden="true" />
            <span className="text-xs font-bold text-[#0B1F3A]">Privacy &amp; Analytics Notice</span>
          </div>
          <button
            type="button"
            onClick={() => handleChoice(false)}
            aria-label="Dismiss consent notice"
            className="text-[#5B6B7F] hover:text-[#0B1F3A] text-sm p-1"
          >
            &times;
          </button>
        </div>

        <p className="text-xs text-[#5B6B7F] leading-relaxed">
          We use basic performance cookies and anonymous metrics to improve website usability. We do
          not process camera feeds or surveillance data on this corporate website. Learn more in our{" "}
          <Link href="/privacy-policy" className="text-[#2563EB] hover:underline font-medium">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="flex-1 px-3 py-1.5 rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="px-3 py-1.5 rounded-[8px] border border-[#E2E8F0] bg-[#F7F9FC] hover:bg-[#EEF2F7] text-[#1F2937] text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1"
          >
            Decline
          </button>
        </div>
      </div>
    </aside>
  );
}

export default CookieNotice;
