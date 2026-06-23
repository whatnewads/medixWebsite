import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata({
  title: "What we do — occupational telemedicine",
  description:
    "As-needed telemedicine for jobsites: a licensed clinician connects on demand to assess the worker, manage the case, and guide care within first-aid scope — with clear escalation.",
  path: "/what-we-do",
});

const offerings = [
  {
    title: "As-needed clinical access",
    body: "When a worker is hurt or sick, a licensed mid-level clinician — a paramedic or EMT experienced in occupational health — connects on demand.",
  },
  {
    title: "Real-time assessment and case management",
    body: "The clinician assesses the worker over video and walks your certified crew through the response step by step, then manages the case toward getting the worker back to baseline.",
  },
  {
    title: "Care within first-aid scope, delivered on site",
    body: "The hands are your own first-aid/CPR/AED-certified team leads; the clinician is the judgment guiding them — getting the right care to the worker, fast.",
  },
  {
    title: "The Medix first-aid bag",
    body: "When a site comes online, we ship a stocked first-aid bag and track its contents — so the clinician always knows what's on hand to guide care.",
  },
  {
    title: "Clear escalation",
    body: "Stable workers who need more get an outpatient order (for example, imaging). Unstable workers get immediate emergency direction. Medix gets people the care they need.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>What we do</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Occupational telemedicine, built for the jobsite.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
            As-needed telemedicine sessions between a worker and a licensed
            clinician who provides assessment guidance and case management —
            delivered hands-on through your certified personnel on site.
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
