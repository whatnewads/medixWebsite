import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { Analytics } from "@vercel/analytics/next";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel">
          The page you&apos;re looking for may have moved. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-8">
          <LinkButton href="/" variant="primary">
            Back to home
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
