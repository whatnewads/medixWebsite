import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Medix handles the business contact information you share through this site.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>

        {/* [TODO] Health-adjacent business — have this policy reviewed by a professional
            before launch. This is placeholder content, not legal advice. */}
        <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-steel">
          <p className="rounded-md border border-signal/40 bg-signal/5 p-4 text-sm text-ink">
            Draft for review — this policy is being finalized with professional
            review before launch.
          </p>

          <h2 className="text-xl font-bold text-ink">What we collect</h2>
          <p>
            This marketing site collects only the business contact and
            qualification details you choose to submit through our forms — such
            as your company name, your name, a work email or phone number, and
            basic information about your projects. We do not collect protected
            health information through this site.
          </p>

          <h2 className="text-xl font-bold text-ink">How we use it</h2>
          <p>
            We use the information you provide solely to contact you about Medix
            and to understand whether the service is a fit for your sites. We do
            not sell your information.
          </p>

          <h2 className="text-xl font-bold text-ink">How it&apos;s handled</h2>
          <p>
            Form submissions are delivered to us through Formspree, a third-party
            form provider, and are used only to follow up with you. The clinical
            telemedicine service is a separate, access-controlled system; no
            patient health information is created or handled through this
            marketing site.
          </p>

          <h2 className="text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about your information? Reach us through the{" "}
            <a href="/contact" className="font-medium text-brand underline">
              contact page
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
