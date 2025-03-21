import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Permite usar `test()` sin importarlo
    environment: 'jsdom', // Simula un navegador para pruebas en React
    setupFiles: './vitest.setup.ts', // Configuración global
  },
});