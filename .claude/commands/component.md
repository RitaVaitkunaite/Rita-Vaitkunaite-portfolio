Create a new React component following project conventions.

The argument is a path including the component name, e.g.:
`features/hero/presentation/HeroSection` or `shared/ui/Button`

The full argument is: $ARGUMENTS

Derive:
- **Directory**: everything before the last `/` → `src/$directory/`
- **ComponentName**: the last segment (must be PascalCase)

Create these 3 co-located files:

**$ComponentName.tsx**
```tsx
import styles from './$ComponentName.module.css';

interface Props {}

function $ComponentName({}: Props) {
  return (
    <div className={styles.root}>
      {/* TODO: implement $ComponentName */}
    </div>
  );
}

export default $ComponentName;
```

**$ComponentName.module.css**
```css
.root {}
```

**$ComponentName.test.tsx**
```tsx
import { render } from '@testing-library/react';
import $ComponentName from './$ComponentName';

describe('$ComponentName', () => {
  it('renders without crashing', () => {
    render(<$ComponentName />);
  });
});
```

After creating the files, run `npm test -- --watchAll=false` to confirm no regressions.
