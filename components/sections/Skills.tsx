import { skills } from "@/content/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" heading="Skills">
      <div className="grid gap-6 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold tracking-wider text-muted uppercase">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-page border border-line bg-card px-3 py-1.5 text-sm text-ink/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
