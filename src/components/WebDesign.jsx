/*
    *Icons Database Component* 
*/

// Show Animation import
import { Reveal } from './Animations/Reveal.tsx';
//Images import 
import ReactIcon from '../assets/Icons/ReactIcon.png';
import TailwindIcon from '../assets/Icons/tailwind.png';
import ViteIcon from '../assets/Icons/Vite.png';
import FigmaIcon from '../assets/Icons/Figma.png';
import HTMLIcon from '../assets/Icons/HTML.png';
import CSSIcon from '../assets/Icons/CSS.png';
import PrismaIcon from '../assets/Icons/Prisma.png';
import NodeIcon from '../assets/Icons/Node.png';

export const WebDesign = ({ }) => {
  return (
    <>
      {/* Icons Database Container */}

      <div className="flex flex-col basis-1/2 mt-10">

        {/* Programing Section  */}
        <h1 className="text-white text-4xl text-center flex justify-center"><Reveal><span className="text-vivid-cyan">Web</span> Design</Reveal></h1>

        {/* Row div */}
        <div className="flex flex-col lg:flex-row w-full justify-center lg:-space-x-8 xl:space-x-5 mt-10 lg:mt-20 ">

          {/* First Row */}
          <div className="flex flex-row justify-center duration-150 scale-[70%] md:scale-90 lg:scale-90 xl:scale-100 space-x-5">

            {/* Tailwind Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src={TailwindIcon} alt="Tailwind" className="h-[40px] w-[60px]" />
                  </div>
                  <p className="text-white text-center text-xs">Tailwind</p>
                </div>
              </div>
            </Reveal>

            {/* React Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src={ReactIcon} alt="React" className="h-[50px] w-[60px]" />
                  </div>
                  <p className="text-white text-center text-xs">React</p>
                </div>
              </div>
            </Reveal>

            {/* Vite Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src={ViteIcon} alt="Vite" className="h-[55px] w-[60px]" />
                  </div>
                  <p className="text-white text-center text-xs">Vite</p>
                </div>
              </div>
            </Reveal>

            {/* Figma Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src={FigmaIcon} alt="Figma" className="h-[50px] w-[65px]" />

                  </div>
                  <p className="text-white text-center text-xs">Figma</p>
                </div>
              </div>
            </Reveal>

          </div>
          {/* Second Row */}
          <div className="flex flex-row justify-center duration-150 scale-[70%] md:scale-90 lg:scale-90 xl:scale-100 space-x-5">
            {/* HTML Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src={HTMLIcon} alt="HTML" className="h-[50px] w-[45px]" />
                  </div>
                  <p className="text-white text-center text-xs">HTML</p>
                </div>
              </div>
            </Reveal>

            {/* CSS Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src={CSSIcon} alt="CSS" className="h-[50px] w-[45px]" />
                  </div>
                  <p className="text-white text-center text-xs">CSS</p>
                </div>
              </div>
            </Reveal>

            {/* Prisma Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src={PrismaIcon} alt="Prisma" className="h-[50px] w-[40px]" />
                  </div>
                  <p className="text-white text-center text-xs">Prisma</p>
                </div>
              </div>
            </Reveal>

            {/* Node Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src={NodeIcon} alt="Node" className="h-[50px] w-[45px]" />
                  </div>
                  <p className="text-white text-center text-xs">Node</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div >
    </>
  )
}