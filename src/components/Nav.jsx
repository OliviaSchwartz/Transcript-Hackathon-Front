import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Log-In</Link>
        <Link to= '/search'>Search</Link>
        </div>
    )
}

export default Nav
