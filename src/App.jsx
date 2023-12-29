import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Aboutme from './components/Aboutme.jsx'
import Skills from './components/Skills.jsx'
import Proyect from './components/Proyect.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <Aboutme />
      <Skills />
      <Proyect />
      <Footer />
    </>
  )
}

export default App
