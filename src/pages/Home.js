import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
import Toptable from './video/toptable.mp4'

const Home = ({ user, authenticated, setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  let authenticatedOptions

  if (user) {
    authenticatedOptions = (
      <div className="home-container col">
        <video autoPlay muted>
          <source src={Toptable} type="video/mp4"></source>
        </video>
        <div>Hello, {user.username}</div>
        <section className="welcome-signin">
          <button onClick={() => navigate('/LocationList')}>
            Check out open games!
          </button>
        </section>
      </div>
    )
  }

  const publicOptions = (
    <div className="home-container col">
      <video autoPlay muted>
        <source src={Toptable} type="video/mp4"></source>
      </video>

      <SignIn setUser={setUser} toggleAuthenticated={toggleAuthenticated} />
    </div>
  )

  return (
    <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
  )
}

export default Home
