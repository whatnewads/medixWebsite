import { logger } from "@/lib/logger";

/**
 * GA4 event helper for the forms in this folder.
 *
 * Why this exists: the site submits forms through @formspree/react's internal
 * fetch, which GA4 enhanced measurement cannot see, so `form_submit` never
 * fires (verified in GA4 Realtime). So conversion events are sent explicitly,
 * and only after Formspree confirms success.
 *
 * Guarantees:
 *   - Never throws. An analytics failure can never break a form.
 *   - Fires through window.gtag (the site's GA4 integration); falls back to
 *     a dataLayer push if only GTM is present, and logs a warning if neither
 *     is available.
 *   - Logs outcomes only (event names), never field values, matching the
 *     repo's logging policy.
 *
 * Downstream: the GA4 to Sheets sync workbook auto-detects `sign_up` as the
 * primary conversion and treats `generate_lead` separately. Event names are
 * matched exactly, so do not rename them.
 */

type AnalyticsWindow = Window & {
  gtag?: (
    command: "event",
    eventName: string,
    params?: Record<string, unknown>,
  ) => void;
  dataLayer?: Record<string, unknown>[];
};

export type TrackParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params: TrackParams = {}): boolean {
  try {
    if (typeof window === "undefined") return false; // SSR, nothing to do

    const w = window as AnalyticsWindow;

    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, params);
      logger.info("analytics_event_sent", { event: eventName });
      return true;
    }

    if (Array.isArray(w.dataLayer)) {
      // GTM-style container without a gtag function. Requires a GTM trigger
      // mapped to this event name to reach GA4.
      w.dataLayer.push({ event: eventName, ...params });
      logger.info("analytics_event_pushed_datalayer", { event: eventName });
      return true;
    }

    logger.warn("analytics_unavailable", { event: eventName });
    return false;
  } catch {
    // Deliberately swallow: analytics must never interfere with the form.
    logger.warn("analytics_event_failed", { event: eventName });
    return false;
  }
}
