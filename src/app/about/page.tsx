import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { personLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = pageMetadata({
  title: "About, built by a paramedic",
  description:
    "Medix Occupational was founded by Wesley Yielding, a paramedic with 8 years in EMS and 4 in occupational health. We extend real clinical access to the remote crews that need it most.",
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
          <Eyebrow>About Medix Occupational</Eyebrow>
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
                Medix Occupational exists to make occupational healthcare
                accessible to the sites that fall through the cracks: too big for
                a kit, too small for a full-time medic.
              </p>
            </div>
            <div>
              <Eyebrow>Founder</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-steel">
                Wesley Yielding is a paramedic with 8 years of EMS experience and
                4 years in occupational health, having served on jobsites ranging
                from 25 to 500 team members.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The insight / pain point, pull-quote treatment */}
      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>Why we exist</Eyebrow>
          <blockquote className="mt-6 max-w-4xl border-l-2 border-signal pl-6 sm:pl-8">
            <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl lg:text-4xl">
              Occupational-health physicians already connect to remote job sites
              by video. The crews that need it most, smaller and farther from the
              gate, are still out of reach.
            </p>
          </blockquote>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-steel">
            Medix Occupational puts our paramedics on that same live link,
            extending real clinical access to the even more remote. That is the
            accessibility our workforce needs.
          </p>
          <p className="mt-8 max-w-3xl font-display text-xl font-bold leading-snug text-brand sm:text-2xl">
            A licensed clinician in every crew&apos;s corner, on every site, no
            matter how far from help. That is the dream state Medix Occupational
            is built to deliver.
          </p>
        </Container>
      </section>

      <section className="border-t border-steel/15 bg-panel py-16 sm:py-24">
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
