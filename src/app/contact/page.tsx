import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = pageMetadata({
  title: "Join the waitlist",
  description:
    "We're onboarding early sites now. Tell us a little about your company and we'll be in touch about bringing a licensed paramedic to your jobsites.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Join the waitlist.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">
              We&apos;re onboarding early sites now. Tell us a little about your
              company and we&apos;ll be in touch.
            </p>
          </div>

          <Card>
            <WaitlistForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
