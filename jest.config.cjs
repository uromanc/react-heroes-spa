module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
  // setupFiles: ['./jest.setup.js']
}