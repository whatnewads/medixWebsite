// Typed, environment-gated client logger.
//
// Rules:
//  - In development, all levels go to the console.
//  - In production, only `warn` and `error` are emitted.
//  - NEVER pass PII (no field values, no emails, no names). Log event names and
//    outcomes only (error codes, field keys, status flags).

type LogLevel = "debug" | "info" | "warn" | "error";

type Meta = Record<string, unknown>;

const isDev = process.env.NODE_ENV !== "production";

const LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

// In prod, suppress anything below `warn`.
const MIN_LEVEL: number = isDev ? LEVEL_ORDER.debug : LEVEL_ORDER.warn;

function emit(level: LogLevel, event: string, meta?: Meta): void {
  if (LEVEL_ORDER[level] < MIN_LEVEL) return;

  const payload = { event, ...(meta ? { meta } : {}) };
  const fn = console[level] ?? console.log;
  fn(`[medix:${level}]`, payload);
}

export const logger = {
  debug: (event: string, meta?: Meta) => emit("debug", event, meta),
  info: (event: string, meta?: Meta) => emit("info", event, meta),
  warn: (event: string, meta?: Meta) => emit("warn", event, meta),
  error: (event: string, meta?: Meta) => emit("error", event, meta),
};

export type Logger = typeof logger;
