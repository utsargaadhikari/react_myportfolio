import React from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';
import { FaWhatsappSquare } from 'react-icons/fa';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgevhzg', 'template_plwc3v8', form.current, 'm_8EnlB6OY16D7pyK')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Connect With Me</h5>
      <h2>Hit Me up</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>

            <h4>Email</h4>
            <h5>utsarga101@gmail.com</h5>
            <a href="mailto:utsarga101@gmail.com">Send Me A Message</a>
          </article>
          <article className="contact__option">
            <SiDiscord className='contact__option-icon' />

            <h4>Discord</h4>
            <h5>jhonny_big#9350</h5>
            <a href="jhonny_big#9350">Send Me A Message</a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className='contact__option-icon' />

            <h4>WhatsApp</h4>
            <h5>+977 9861466941</h5>
            <a href="https://api.whatsapp.com/send?phone+9779861466941">WhatsApp Me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='You E-Mail' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
