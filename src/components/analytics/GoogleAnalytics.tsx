import Script from "next/script";

// Google Analytics 4 (gtag.js). Injected once from the root layout, which renders
// into every public page's <head> for us. The Measurement ID is public by design;
// env is the source of truth with the known ID as a fallback.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-Y59XDTQS87";

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
