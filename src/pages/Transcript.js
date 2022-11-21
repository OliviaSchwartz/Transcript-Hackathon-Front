import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { GetStudentById } from '../services/StudentServices'

const Transcript = ({ user, authenticated, convertGrade }) => {
  let { id } = useParams()
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
    <div className="transcript-container">
      <p>{user?.email}</p>
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
      </div>
    </div>
  )
}
export default Transcript
