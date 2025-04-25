import { Link } from 'react-router'
import { nanoid } from 'nanoid'
const Home = () => {
  const idValue=nanoid()
  return (
    <>
      <h2>Welcome to the field of video syncying process</h2>
      <h3>Do you really want to create a new Server.</h3>
      <Link to={`/${idValue}`}><button>Create a new Server.</button></Link>
    </>
  )
}

export default Home