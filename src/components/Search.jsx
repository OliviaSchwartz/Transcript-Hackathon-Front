import { useState } from "react"
import { GetGrade } from "../services/GradeServices"

const Search = ({convertGrade, user, authenticated}) => {
    const initialState = {
    studentId: '',
    courseId: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [grade, setGrade] = useState(null)
  const [searched, setSearched] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(formState)
    const result = await GetGrade(formState)
    setFormState(initialState)
    setGrade(result)
    setSearched(true)
  }

    return (
        <div>

      {authenticated && user ? (
        
        
        <div>
        <form className="search" onSubmit={onSubmit}>

            <input
                type="text"
                id="studentId"
                value={formState.studentId}
                placeholder="Student ID"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                id="courseId"
                value={formState.courseId}
                placeholder="Course ID"
                onChange={handleChange}
            ></input>
            <button type="submit">Search</button>
        </form>
        {searched ? (
            <div className="search-result">
            {grade? (
                <div>Grade: {convertGrade(grade?.grade)}</div>
            ) : (
                <div>That combination of IDs does not exist</div>
            )}
            </div>
        ) : <></>}
        </div>
      ) : (
        <div>
          <p>You are not signed in</p>
        </div>
      )}
    </div>



    )
}
export default Search
