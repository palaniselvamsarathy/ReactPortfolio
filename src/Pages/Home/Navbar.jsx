import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

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
        closeMenu()
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
          <img src="./img/main.png" alt="My Logo" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
