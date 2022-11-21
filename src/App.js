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
          <Route path="/" element={<Home />} />
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
          <Route path="/search" element={<Search />} />
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
            path="/transcript/:id"
            element={<Transcript user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
