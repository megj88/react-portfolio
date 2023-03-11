import React from 'react'
import "./nav.css"
import {BiHomeHeart} from "react-icons/bi"
import {CiUser} from "react-icons/ci"
import {BsBook} from "react-icons/bs"
import {MdWork} from "react-icons/md"
import {BiMessageDetail} from "react-icons/bi"
import { useState } from "react";


function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart/></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><CiUser/></a>
      <a href="#technologies" onClick={() => setActiveNav('technologies')} className={activeNav === 'technologies' ? 'active' : ''}><BsBook/></a>
      <a href="#projects" onClick={() => setActiveNav('projects')} className={activeNav === 'projects' ? 'active' : ''}><MdWork/></a>
      <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav
