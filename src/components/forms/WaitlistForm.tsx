"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { logger } from "@/lib/logger";
import { trackEvent } from "./track";
import {
  Field,
  Input,
  Textarea,
  Select,
  Honeypot,
  SuccessPanel,
} from "./fields";
import { Button } from "@/components/ui/Button";

// Env is the source of truth; fall back to the known public ID so a missing/empty
// env var can't crash the build (useForm throws on an empty key during prerender).
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || "xlgyenjw";

export function WaitlistForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  // Fire the conversion exactly once per successful submission. Guards against
  // React StrictMode double-running effects in development.
  const conversionSent = useRef(false);

  // Log outcomes, events only, never field values.
  useEffect(() => {
    if (state.succeeded && !conversionSent.current) {
      conversionSent.current = true;
      logger.info("waitlist_submit_success");
      // GA4 primary conversion. Formspree has confirmed the submission at this
      // point; enhanced measurement can't see @formspree/react's fetch, so the
      // event is sent explicitly. Name must stay `sign_up` (the reporting
      // workbook matches on it exactly).
      trackEvent("sign_up", {
        method: "waitlist_form",
        form_location: "contact_top",
      });
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors) {
      const keys = state.errors.getAllFieldErrors().map(([field]) => field);
      logger.warn("waitlist_validation_error", { fields: keys });
    }
  }, [state.errors]);

  if (state.succeeded) {
    return (
      <SuccessPanel title="You're on the list.">
        Thanks, we&apos;ll be in touch as we onboard early sites.
      </SuccessPanel>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        logger.info("waitlist_submit_attempt");
        handleSubmit(e);
      }}
      noValidate
      className="space-y-5"
    >
      <Honeypot />
      <input type="hidden" name="_subject" value="Medix Occupational waitlist signup" />

      <Field label="Business name" htmlFor="companyName" required>
        <Input
          id="companyName"
          name="companyName"
          type="text"
          required
          maxLength={120}
          autoComplete="organization"
        />
        <ValidationError prefix="Business name" field="companyName" errors={state.errors} className="mt-1.5 text-sm text-signal-strong" />
      </Field>

      <Field label="Your name" htmlFor="contactName" required>
        <Input id="contactName" name="contactName" type="text" required maxLength={120} autoComplete="name" />
        <ValidationError prefix="Name" field="contactName" errors={state.errors} className="mt-1.5 text-sm text-signal-strong" />
      </Field>
          
      <Field label="Work email" htmlFor="email" required>
        <Input
          id="email"
          name="email"
          type="email"
          required
          maxLength={160}
          autoComplete="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1.5 text-sm text-signal-strong" />
      </Field>

      <Field label="Phone" htmlFor="phone">
        <Input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" />
      </Field>

      <Field label="Anything else" htmlFor="message">
        <Textarea id="message" name="message" maxLength={1000} />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1.5 text-sm text-signal-strong" />
      </Field>

      <ValidationError errors={state.errors} className="text-sm text-signal-strong" />

      <Button type="submit" variant="primary" disabled={state.submitting} className="w-full">
        {state.submitting ? "Sending…" : "Join the waitlist"}
      </Button>

      <p className="text-xs leading-relaxed text-steel">
        We&apos;ll only use this to contact you about Medix Occupational. See our{" "}
        <Link href="/privacy" className="text-brand underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
