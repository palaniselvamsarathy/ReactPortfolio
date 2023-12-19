import React from 'react'
import about from '../../assets/about-pic.png'
import './About.css'
const About = () => {
  return (
    <>
    <div className="container" id='about'>
      <h1 className='text-center '>About Me</h1>
      <div className="row about-row">
        <div className="col-lg-4 col-md-6 col-sm-12 image-area">
          <img src={about} alt="My about Profile" className='about-pic' />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 about-deails ">
          <div className="text-area">
            <p>
            I am a self-taught junior web developer who dedicated three months to mastering web technologies. During this time, I successfully completed projects that include a personalized portfolio highlighting my skills and a fully functional e-commerce website. 
                    - Additionally, I expanded my skill set by delving into Python and SQL through comprehensive online learning resources. I am passionate about leveraging technology to create innovative and seamless digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
