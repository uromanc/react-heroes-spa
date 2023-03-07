import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth/'
import { AppRouter } from '../../src/router/AppRouter'
describe('test on <AppRouter />', () => {
  test('should be show the login if user doesnt be auth', () => {
    const contextValue = {
      logged: false
    }
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getAllByText('Login').length).toBe(2)
  })
  test('should be show marvel component if the user be auth', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '13enero',
        name: 'Liz'
      }
    }
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  })
})