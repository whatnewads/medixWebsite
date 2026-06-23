/**
 * "The lifeline" — Medix's signature element. A single continuous hairline in brand
 * blue (the live link between the jobsite and the remote clinician) that, at one
 * moment, resolves into a calm brass pulse travelling along it.
 *
 * Implemented as inline SVG. Motion lives in a `.lifeline-pulse` class that
 * `prefers-reduced-motion` flattens to a static line (see globals.css).
 *
 * Decorative — marked aria-hidden.
 */
export function Lifeline({
  className = "",
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  // A taut line that crosses one ECG-like complex (the "pulse") near the middle —
  // the connection between site and clinician coming alive.
  const d =
    "M0 40 L470 40 L500 40 L516 40 L528 18 L542 40 L556 40 L568 62 L582 40 L600 40 L640 40 L1200 40";

  return (
    <svg
      className={className}
      viewBox="0 0 1200 80"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      role="presentation"
    >
      {/* Static brand-blue hairline */}
      <path
        d={d}
        stroke="var(--color-brand)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* Travelling brass pulse */}
      <path
        className="lifeline-pulse"
        d={d}
        stroke="var(--color-signal)"
        strokeWidth={strokeWidth + 1}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1000}
        strokeDasharray="60 940"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
