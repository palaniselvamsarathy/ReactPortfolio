import React,{useState,useEffect} from 'react'
import {Link} from 'react-scroll'

function Navbar() {
  const [navActice,setNavActive] = useState(false);
  const toggleNav = ()=>{
    setNavActive(!navActice)
  }
  const closeMenu = ()=>{
    setNavActive(false)
  }
  useEffect(()=>{
    const handleResize =()=>{
      if (window.innerWidth <= 500){
        closeMenu();
      }
    }

    window.addEventListener("resize",handleResize);

    return ()=>{
      window.removeEventListener("resize",handleResize);
    }
  },[]);

  useEffect(()=>{
    if(window.innerWidth<=1200){
      closeMenu();
    }
  },[]);

  return (
    <div>
      <nav className={`navbar ${navActice ? "active":""}`}>
        <div>
          <img src="./img/logo.png" alt="My Logo" className='logo-img'/>
        </div>
        <a className={`nav_hamburger ${navActice ? "active":""}`} onClick={toggleNav}>
          <span className='nav_hamburger_line'></span>
          <span className='nav_hamburger_line'></span>
          <span className='nav_hamburger_line'></span>
        </a>
        <div className={`navbar-items ${navActice ? "active":""}`}>
          <ul>
            <li>
              <Link 
                onClick={closeMenu} 
                activeClass="navbar-active-content" 
                spy={true} 
                smooth={true} 
                offset={-70}
                duration = {500}
                to="heroSection"
                className='navbar-content'
              > Home </Link>
            </li>

            <li>
              <Link 
                onClick={closeMenu} 
                activeClass="navbar-active-content" 
                spy={true} 
                smooth={true} 
                offset={-70}
                duration = {500}
                to="MyPortfolio"
                className='navbar-content'
              > Portfolio </Link>
            </li>

            <li>
              <Link 
                onClick={closeMenu} 
                activeClass="navbar-active-content" 
                spy={true} 
                smooth={true} 
                offset={-70}
                duration = {500}
                to="AboutMe"
                className='navbar-content'
              > About Me </Link>
            </li>

            <li>
              <Link 
                onClick={closeMenu} 
                activeClass="navbar-active-content" 
                spy={true} 
                smooth={true} 
                offset={-70}
                duration = {500}
                to="mySkills"
                className='navbar-content'
              > Skills </Link>
            </li>
          </ul>
        </div>
          <Link 
            onClick={closeMenu} 
            activeClass="navbar-active-content" 
            spy={true} 
            smooth={true} 
            offset={-70}
            duration = {500}
            to="Contact"
            className='btn btn-outline-primary'
          > Contact Me </Link>
      </nav>
    </div>
  )
}

export default Navbar
