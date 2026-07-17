import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Numeral } from "@/components/ui/Numeral";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { LeadQualificationForm } from "@/components/forms/LeadQualificationForm";

export const metadata: Metadata = pageMetadata({
  title: "How to get started",
  description:
    "Tell us about your project and we'll send a free, itemized quote. Then see how getting a site covered works, what it costs, and what happens after you reach out.",
  path: "/how-to-get-started",
});

const steps = [
  {
    n: "01",
    title: "Tell us about the project",
    body: "Send the basics using the form above: site size, type of work, location, and how long the project runs. It takes a couple of minutes.",
  },
  {
    n: "02",
    title: "We mobilize the site",
    body: "We ship a stocked, contents-tracked first-aid bag and the equipment your site needs, then designate your CPR/First Aid certified responders. If you need certifications, we handle that first.",
  },
  {
    n: "03",
    title: "You go live",
    body: "From then on, a licensed paramedic is one tap away the moment someone is hurt, for the life of the project.",
  },
];

export default function HowToGetStartedPage() {
  return (
    <>
      {/* Form first, at the top of the page, above the fold */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <Eyebrow>Get started</Eyebrow>
              <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                Getting a site covered.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-steel">
                Tell us about your project and we&apos;ll send a free, itemized
                quote. Reaching out costs nothing and commits you to nothing.
              </p>
              <p className="mt-4 max-w-md leading-relaxed text-steel">
                Not ready yet? Scroll down for how it works, what it costs, and
                what happens after you reach out.
              </p>
            </div>

            <Card>
              <LeadQualificationForm />
            </Card>
          </div>
        </Container>
      </section>

      {/* The three-step process */}
      <section className="border-t border-steel/15 bg-panel py-16 sm:py-20">
        <Container>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl sm:text-3xl">
            Three steps from first contact to a paramedic on the line.
          </h2>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n}>
                <Numeral value={s.n} />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-steel">{s.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-2xl rounded-md border border-signal/40 bg-signal/5 p-5 text-base leading-relaxed text-ink">
            <span className="font-semibold">
              Don&apos;t have certified responders?
            </span>{" "}
            We provide CPR, First Aid, AED, and Stop the Bleed certifications to
            get you started.
          </p>
        </Container>
      </section>

      {/* How connecting works: the longer-form logistics explanation */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>How connecting works</Eyebrow>
            <h2 className="mt-3 text-2xl sm:text-3xl">
              Your crew are the hands. The paramedic is the medical brain.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-steel">
              <p>
                When a worker is hurt, one of your CPR, First Aid, and AED
                certified team members, usually a foreman, superintendent, or
                team lead, opens the app and connects. A licensed paramedic is on
                screen within minutes.
              </p>
              <p>
                The paramedic assesses the worker over telemedicine and walks
                your certified responder through the care step by step, in real
                time. Your people stay squarely within their certified first-aid
                scope. The paramedic makes the clinical calls: what to do on
                site, when to send someone for imaging, and when to escalate to
                911.
              </p>
              <p>
                All it takes on your end is at least one certified responder on
                site and a way to connect. That is the whole footprint. If your
                crew is not certified yet, we run the certifications as part of
                bringing the site online, so you are never waiting on us to be
                covered.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What it costs: transparency + link to /pricing */}
      <section className="border-t border-steel/15 bg-panel py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>What it costs</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl">
                Priced so you only pay for the medicine when you use it.
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-steel">
              <p>
                A flat $800 per month keeps a paramedic on call for each site,
                and telehealth time is billed at $95 an hour only while your crew
                is actually connected. Bringing a site online is a one-time
                $2,500 mobilization fee. No per-injury charges, no long contract
                to decode.
              </p>
              <div>
                <LinkButton href="/pricing" variant="secondary">
                  See full pricing
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What happens after you reach out: de-risk the form */}
      <section className="py-16 sm:py-20">
        <Container>
          <Eyebrow>What happens after you reach out</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl sm:text-3xl">
            Reaching out costs you nothing and commits you to nothing.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-bold text-brand">You send the basics</h3>
              <p className="mt-2 leading-relaxed text-steel">
                A few details about your sites through the form on this page.
                That is all we need to start.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-brand">We send a free quote</h3>
              <p className="mt-2 leading-relaxed text-steel">
                We come back with a clear, itemized quote priced for your sites.
                No obligation, no pressure.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-brand">You decide, then go live</h3>
              <p className="mt-2 leading-relaxed text-steel">
                If it is a fit, we mobilize the site and get your crew connected.
                If it is not, no hard feelings.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
