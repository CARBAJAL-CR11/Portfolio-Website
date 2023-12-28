// **Imports**
// React import
import React from 'react'
// Title component import
import { Title } from './Title.jsx'
// Icons Skill component import
import { IconsSkill } from './IconsSkill.jsx'
// Database Icons component import
import { WebDesign } from './WebDesign.jsx'
// Show Animation import
import { Reveal } from './Animations/Reveal.tsx';

function Skills() {
  return (
    <section id="skills" className='flex flex-col py-[200px] lg:py-[250px] xl:py-[200px] p-8 lg:p-44'>
      {/* Skills Title */}
      <Title text={"My Skills"}></Title>
      <section className='flex flex-col lg:flex-row'>
        <div className='flex basis-1/2 justify-center lg:justify-start'>
          <Reveal>
            <h1 className='text-white text-4xl sm:text-4xl lg:text-5xl xl:text-5xl text-center lg:text-left'>Look at My <span className='text-vivid-cyan'>Skills</span></h1>
          </Reveal>
        </div>
        <div className='flex basis-1/2 lg:ml-10'>
          <div className='flex w-full justify-center lg:justify-start mt-10 mx-5 lg:mx-0 lg:mt-0'>
            <Reveal>
              <p className='text-white-secondary text-center lg:text-left text-sm lg:text-md xl:text-lg'>
                These are all the thecnologies I've worked with in different proyects and during my studies.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <IconsSkill></IconsSkill>
      <WebDesign></WebDesign>
    </section>
  )
}

export default Skills