"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/components/forms/track";

/**
 * Fires a GA4 / Google Ads conversion event once when this component mounts.
 *
 * Use for "landing page" conversions: an ad (or a CTA) routes a visitor to a
 * page, and arriving on that page is the tracked conversion. Runs client-side
 * through the safe `trackEvent` helper (guards window.gtag, never throws). The
 * useRef guard keeps it to one fire per mount, even under React StrictMode.
 */
export function ConversionOnMount({ event }: { event: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackEvent(event);
  }, [event]);

  return null;
}
