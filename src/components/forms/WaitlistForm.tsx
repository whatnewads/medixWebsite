"use client";

import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { logger } from "@/lib/logger";
import {
  Field,
  Input,
  Textarea,
  Select,
  Honeypot,
  SuccessPanel,
} from "./fields";
import { Button } from "@/components/ui/Button";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID ?? "";

export function WaitlistForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  // Log outcomes — events only, never field values.
  useEffect(() => {
    if (state.succeeded) logger.info("waitlist_submit_success");
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
        Thanks — we&apos;ll be in touch as we onboard early sites.
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
      <input type="hidden" name="_subject" value="Medix waitlist signup" />

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

      <Field label="How did you hear about us?" htmlFor="referralSource">
        <Select id="referralSource" name="referralSource" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Search</option>
          <option>Referral / word of mouth</option>
          <option>Social</option>
          <option>Industry event</option>
          <option>Other</option>
        </Select>
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
        We&apos;ll only use this to contact you about Medix. See our{" "}
        <Link href="/privacy" className="text-brand underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
