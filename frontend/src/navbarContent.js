import React from 'react'
import { NavLink } from 'react-router-dom'

const adminLogin = () => {
    return(
       <ul className="right">
           {/* <li>
               <NavLink to="/">Dashboard</NavLink>
           </li> */}
           <li>
               <NavLink to="/SignIn">Admin Page</NavLink>
           </li>
       </ul>
    
    )
}

export default adminLogin;