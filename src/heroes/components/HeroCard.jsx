import { Link } from 'react-router-dom'
const CharactersByHero = ({ alterEgo, characters }) => {
  /* if (alterEgo === characters) return (<></>)
  return (<p>{characters}</p>) */
  return (alterEgo === characters) ? <></> : <p>{characters}</p>
}
export const HeroCard = ({ id, superhero, publisher, alterEgo, firstAppearance, characters }) => {
  const heroImageURL = `/assets/heroes/${id}.jpg`
  // const charactersByHero = (<p>{characters}</p>)
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageURL} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alterEgo}</p>
              {/* {
                (alterEgo !== characters) && charactersByHero
                (alterEgo !== characters) && <p>{characters}</p>
              } */}
              <CharactersByHero alterEgo={alterEgo} characters={characters} />
              <p className="card-text"><small className="text-muted">{firstAppearance}</small></p>
              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}