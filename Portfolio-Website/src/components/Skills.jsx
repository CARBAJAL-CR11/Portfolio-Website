// **Imports**
// React import
import React from 'react'
// Title component import
import { Title } from './Title'
// Icons Skill component import
import { IconsSkill } from './IconsSkill'

function Skills() {
    return (
        <div className='m-8 lg:m-44 xl:mt-[350px]'>
            <Title text={"My Skills"}></Title>
            <section id='skills' className=' flex flex-col lg:flex-row'>
                <div className='flex basis-1/2'>
                    <h1 className='text-white text-5xl'>Look at My <span className='text-vivid-cyan'>Skills</span></h1>
                </div>
                <div className='flex basis-1/2 lg:ml-10'>
                    <div className='flex basis-2/2'>
                        <p className='text-white-secondary text-sm lg:text-md xl:text-lg'>
                            These are all the thecnologies I've worked with in different proyects and during my studies.
                        </p>
                    </div>
                </div>
            </section> 
            <IconsSkill></IconsSkill>
        </div>
    )
}

export default Skills