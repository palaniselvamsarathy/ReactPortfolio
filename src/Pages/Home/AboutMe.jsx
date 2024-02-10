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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi error possimus saepe porro eum minus iusto nulla atque culpa, assumenda dignissimos aperiam eius, inventore ducimus expedita libero veniam ad id vel sit voluptates! Dicta quisquam nisi doloremque aperiam tenetur vero eum? Provident hic voluptatibus sed veniam iure deserunt quos soluta.
          </p>
          {/* <p className='hero-section-description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi error possimus saepe porro eum minus iusto nulla atque culpa, assumenda dignissimos aperiam eius, inventore ducimus expedita libero veniam ad id vel sit voluptates! Dicta quisquam nisi doloremque aperiam tenetur vero eum? Provident hic voluptatibus sed veniam iure deserunt quos soluta.
          </p> */}
        </div>
      </div>
      
    </section>
  )
}

export default AboutMe
