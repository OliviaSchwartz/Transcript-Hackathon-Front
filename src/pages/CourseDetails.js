import { useState, useEffect } from 'react'
import { GetCoursesById } from '../services/CourseServices'
import { useParams } from 'react-router-dom'
import { UpdateGrade } from '../services/GradeServices'

const CourseDetails = ({ user, authenticated }) => {
  let { id } = useParams()

  const initialState = {
    courseId: id,
    // studentId: null,
    grade: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [students, setStudents] = useState(null)

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
    setFormState(initialState)
    getStudentsInCourse()
  }

  useEffect(() => {
    getStudentsInCourse()
  }, [])

  return (
    <div>
      <p>course details</p>
      <p>{students?.name}</p>
      {students?.students.map((student) => (
        <div key={student.id}>
          <p>{student.name}</p>
          <p>{student.Grade.grade}</p>
          <form className="form" onSubmit={(e) => handleSubmit(e, student.id)}>
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
        </div>
      ))}
    </div>
  )
}

export default CourseDetails
