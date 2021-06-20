module.exports = {
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "<rootDir>/src/setupTests.js",
  ],
  moduleFileExtensions: ["js", "jsx"],
}
