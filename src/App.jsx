import { useState } from 'react'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Skills from './Components/Skills/Skills.jsx'
import About from './Components/About/About.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Resume from './Components/Resume/Resume.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'

function App() {


  return (
    <>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Resume />
      {/* done almost everything one page left and have to finish the previous page's three left part*/}
      <Contacts />
    </>
  )
}

export default App
