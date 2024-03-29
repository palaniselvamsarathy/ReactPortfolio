import React from 'react'

function AboutMe() {
  return (
    <section id='AboutMe' className='about-section'>
      <div className="about-section-img">
        <img src="./img/DP1.jpeg" alt="About Me" />
      </div>
      <div className="hero-section-content-box about-section-box">
        <div className="hero-section-content">
          <p className="section-title">
            About
          </p>
          <h1 className="skills-section-heading">
            About Me
          </h1>
          <p className='hero-section-description'>
            I am a self-taught junior web developer who dedicated three months to mastering web technologies. During this time, I successfully completed projects that include a personalized portfolio highlighting my skills and a fully functional e-commerce website. 
             Additionally, I expanded my skill set by delving into Python and SQL through comprehensive online learning resources. I am passionate about leveraging technology to create innovative and seamless digital experiences.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default AboutMe
