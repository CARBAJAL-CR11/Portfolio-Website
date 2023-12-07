// **Imports**
// React import
import React from 'react';
// Typed Animation import
import { TypeAnimation } from 'react-type-animation';
// Ai Icons imports
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";


function Home() {
  return (
    <section id='home'>
      {/* Background Hero image */}
      <img className='w-full h-screen object-cover' src="src\assets\img\Background.png" alt="Background" />
      <div className='w-full h-screen absolute top-0 left-0'>
        <div className='m-auto h-full w-full flex flex-col justify-center items-center'>
          {/* Title content */}
          <h1 className='text-white text-3xl md:text-5xl text-center lg:text-6xl pt-12'>Hi, I am
            {/* Typed text animation */}
            <TypeAnimation
              // Text to type
              sequence={[
                ' Cristian Carbajal', // Types first
                3000, // Wait '3s'
                ' a Developer', // Delete first one & typde second
                3000, // Wait '3s'
                ' a Web Designer',
                3000 // Wait '3s'
              ]}
              wrapper="span"
              // Typed speed
              speed={8}
              className='text-vivid-cyan'
              repeat={Infinity}
              preRenderFirstString={true}
            />
          </h1>

          {/* SubTitle content */}
          <h2 className='text-white-secondary text-sm md:text-xl pt-4'>A creative student & Full stack developer</h2>
          {/* Icons contet */}
          <div className='flex text-white space-x-10 pt-5'>
            {/* Github Icon */}
            <a href='https://github.com/CARBAJAL-CR11' className='h-8 w-8 border border-white  rounded-full flex justify-center items-center cursor-pointer'>
              <AiFillGithub className='h-6 w-6' />
            </a>
            {/* Instagram Icon */}
            <a href='https://www.instagram.com/carbajal__cr/' className='h-8 w-8 border border-white  rounded-full flex justify-center items-center cursor-pointer'>
              <AiOutlineInstagram className='h-6 w-6' />
            </a>
            {/* Gmail Icon */}
            <a href='' className='h-8 w-8 border border-white  rounded-full flex justify-center items-center cursor-pointer'>
              <SiGmail className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home