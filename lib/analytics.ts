/**
 * Analytics Hooks & Event Dispatcher.
 * Dispatches client events to window.dataLayer or custom event listeners.
 * Configured as safe no-op functions until comprehensive analytics wiring in Step 14.
 */

export type AnalyticsEventType =
  | "form_start"
  | "form_submit"
  | "form_error"
  | "demo_request"
  | "pilot_request"
  | "contact_submit"
  | "partner_inquiry";

export interface AnalyticsEventPayload {
  formId?: string;
  formType?: string;
  organizationType?: string;
  cameraCount?: string;
  errorMessage?: string;
  [key: string]: unknown;
}

export function trackEvent(event: AnalyticsEventType, payload?: AnalyticsEventPayload): void {
  if (typeof window === "undefined") return;

  // Log in development for auditability
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[Analytics Event] ${event}`, payload);
  }

  // Push to GTM / dataLayer if available
  try {
    const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    if (win.dataLayer && Array.isArray(win.dataLayer)) {
      win.dataLayer.push({
        event,
        ...payload,
        timestamp: new Date().toISOString(),
      });
    }

    // Also dispatch a browser CustomEvent for local listeners
    window.dispatchEvent(
      new CustomEvent(`resurgenix:${event}`, {
        detail: { ...payload, timestamp: new Date().toISOString() },
      })
    );
  } catch {
    // Fail silently so tracking never disrupts UX
  }
}
