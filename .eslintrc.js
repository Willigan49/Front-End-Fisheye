module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
