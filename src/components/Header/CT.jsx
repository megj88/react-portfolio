import React from 'react'
import "./header.css"
import CV from "../../Assets/Megan Jones CV.pdf"

const CT = () => {
  return (
    <div className="ct">
        <a href={CV} download="newfilename" className="btn btn-primary">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's talk</a>
      
    </div>
  )
}

export default CT
