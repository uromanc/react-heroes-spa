import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroByID } from '../helpers'

export const HeroPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const hero = useMemo(() => getHeroByID(id), [id])
  const onNavigateBack = () => {
    navigate(-1)
  }
  const heroImageURL = `/assets/heroes/${id}.jpg`
  if (!hero) return <Navigate to="/marvel" />
  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={heroImageURL} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter Ego: </b>{hero.alterEgo}</li>
          <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
          <li className='list-group-item'><b>First Appearance: </b>{hero.firstAppearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary' onClick={onNavigateBack}>Back</button>
      </div>
    </div>
  )
}