import { test, expect } from 'vitest'; // ✅ Importa las funciones de prueba
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Muestra los logos de Vite y React', () => {
  render(<App />);
  expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
  expect(screen.getByAltText('React logo')).toBeInTheDocument();
});

test('Muestra el título "Vite + React"', () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});

test('El botón incrementa el contador al hacer clic', async () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /count is 0/i });

  await userEvent.click(button);
  expect(button).toHaveTextContent('count is 1');

  await userEvent.click(button);
  expect(button).toHaveTextContent('count is 2');
});
