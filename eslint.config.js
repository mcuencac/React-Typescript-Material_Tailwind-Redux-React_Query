import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist', 'node_modules', '.eslintrc.cjs', 'postcss.config.cjs', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.app.json'], // Solo referenciamos el de la app
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslintPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...tseslintPlugin.configs.recommended.rules,
      ...tseslintPlugin.configs['recommended-requiring-type-checking'].rules,
      ...tseslintPlugin.configs['strict-type-checked'].rules,
      ...tseslintPlugin.configs['stylistic-type-checked'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prettier/prettier': 'error', // 🔹 Prettier mostrará errores si el código no está formateado
      ...prettierConfig.rules, // 🔹 Desactiva reglas de ESLint que podrían chocar con Prettier
    },
  },
];
