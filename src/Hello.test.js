import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders greeting message', () => {
  render(<Hello name="World" />);
  const heading = screen.getByText(/Hello, World/i);
  expect(heading).toBeInTheDocument();
});
