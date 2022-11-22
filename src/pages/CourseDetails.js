import { useState, useEffect } from 'react'
import { GetCoursesById } from '../services/CourseServices'
import { useParams, useNavigate } from 'react-router-dom'
import { UpdateGrade } from '../services/GradeServices'
import { UpdateGpa } from '../services/StudentServices'

const CourseDetails = ({ user, authenticated }) => {
  let { id } = useParams()
  let navigate = useNavigate()

  const initialState = {
    courseId: id,
    grade: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [students, setStudents] = useState(null)
  const [studentToEdit, setStudentToEdit] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const getStudentsInCourse = async (req, res) => {
    const studentsInCourse = await GetCoursesById(id)
    setStudents(studentsInCourse)
  }

  const handleSubmit = async (e, id) => {
    e.preventDefault()
    await UpdateGrade({ ...formState, studentId: id })
    await UpdateGpa(id)
    setFormState(initialState)
    setStudentToEdit(null)
    getStudentsInCourse()
  }

  const onClick = (id) => {
    console.log(id)
    setStudentToEdit(id)
  }

  useEffect(() => {
    getStudentsInCourse()
  }, [])

  return (
    <div>
      {authenticated && user ? (
        <div>
          <p className="details-header">Course Details</p>
          <p className="class-name">{students?.name}</p>
          {students?.students.map((student) => (
            <div className="course-students" key={student.id}>
              <p className="course-student-name">{student.name}</p>
              <p>{student.Grade.grade}</p>
              {studentToEdit === student.id ? (
                <form
                  className="form"
                  onSubmit={(e) => handleSubmit(e, student.id)}
                >
                  <input
                    className="input"
                    type="text"
                    id="grade"
                    placeholder="New Grade in 4 Point Scale"
                    onChange={(e) => handleChange(e)}
                    value={formState.grade}
                    // required
                  />
                  <button className="create-course-button" type="submit">
                    Update Grade
                  </button>
                </form>
              ) : (
                <button onClick={() => onClick(student.id)}>
                  Update Grade
                </button>
              )}
            </div>
          ))}
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

export default CourseDetails
