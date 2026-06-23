/**
 * Large outlined numeral (01 / 02 / 03) — the "outline motif" that echoes the hollow
 * MEDIX wordmark. Used only on real sequences (how it works, getting started).
 * Stroke-only text via -webkit-text-stroke with a transparent fill.
 */
export function Numeral({
  value,
  onDark = false,
}: {
  value: string;
  onDark?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className="font-display text-5xl font-extrabold leading-none sm:text-6xl"
      style={{
        WebkitTextStroke: `2px ${onDark ? "rgba(255,255,255,0.55)" : "var(--color-brand)"}`,
        color: "transparent",
      }}
    >
      {value}
    </span>
  );
}
