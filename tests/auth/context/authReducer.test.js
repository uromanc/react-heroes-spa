import { authReducer, types } from '../../../src/auth'

describe('test on authReducer', () => {
  test('should be return default value', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })
  test('should be call login and authenticate the user', () => {
    const action = {
      type: types.login,
      payload: {
        id: '13enero',
        name: 'Liz'
      }
    }
    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  })
  test('should be call the logout', () => {
    const state = {
      logged: true,
      user: {
        id: '13enero',
        name: 'Ana'
      }
    }
    const action = {
      type: types.logout
    }
    const newState = authReducer(state, action)
    expect(newState).toEqual({
      logged: false
    })
  })
})