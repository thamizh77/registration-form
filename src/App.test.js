import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the registration form with a disabled submit button by default', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /registration form validation/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText('Password', { selector: 'input' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /register/i })).toBeDisabled();
});
