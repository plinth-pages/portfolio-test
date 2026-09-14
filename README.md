# Portfolio

Built with [Plinth](https://plinth.dev). This is a normal Next.js app — the code is yours.

```bash
pnpm install
pnpm dev          # http://localhost:3100
```

## Where things are

| Path                             | What                                                                                |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| `content/`                       | Everything the page says: profile, projects, career, skills, theme                  |
| `components/sections/`           | The sections — plain React and Tailwind, edit freely                                |
| `app/page.tsx`, `app/layout.tsx` | Page composition, including the `<Slot>` elements                                   |
| `plinth.json`                    | Which integrations are installed and where. Managed by Plinth — don't edit by hand. |

## Slots

`<Slot name="…">` marks where integrations (LeetCode stats, a contact form, …) appear. You can move
sections around and restyle anything, but keep every slot exactly once and leave its contents to
Plinth. `pnpm plinth:check` verifies this, and CI runs it on every push.

## Checks

```bash
pnpm plinth:check   # slot contract
pnpm format:check   # formatting
pnpm typecheck
pnpm build
```

---

### For Plinth maintainers

- This repository must be marked as a **GitHub template repository** — portfolios are generated from it.
- **Never add integration-specific code here.** The codemod's duplicate guard only recognises its own
  markers; a hand-added line plus an injected one breaks every new portfolio.
- `@plinth-pages/core` and `@plinth-pages/check` are installed from `vendor/*.tgz` until they are published to npm.
  After publishing, replace the `file:` specifiers in `package.json` with versions and delete `vendor/`.
- `vercel.json` disables deployments from the `draft` branch. Confirm the key against Vercel's current
  project configuration before Phase 6 (verification gate G3).
