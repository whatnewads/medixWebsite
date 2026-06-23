import type { ReactNode } from "react";

/** Elevated white panel with a hairline border. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md border border-steel/15 bg-panel p-6 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}
