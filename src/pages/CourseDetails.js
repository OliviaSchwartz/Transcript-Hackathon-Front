import Courses from './Courses'
import CourseCard from '../components/CourseCard'
import { GetCoursesById } from '../services/CourseServices'
import { useState, useEffect } from 'react'

const CourseDetails = ({ user, Authenticated, convertGrade }) => {
  const [courseDetails, setCourseDetails] = useState([null])

  const getCourseDetails = async (id) => {
    let response = await GetCoursesById(id)
    setCourseDetails(response)
  }
  useEffect(() => {
    getCourseDetails()
  }, [])

  return (
    <div className="student-container">
      {courseDetails?.courses.map((course) => (
        <div key={course.student.id}>
          <p>Student Name: {course.student.name}</p>
          <p>
            Course Grade(Number/Letter): {student.Grade.grade},{' '}
            {convertGrade(student.Grade.grade)}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CourseDetails
