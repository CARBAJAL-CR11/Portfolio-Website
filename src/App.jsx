import { useState } from 'react'
import Navbar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Aboutme from './components/Aboutme.jsx'
import Skills from './components/Skills.jsx'
import Proyect from './components/Proyect.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Proyect />
      <Footer />
    </>
  )
}

export default App
