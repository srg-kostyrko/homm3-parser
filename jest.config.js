// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: './__tests__/helpers/testEnv.js',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/helpers/'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
}
