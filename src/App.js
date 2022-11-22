import './App.css'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import { CheckSession } from './services/AuthServices'
import Search from './components/Search'
import Courses from './pages/Courses'
import Students from './pages/Students'
import AddCourse from './pages/AddCourse'
import Transcript from './pages/Transcript'
import CourseCard from './components/CourseCard'
import CourseDetails from './pages/CourseDetails'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const convertGrade = (grade) => {
    switch (true) {
      case grade === 4:
        return 'A'
      case grade >= 3.7:
        return 'A-'
      case grade >= 3.3:
        return 'B+'
      case grade >= 3:
        return 'B'
      case grade >= 2.7:
        return 'B-'
      case grade >= 2.3:
        return 'C+'
      case grade >= 2:
        return 'C'
      case grade >= 1.7:
        return 'C-'
      case grade >= 1.3:
        return 'D+'
      case grade >= 1.0:
        return 'D'
      default:
        return 'F'
    }
  }

  return (
    <div className="App">
      <header>
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                authenticated={authenticated}
                convertGrade={convertGrade}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LogIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/search"
            element={
              <Search
                user={user}
                authenticated={authenticated}
                convertGrade={convertGrade}
              />
            }
          />
          <Route
            path="/courses"
            element={<Courses user={user} authenticated={authenticated} />}
          />
          <Route
            path="/students"
            element={<Students user={user} authenticated={authenticated} />}
          />
          <Route
            path="/addCourse"
            element={<AddCourse user={user} authenticated={authenticated} />}
          />
          <Route
            path="/courses/:id"
            element={
              <CourseDetails user={user} authenticated={authenticated} />
            }
          />
          <Route
            path="/transcript/:id"
            element={
              <Transcript
                user={user}
                authenticated={authenticated}
                convertGrade={convertGrade}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
