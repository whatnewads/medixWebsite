import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Numeral } from "@/components/ui/Numeral";
import { Card } from "@/components/ui/Card";
import { LeadQualificationForm } from "@/components/forms/LeadQualificationForm";

export const metadata: Metadata = pageMetadata({
  title: "How to get started",
  description:
    "Getting a site covered with Medix: tell us about the project, we mobilize a contents-tracked first-aid bag and your certified responders, then you go live with onsite occupational health on demand.",
  path: "/how-to-get-started",
});

const steps = [
  {
    n: "01",
    title: "Tell us about the project",
    body: "Size, type, location, timeline — using the form below.",
  },
  {
    n: "02",
    title: "We mobilize the site",
    body: "A stocked, contents-tracked first-aid bag arrives, and we identify your certified responders.",
  },
  {
    n: "03",
    title: "You go live",
    body: "A licensed paramedic is one tap away the moment someone needs one.",
  },
];

export default function HowToGetStartedPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <Eyebrow>Get started</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Getting a site covered.
          </h1>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n}>
                <Numeral value={s.n} />
                <h2 className="mt-4 text-lg font-bold">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-steel">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-steel/15 bg-panel py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>Tell us about your project</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl">
                A few details and we&apos;ll take it from there.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-steel">
                The more we know about your sites, the faster we can get a
                licensed paramedic into your crew&apos;s corner.
              </p>
            </div>

            <Card>
              <LeadQualificationForm />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
