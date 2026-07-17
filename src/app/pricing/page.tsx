import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description:
    "Straightforward pricing for onsite occupational telemedicine: a flat monthly standby rate per site, hourly clinical time billed only while you are connected, and a one-time mobilization fee. Get a free quote.",
  path: "/pricing",
});

const lineItems = [
  {
    label: "Monthly site service, per site",
    price: "$800",
    unit: "/ month",
    body: "A flat monthly rate for each active site. It covers on-call paramedic access for your crew, scheduled site visits, and stocked, tracked supplies on site. This is your predictable, know-it-in-advance cost.",
  },
  {
    label: "Telehealth time, only when connected",
    price: "$95",
    unit: "/ hour",
    body: "You are billed for a paramedic's time only while your crew is actually connected. A quiet month adds nothing here. A typical encounter runs about 45 minutes, and the clock stops when the case is handled.",
  },
  {
    label: "Site mobilization",
    price: "$2,500",
    unit: "one-time",
    body: "A single setup fee when a site comes online. It covers deploying and setting up the site, the stocked supplies and equipment your crew needs, and a baseline training day to get your responders ready.",
  },
  {
    label: "Training and certifications",
    price: "$85",
    unit: "/ student",
    body: "Get your crew certified and ready to be the hands on site: CPR, First Aid, AED, and Stop the Bleed. Priced per student, run as part of bringing your site online or any time you add people.",
  },
  {
    label: "First-aid consumables",
    price: "You stock",
    unit: "we guide",
    body: "You buy and restock the first-aid consumables your crew goes through. We tell you exactly what to keep on hand for your site and track it, so you are never caught short.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Priced so you only pay for the medicine when you use it.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              No long contracts to decode and no per-injury charges. You cover a
              flat monthly rate to keep a paramedic on standby for each site, and
              you pay by the hour only when your crew actually connects. That is
              the whole model.
            </p>
          </div>
        </Container>
      </section>

      {/* Line items */}
      <section className="border-y border-steel/15 bg-panel py-16 sm:py-24">
        <Container>
          <Eyebrow>What you pay</Eyebrow>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {lineItems.map((item) => (
              <Card key={item.label}>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-steel">
                  {item.label}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-mono text-3xl font-semibold text-brand sm:text-4xl">
                    {item.price}
                  </span>
                  <span className="font-mono text-sm text-steel">
                    {item.unit}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-steel">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* What it means in practice */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <Eyebrow>What that looks like in a month</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl">
                Steady when it is quiet, fair when it is busy.
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-steel">
              <p>
                A month with no incidents costs you the monthly standby rate for
                that site, and nothing more. A month with real events adds only
                the connected clinical hours your crew used.
              </p>
              <p>
                You are never charged per injury, and you are never billed for a
                paramedic sitting idle. If your crew does not need the line, you
                do not pay to use it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Free quote CTA */}
      <section className="bg-navy py-20 text-white sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow onDark>Free quote</Eyebrow>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl">
              Every site is a little different. Tell us about yours.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Size, location, and signal all shape the mobilization fee, so we
              price each site on its own. Send us the basics and we will come
              back with a clear, itemized quote. No obligation.
            </p>
            <div className="mt-8">
              <LinkButton href="/contact" variant="primary">
                Get a free quote
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
