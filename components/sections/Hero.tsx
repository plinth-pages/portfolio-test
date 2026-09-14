import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="w-full px-6 pt-[calc(var(--plinth-space)*0.8)] pb-[calc(var(--plinth-space)/2)]">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        {profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover ring-1 ring-line"
          />
        ) : null}

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-accent">{profile.title}</p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">{profile.headline}</p>
        </div>

        {profile.cta ? (
          <a
            href={profile.cta.href}
            className="inline-flex w-fit items-center rounded-page bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
          >
            {profile.cta.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}
