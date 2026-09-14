import { profile } from "@/content/profile";
import { Section } from "./Section";

export function Stats() {
  if (profile.stats.length === 0) return null;

  return (
    <Section id="stats">
      <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 rounded-page border border-line bg-card p-4">
            <dt className="text-xs tracking-wider text-muted uppercase">{stat.label}</dt>
            <dd className="text-2xl font-semibold text-ink tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
