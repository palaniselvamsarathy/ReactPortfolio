import React from 'react'

function HeroSection() {
  return (
    <>
      <section id="heroSection" className='hero-section'>
        <div className='hero-section-content-box'>
            <div className='hero-section-content'>
                <p className='section-title'>Hey, I'm Palani Selvam</p>
                <h1 className='hero-section-title'>
                    <span className='hero-section-title-color'>
                        Full Stack
                    </span>{" "}
                    <br /> 
                    Developer
                </h1>
                <p className='hero-section-description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab?
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, error.
                </p>
            </div>
            <button className='btn btn-primary'>Get In Touch</button>
        </div>
        <div className='hero-section-image'>
            <img src="./img/DP2.png" className='circular' alt="Hero Section Profile Picture" />
        </div>
      </section>
    </>
  )
}

export default HeroSection
