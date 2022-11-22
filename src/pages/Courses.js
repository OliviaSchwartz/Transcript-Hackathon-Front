import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addStudentToCourse, GetCourses } from '../services/CourseServices'
import CourseCard from '../components/CourseCard'

const Courses = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [courses, setCourses] = useState([])

  const showAllCourses = async () => {
    const data = await GetCourses()
    setCourses(data)
  }

  useEffect(() => {
    showAllCourses()
  }, [courses])

  const joinCourse = async (id) => {
    const data = await addStudentToCourse(id, user.id)
    navigate(`/courses/${id}`)
  }

  const viewDetails = (id) => {
    navigate(`/courses/${id}`)
  }

  return (
    <div>
      {authenticated && user ? (
        <div className="course-container">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              name={course.name}
              courseId={course.id}
              joinOnClick={() => joinCourse(course.id)}
              viewOnClick={() => viewDetails(course.id)}
            />
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

export default Courses
