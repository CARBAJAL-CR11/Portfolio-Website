// **Imports**
// React import
import React from 'react'
// Title component import
import { Title } from './Title'
// Serva article component import
import { Serva } from './Serva.jsx'
// Mambos article component import
import { Mambos } from './Mambos.jsx'
// getOrder article component import
import { GetOrder } from './getOrder.jsx'
// Bss article component import
import { Bss } from './Bss.jsx'
// Show Animation import
import { Reveal } from './Animations/Reveal.tsx';
// Show Proyects Animation import
import { ProyectsReveal } from './Animations/ProyectsReveal.tsx';

function Proyect() {
  return (
    <section id="proyects" className="flex flex-col p-8 sm:p-20 lg:p-28 xl:p-36 xl:pt-[350px]">
      <Title text={"My projects"} />
      <Reveal>
        <h1 className='text-white justify-center lg: text-left text-4xl sm:text-4xl lg:text-5xl xl:text-5xl'>What <span className='text-vivid-cyan'>I have built</span></h1>
      </Reveal>
      {/* Proyects */}
      <div className='flex flex-col space-y-[300px]'>
        <ProyectsReveal>
          <Serva />
        </ProyectsReveal>
        <ProyectsReveal>
          <GetOrder />
        </ProyectsReveal>
        <ProyectsReveal>
          <Mambos />
        </ProyectsReveal>
        <ProyectsReveal>
          <Bss />
        </ProyectsReveal>
      </div>
    </section>
  )
}

export default Proyect