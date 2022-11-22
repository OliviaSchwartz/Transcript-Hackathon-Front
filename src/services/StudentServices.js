import Client from './api'

export const GetStudents = async () => {
  try {
    const res = await Client.get('/students')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetStudentById = async (id) => {
  try {
    const res = await Client.get(`/students/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteStudent = async (id) => {
  try {
    const res = await Client.delete(`/students/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateGpa = async (id) => {
  try {
    const res = await Client.put(`/students/gpa/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
