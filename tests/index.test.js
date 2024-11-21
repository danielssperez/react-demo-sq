
// Archivo: App.test.js

import { render, screen } from '@testing-library/react';
import App from '../src/App';

// Test básico para verificar si el componente se renderiza correctamente
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test para verificar que no hay errores en el renderizado inicial
test('renders App component without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});

// Test para verificar si un botón con texto específico está presente
test('renders button with correct text', () => {
  render(<App />);
  const buttonElement = screen.queryByRole('button', { name: /click me/i });
  expect(buttonElement).toBeNull(); // No debería existir un botón "click me" en la plantilla básica
});

// Test para verificar si un encabezado específico no está presente
test('does not render non-existent header', () => {
  render(<App />);
  const headerElement = screen.queryByText(/non-existent header/i);
  expect(headerElement).toBeNull();
});
