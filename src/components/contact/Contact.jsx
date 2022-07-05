import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef as UseRef } from 'react';
import emailjs from 'emailjs-com'

function contact() {

  const form  = UseRef();

  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8wihj3l', 'template_rai58ta', form.current, 'gPKBeozNnHCKcFMz2')
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
    }, (error) => {
        console.log(error.text);
    });
  
};


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>info@lavesh.kumbhalkar.com</h5>
            <a href="mailto:lavesh.kumbhalkar27@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Lavesh Kumbhalkar</h5>
            <a href="https://m.me/LAVESHKUMBHALKAR" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+918446038184</h5>
            <a href="https://api.whatsapp.com/send?phone=8446038184" target="_blank">Send a message</a>
          </article>
        </div>
        {/* contact form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn  btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact