/** Hairline rule in steel — the disciplined structural device (no gradients). */
export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-steel/25 ${className}`} />;
}
