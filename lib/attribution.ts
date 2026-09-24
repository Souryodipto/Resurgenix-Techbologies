/**
 * Client-side attribution tracker.
 * Captures UTM parameters, landing page, referrer, and page URL.
 * Persists first-touch attribution in sessionStorage.
 */

export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page: string;
  referrer: string;
  page_url: string;
}

const STORAGE_KEY = "resurgenix_first_touch_attribution";

export function getAttributionData(): AttributionData {
  if (typeof window === "undefined") {
    return {
      landing_page: "",
      referrer: "",
      page_url: "",
    };
  }

  try {
    const cached = sessionStorage.getItem(STORAGE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      // Update the current page_url while preserving first-touch landing page & UTMs
      return {
        ...parsed,
        page_url: window.location.href,
      };
    }
  } catch {
    // sessionStorage not available or disabled
  }

  const urlParams = new URLSearchParams(window.location.search);
  const data: AttributionData = {
    utm_source: urlParams.get("utm_source") || undefined,
    utm_medium: urlParams.get("utm_medium") || undefined,
    utm_campaign: urlParams.get("utm_campaign") || undefined,
    utm_term: urlParams.get("utm_term") || undefined,
    utm_content: urlParams.get("utm_content") || undefined,
    landing_page: window.location.pathname + window.location.search,
    referrer: document.referrer || "direct",
    page_url: window.location.href,
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage quota errors
  }

  return data;
}
