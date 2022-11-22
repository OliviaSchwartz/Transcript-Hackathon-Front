import Client from './api'

export const GetCourses = async () => {
  try {
    const res = await Client.get('/courses')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCoursesById = async (id) => {
  try {
    const res = await Client.get(`/courses/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateCourse = async (data) => {
  try {
    const res = await Client.post(`/courses/addCourse`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const addStudentToCourse = async (id, studentId) => {
  try {
    const res = await Client.post(`/courses/${id}/addStudent`, {
      studentId: studentId
    })
  } catch (error) {
    throw error
  }
}
