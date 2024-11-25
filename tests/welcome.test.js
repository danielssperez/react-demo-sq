import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Asegúrate de importar esto para usar `toBeInTheDocument`
import Welcome from '../src/Welcome';
import React from 'react'; // Agregar esta línea

test('renders welcome message with username', () => {
  render(<Welcome username="JohnDoe" />);
  const message = screen.getByText(/welcome, JohnDoe/i);
  expect(message).toBeInTheDocument(); // Esto debería funcionar ahora
});
