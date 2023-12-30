import React from 'react'
import about from '../../assets/about-pic.png'
import './About.css'
const About = () => {
  return (
    <>
    <section>
      <div className="container">
        <div className="row text">
          <h1 className='text-center'>About Me</h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
          <img
              src={about}
              alt="About picture"
              class="about-pic"
            />
          </div>
          <div className="col-lg-8">
            <p className='text-justify'>
              I am a self-taught junior web developer who dedicated three months to mastering web technologies. During this time, I successfully completed projects that include a personalized portfolio highlighting my skills and a fully functional e-commerce website. 
              - Additionally, I expanded my skill set by delving into Python and SQL through comprehensive online learning resources. I am passionate about leveraging technology to create innovative and seamless digital experiences.
            </p>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>
    </>
  )
}

export default About
