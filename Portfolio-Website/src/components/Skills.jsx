import React from 'react'

function Skills() {
    return (
        <div id='skills' className='lg:m-44 xl:mt-[400px] flex lg:flex-row'>
            <div className='flex basis-1/2'>
                <h1 className='text-white text-5xl'>Look at My <span className='text-vivid-cyan'>Skills</span></h1>
            </div>
            <div className='flex basis-1/2 lg:ml-10'>
                <div className='flex basis-2/2'>
                    <p className='text-white-secondary text-sm lg:text-lg xl:text-xl'>
                        These are all the thecnologies I've worked with in different proyects and during my studies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills