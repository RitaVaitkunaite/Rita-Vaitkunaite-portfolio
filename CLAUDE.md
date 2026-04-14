# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role

You are an expert React + TypeScript developer. Prioritize simplicity, readability, and clean code over cleverness. Prefer the simplest implementation that satisfies requirements — no speculative abstractions, no over-engineering.

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

**Aesthetic: dark cinematic editorial.** The portfolio feels like a magazine cover — full-screen photographic background, frosted glass panels, and minimal white-on-dark typography.

**Fonts (loaded via Google Fonts in `public/index.html`):**
- `--font-serif: 'EB Garamond'` — headings, display text, italic accent copy, post-it titles
- `--font-sans: 'DM Sans'` — body copy, UI labels, nav links, captions

**Key CSS tokens (all in `src/index.css`):**
- `--color-bg` — main dark background (#0d1a14, dark forest green)
- `--color-bg-scroll` — slightly lighter bg for scrollable inner pages (#111e18)
- `--color-glass-bg` — frosted glass panel fill (rgba(255,255,255,0.18))
- `--color-glass-border` — frosted glass border (rgba(255,255,255,0.30))
- `--color-text-primary / secondary / muted` — white at 100% / 85% / 55% opacity
- `--color-accent-pink` — hot pink accent (#ff2d78), used for active nav and accent tag
- `--color-postit-yellow / pink` — post-it note backgrounds (#fef08a / #fda4af)
- `--color-ink-dark` — dark ink for text inside post-its (#1a1a1a)
- `--color-border` — subtle white border (rgba(255,255,255,0.12))

**Layout:**
- **Homepage (`/`):** `PageLayout variant="hero"` — full-screen fixed, `overflow: hidden`. Background: `/cat1.jpeg` (painting) with vignette overlay. Hero panel and post-its are all `position: fixed`.
- **Inner pages:** `PageLayout variant="scrollable"` — normal scroll, `--color-bg-scroll` background. Content padded inside a `.page` div.
- `TopNav` (`src/shared/ui/TopNav/`) — fixed nav bar present on all pages, z-index 50, transparent background.

**Decoration patterns:**
- Frosted glass: `background: var(--color-glass-bg)` + `backdrop-filter: blur(2px)` + `border: 1px solid var(--color-glass-border)`
- Post-it notes: rotated with `transform: rotate(Xdeg)`, shadow lift on hover, tape strip via `::before`
- Floating accent tag: `position: fixed`, `--color-accent-pink`, animated float keyframe
- Cat eye tracking: `CatEyesOverlay` component + `useCatEyes` hook — DOM elements positioned over cat eyes in `/cat1.jpeg`, pupils follow cursor

**No UI libraries.** All effects are pure CSS — no external component library is used or needed.

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
