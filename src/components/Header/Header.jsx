import React from 'react'
import CT from "./CT"
import Socials from "./Socials"
import "./header.css"
import Me from "../../Assets/me.png"

function Header() {
  return (
   <header>
    <div className="header__container">
      <h5>Hello I am</h5>
      <h1>Megan Jones</h1>
      <h5 className="text-light">
        Frontend Developer
      </h5>
      <CT />
      <Socials />

<div className="me">
<img src={Me} alt="Cartoon of coder" />
</div>
      <a href="#contact" className="scroll__down">Scroll Down</a>



    </div>
   </header>
  )
}

export default Header
