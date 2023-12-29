// **Imports**
// React import
import React, { useState } from 'react';
// Typed Animation import
import { TypeAnimation } from 'react-type-animation';
// Ai Icons imports
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
// Framer Motion import
import { motion } from 'framer-motion';
// Show Animation import
import { Reveal } from './Animations/Reveal.tsx';
//Image import 
import background from '../assets/img/Background2.png';


function Home() {

  // Text to set on the clipboard
  const [textToCopy, setTextToCopy] = useState('cr4133668@gmail.com');
  const [showNotification, setShowNotification] = useState(false);

  // Copy Gmail to Clipboard Function
  const copyToClipboard = () => {
    // Textarea element to hold the text
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    // Append the textarea element to the DOM
    document.body.appendChild(textArea);

    // Text selected in the textarea
    textArea.select();

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the textarea element from the DOM
    document.body.removeChild(textArea);

    // Show the notification
    setShowNotification(true);

    // Hide the notification after 4 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  // Animation Active Function


  return (
    <section
      id='home'>
      {/* Background Hero image */}
      <img className='w-full h-screen object-cover' src={background} alt="Background" />
      <div
        className='w-full h-screen absolute top-0 left-0'>
        <div className='m-auto h-full w-full flex flex-col justify-center items-center'>
          {/* Title content */}
          <Reveal>
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
          </Reveal>

          {/* SubTitle content */}
          <Reveal>
            <h2 className='text-white-secondary text-sm md:text-xl pt-4'>A creative student & Full stack developer</h2>
          </Reveal>
          {/* Icons contet */}
          <Reveal>
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
              <button onClick={copyToClipboard} className='h-8 w-8 border border-white  rounded-full flex justify-center items-center cursor-pointer'>
                <SiGmail className='h-5 w-5' />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
      {/* Notification */}
      {showNotification && (
        <div class="px-4 py-3 leading-normal text-primary bg-white rounded-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75" role="alert">
          <p>Gmail copied to clipboard</p>
        </div>
      )}
    </section>
  )
}

export default Home