// Single source of truth for site-wide constants.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://medix.work";

export const site = {
  name: "Medix",
  url: SITE_URL,
  tagline: "A Medic on Every Jobsite.",
  description:
    "Occupational telemedicine for jobsites. When a worker is hurt, a licensed paramedic connects by video in seconds and guides your certified crew through the right care.",
  email: "hello@medix.work", // [TODO] confirm real inbox
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
  { href: "/how-to-get-started", label: "Get Started" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];
