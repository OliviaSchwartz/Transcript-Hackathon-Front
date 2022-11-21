import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="home-container col">
      <div>
        <h1 className="welcome-message">Welcome to View Your Grades</h1>
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
    </div>
  )
}

export default Home
