module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['cypress/**/*.ts'],
      rules: {
        "@typescript-eslint/no-namespace": 'off'
      }
    },
    {
      files: ['**/*.cy.{ts,tsx}'],
      rules: {
        "@typescript-eslint/no-unused-expressions": 'off'
      }
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    }
  },
  rules: {
  }
}
