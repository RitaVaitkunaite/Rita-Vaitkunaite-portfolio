# Rita-Vaitkunaite-portfolio

Portfolio website for Rita Vaitkunaite, a UX designer. Built with React 19 and TypeScript.

## Tech Stack

- **React 19** — UI framework
- **TypeScript** (strict mode) — type safety across all layers
- **CSS Modules** — scoped, co-located component styles
- **React Testing Library + Jest** — unit and component testing

## Architecture

Monolithic SPA with a feature-sliced structure. Each feature is organized into four layers:

```
src/features/[feature]/
  data/         # external data sources, repositories
  domain/       # pure business logic, models, use cases
  presentation/ # React components, pages, hooks
  di/           # dependency injection via React Context
```

## Local Development

```bash
npm start              # start dev server at http://localhost:3000
npm test               # run tests in watch mode
npm run build          # production build
```
