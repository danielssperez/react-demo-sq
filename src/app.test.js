import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders login form initially', () => {
  render(<App />);

  // Verificar que el formulario de login se muestre inicialmente
  const input = screen.getByLabelText(/username/i);
  const button = screen.getByRole('button', { name: /login/i });

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('renders welcome message after login', () => {
  render(<App />);

  // Simular ingreso de usuario en el formulario
  const input = screen.getByLabelText(/username/i);
  const button = screen.getByRole('button', { name: /login/i });

  fireEvent.change(input, { target: { value: 'JohnDoe' } });
  fireEvent.click(button);

  // Verificar que el mensaje de bienvenida se muestre después del login
  const welcomeMessage = screen.getByText(/welcome, JohnDoe/i);
  expect(welcomeMessage).toBeInTheDocument();

  // Asegurarse de que el formulario ya no esté visible
  expect(screen.queryByLabelText(/username/i)).not.toBeInTheDocument();
});
