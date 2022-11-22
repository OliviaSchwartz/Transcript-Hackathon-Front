import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentCard from '../components/StudentCard'
import { GetStudents } from '../services/StudentServices'

const Students = () => {
  const [students, setStudents] = useState([null])
  let navigate = useNavigate()

  const getStudents = async () => {
    const data = await GetStudents()
    setStudents(data)
  }

  useEffect(() => {
    getStudents()
  }, [students])

  const viewTranscript = (id) => {
    navigate(`/transcript/${id}`)
  }

  return (
    <div className="student-information">
      <div className="students">
        {students?.map((student) => (
          <StudentCard
            key={student?.id}
            name={student?.name}
            onClick={() => viewTranscript(student?.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Students
