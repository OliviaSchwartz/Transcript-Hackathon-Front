import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateCourse } from '../services/CourseServices'

const AddCourse = ({ user, authenticated }) => {
  let navigate = useNavigate()

  const initialState = {
    name: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newCourse = await CreateCourse(formState)
    setFormState(initialState)
    // navigate(`/courses/${newCourse.id}`)
  }

  return (
    <div>
      <div className="course-form">
        <h2>Add a new course</h2>
        <form className="form search" onSubmit={handleSubmit}>
          <label className="label courseField" htmlFor="name">
            Name:
          </label>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Course Name"
            cols="30"
            onChange={handleChange}
            value={formState.name}
            required
          />
          <button className="create-course-button" type="submit">
            Create Course
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCourse
