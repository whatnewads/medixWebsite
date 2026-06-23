import type { ReactNode } from "react";

/** Mono utility label that sits above a heading — encodes a true, specific signal. */
export function Eyebrow({
  children,
  className = "",
  onDark = false,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p
      className={`font-mono text-xs font-medium uppercase tracking-[0.18em] ${
        onDark ? "text-signal" : "text-steel"
      } ${className}`}
    >
      {children}
    </p>
  );
}
