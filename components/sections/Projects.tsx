import { projects } from "@/content/projects";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" heading="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const body = (
            <>
              <h3 className="font-medium text-ink group-hover:text-accent">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{project.description}</p>
              {project.tags.length ? (
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          );
          const card = "group flex flex-col gap-2 rounded-page border border-line bg-card p-5";

          return project.href ? (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${card} transition-colors hover:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none`}
            >
              {body}
            </a>
          ) : (
            <div key={project.title} className={card}>
              {body}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
