import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { PrivateRouter } from '../../src/router/PrivateRouter'

describe('test on <PrivateRouter />', () => {
  test('should be show the children if user be auth', () => {
    Storage.prototype.setItem = jest.fn()
    const contextValue = {
      logged: true,
      user: {
        id: '13ene',
        name: 'Liz'
      }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRouter>
            <h1>Private Route</h1>
          </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Private Route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })
})