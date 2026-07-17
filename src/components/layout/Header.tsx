"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/site";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel/15 bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label="Medix Occupational home">
          <Image
            src="/medixlogo-mark.png"
            alt="Medic Cadence"
            width={1949}
            height={632}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <LinkButton href="/contact" variant="primary" className="px-5 py-2.5">
            Join the waitlist
          </LinkButton>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile nav */}
      {open ? (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-steel/15 bg-surface md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-2 py-2.5 font-body text-base font-medium text-ink hover:bg-panel hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton
              href="/contact"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Join the waitlist
            </LinkButton>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
