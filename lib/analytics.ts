/**
 * Resurgenix Analytics & Measurement Engine
 *
 * Privacy-respecting, consent-governed event dispatcher.
 * Strictly adheres to zero PII transmission: names, emails, phone numbers, and IP addresses
 * are never forwarded to telemetry.
 */

export type AnalyticsEventType =
  | "page_view"
  | "cta_click"
  | "demo_request"
  | "pilot_request"
  | "contact_submit"
  | "partner_submit"
  | "form_start"
  | "form_error"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "video_play"
  | "video_complete"
  | "resource_download"
  | "assessment_complete"
  | "outbound_click";

export interface AnalyticsEventPayload {
  // Navigation & CTAs
  location?: string;
  label?: string;
  href?: string;
  page_path?: string;
  page_title?: string;

  // Forms & Intent (NO PII)
  formId?: string;
  formType?: string;
  organizationType?: string;
  cameraCount?: string;
  architecture?: string;
  partnerType?: string;
  subject?: string;
  errorField?: string;

  // Media & Interaction
  videoTitle?: string;
  resourceTitle?: string;
  fileType?: string;
  score?: number;
  category?: string;

  // Outbound
  platform?: "linkedin" | "instagram" | "other";
  destinationUrl?: string;

  // Additional anonymous metrics
  [key: string]: unknown;
}

declare global {
  interface Window {
    __resurgenix_consent?: boolean;
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Checks if the user has actively consented to performance analytics.
 */
export function hasUserConsented(): boolean {
  if (typeof window === "undefined") return false;
  if (window.__resurgenix_consent !== undefined) {
    return window.__resurgenix_consent;
  }
  try {
    return localStorage.getItem("resurgenix_cookie_consent") === "accepted";
  } catch {
    return false;
  }
}

/**
 * Core event tracking dispatcher.
 * Only transmits events to Google Analytics if consent is granted.
 */
export function trackEvent(event: AnalyticsEventType, payload: AnalyticsEventPayload = {}): void {
  if (typeof window === "undefined") return;

  // Sanitize payload: strip any accidental PII fields
  const sanitized = { ...payload };
  delete (sanitized as Record<string, unknown>).name;
  delete (sanitized as Record<string, unknown>).fullName;
  delete (sanitized as Record<string, unknown>).email;
  delete (sanitized as Record<string, unknown>).phone;
  delete (sanitized as Record<string, unknown>).workEmail;
  delete (sanitized as Record<string, unknown>).message;

  // Debug logging in development
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[Resurgenix Analytics] ${event}`, sanitized);
  }

  // Push to dataLayer for GTM / local debugging
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...sanitized,
    timestamp: new Date().toISOString(),
  });

  // Dispatch custom browser event for in-app listeners
  try {
    window.dispatchEvent(
      new CustomEvent(`resurgenix:${event}`, {
        detail: { ...sanitized, timestamp: new Date().toISOString() },
      })
    );
  } catch {
    // Fail silently
  }

  // Forward to GA4 only if consent is granted and gtag exists
  if (hasUserConsented() && typeof window.gtag === "function") {
    try {
      window.gtag("event", event, sanitized);
    } catch (err) {
      console.warn("Failed to dispatch GA4 event", err);
    }
  }
}

// ---------------------------------------------------------------------------
// Convenience Helper Functions
// ---------------------------------------------------------------------------

export function trackPageView(url: string, title?: string) {
  trackEvent("page_view", {
    page_path: url,
    page_title: title || (typeof document !== "undefined" ? document.title : ""),
  });
}

export function trackCtaClick(label: string, location: string, href?: string) {
  trackEvent("cta_click", {
    label,
    location,
    href,
  });
}

export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", {
    location,
    platform: "other",
  });
}

export function trackPhoneClick(location: string) {
  trackEvent("phone_click", {
    location,
  });
}

export function trackEmailClick(location: string) {
  trackEvent("email_click", {
    location,
  });
}

export function trackVideoPlay(videoTitle: string) {
  trackEvent("video_play", {
    videoTitle,
  });
}

export function trackVideoComplete(videoTitle: string) {
  trackEvent("video_complete", {
    videoTitle,
  });
}

export function trackResourceDownload(resourceTitle: string, fileType = "pdf") {
  trackEvent("resource_download", {
    resourceTitle,
    fileType,
  });
}

export function trackAssessmentComplete(score: number, category: string) {
  trackEvent("assessment_complete", {
    score,
    category,
  });
}

export function trackOutboundClick(platform: "linkedin" | "instagram", destinationUrl: string) {
  trackEvent("outbound_click", {
    platform,
    destinationUrl,
  });
}

export function trackFormStart(formId: string, formType: string) {
  trackEvent("form_start", {
    formId,
    formType,
  });
}

export function trackFormError(formId: string, errorField: string) {
  trackEvent("form_error", {
    formId,
    errorField,
  });
}
