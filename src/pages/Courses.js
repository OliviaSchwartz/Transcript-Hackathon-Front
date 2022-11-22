import { useEffect, useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'
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
    navigate('/')
  }

  const viewDetails = (id) => {
    navigate(`/courses/${id}`)
  }

  return (
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
  )
}

export default Courses
