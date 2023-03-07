import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('test on <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks())
  test('should be show default values', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
  test('should be show batman and the input with the queryString value', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )
    const inputValue = screen.getByRole('textbox')
    expect(inputValue.value).toBe('batman')
    const img = screen.getByRole('img')
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg')
    const alertDanger = screen.getByLabelText('alert-danger')
    expect(alertDanger.style.display).toBe('none')
  })
  test('should be show an error if hero doesnt found', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batsy123']}>
        <SearchPage />
      </MemoryRouter>
    )
    const alertDanger = screen.getByLabelText('alert-danger')
    expect(alertDanger.style.display).toBe('')
  })
  test('should be called navigate to a new screen', () => {
    const inputValue = 'superman'
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { name: 'searchText', value: inputValue } })
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
  })
})