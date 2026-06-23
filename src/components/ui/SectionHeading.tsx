import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

/** Standard eyebrow + section heading block. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  onDark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-3 text-2xl sm:text-3xl ${onDark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {children ? (
        <div className={`mt-4 text-base leading-relaxed ${onDark ? "text-white/80" : "text-steel"}`}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
