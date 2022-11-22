import Client from './api'

export const GetGrade = async ({courseId, studentId}) => {
  try {
    const res = await Client.get(`/grades/${courseId}/${studentId}`)
    return res.data
  } catch (error) {
    throw error
  }
}