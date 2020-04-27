import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
          
        <h1>AnyWhere Fitness</h1>
        <div>
          
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
    
      </header>
      
    </div>
  )
}

export default Navbar
