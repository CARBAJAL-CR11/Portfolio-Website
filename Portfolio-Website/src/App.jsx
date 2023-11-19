import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Aboutme/>
    </>
  )
}

export default App
