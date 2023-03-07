import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../../src/auth'
import { NavBar } from '../../../src/ui'
const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))
describe('test on <NavBar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: '13enero',
      name: 'Liz'
    },
    logout: jest.fn()
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('should be show the users name logged', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('Liz')).toBeTruthy()
  })
  test('should be called the fn logout and use navigate by clicking the button', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    const logoutButton = screen.getByRole('button')
    fireEvent.click(logoutButton)
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})