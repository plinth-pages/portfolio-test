import type { Profile } from "./types";

export const profile: Profile = {
  name: "Asha Menon",
  title: "Backend engineer",
  headline:
    "I build systems that stay boring under load, and developer tools that make the boring parts fast.",
  avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
  email: "asha@example.com",
  location: "Bengaluru, India",
  cta: { label: "Get in touch", href: "mailto:asha@example.com" },
  about: [
    "I have spent the last six years on backend and infrastructure teams, mostly in payments and data pipelines. The work I enjoy most sits at the boundary between a system and the people operating it — good logs, honest error messages, dashboards that tell you the truth.",
    "Right now I am focused on developer tooling: making local environments reproducible and CI feedback loops short enough that people actually read them.",
  ],
  stats: [
    { label: "Years shipping", value: "6" },
    { label: "Repositories", value: "48" },
    { label: "Stars earned", value: "2.1k" },
    { label: "Packages published", value: "7" },
  ],
  socials: [
    { platform: "github", url: "https://github.com" },
    { platform: "x", url: "https://x.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "leetcode", url: "https://leetcode.com" },
  ],
  contactNote:
    "Open to interesting backend and infrastructure problems. I reply to everything that isn't a recruiter template.",
};
