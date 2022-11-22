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
          <p>{studentDetails?.email}</p>
          <p>Student Name:{studentDetails?.name}</p>
          <div className="course-container">
            {studentDetails?.courses.map((course) => (
              <div key={course.id}>
                <p>Course Name: {course.name}</p>
                <p>
                  Course Grade(Number/Letter): {course.Grade.grade},{' '}
                  {convertGrade(course.Grade.grade)}
                </p>
              </div>
            ))}
            <p>
              Overall GPA: {studentDetails?.gpa},{' '}
              {convertGrade(studentDetails?.gpa)}
            </p>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  )
}
export default Transcript
