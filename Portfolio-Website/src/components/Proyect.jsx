// **Imports**
// React import
import React from 'react'
// Title component import
import { Title } from './Title'
// Serva article component import
import { Serva } from './Projects/Serva.jsx'

function Proyect() {
  return (
    <section id="proyects" className="flex flex-col m-8 lg:m-44 xl:mt-[350px]">
      <Title text={"My projects"}/>
      <h1 className='text-white justify-center lg: text-left text-4xl sm:text-4xl lg:text-5xl xl:text-5xl'>What <span className='text-vivid-cyan'>I have built</span></h1>
      {/* Proyects */}
      <div className='flex flex-col space-y-40'>
        <Serva />
      </div>
    </section>
  )
}

export default Proyect