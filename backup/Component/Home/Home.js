import React from 'react'
import "./Home.css"
import dp from "../../assets/DP2.png"

import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
        {/* <section className="home">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="left top">
                        <h1>
                            Hi, I'm <span>Palani Selvam</span>
                        </h1>
                        <h2> A  
                            <span> 
                                <Typewriter
                                words={[' FrontEnd Developer', ' Fullstack Developer']}
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                />
                            </span> 
                        </h2>
                        <p className='text-justify'> I am the person who loves turning ideas into cool websites. I specialize in making things look great on the front end and work seamlessly behind the scenes with smart, clean code. Let's bring your ideas to life! </p>
                    </div>
                    <div className="home_btn d_flex">
                        <h4>Find Me</h4>
                        <div className="button">
                            <button className="btn_shadow">
                                <a href="https://github.com/palaniselvamsarathy"><i class="uil uil-github"></i></a>
                            </button>
                            <button className="btn_shadow">
                                <a href="https://www.linkedin.com/in/palaniselvam-m/"><i class="uil uil-linkedin"></i></a>
                            </button>
                            <button className="btn_shadow">
                                <i className="uil uil-instagram-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    
                    <div className="right_img">
                        <img src={dp} alt="" />
                    </div>
                </div>
            </div>
        </section> */}
        
        <section className="home">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="left top">
                        <h1>
                            Hi, I'm <span>Palani Selvam</span>
                        </h1>
                        <h2> A  
                            <span> 
                                <Typewriter
                                words={[' FrontEnd Developer', ' Fullstack Developer']}
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                />
                            </span> 
                        </h2>
                        <h4>Find Me</h4>
                        <div className="button">
                            <button className="btn_shadow">
                                <a href="https://github.com/palaniselvamsarathy"><i class="uil uil-github"></i></a>
                            </button>
                            <button className="btn_shadow">
                                <a href="https://www.linkedin.com/in/palaniselvam-m/"><i class="uil uil-linkedin"></i></a>
                            </button>
                            <button className="btn_shadow">
                                <i className="uil uil-instagram-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="right_img">
                        <img src={dp} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
