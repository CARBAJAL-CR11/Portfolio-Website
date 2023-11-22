import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
    </>
  )
}

export default App
