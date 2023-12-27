// **Imports**
// React import
import React from 'react'
// Title component import
import { Title } from './Title'
// Serva article component import
import { Serva } from './Projects/Serva.jsx'
// Mambos article component import
import { Mambos } from './Projects/Mambos.jsx'
// getOrder article component import
import { GetOrder } from './Projects/getOrder.jsx'
// Bss article component import
import { Bss } from './Projects/Bss.jsx'

function Proyect() {
  return (
    <section id="proyects" className="flex flex-col p-8 sm:p-20 lg:p-28 xl:p-36 xl:pt-[350px]">
      <Title text={"My projects"}/>
      <h1 className='text-white justify-center lg: text-left text-4xl sm:text-4xl lg:text-5xl xl:text-5xl'>What <span className='text-vivid-cyan'>I have built</span></h1>
      {/* Proyects */}
      <div className='flex flex-col space-y-[300px]'>
        <Serva/>
        <GetOrder/>
        <Mambos/>
        <Bss/>
      </div>
    </section>
  )
}

export default Proyect