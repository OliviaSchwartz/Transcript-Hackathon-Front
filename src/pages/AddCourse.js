import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCourse = ({ user, authenticated }) => {
  const initialState = {
    name: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className="course-form">
        <h2>Add a new course</h2>
        <form className="form" onSubmit={handleSubmit}>
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
