// **Imports**
// React import
import React from 'react';
// Title component import
import { Title } from './Title'

const Aboutme = () => {
  return (
    <>
      {/* About Me Section */}
      <section id="about me" className='flex flex-col py-[200px] lg:py-[250px] xl:py-[200px] p-8 lg:p-44'>
        <Title text={"About me"}></Title>
        <div className='lg:max-w-[1080px] md:basis-1/2 flex flex-col md:flex-row lg:space-x-10 xl:space-x-40'>
          <div className='flex w-full lg:h-full lg:basis-1/2 justify-center lg:justify-end items-center'>
            <img className='h-[300px] w-[250px] lg:w-[300px] lg:h-[400px] xl:h-[450px] xl:w-[350px]' src="src\assets\img\Me2.png" alt="Criss_Photo" />
          </div>
          <div className='flex w-full lg:basis-1/2  flex-col justify-center mt-12 md:mt-0 lg:ml-10'>
            <h1 className='text-white text-4xl sm:text-4xl lg:text-5xl xl:text-5xl'>
              Hi there!
            </h1>
            <div className='text-white-secondary text-left pt-10  text-sm lg:text-lg xl:text-xl'>
              <div className='flex flex-col space-y-10'>
                <p>
                  <span className='text-vivid-cyan'>I'm Cristian</span>
                  , a university student with the goal of being a computer science engineer, proactive, innovative, and focused on UI/UX design. A Full Stack developer, with a lot of aspiration to fulfill the projects that I propose.
                </p>
                <p>
                  I'm particularly interested in database management, and I'm excited to explore and master this area to enhance my skills as a developer.
                </p>

              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Aboutme