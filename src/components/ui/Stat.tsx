/** A data figure with a mono label — technical-precision device. */
export function Stat({
  figure,
  label,
  onDark = false,
}: {
  figure: string;
  label: string;
  onDark?: boolean;
}) {
  return (
    <div>
      <div
        className={`font-mono text-3xl font-semibold sm:text-4xl ${
          onDark ? "text-white" : "text-brand"
        }`}
      >
        {figure}
      </div>
      <div
        className={`mt-1 font-mono text-xs uppercase tracking-[0.14em] ${
          onDark ? "text-white/70" : "text-steel"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
