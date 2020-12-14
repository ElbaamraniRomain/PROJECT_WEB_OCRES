import React from 'react'
import { NavLink } from 'react-router-dom'

const adminLogin = () => {
    return(
       <ul className="right">
           {/* <li>
               <NavLink to="/">Dashboard</NavLink>
           </li> */}
           <li>
               <NavLink to="/AddDataApi">Admin Page</NavLink>
           </li>
       </ul>
    
    )
}

export default adminLogin;