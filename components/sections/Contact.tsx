import { SocialIcon } from "@/components/SocialIcon";
import { profile } from "@/content/profile";
import { Section } from "./Section";

const LABELS: Record<string, string> = {
  github: "GitHub",
  x: "X",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  youtube: "YouTube",
  dribbble: "Dribbble",
  behance: "Behance",
  leetcode: "LeetCode",
  email: "Email",
  website: "Website",
};

export function SocialLinks() {
  if (profile.socials.length === 0) return null;

  return (
    <Section id="elsewhere" heading="Elsewhere">
      <ul className="flex flex-wrap gap-2">
        {profile.socials.map((link) => (
          <li key={link.url + link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-page border border-line bg-card px-4 py-2 text-sm text-ink/80 transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              <SocialIcon platform={link.platform} className="h-4 w-4" />
              {link.label ?? LABELS[link.platform]}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" heading="Contact">
      <div className="flex flex-col gap-5">
        {profile.contactNote ? (
          <p className="max-w-2xl leading-relaxed text-ink/80">{profile.contactNote}</p>
        ) : null}
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex w-fit items-center gap-2 rounded-page bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
        >
          <SocialIcon platform="email" className="h-4 w-4" />
          {profile.email}
        </a>
      </div>
    </Section>
  );
}
