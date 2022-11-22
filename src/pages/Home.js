import { useNavigate } from 'react-router-dom'
import Transcript from './Transcript'

const Home = ({ user, authenticated, convertGrade }) => {
  let navigate = useNavigate()
  return (
    <div className="home-container col">
      {user && authenticated ? (
        <div>
          <p className="welcome">Welcome!</p>
          <Transcript
            user={user}
            authenticated={authenticated}
            convertGrade={convertGrade}
            studentId={user.id}
          />
        </div>
      ) : (
        <div>
          <h1 className="welcome-message">Welcome</h1>
          <h3>Register or Sign-In to view your courses and grades</h3>
          <section className="welcome-signin">
            <button onClick={() => navigate('/login')}>
              {' '}
              Click here to Log-In
            </button>
            <button onClick={() => navigate('/register')}>
              Click here to Register
            </button>
          </section>
        </div>
      )}
    </div>
  )
}

export default Home
