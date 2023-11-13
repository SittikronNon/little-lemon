import { render, screen, fireEvent } from '@testing-library/react';

import Main from './components/Main';
import App from './App';

describe("writing some random tests", () => {
  test('renders the reserve page', () => {
    render(<App />);
    const reserveButton = screen.getByText(/Reserve a table/);
    fireEvent.click(reserveButton);

    const newPage = screen.getByText(/Reserve a table/);
    expect(newPage).toBeDisabled();


  });

  test('finding the input', () => {
    render(<App />);
    const reserveButton = screen.getByText(/Reserve a table/);
    fireEvent.click(reserveButton);

    const timeInput = screen.getByPlaceholderText(/Time/)
    expect(timeInput).toBeInTheDocument();
  });

  
})

