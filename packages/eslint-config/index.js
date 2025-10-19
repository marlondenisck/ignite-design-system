import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      // Regras básicas para JavaScript/TypeScript
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
      
      // Regras de formatação e estilo
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'indent': ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      
      // Regras de qualidade de código
      'no-duplicate-imports': 'error',
      'prefer-template': 'error',
      'object-shorthand': 'error',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', 'build/', 'coverage/', '*.config.js'],
  },
]