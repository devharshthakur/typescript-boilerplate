// eslint.config.js

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';

// Import TypeScript and Prettier plugins and configs
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __dirname = path.resolve();

const compat = new FlatCompat({
  baseDirectory: __dirname, // Optional, default is process.cwd()
});

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    settings: {},
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'semi': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-undef': 'off',
      'no-console': 'off'
    },
  },
];