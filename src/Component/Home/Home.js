import React from 'react'
import "./Home.css"
import dp from "../../assets/DP2.png"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
        <section className="home" id="home">
            <div className="container f_flex top">
                <div className="left top">
                    <h1>
                        Hi, I'm <span>Palani Selvam</span>
                    </h1>
                    <h2>A  
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
                    <p> I am the person who loves turning ideas into cool websites. I specialize in making things look great on the front end and work seamlessly behind the scenes with smart, clean code. Let's bring your ideas to life! </p>
                    <div className="home_btn d_flex">
                        <div className="col_1">
                            <h4>Find Me</h4>
                            <div className="button">
                                <button className="btn_shadow">
                                    <i class="uil uil-github"></i>
                                </button>
                                <button className="btn_shadow">
                                    <i class="uil uil-linkedin"></i>
                                </button>
                                <button className="btn_shadow">
                                    <i className="uil uil-instagram-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="right">
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
