import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to={`/posts`}>Posts</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </nav>
    )
}