import {Link} from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
    let authenticatedOptions
    if (user) {
      authenticatedOptions = (
        <nav>
          <h3>Welcome!</h3>
          <Link to='/courses'>Courses</Link>
          <Link to='/addCourse'>Add A Course</Link>
          <Link to='/students'>Students</Link>
          <Link to= '/search'>Search</Link>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </nav>
      )
    }

    const publicOptions = (
      <nav>
        <Link to="/login">Sign In</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
      </nav>
    )

    return (
      <header>
        <Link to="/">
        </Link>
        {authenticated && user ? authenticatedOptions : publicOptions}
      </header>
    )
  }

  export default Nav
