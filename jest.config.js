/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/202[23]/**/*.[jt]s?(x)'],
  testPathIgnorePatterns: ["/node_modules/", "utils.ts"]
}
