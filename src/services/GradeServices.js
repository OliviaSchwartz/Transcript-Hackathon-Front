import Client from './api'

export const GetGrade = async ({ courseId, studentId }) => {
  try {
    const res = await Client.get(`/grades/${courseId}/${studentId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateGrade = async ({ courseId, studentId, grade }) => {
  try {
    console.log(`courseId ${courseId}`)
    console.log(`studentId ${studentId}`)
    console.log(`grade ${grade}`)
    const res = await Client.put(`/grades/${courseId}/${studentId}`, {
      grade: grade
    })
    return res.data
  } catch (error) {
    throw error
  }
}
