# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role

You are an expert React + TypeScript developer. Prioritize simplicity, readability, and clean code over cleverness. Prefer the simplest implementation that satisfies requirements — no speculative abstractions, no over-engineering.

## Copy & Spelling

- Use American English spellings: "organization" / "organizational" (not "organisation" / "organisational")

## Commands

- **Start dev server:** `npm start`
- **Build for production:** `npm run build`
- **Run tests (single pass):** `npm test -- --watchAll=false`
- **Run tests (watch mode):** `npm test`
- **Run single test file:** `npm test -- --testPathPattern=App`

## Architecture

**Monolithic, feature-sliced.** The app is a single deployable React SPA. Code is organized by feature, and each feature follows a strict layered package structure:

```
src/
  features/
    [feature-name]/
      data/          # API calls, repositories, external data sources
      domain/        # Business logic, models, use cases (pure TS — no React, no fetch)
      presentation/  # React components, pages, custom hooks
      di/            # Dependency injection — React Context providers, factories
  shared/            # Truly shared utilities, components, hooks (use sparingly)
  App.tsx
  index.tsx
```

**Layer dependency rules (enforced strictly):**
- `data` depends on nothing internal
- `domain` depends only on domain models — no React imports, no HTTP calls
- `presentation` depends on domain and di
- `di` wires domain + data together and exposes via React Context
- No circular dependencies between layers

## TypeScript

- All source files use `.tsx` (components/JSX) or `.ts` (logic, utils, types)
- `strict: true` is enabled — no `any`, no type assertions unless unavoidable
- Domain models are defined as TypeScript `interface` or `type` in the `domain/` layer
- Props interfaces are defined in the same file as their component, above the component

## Visual Design Language

**Aesthetic: clean editorial.** Light backgrounds, dark ink typography, and a serif/sans type pairing. The homepage is a two-column layout (text left, cat photo right); case study pages are minimal long-form reading layouts with a lime-green accent for key findings.

**Fonts (loaded via Google Fonts in `public/index.html`):**
- `--font-serif: 'EB Garamond'` — pullquote marks
- `--font-sans: 'DM Sans'` — body copy, UI labels, nav, captions, most text
- `'Playfair Display', serif` — display headings (hardcoded in CSS, not yet a token)
- `'Roboto Mono', monospace` — monospace labels, findings cards, meta tags (hardcoded in CSS, not yet a token)

**Key CSS tokens (all in `src/index.css`):**
- `--color-bg-scroll` — page background: dark (`#111e18`) in default theme, white (`#ffffff`) in light theme
- `--color-text-primary / secondary / muted` — resolves to dark ink in light theme (`#1a1a1a` / `#1a1a1a` / `rgba(26,26,26,0.5)`)
- `--color-ink-dark` — `#1a1a1a`, dark ink used directly in light sections
- `--color-ink-dark-dim` — `rgba(26, 26, 26, 0.65)`, muted dark ink
- `--color-accent-lime` — `#C8F135`, lime green for category tags and finding callouts
- `--color-ink-green` — `#002500`, text color used on lime backgrounds
- `--color-border` — subtle separator: `rgba(255,255,255,0.12)` default / `rgba(26,26,26,0.2)` light theme
- `--color-surface / surface-strong` — subtle fills for table headers, diagram cards
- Type scale (`--text-xs` → `--text-3xl`) and spacing (`--space-2` → `--space-24`) — used throughout

**Tokens defined but currently unused** (legacy, kept for future use):
- `--color-glass-bg / glass-border`, `--color-postit-yellow / postit-pink`, `--color-accent-pink`

**Theme switching:**
- Default (no `data-theme`): dark CSS variable values — but currently all page sections hardcode white/light backgrounds, so the dark values are not visible.
- `data-theme="light"`: applied to case study pages (`/case-studies/*`) via `App.tsx`. Overrides `--color-bg-scroll` to `#ffffff` and text tokens to dark ink, producing a white reading layout.

**Layout:**
- **All current pages** use `PageLayout variant="scrollable"` — `min-height: 100vh`, `--color-bg-scroll` background.
- `PageLayout variant="hero"` exists (full-screen fixed layout) but is currently unused.
- **Homepage (`/`):** `HeroSection` (split: text left 38%, `/cat3.png` right) + `ProjectsSection` stacked, both with white section backgrounds.
- **Case study pages (`/case-studies/*`):** single `CaseStudyPage` component, long-form layout with a fixed-offset `.page` container (max-width 840px, offset left by 80px on desktop).
- `TopNav` (`src/shared/ui/TopNav/`) — fixed, solid white (`#ffffff`) background, black text, z-index 50, present on all pages.

**No UI libraries.** All styling is pure CSS — no external component library is used or needed.

## Styling: CSS Modules

- Each component has a co-located `.module.css` file (e.g., `Button.module.css`)
- Import as `import styles from './Button.module.css'` and apply via `className={styles.wrapper}`
- Global styles only in `index.css` (resets, CSS custom properties / design tokens)
- No inline styles, no global class name strings

## Component Rules

- Functional components only — no class components
- One component per file, with its co-located `.module.css`
- Extract non-trivial logic into custom hooks (keep JSX clean and declarative)
- Props interfaces are minimal and explicit
- No prop drilling beyond 2 levels — restructure or use Context

## Clean Code Practices

- Meaningful names — no single-letter variables except loop counters, no unexplained abbreviations
- Functions do one thing
- No dead code, no commented-out code
- `PascalCase` for components and types, `camelCase` for hooks, utils, and variables
- `use` prefix for custom hooks (e.g., `useProjects`)

## Testing

**After completing any feature**, run `npm test -- --watchAll=false` to verify nothing is broken.

**What to test:**
- **Domain logic** (use cases, pure functions, models) — highest priority; unit test with Jest
- **Presentation components** — test user-facing behavior with React Testing Library
  - Use `screen.getByRole`, `userEvent`, `expect(...).toBeInTheDocument()`
  - Do NOT test implementation details (internal state, refs, component structure)
  - Do NOT mock child components unless absolutely necessary

**Test file location:** co-located next to the file under test
- `MyComponent.tsx` → `MyComponent.test.tsx`
- `useMyHook.ts` → `useMyHook.test.ts`

**Coverage goal:**
- All domain logic must have unit tests
- Components with meaningful user interaction (forms, navigation, dynamic rendering) must have component tests
- Simple presentational components (no logic) do not require tests

## Skills

Use these project-local slash commands instead of manually scaffolding files. Invoke them proactively when the task matches.

**Self-improvement:** If you notice a repetitive task that would benefit from a new skill, propose it to the user before creating it. Only suggest if it passes both checks:
1. Would it save meaningful effort across multiple future sessions? (not just today)
2. Is the pattern stable enough to encode? (not too context-specific)

If both are true, ask in one sentence: what the skill does and why it's worth adding. Wait for explicit approval before creating it.

- `/feature [name]` — scaffold a full feature (`data/`, `domain/`, `presentation/`, `di/` layers) with typed boilerplate
- `/component [path/Name]` — create a component with co-located `.module.css` and `.test.tsx`

**Examples:**
```
/feature hero
/component features/hero/presentation/HeroSection
/component shared/ui/Button
```
