import { education, experience, milestones } from "@/content/career";
import { Section } from "./Section";

const range = (start: string, end?: string, openLabel = "Present") => `${start} — ${end ?? openLabel}`;

export function Experience() {
  return (
    <Section id="experience" heading="Experience">
      <ol className="flex flex-col gap-7">
        {experience.map((item) => (
          <li key={`${item.company}-${item.start}`} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-6">
            <p className="pt-0.5 text-sm text-muted tabular-nums">{range(item.start, item.end)}</p>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-medium text-ink">
                {item.role}
                <span className="text-muted"> · {item.company}</span>
              </h3>
              {item.description ? (
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" heading="Education">
      <ol className="flex flex-col gap-7">
        {education.map((item) => (
          <li key={item.institution} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-6">
            <p className="pt-0.5 text-sm text-muted tabular-nums">{range(item.start, item.end, "")}</p>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-ink">{item.institution}</h3>
              <p className="text-sm text-muted">
                {item.degree}
                {item.field ? ` · ${item.field}` : ""}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Milestones() {
  if (milestones.length === 0) return null;

  return (
    <Section id="milestones" heading="Milestones">
      <ol className="relative flex flex-col gap-6 border-l border-line pl-6">
        {milestones.map((item) => (
          <li key={item.title} className="relative flex flex-col gap-1">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[calc(1.5rem+4.5px)] h-2 w-2 rounded-full bg-accent"
            />
            <p className="text-xs tracking-wider text-muted uppercase">{item.date}</p>
            <h3 className="font-medium text-ink">{item.title}</h3>
            {item.description ? (
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
