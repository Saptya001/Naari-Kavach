// .eslintrc.js
module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // integrates Prettier with ESLint
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // Possible Errors
    "no-unused-vars": ["warn", { argsIgnorePattern: "next" }],
    "no-console": "off", // allow console logs (useful for backend)
    
    // Best Practices
    eqeqeq: ["error", "always"], // enforce === and !==
    "no-var": "error", // enforce let/const
    "prefer-const": "warn",

    // Stylistic Issues
    quotes: ["error", "double"], // enforce double quotes
    semi: ["error", "always"], // enforce semicolons
    indent: ["error", 2], // 2 spaces indentation
  },
};
