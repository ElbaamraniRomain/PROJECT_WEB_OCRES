import React from 'react'
import { Link } from 'react-router-dom'
import AdminLogin from './adminLogin'
const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darker-3">
            <div className="container">
                <Link to='/' className="brand-logo">Dashboard</Link>
                <AdminLogin/>
            </div>
        </nav>
    
    )
}

export default Navbar;