import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">Palani Selvam</h3>

        <ul className='nav-links'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/"><li>About</li></Link>
            <Link to="/"><li>Skills</li></Link>
            <Link to="/"><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
