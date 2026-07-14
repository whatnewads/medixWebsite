import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Numeral } from "@/components/ui/Numeral";
import { Lifeline } from "@/components/ui/Lifeline";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = pageMetadata({
  title: "Occupational telemedicine for jobsites",
  description:
    "Medic Cadence puts a licensed paramedic on every jobsite: on screen in seconds to guide your certified crew through the right care. Onsite occupational health for medium, non-permanent projects.",
  path: "/",
});

const steps = [
  {
    n: "01",
    title: "Someone gets hurt.",
    body: "A certified team leader opens Medic Cadence and connects.",
  },
  {
    n: "02",
    title: "A licensed paramedic answers in seconds",
    body: "By telemedicine, assessing the patient with assistance from a first aid certified team leader.",
  },
  {
    n: "03",
    title: "The clinician starts treatment",
    body: "and guides your certified leader through each step, hands-on, in real time.",
  },
  {
    n: "04",
    title: "The clinician directs what's next",
    body: "Care on site within first-aid scope, an outpatient order, or immediate emergency escalation for a worker with an unstable presentation.",
  },
  {
    n: "05",
    title: "Ongoing case management and treatment",
    body: "The team member is treated and managed in a first aid scope until return to baseline, case closed.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="pt-16 pb-20 sm:pt-24 sm:pb-24">
          <div className="max-w-3xl">
            <Eyebrow>Occupational telemedicine on demand</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Too big for a first-aid kit.{" "}
              <span
                style={{
                  WebkitTextStroke: "1.5px var(--color-brand)",
                  color: "transparent",
                }}
              >
                Too small
              </span>{" "}
              for a full-time medic.
            </h1>
            <p className="mt-6 text-xl text-steel sm:text-2xl">
              A medic on every jobsite that you can actually afford.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" variant="primary">
                Join the waitlist
              </LinkButton>
              <LinkButton href="/what-we-do" variant="secondary">
                See how it works
              </LinkButton>
            </div>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink">
              When a worker is injured, a licensed paramedic is on screen in
              minutes, guiding your crew through the right care, right away.
            </p>
          </div>
        </Container>

        {/* The lifeline: a live link between the site and the clinician */}
        <Container className="pb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
              Jobsite
            </span>
            <Lifeline className="h-12 flex-1" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
              Clinician
            </span>
          </div>
          <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.14em] text-steel">
            A medic for every jobsite. Priced as you connect.
          </p>
        </Container>
      </section>

      {/* The gap */}
      <section className="border-y border-steel/15 bg-panel py-16 sm:py-24">
        <Container>
          <Eyebrow>The gap</Eyebrow>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <h2 className="text-2xl sm:text-3xl">
              On a smaller to medium jobsite, how are you ensuring your workers get the care they need when they need it?.
            </h2>
            <p className="text-lg leading-relaxed text-steel">
              A first-aid kit can&apos;t assess anyone. A full-time medic costs
              more than the project can carry. So when someone gets hurt, the
              call is left to whoever&apos;s closest, with no clinician in the
              loop until 1-2 hours after injury. Medic Cadence puts a licensed paramedic in that loop,
              instantly.
            </p>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl sm:text-3xl">
            A live clinical link, the instant your crew needs one.
          </h2>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-steel/15 bg-steel/15 sm:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n} className="bg-surface p-7">
                <Numeral value={s.n} />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-steel">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="border-t border-steel/15 bg-panel py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <Eyebrow>Who it&apos;s for</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl">
                Built for the sites that need to protect their team and safety record.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-steel">
              General contractors running small to medium, non-permanent projects:
              roadwork, concrete, and similar, roughly 11–250 workers.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder / trust strip */}
      <section className="py-16 sm:py-24">
        <Container>
          <Card className="border-brand/20">
            <Eyebrow>Built by a paramedic</Eyebrow>
            <p className="mt-4 max-w-3xl text-xl leading-relaxed text-ink sm:text-2xl">
              Wesley Yielding spent 8 years in EMS and 4 in occupational health,
              on sites of 25 to 500 people. Medic Cadence is the service he
              wished those crews had.
            </p>
            <div className="mt-6">
              <LinkButton href="/about" variant="secondary" className="px-5 py-2.5">
                Meet the founder
              </LinkButton>
            </div>
          </Card>
        </Container>
      </section>

      {/* Medic Cadence teaser (compact, secondary to the hero) */}
      <section className="border-t border-steel/15 bg-panel py-12 sm:py-16">
        <Container>
          <div className="rounded-md border border-signal/40 bg-signal/5 p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <Eyebrow>New · Medic Cadence</Eyebrow>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Not just telemedicine. We stay on line until your team member is cared for.
                </h2>
                <p className="mt-3 leading-relaxed text-steel">
                  Medic Cadence adds live, paramedic-guided support any time 911 is called for any reason.
                    <ul>
                        <li>CPR support during a cardiac arrest</li>
                    </ul>
                </p>
              </div>
              <LinkButton href="/cadence" variant="secondary" className="shrink-0">
                Explore Medic Cadence
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Peace-of-mind close */}
      <section className="bg-navy py-20 text-white sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow onDark>Peace of mind</Eyebrow>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl">
              Your crew is never alone when something happens, and neither are
              the people who sent them out there.
            </h2>
            <div className="mt-8">
              <LinkButton href="/contact" variant="primary">
                Join the waitlist
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
