/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/src/setupTest.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "./dist"],
};
