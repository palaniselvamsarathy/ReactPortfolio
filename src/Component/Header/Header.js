import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Darkmode from '../Dark/Darkmode'
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className='navbar-brand ml-5'><span className='logo'>P</span>alani <span className='logo'>S</span>elvam</Link>
        <Darkmode/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className='nav-link'>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/" className='nav-link'>About <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/" className='nav-link'>Skills <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/" className='nav-link'>Projects <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/" className='nav-link'>Contact <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
