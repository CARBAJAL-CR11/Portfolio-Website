// **Imports**
// React import
import React from 'react';
// Title component import
import { Title } from './Title.jsx'
// Show Animation import
import { Reveal } from './Animations/Reveal.tsx';
//Images import 
import Me from '../assets/img/Me3.png'; 

const Aboutme = () => {
  return (
    <>
      {/* About Me Section */}
      <section
        id="about me" className='flex flex-col py-[200px] lg:py-[250px] xl:py-[200px] p-8 lg:p-44'>
        {/* Title */}
        <Title text={"About me"}></Title>
        <article className='lg:max-w-[1080px] md:basis-1/2 flex flex-col md:flex-row lg:space-x-10 xl:space-x-40'>
          {/* Profile Photo */}
          <div className='flex w-full lg:h-full lg:basis-1/2 justify-center lg:justify-end items-center'>
            <Reveal>
              <img className='h-[300px] w-[250px] lg:w-[300px] lg:h-[400px] xl:h-[450px] xl:w-[350px]' src={Me} alt="Criss_Photo" />
            </Reveal>
          </div>
          {/* About me Introduction */}
          <div className='flex w-full lg:basis-1/2  flex-col justify-center mt-12 md:mt-0 lg:ml-10'>
            {/* Title */}
            <Reveal>
              <h1 className='text-white text-4xl sm:text-4xl lg:text-5xl xl:text-5xl'>
                Hi there!
              </h1>
            </Reveal>
            <div className='text-white-secondary text-left pt-10  text-sm lg:text-lg xl:text-xl'>
              {/* Introduction */}
              <div className='flex flex-col space-y-10'>
                <Reveal>
                  <p>
                    <span className='text-vivid-cyan'>I'm Cristian</span>
                    , a university student with the goal of being a computer science engineer, proactive, innovative, and focused on UI/UX design. A Full Stack developer, with a lot of aspiration to fulfill the projects that I propose.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    I'm particularly interested in database management, and I'm excited to explore and master this area to enhance my skills as a developer.
                  </p>
                </Reveal>
              </div>

            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Aboutme