/*
    *Footer Component* 
*/

// React import
import React, { useState } from 'react';
// Ai & Si Icons imports
import { AiFillGithub, AiOutlineInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";


function Footer() {

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

  return (
    <>
      {/* Footer Container */}
      <footer id='footer' className='h-[200px] mt-72 flex flex-col md:flex-row justify-between mx-10 md:mx-24 border-t-[1px] border-t-white mb-28 md:mb-6'>
        <div className='flex flex-col basis-1/2 text-white h-full space-y-6 my-10 md:my-0'>
          {/* Portfolio Title */}
          <div className="h-full flex flex-col justify-end pt md:">
            <h1 className="text-4xl uppercase text-center md:text-start">Portfolio</h1>
          </div>
          {/* Designed by */}
          <div className="flex flex-row justify-center md:justify-start h-full text-lg space-x-1">
            <div className="flex flex-col justify-center h-[30px] text-sm">
              <AiOutlineCopyrightCircle />
            </div>
            <p>Designed by Cristian Rodriguez</p>
          </div>
        </div>
        <div className='flex flex-col basis-1/2  space-y-6'>
          {/* Made with section */}
          <div className="h-full flex flex-col justify-end text-white text-lg ">
            <div className="flex flex-row justify-center md:justify-end space-x-4">
              <p>Made with</p>
              <div className="flex flex-col justify-center text-sm">
                <img className="h-6 w-8" src="src\assets\icons\tailwind.png" alt="tailwind icon" />
              </div>
              <p>&</p>
              <div className="flex flex-col justify-center text-sm">
                <img className="h-6 w-7" src="src\assets\icons\ReactIcon.png" alt="react icon" />
              </div>
            </div>
          </div>
          {/* Contact Icons */}
          <div className="flex flex-row justify-center md:justify-end h-full">
            {/* Icons content */}
            <div className='flex flex-row text-white space-x-5'>
              {/* Github Icon */}
              <a href='https://github.com/CARBAJAL-CR11' className='h-7 w-7 border border-white  rounded-full flex justify-center items-center cursor-pointer'>
                <AiFillGithub className='h-5 w-5' />
              </a>
              {/* Instagram Icon */}
              <a href='https://www.instagram.com/carbajal__cr/' className='h-7 w-7 border border-white  rounded-full flex justify-center items-center cursor-pointer'>
                <AiOutlineInstagram className='h-5 w-5' />
              </a>
              {/* Gmail Icon */}
              <button onClick={copyToClipboard} className='h-7 w-7 border border-white  rounded-full flex justify-center items-center cursor-pointer'>
                <SiGmail className='h-4 w-4' />
              </button>
            </div>
          </div>
        </div>
        {/* Notification */}
        {showNotification && (
          <div class="px-4 py-3 leading-normal text-primary bg-white rounded-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-32 bg-opacity-75" role="alert">
            <p>Gmail copied to clipboard</p>
          </div>
        )}
      </footer>
    </>
  )
}

export default Footer