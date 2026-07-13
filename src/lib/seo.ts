import type { Metadata } from "next";
import { site, founder } from "@/lib/site";
import { faqs } from "@/lib/faqs";

/**
 * Per-page metadata helper. Sets title, description, canonical, and OG/Twitter.
 * `path` is the route path (e.g. "/about"); "/" for home.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? "/" : path;
  const fullTitle = path === "/" ? `${site.name}: ${title}` : `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
}

// ---- JSON-LD builders (static data; safe to inject server-side) ----

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: site.logo,
    description: site.description,
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.jobTitle,
      description: founder.bio,
    },
  };
}

export function personLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.jobTitle,
    description: founder.bio,
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}

export function serviceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Occupational telemedicine",
    name: "Occupational telemedicine by Medix Occupational",
    description: site.description,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "United States" },
    audience: {
      "@type": "BusinessAudience",
      name: "General contractors running medium, non-permanent jobsites (roughly 25–250 workers)",
    },
  };
}

export function medicCadenceServiceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medic Cadence",
    serviceType: "Paramedic-guided CPR support for jobsite crews",
    description:
      "Medic Cadence puts a standby licensed paramedic on screen during a cardiac emergency, guiding a certified jobsite crew through CPR while emergency services are en route. A module of Medix Occupational. Cadence works alongside 911 and does not replace emergency medical services.",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "US",
    url: `${site.url}/cadence`,
  };
}

export function faqPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/**
 * Serialize a JSON-LD object for use as a <script> text child. Escapes `<` to its
 * unicode form so the payload can never break out of the script tag, and stays valid
 * JSON, no dangerouslySetInnerHTML needed.
 */
export function jsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
