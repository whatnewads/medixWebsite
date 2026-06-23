import type { ComponentProps, ReactNode } from "react";

export const labelClass =
  "block font-mono text-xs font-medium uppercase tracking-[0.12em] text-steel";

export const controlClass =
  "mt-2 block w-full rounded-sm border border-steel/30 bg-panel px-3.5 py-2.5 font-body text-base text-ink placeholder:text-steel/60 focus:border-brand focus:outline-2 focus:outline-offset-0 focus:outline-brand";

export function Field({
  label,
  htmlFor,
  required,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  hint?: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required ? <span className="text-signal"> *</span> : null}
      </label>
      {children}
      {hint ? <div className="mt-1.5 text-xs text-steel">{hint}</div> : null}
    </div>
  );
}

export function Input(props: ComponentProps<"input">) {
  return <input className={controlClass} {...props} />;
}

export function Textarea(props: ComponentProps<"textarea">) {
  return <textarea className={`${controlClass} min-h-28 resize-y`} {...props} />;
}

export function Select(props: ComponentProps<"select">) {
  return (
    <select className={controlClass} {...props}>
      {props.children}
    </select>
  );
}

/** Visually-hidden honeypot. Bots fill it; real users never see it. */
export function Honeypot() {
  return (
    <input
      type="text"
      name="_gotcha"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="hidden"
    />
  );
}

export function SuccessPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      role="status"
      className="rounded-md border border-brand/30 bg-brand/5 p-7 text-center"
    >
      <div
        aria-hidden="true"
        className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="mt-4 text-xl font-bold text-ink">{title}</h2>
      <p className="mt-2 leading-relaxed text-steel">{children}</p>
    </div>
  );
}
