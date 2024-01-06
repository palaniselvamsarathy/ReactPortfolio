import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <h1>Navbar Component</h1>
      <nav>
        <h1>Logo</h1>
        <div>
          <ul>
            <Link><li>Home</li></Link>
            <Link><li>Home</li></Link>
            <Link><li>Home</li></Link>
            <Link><li>Home</li></Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
