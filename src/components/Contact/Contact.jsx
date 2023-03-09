import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zxtc9bl', 'template_ggkc3sj', form.current, 'GMAoOLkm-IkG9a-tj')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email:</h4>
            <h5>megan@meganjones.it</h5>
            <a href="mailto:megan@meganjones.it" target="_blank">Send me a message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn:</h4>
            <h5>@Megan Jones</h5>
            <a href="https://www.linkedin.com/in/megan-jones-a25462ab/" target="_blank">Send me a message</a>
          </article>
      
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
