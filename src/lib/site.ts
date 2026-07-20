// Single source of truth for site-wide constants.

// Resolve the public site URL defensively: tolerate a missing scheme, whitespace,
// or an empty/unparseable value so a bad env var can never crash the build
// (metadataBase = new URL(SITE_URL) throws on invalid input during static generation).
function resolveSiteUrl(): string {
  const fallback = "https://medix.work";
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(candidate).origin;
  } catch {
    return fallback;
  }
}

export const SITE_URL = resolveSiteUrl();

export const site = {
  name: "Medic Cadence",
  shortName: "Medic Cadence",
  url: SITE_URL,
  tagline: "A Medic on Every Jobsite.",
  description:
    "Occupational telemedicine for jobsites. When a worker is hurt, a licensed paramedic connects by video in seconds and guides your certified crew through the right care.",
  email: "hello@medix.work", // [TODO] confirm real inbox
  phone: "719-301-0020",
  phoneHref: "tel:+17193010020",
  logo: `${SITE_URL}/medixlogo.png`,
  ogImage: `${SITE_URL}/og-image.png`,
} as const;

export const founder = {
  name: "Wesley Yielding",
  jobTitle: "Founder & Paramedic",
  bio: "A paramedic with 8 years of EMS experience and 4 years in occupational health, having served on jobsites ranging from 25 to 500 team members.",
} as const;

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/cadence", label: "Cadence" },
  { href: "/how-to-get-started", label: "Get Started" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
];
