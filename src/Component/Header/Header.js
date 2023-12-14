import React from 'react'

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="logo">
                <img src="" alt="" />
            </div>

            <div className="navlink">
                <ul className="link f-flex uppercase">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button className='resume-btn'>Download</button></li>
                </ul>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
