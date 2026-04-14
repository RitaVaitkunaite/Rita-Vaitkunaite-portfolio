import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero section', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toBeInTheDocument();
  expect(heading.textContent).toMatch(/ux ui designer/i);
});
