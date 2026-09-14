import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "ledger-kit",
    description:
      "Double-entry accounting primitives for Go services. Handles idempotency and reconciliation so you stop reinventing both.",
    href: "https://github.com",
    tags: ["Go", "Payments"],
  },
  {
    title: "tracequery",
    description:
      "Query distributed traces with SQL instead of a click-driven UI. Started as a weekend hack, now used by three teams.",
    href: "https://github.com",
    tags: ["Rust", "Observability"],
  },
  {
    title: "envseal",
    description:
      "Encrypted environment files with per-developer keys. No shared secrets in chat, ever again.",
    href: "https://github.com",
    tags: ["TypeScript", "CLI"],
  },
  {
    title: "slowpoke",
    description:
      "A proxy that injects realistic latency and failures into local development, so you find the timeout bugs first.",
    href: "https://github.com",
    tags: ["Go", "Testing"],
  },
];
