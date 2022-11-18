import { render, screen } from '@testing-library/react';
import App from './App';

test('Basic Bitcoin', () => {
  render(<App />);
  const paraElement = screen.getByText(/Bitcoin/i);
  expect(paraElement).toBeInTheDocument();
});
