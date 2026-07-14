import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata({
  title: "What we do: occupational telemedicine",
  description:
    "Telemedicine for jobsites: a licensed clinician connects on demand to assess the worker, manage the case, and guide care within first-aid scope, with clear escalation.",
  path: "/what-we-do",
});

const offerings = [
  {
    title: "Mobilization",
    body: "When a site comes online, we ship a stocked first-aid bag, some equipment, and offer training to your staff on how to use the equipment and application so they are prepared."
  },
  {
    title: "As-needed clinical assessments",
    body: "When a worker is hurt or sick, a licensed clinician (a paramedic or EMT experienced in occupational health) connects on demand. The clinician assesses the worker over telemedicine and will advise first steps, always starting with first aid treatment.",
  },
  {
    title: "Real-time treatments",
    body: "The clinician walks your certified crew through first aid treatment steps, then manages the case toward getting the worker back to baseline through ongoing follow ups telemedicine and treatment.",
  },
  {
    title: "Appropriate escalation",
    body: "Workers with a stable presentation who need more get an outpatient order (for example, imaging), coming from our own occupational physician. Workers with an unstable presentation get immediate emergency direction. Medic Cadence gets people the appropriate care they need.",
  },
  {
    title: "Case Management",
    body: "Whether your team member needs outpatient orders or needs an ambulance, or for 99% of cases that require first aid only, our medics guide the case, advising points of contact for that job site on the most appropriate next moves. We will manage the case from time of injury until return to baseline.",
  },

];

export default function WhatWeDoPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>What we do</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Occupational telemedicine, priced for only when you connect with a paramedic.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
            Telemedicine sessions between a worker and a licensed
            clinician who provides assessment guidance, treatment, and case management,
            delivered hands-on through your first aid certified personnel on site.
          </p>
        </Container>
      </section>

      <section className="border-t border-steel/15 bg-panel py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {offerings.map((o, i) => (
              <Card key={o.title} className={i === offerings.length - 1 && offerings.length % 2 === 1 ? "md:col-span-2" : ""}>
                <h2 className="text-xl font-bold text-brand">{o.title}</h2>
                <p className="mt-3 leading-relaxed text-steel">{o.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

          {/* Medic Cadence module
            /* <section className="border-t border-steel/15 py-16 sm:py-24">
            <Container>
            <Eyebrow>Module · Medic Cadence</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-2xl sm:text-3xl">
            Live, paramedic-guided CPR, at the push of a button.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">
            Your crew is CPR-certified, but no certification fully prepares
            anyone for the real moment. Medic Cadence puts a standby licensed
            paramedic on screen during a cardiac emergency to guide your
            responder through compressions, keep them on cadence, and support AED
            use, until EMS takes over.
            </p>
            <p className="mt-5 max-w-2xl rounded-md border border-signal/40 bg-signal/5 p-4 text-base font-medium text-ink">
            Cadence works alongside 911, never instead of it.
            </p>
            <div className="mt-6">
            <LinkButton href="/cadence" variant="secondary">
            Explore Medic Cadence
            </LinkButton>
            </div>
            </Container>
            </section> */}

      <section className="bg-navy py-16 text-white sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-xl text-2xl text-white sm:text-3xl">
              Ready to get a site covered?
            </h2>
            <LinkButton href="/how-to-get-started" variant="primary">
              Get started
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
