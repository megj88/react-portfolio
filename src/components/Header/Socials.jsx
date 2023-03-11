import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/megan-jones-a25462ab/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/megj88" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://www.instagram.com/the.megan.jones/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
      
    </div>
  )
}

export default Socials
