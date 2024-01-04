import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Darkmode from '../Dark/Darkmode'
const Navbar= () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link to="/" className='navbar-brand ml-5'><span className='logo'>P</span>alani <span className='logo'>S</span>elvam</Link>
        <Darkmode/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
            <li className="nav-item active">
              <Link to="/home" className='nav-link link'>Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/about/about" className='nav-link link'>About</Link>
            </li>
            <li className="nav-item active">
              <Link to="/skills/skills" className='nav-link link'>Skills</Link>
            </li>
            <li className="nav-item active">
              <Link to="/projects/projects" className='nav-link link'>Projects</Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact/contact" className='nav-link link'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
