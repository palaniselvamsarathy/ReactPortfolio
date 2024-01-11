import data from "../../data/index.json"

import React from 'react'

function MySkills() {
  return (
    <section className="skills-section" id="mySkills">
        <div className="portolio-container">
            <p className="section-title">MySkills</p>
            <h2 className="skills-section-heading">My Expertise</h2>
        </div>
        <div className="skills-section-container">
            {data?.skills?.map((item,index)=>(
                <div key={index} className="skills-section-card">
                    <div className="skills-section-img">
                        <img src={item.src} alt="Product Chain" />
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default MySkills
