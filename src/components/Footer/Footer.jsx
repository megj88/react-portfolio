import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

function Footer() {
  return (
    <footer>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/megan-jones-a25462ab/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/megj88" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://www.instagram.com/the.megan.jones/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
      
      </div>
      <div className="footer__copyright">
        <small>&copy; Megan Jones. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
