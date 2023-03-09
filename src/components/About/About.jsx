import React from 'react'
import "./about.css"
import Me from "../../Assets/me.png"


function About() {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
        <div className="about__contents">
         
          <p>I have a strong background in HTML, CSS, JavaScript and various web development frameworks.<br />
I am a creative developer with a keen eye for detail and a strong interest in creating modern, minimalistic and responsive designs.<br />
I am passionate about creating visually appealing and user-friendly interfaces that are easy to navigate.<br />
I am dedicated to staying up-to-date with the latest front-end technologies and design trends, and I am always looking for ways to incorporate new technologies into my work.
<br /><br />
I am always expanding my skillset and keeping up-to-date with the latest technologies and industry trends.
<br /><br />
I am a problem-solver at heart and enjoy the challenge of finding creative solutions to complex design problems. I take pride in my ability to understand and interpret clients' needs, and to create custom solutions that meet their specific requirements.
<br /><br />
I am a self-starter and thrive in a fast-paced and dynamic environment. I am also a great communicator and enjoy working closely with clients to ensure their satisfaction with the final product.</p>
<a href="#contact" className="btn btn-primary">Contact me</a>
        </div>
      
    </section>
  )
}

export default About
