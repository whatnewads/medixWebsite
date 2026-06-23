import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-body text-sm font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  // Primary CTA: brass/amber fill, ink text (AA ~5.5:1). The high-vis "go".
  primary:
    "bg-signal text-ink hover:bg-signal-strong focus-visible:outline-signal-strong",
  // Secondary: ghost/outlined in brand blue — echoes the logo's outlined letterforms.
  secondary:
    "border border-brand text-brand bg-transparent hover:bg-brand hover:text-white focus-visible:outline-brand",
  // Ghost on dark bands: outlined in white.
  "ghost-light":
    "border border-white/70 text-white bg-transparent hover:bg-white hover:text-navy focus-visible:outline-white",
};

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function LinkButton({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
