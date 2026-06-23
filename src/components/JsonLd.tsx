import { jsonLd } from "@/lib/seo";

/**
 * Renders a JSON-LD structured-data block. `data` is always static, app-controlled
 * data (never user input). Uses a plain text child rather than dangerouslySetInnerHTML.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {jsonLd(data)}
    </script>
  );
}
