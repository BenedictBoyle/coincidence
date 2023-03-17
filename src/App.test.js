import { render, screen } from '@testing-library/react';
import App from './App';

test('Basic Bitcoin', () => {
  render(<App />);
  const paraElement = screen.getAllByText(/Bitcoin/i);
  expect(paraElement[0]).toBeInTheDocument();
});
