import type { CSSProperties } from "react";
import type { Theme } from "@/content/types";

/*
  Turns a theme object into CSS custom properties.

  Blocks never read the Theme object — they only consume the variables this
  produces (via the Tailwind tokens mapped in globals.css). That indirection is
  why the Phase 5 theme panel can ship without touching a single block.
*/

const PALETTES = {
  light: {
    bg: "#ffffff",
    fg: "#18181b",
    muted: "#71717a",
    border: "#e4e4e7",
    card: "#fafafa",
  },
  dark: {
    bg: "#09090b",
    fg: "#fafafa",
    muted: "#a1a1aa",
    border: "#27272a",
    card: "#131316",
  },
} as const;

const SPACING = {
  compact: "3rem",
  comfortable: "5rem",
  spacious: "7.5rem",
} as const;

const RADIUS = {
  sharp: "0rem",
  rounded: "0.75rem",
  pill: "1.5rem",
} as const;

const FONT_STACKS = {
  sans: "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
  serif: "var(--font-serif), ui-serif, Georgia, serif",
  mono: "var(--font-mono), ui-monospace, SFMono-Regular, monospace",
} as const;

/**
 * Picks black or white text for a given background, using the WCAG relative
 * luminance formula. Without this, a light accent (yellow, lime) gets white
 * text on it and becomes unreadable.
 */
function readableTextOn(hex: string): string {
  const channel = (value: number) => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  return luminance > 0.45 ? "#18181b" : "#ffffff";
}

export function themeToCssVars(theme: Theme): CSSProperties {
  const palette = PALETTES[theme.mode];

  return {
    "--plinth-bg": palette.bg,
    "--plinth-fg": palette.fg,
    "--plinth-muted": palette.muted,
    "--plinth-border": palette.border,
    "--plinth-card": palette.card,
    "--plinth-accent": theme.accent,
    "--plinth-accent-fg": readableTextOn(theme.accent),
    "--plinth-radius": RADIUS[theme.radius],
    "--plinth-space": SPACING[theme.spacing],
    "--plinth-font": FONT_STACKS[theme.font],
  } as CSSProperties;
}

/** Curated accents. A fixed set, not a hex picker — all tested for contrast. */
export const ACCENT_SWATCHES = [
  "#2563eb", // blue
  "#7c3aed", // violet
  "#db2777", // pink
  "#dc2626", // red
  "#ea580c", // orange
  "#16a34a", // green
  "#0d9488", // teal
  "#18181b", // near-black
] as const;

export const THEME_PRESETS = {
  clean: {
    label: "Clean",
    description: "Light, professional, recruiter-friendly",
    theme: {
      mode: "light",
      accent: "#2563eb",
      font: "sans",
      spacing: "comfortable",
      radius: "rounded",
    },
  },
  bold: {
    label: "Bold",
    description: "Dark, high contrast, projects first",
    theme: {
      mode: "dark",
      accent: "#7c3aed",
      font: "sans",
      spacing: "spacious",
      radius: "rounded",
    },
  },
  terminal: {
    label: "Terminal",
    description: "Monospace, compact, hacker aesthetic",
    theme: {
      mode: "dark",
      accent: "#16a34a",
      font: "mono",
      spacing: "compact",
      radius: "sharp",
    },
  },
} as const satisfies Record<string, { label: string; description: string; theme: Theme }>;

export type ThemePresetId = keyof typeof THEME_PRESETS;
