import React from 'react'
import { Link } from 'react-router-dom'
import NavbarContent from './navbarContent'
const Navbar = () => {
    return(
        <nav className="nav-wrapper cyan darker-3">
            <div className="container">
                <Link to='/' className="brand-logo">Dashboard</Link>
                <NavbarContent/>
            </div>
        </nav>
    
    )
}

export default Navbar;