// **Imports**
// React import and react State
import React, { useState } from "react";
// Fa Icons imports
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [nav, setNav] = useState(false);

  // Array that contains the navBar content list 
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about me'
    },
    {
      id: 3,
      link: 'skills'
    },
    {
      id: 4,
      link: 'proyects'
    },
  ]

  return (
    <>
      <div className="flex z-30 justify-between items-center w-full h-32 text-white fixed">

        <div className="uppercase pl-8 md:pl-12 lg:pl-24 2xl:pl-44">
          <h1 className="text-4xl lg:text-5xl duration-300">XPortfolio</h1>
        </div>

        <ul className="hidden md:flex md:space-x-[30px] lg:space-x-[50px] xl:space-x-[90px] 2xl:space-x-[110px] md:pr-8 xl:pr-28 2xl:pr-48">
          {links.map(({ id, link }) => (
            <li key={id} className="hover:text-vivid-cyan md:text-xl lg:text-2xl xl:text-3xl uppercase duration-300 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-third to-third bg text-white">
            {links.map(({ id, link }) => (
              <li key={id} className="hover:text-vivid-cyan text-4xl uppercase duration-300 cursor-pointer px-4 py-6">
                {link}
              </li>
            ))}
          </ul>

        )}
      </div>
    </>
  )

}

export default NavBar