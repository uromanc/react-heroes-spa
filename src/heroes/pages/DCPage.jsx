import { Herolist } from '../components'

export const DCPage = () => {
  return (
    <>
      <h1 className='mt-3'>DC Comics</h1>
      <hr />
      <Herolist publisher='DC Comics' />
    </>
  )
}