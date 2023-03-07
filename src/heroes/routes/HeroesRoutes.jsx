import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui'
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          {/* search hero by id */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  )
}