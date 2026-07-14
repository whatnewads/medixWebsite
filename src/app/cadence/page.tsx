import type { Metadata } from "next";
import { pageMetadata, medicCadenceServiceLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Numeral } from "@/components/ui/Numeral";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata({
  title: "Medic Cadence: Live paramedic-guided support for jobsite crews when 911 is activated.",
  description:
    "Medic Cadence puts a licensed paramedic on screen during any emergency, guiding your certified crew through guidance, including CPR, while EMS is on the way. This is a subset module of Medic Cadence.",
  path: "/cadence",
});

const steps = [
  {
    n: "01",
    title: "Call 911, then connect.",
    body: "Your certified responder calls 911 first, then opens Medic Cadence.",
  },
  {
    n: "02",
    title: "A paramedic answers in seconds.",
    body: "A standby licensed paramedic is on screen by video and audio.",
  },
  {
    n: "03",
    title: "They support your team during an emergency, live.",
    body: "The paramedic coaches your responder through supportive actions, including compressions, keeping them on cadence, and supports AED use and the rest of the team.",
  },
  {
    n: "04",
    title: "They stay until EMS takes over.",
    body: "The paramedic remains on the line through the response, until emergency medical services arrive and assume care.",
  },
];

export default function CadencePage() {
  return (
    <>
      <JsonLd data={medicCadenceServiceLd()} />

      {/* Pending legal review */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>A module of Medic Cadence</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              When a worker has an emergency, a paramedic guides your crew through the next steps.
              Live.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-steel sm:text-2xl">
              Medic Cadence puts a standby licensed paramedic on screen during the emergency, guiding your certified responder through every compression while EMS is on the way.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" variant="primary">
                Add Cadence to your site
              </LinkButton>
              <LinkButton href="#how-it-works" variant="secondary">
                See how it works
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 911 complement callout: required, prominent, directly under the hero */}
      <section className="bg-navy py-10 text-white sm:py-12">
        <Container>
          <div className="flex flex-col gap-4 border-l-4 border-signal pl-5 sm:pl-7">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
              Important
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Cadence works with 911 activation.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              In any emergency, the first action is always to call 911.
              Medic Cadence supports your crew during the critical minutes while
              emergency services are on the way. It does not replace emergency
              medical services.
            </p>
          </div>
        </Container>
      </section>

      {/* The gap */}
      <section className="border-b border-steel/15 bg-panel py-16 sm:py-24">
        <Container>
          <Eyebrow>The gap</Eyebrow>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <h2 className="text-2xl sm:text-3xl">
              The minutes before EMS arrives decide the most.
            </h2>
            <p className="text-lg leading-relaxed text-steel">
              Your crew is CPR/AED-certified. But no certification fully prepares
              anyone for the real moment, on a real worker, with the clock
              running. Medic Cadence puts a calm, licensed paramedic on the line
              to guide your responder through it: rate, depth, recoil, hand
              placement, and AED use, so the care your worker receives in those
              minutes is the best your crew can give.
            </p>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl sm:text-3xl">
            A paramedic in the loop, from the moment of injury to EMS handoff.
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
                Built for certified crews who want a medic in the loop.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-steel">
              Medic Cadence is an add-on for crews already running Medix
              Occupational, and for certified jobsite teams who want a licensed
              paramedic guiding them the moment an emergency happens. Your
              responders stay within their certified scope. The paramedic guides and supports your crew.
            </p>
          </div>
        </Container>
      </section>

      {/* Closing CTA band */}
      <section className="bg-navy py-20 text-white sm:py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-2xl text-3xl text-white sm:text-4xl">
              A paramedic on the line for the hardest minutes on the job.
            </h2>
            <LinkButton href="/contact" variant="primary">
              Add Cadence to your site
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
