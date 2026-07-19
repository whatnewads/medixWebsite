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
    body: "A flat monthly rate for each active site. It covers on-call paramedic access for your crew, scheduled site visits, and stocked, tracked supplies on site.",
  },
  {
    label: "Telehealth time, only when connected",
    price: "$95",
    unit: "/ hour",
    body: "You are billed for a paramedic's time only while your crew is actually connected. If you don't activate us, we don't bill you for the hourly. A typical encounter runs about 15-30 minutes, and the appointment ends when the treatment is finished, care is handed off to another provider, or the team member has no more complaints.",
  },
  {
    label: "Site mobilization",
    price: "$2,500",
    unit: "one-time",
    body: "Single setup when your site begins. It covers shipping materials, equipment, and/or a trailer and setting up the site, and a baseline training day for CPR/First-Aid/AED, and other courses.",
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
              Priced so you only pay for the help and medicine when you use it.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              You cover the cost to get the medicine to you. We charge a
              flat monthly rate for equipment used and liability, and
              you pay for your medic only when your crew actually connects.
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
              <Eyebrow>What that looks like for you.</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl">
                Steady when it is quiet, fair when an injury happens.
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-steel">
              <p>
                A month with no incidents costs $800, and nothing more. A month with telehealth appointments adds only
                the connected time your crew used.
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
              can gauge if your site would be a good fit. Send us the basics and we will come
              back with a clear plan to get your crew the medics they need with the equipment they need. No obligation.
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
