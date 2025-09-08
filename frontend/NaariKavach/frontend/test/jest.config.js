// frontend/tests/jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: [
    "**/tests/unit/**/*.test.[jt]s?(x)",
    "**/tests/integration/**/*.test.[jt]s?(x)"
  ],
};
