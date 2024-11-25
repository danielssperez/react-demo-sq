import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../src/Login';
import React from 'react'; // Agregar esta línea

test('renders login form and submits username', () => {
  const mockLogin = jest.fn();
  render(<Login onLogin={mockLogin} />);

  const input = screen.getByLabelText(/username/i);
  const button = screen.getByRole('button', { name: /login/i });

  fireEvent.change(input, { target: { value: 'JohnDoe' } });
  fireEvent.click(button);

  expect(mockLogin).toHaveBeenCalledWith('JohnDoe');
});
