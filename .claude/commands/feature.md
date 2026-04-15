Scaffold a new feature following the project's feature-sliced architecture.

The feature name (kebab-case) is: $ARGUMENTS

Derive the PascalCase name from the argument (e.g. `hero-section` → `HeroSection`, `about` → `About`).

Create the following 8 files under `src/features/$ARGUMENTS/`:

**data/index.ts**
```ts
// Data layer: repositories, API clients, external data sources
```

**domain/$PascalName.ts** — the feature's core domain model:
```ts
export interface $PascalName {
  id: string;
}
```

**domain/index.ts**
```ts
export type { $PascalName } from './$PascalName';
```

**presentation/$PascalName.tsx** — minimal functional component:
```tsx
import styles from './$PascalName.module.css';

function $PascalName() {
  return (
    <div className={styles.root}>
      {/* TODO: implement $PascalName */}
    </div>
  );
}

export default $PascalName;
```

**presentation/$PascalName.module.css**
```css
.root {}
```

**presentation/$PascalName.test.tsx** — RTL placeholder:
```tsx
import { render, screen } from '@testing-library/react';
import $PascalName from './$PascalName';

describe('$PascalName', () => {
  it('renders without crashing', () => {
    render(<$PascalName />);
  });
});
```

**di/$PascalNameProvider.tsx** — Context provider stub:
```tsx
import { createContext, useContext, ReactNode } from 'react';

interface $PascalNameContextValue {}

const $PascalNameContext = createContext<$PascalNameContextValue | null>(null);

interface Props {
  children: ReactNode;
}

export function $PascalNameProvider({ children }: Props) {
  return (
    <$PascalNameContext.Provider value={{}}>
      {children}
    </$PascalNameContext.Provider>
  );
}

export function use$PascalName(): $PascalNameContextValue {
  const ctx = useContext($PascalNameContext);
  if (!ctx) throw new Error('use$PascalName must be used within $PascalNameProvider');
  return ctx;
}
```

**di/index.ts**
```ts
export { $PascalNameProvider, use$PascalName } from './$PascalNameProvider';
```

After creating all files, run `npm test -- --watchAll=false` to confirm no regressions.
