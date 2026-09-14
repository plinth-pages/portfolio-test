import { profile } from "@/content/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" heading="About">
      <div className="flex max-w-2xl flex-col gap-4">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="leading-relaxed text-ink/80">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
