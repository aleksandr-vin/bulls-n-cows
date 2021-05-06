import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Answers/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input label', () => {
  render(<App />);
  const element = screen.getByText(/Your guess?/i);
  expect(element).toBeInTheDocument();
});

test('renders check button', () => {
  render(<App />);
  const element = screen.getByText(/Check #1/i);
  expect(element).toBeInTheDocument();
});
