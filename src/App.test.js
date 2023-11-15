// MyComponent.test.js
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('renders MyComponent', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reserve/);
  expect(linkElement).toBeInTheDocument();
});

test('navigate to other components', () => {
  render(<App />);
  const reservationPage = screen.getByText(/Reserve a table/);
  fireEvent.click(reservationPage);

  expect(screen.getByTestId("submit")).toBeInTheDocument();
});