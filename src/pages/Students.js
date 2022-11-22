import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentCard from '../components/StudentCard'
import { GetStudents } from '../services/StudentServices'

const Students = ({ authenticated, user }) => {
  const [students, setStudents] = useState([null])
  let navigate = useNavigate()

  const getStudents = async () => {
    const data = await GetStudents()
    setStudents(data)
  }

  useEffect(() => {
    getStudents()
  }, [students])

  const viewTranscript = (id) => {
    navigate(`/transcript/${id}`)
  }

  return (
    <div>
      {authenticated && user ? (
        <div className="student-information">
          <div className="students">
            {students?.map((student) => (
              <StudentCard
                key={student?.id}
                name={student?.name}
                onClick={() => viewTranscript(student?.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="home-container col">
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

export default Students
