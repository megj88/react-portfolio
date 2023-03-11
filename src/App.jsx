import React from 'react'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Projects from "./components/Projects/Projects"
import Technologies from "./components/Technologies/Technologies"

const App = () => {
  return (
    <div className="app home">
<Header /> 
<Nav />
<About />
<Technologies />
<Projects />
<Contact />
<Footer />
    </div>
  )
}

export default App