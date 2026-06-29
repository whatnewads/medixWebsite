import type { Metadata } from "next";
import { pageMetadata, faqPageLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description:
    "Common questions about Medix Occupational telemedicine: who answers the call, how care happens on a remote site, escalation for serious injuries, and who it's for.",
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

      <section className="bg-navy py-16 text-white sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-xl text-2xl text-white sm:text-3xl">
              Still have questions? Let&apos;s talk.
            </h2>
            <LinkButton href="/contact" variant="primary">
              Join the waitlist
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
