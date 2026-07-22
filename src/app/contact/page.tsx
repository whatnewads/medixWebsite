import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { ConversionOnMount } from "@/components/analytics/ConversionOnMount";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Join the waitlist",
  description:
    "We're onboarding early sites now. Tell us a little about your company and we'll be in touch about bringing a licensed paramedic to your jobsites.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-12 sm:py-16">
      {/* Google Ads conversion: fires when a visitor lands on /contact */}
      <ConversionOnMount event="conversion_event_submit_lead_form_1" />
      <Container>
        <div className="mx-auto max-w-xl">
          {/* Short heading/intro, then the form immediately (above the fold) */}
          <Eyebrow>Join the waitlist</Eyebrow>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Get on the list.
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-steel">
            We&apos;re onboarding early sites now. Add your details and we&apos;ll
            be in touch.
          </p>
          <p className="mt-3 text-base text-steel">
            Prefer to reach us directly?{" "}
            <a href={site.phoneHref} className="font-medium text-brand underline">
              {site.phone}
            </a>{" "}
            or{" "}
            <a href={site.emailHref} className="font-medium text-brand underline">
              {site.email}
            </a>
          </p>

          <Card className="mt-8">
            <WaitlistForm />
          </Card>

          {/* Longer explanatory copy below the form */}
          <div className="mt-10 space-y-4 text-base leading-relaxed text-steel">
            <p>
              Joining the waitlist puts you first in line as we bring sites
              online. There is no obligation and no cost to reach out. We will
              follow up to learn about your sites and plan a live visit to get
              you ready for your start date.
            </p>
            <p>
              Want the details first? See{" "}
              <Link href="/how-to-get-started" className="text-brand underline">
                how it works
              </Link>{" "}
              and{" "}
              <Link href="/pricing" className="text-brand underline">
                what it costs
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
