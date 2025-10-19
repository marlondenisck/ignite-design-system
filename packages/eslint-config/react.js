import baseConfig from './index.js'

export default [
  ...baseConfig,
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Regras específicas para React
      'no-unused-vars': 'off', // React components podem ter props não usadas
    },
  },
]