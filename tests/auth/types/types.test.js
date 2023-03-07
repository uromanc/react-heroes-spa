import { types } from '../../../src/auth'

describe('test on types.js', () => {
  test('should be return types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    })
  })
})