import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks'
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)
  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0
  const { searchText, onInputChange } = useForm({
    searchText: q
  })
  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if (searchText.trim().length <= 1) return
    navigate(`?q=${searchText}`)
  }
  return (
    <>
      <h1 className='mt-3'>Search Hero</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a Hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            There&apos;s not heroes with <b>{q}</b>
          </div>
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}