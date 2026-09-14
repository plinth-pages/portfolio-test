// Shapes for everything in content/. TypeScript checks every content edit against these,
// which is what lets the Plinth co-pilot rewrite this folder safely.

export type SocialPlatform =
  | "github"
  | "x"
  | "linkedin"
  | "instagram"
  | "youtube"
  | "dribbble"
  | "behance"
  | "leetcode"
  | "email"
  | "website";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

export interface Profile {
  name: string;
  title: string;
  /** One or two sentences under the name. */
  headline: string;
  avatarUrl?: string;
  email: string;
  location?: string;
  cta?: { label: string; href: string };
  /** Paragraphs for the About section. */
  about: string[];
  stats: { label: string; value: string }[];
  socials: SocialLink[];
  contactNote?: string;
}

export interface Project {
  title: string;
  description: string;
  href?: string;
  tags: string[];
}

export interface Role {
  company: string;
  role: string;
  start: string;
  end?: string;
  description?: string;
}

export interface Degree {
  institution: string;
  degree: string;
  field?: string;
  start: string;
  end?: string;
}

export interface Milestone {
  date: string;
  title: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Theme {
  mode: "light" | "dark";
  /** Six-digit hex. */
  accent: string;
  font: "sans" | "serif" | "mono";
  spacing: "compact" | "comfortable" | "spacious";
  radius: "sharp" | "rounded" | "pill";
}
