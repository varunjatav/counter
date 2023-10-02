import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul style={{display:"flex", justifyContent: "space-around", alignItems:"center"}}>
            <li>
            <Link to="/">Counter App</Link>
            </li>
            <li>
            <Link to="/timer">Timer App</Link>
            </li>
        </ul>
        
        
    </div>
  )
}

export default Navbar