// **Imports**
// React import
import React from 'react'
// Title component import
import { Title } from './Title'
// Icons Skill component import
import { IconsSkill } from './IconsSkill'
// Database Icons component import
import { WebDesign } from './WebDesign'

function Skills() {
    return (
        <div id='skills' className='flex flex-col m-8 lg:m-44 xl:mt-[350px]'>
            <Title text={"My Skills"}></Title>
            <section className='flex flex-col lg:flex-row'>
                <div className='flex basis-1/2 justify-center lg:justify-start'>
                    <h1 className='text-white text-5xl text-center lg:text-left'>Look at My <span className='text-vivid-cyan'>Skills</span></h1>
                </div>
                <div className='flex basis-1/2 lg:ml-10'>
                    <div className='flex w-full justify-center lg:justify-start mt-10 mx-5 lg:mx-0 lg:mt-0'>
                        <p className='text-white-secondary text-center lg:text-left text-sm lg:text-md xl:text-lg'>
                            These are all the thecnologies I've worked with in different proyects and during my studies.
                        </p>
                    </div>
                </div>
            </section>
            <IconsSkill></IconsSkill>
            <WebDesign></WebDesign>
        </div>
    )
}

export default Skills