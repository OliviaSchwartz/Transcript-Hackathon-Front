import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { GetStudentById } from '../services/StudentServices'

const Transcript = ({ user, authenticated, convertGrade, studentId }) => {
  let { id } = useParams()
  if (!id) {
    id = studentId
  }
  let navigate = useNavigate()
  const [studentDetails, setStudentDetails] = useState(null)

  const getInformation = async () => {
    const data = await GetStudentById(id)
    setStudentDetails(data)
  }

  useEffect(() => {
    getInformation()
  }, [user])

  return (
    <div>
      {authenticated && user ? (
        <div className="transcript-container">
          <p className="display">
            <em>Student Email:</em> {studentDetails?.email}
          </p>
          <p className="display">
            <em>Student Name:</em> {studentDetails?.name}
          </p>
          <div className="course-container">
            {studentDetails?.courses.map((course) => (
              <div className="course-name-grade" key={course.id}>
                <p>
                  <em>Course Name:</em> {course.name}
                </p>
                <p>
                  <em>Course Grade(Number/Letter):</em> {course.Grade.grade},{' '}
                  {convertGrade(course.Grade.grade)}
                </p>
              </div>
            ))}
            <p className="display">
              Overall GPA: {studentDetails?.gpa},{' '}
              {convertGrade(studentDetails?.gpa)}
            </p>
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
export default Transcript
