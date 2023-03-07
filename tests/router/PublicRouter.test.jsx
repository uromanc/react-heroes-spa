import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { PublicRouter } from '../../src/router/PublicRouter'

describe('test on <PublicRouter />', () => {
  test('should be show children if the user doenst be auth', () => {
    const contextValue = {
      logged: false
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Public Route</h1>
        </PublicRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Public Route')).toBeTruthy()
  })
  test('should be show children if the user be auth', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '13ene',
        name: 'uromanc'
      }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRouter>
                <h1>Public Route</h1>
              </PublicRouter>
            } />
            <Route path='marvel' element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Marvel Page')).toBeTruthy()
  })
})