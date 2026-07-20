import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy text-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex" aria-label="Medic Cadence home">
              <Image
                src="/medixlogo-mark-white.png"
                alt="Medic Cadence"
                width={1949}
                height={632}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Occupational telemedicine for jobsites. A licensed paramedic on
              screen the moment your crew needs one.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-block font-body text-sm font-medium text-white transition-colors hover:text-signal"
            >
              {site.phone}
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 sm:flex sm:flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm text-white/80 transition-colors hover:text-signal"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/privacy"
              className="font-body text-sm text-white/80 transition-colors hover:text-signal"
            >
              Privacy
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.tagline}
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Occupational telemedicine
          </p>
        </div>
      </Container>
    </footer>
  );
}
