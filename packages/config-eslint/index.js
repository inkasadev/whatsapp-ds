module.exports = {
    plugins: ["@typescript-eslint/eslint-plugin"],
    extends: ["standard-with-typescript", "eslint-config-prettier"],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      "no-unused-vars": "error",
      "tsdoc/syntax": "warn"
    }
};