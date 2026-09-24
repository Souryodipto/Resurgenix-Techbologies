"use client";

import React, { useEffect, Suspense, useSyncExternalStore } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { hasUserConsented, trackPageView } from "@/lib/analytics";

function AnalyticsNavigationTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = searchParams?.toString() ? `${pathname}?${searchParams.toString()}` : pathname;
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  return null;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("resurgenix_consent_updated", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("resurgenix_consent_updated", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return hasUserConsented();
}

function getServerSnapshot() {
  return false;
}

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
  const consented = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Strict guardrail: No GA ID or no active user consent = nothing loads
  if (!gaId || !consented) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsNavigationTracker />
      </Suspense>
    </>
  );
}
