import { useEffect, useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'
import { GetCourses } from '../services/CourseServices'
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

  const viewCourse = (_id) => {
    navigate(`${_id}`)
  }

  return (
    <div className="course-container">
      {courses.map((course) => (
        <CourseCard key={course.id} name={course.name} courseId={course.id} />
      ))}
    </div>
  )
}

export default Courses
