import React from 'react'
import './contact.css'
import Card from '../../components/Card'
import contactpicture from '../../assets/contact2.jpg'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wmizgp8', 'template_d8j1wss', form.current, 'FGSmftdoL3rQ3WmL-')
    e.target.reset();
  };
  return(
  <section id="contact">
    <div className="container about__container">
            <div className="about__left">
                <img src={contactpicture} alt="Contact Image" />
            </div>
            <div className="contact_right">
                <h2>Contact Me</h2>
                <br></br>
                <form ref={form} onSubmit={sendEmail}>
                  <input type='text' name='name' placeholder="Your Full Name" required/>
                  <input type='email' name='email' placeholder="Your Email" required/>
                  <textarea name='message' rows='7' placeholder="Your Message" required></textarea>

                  <button type='submit' className='btn primary' >Send Message</button>

                </form>

            </div>
    </div>
  </section>
)
}


export default Contact;
