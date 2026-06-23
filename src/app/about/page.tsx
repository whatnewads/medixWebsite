import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { personLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata({
  title: "About — built by a paramedic",
  description:
    "Medix was founded by Wesley Yielding, a paramedic with 8 years in EMS and 4 in occupational health. We make occupational health accessible to the sites that fall through the cracks.",
  path: "/about",
});

const values = [
  {
    title: "Right care, first time",
    body: "A professional assessment at the moment of injury.",
  },
  {
    title: "Never alone",
    body: "Your crew always has a clinician in their ear.",
  },
  {
    title: "We take care of our people",
    body: "Duty of care is a reason good crews stay.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personLd()} />

      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>About Medix</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Built by a paramedic, for the crews who get left without one.
          </h1>
        </Container>
      </section>

      <section className="border-y border-steel/15 bg-panel py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Mission</Eyebrow>
              <p className="mt-4 text-xl leading-relaxed text-ink">
                Medix exists to make occupational healthcare accessible to the
                sites that fall through the cracks — too big for a kit, too small
                for a full-time medic.
              </p>
            </div>
            <div>
              <Eyebrow>Founder</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-steel">
                Wesley Yielding is a paramedic with 8 years of EMS experience and
                4 years in occupational health, having served on jobsites ranging
                from 25 to 500 team members. He saw the same gap on site after
                site: the moment a worker got hurt, there was no clinician in the
                loop. Medix closes that gap.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-3 text-2xl sm:text-3xl">Our values</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="text-lg font-bold text-brand">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-steel">{v.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-xl text-2xl text-white sm:text-3xl">
              Want a licensed paramedic on your next site?
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
