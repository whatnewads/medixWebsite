import type { Metadata } from "next";
import { pageMetadata, faqPageLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description:
    "Common questions about Medic Cadence telemedicine: who answers the call, how care happens on a remote site, escalation for serious injuries, and who it's for.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqPageLd()} />

      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>FAQs</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Questions, answered.
          </h1>

          <dl className="mt-12 max-w-3xl divide-y divide-steel/15 border-t border-steel/15">
            {faqs.map((f) => (
              <div key={f.question} className="py-7">
                <dt className="text-lg font-bold text-ink">{f.question}</dt>
                <dd className="mt-2 leading-relaxed text-steel">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow onDark>Get covered</Eyebrow>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl">
              Still have questions? Let&apos;s talk.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              We&apos;re onboarding early sites now. Get on the list and
              we&apos;ll answer anything else as we bring your site online.
            </p>
            <div className="mt-8">
              <LinkButton href="/contact" variant="primary">
                Join the waitlist today!
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
