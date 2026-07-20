"use client";

import { useEffect, useRef, useState } from "react";
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
  labelClass,
} from "./fields";
import { Button } from "@/components/ui/Button";

// Env is the source of truth; fall back to the known public ID so a missing/empty
// env var can't crash the build (useForm throws on an empty key during prerender).
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_LEAD_ID || "xkolnbjl";

type SafetyDept = "" | "Yes" | "No" | "I don't know";

function RadioRow({
  name,
  options,
  value,
  onChange,
  required,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
      {options.map((opt) => (
        <label key={opt} className="inline-flex items-center gap-2 font-body text-base text-ink">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="h-4 w-4 accent-brand"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export function LeadQualificationForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [hasSafetyDept, setHasSafetyDept] = useState<SafetyDept>("");
  const [wantsSafetyDept, setWantsSafetyDept] = useState("");

  const leadStatus =
    hasSafetyDept === "No" ? "disqualified_no_safety_dept" : "qualified";
  // Fire the conversion exactly once per successful submission. Guards against
  // React StrictMode double-running effects in development.
  const conversionSent = useRef(false);

  // Log the branch when the prospect selects "No", status only, never field values.
  useEffect(() => {
    if (hasSafetyDept === "No") logger.info("lead_safety_dept_no");
  }, [hasSafetyDept]);

  useEffect(() => {
    if (state.succeeded && !conversionSent.current) {
      conversionSent.current = true;
      logger.info("lead_submit_success");
      logger.info(
        leadStatus === "qualified"
          ? "lead_status_qualified"
          : "lead_status_disqualified",
      );
      // GA4 lead conversion, distinct from the waitlist's `sign_up` so the two
      // funnels never mix in reporting. `lead_status` is an internal flag, not
      // PII. Sent only after Formspree confirms success; enhanced measurement
      // can't see @formspree/react's fetch.
      trackEvent("generate_lead", {
        method: "lead_qualification_form",
        lead_status: leadStatus,
      });
    }
    // leadStatus is intentionally read at success time; we don't want to re-log on its change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors) {
      const keys = state.errors.getAllFieldErrors().map(([field]) => field);
      logger.warn("lead_validation_error", { fields: keys });
    }
  }, [state.errors]);

  // Every path shows the same success state, the lead is never told they're disqualified.
  if (state.succeeded) {
    return (
      <SuccessPanel title="Thanks, we've got it.">
        We&apos;ll review your project and be in touch shortly about getting your
        site covered.
      </SuccessPanel>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        logger.info("lead_submit_attempt");
        handleSubmit(e);
      }}
      noValidate
      className="space-y-5"
    >
      <Honeypot />
      <input type="hidden" name="_subject" value="Medix Occupational lead: site qualification" />
      {/* Internal qualification flag, rides along to the team's notification email only. */}
      <input type="hidden" name="leadStatus" value={leadStatus} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company name" htmlFor="companyName" required>
          <Input id="companyName" name="companyName" type="text" required maxLength={120} autoComplete="organization" />
          <ValidationError prefix="Company name" field="companyName" errors={state.errors} className="mt-1.5 text-sm text-signal-strong" />
        </Field>

        <Field label="Your name" htmlFor="contactName" required>
          <Input id="contactName" name="contactName" type="text" required maxLength={120} autoComplete="name" />
          <ValidationError prefix="Name" field="contactName" errors={state.errors} className="mt-1.5 text-sm text-signal-strong" />
        </Field>

        <Field label="Work email" htmlFor="email" required>
          <Input id="email" name="email" type="email" required maxLength={160} autoComplete="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1.5 text-sm text-signal-strong" />
        </Field>

        <Field label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" />
        </Field>
      </div>

      <ValidationError errors={state.errors} className="text-sm text-signal-strong" />

      <Button type="submit" variant="primary" disabled={state.submitting} className="w-full">
        {state.submitting ? "Sending…" : "Tell us about your project"}
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
