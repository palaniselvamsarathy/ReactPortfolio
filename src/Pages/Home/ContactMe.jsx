import React from 'react'

function ContactMe() {
  return (
    <section id='Contact' className='contact-section'>
        <div>
            <p className="sub-title">Get In Touch</p>
            <h2>Contact Me</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, aliquam?</p>
        </div>
        <form action="" className="contact-form-container">
            <div className="container">
                <label htmlFor="first-name" className="contact-label">
                    <span className='text-md'>First Name</span>
                    <input type="text" name="first-name" id='first-name' className="contact-input" required />
                </label>
                <label htmlFor="last-name" className="contact-label">
                    <span className='text-md'>Last Name</span>
                    <input type="text" name="last-name" id='last-name' className="contact-input" required />
                </label>
                <label htmlFor="email" className="contact-label">
                    <span className='text-md'>Email</span>
                    <input type="email" name="email" id='email' className="contact-input" required />
                </label>
                <label htmlFor="phone-number" className="contact-label">
                    <span className='text-md'>Phone Number</span>
                    <input type="number" name="phone-number" id='phone-number' className="contact-input" required />
                </label>
                <label htmlFor="choose-topic" className="contact-label">
                    <span className='text-md'>Choose a Topic</span>
                    <select id="choose-topic" className='contact-input text-md'>
                        <option>Select One...</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact-label">
                    <span className='text-md'>Message</span>
                    <textarea className='contact-input text-md' id="message" cols="30" rows="10" placeholder="Type your message..." />
                </label>
                <label htmlFor="checkbox" className='checkbox-label'>
                    <input type="checkbox" name="checkbox" id="checkbox" required />
                    <span className='text-sm'>I accept the terms</span>
                </label>
                <div>
                    <button className="btn btn-primary contact-form-btn">Submit</button>
                </div>
            </div>
        </form>

    </section>
  )
}

export default ContactMe
