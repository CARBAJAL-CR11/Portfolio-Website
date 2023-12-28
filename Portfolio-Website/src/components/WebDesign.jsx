/*
    *Icons Database Component* 
*/

// Show Animation import
import { Reveal } from './Animations/Reveal.tsx';

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
                    <img src="src\assets\Icons\Tailwind.png" alt="Tailwind" className="h-[40px] w-[60px]" />
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
                    <img src="src\assets\Icons\ReactIcon.png" alt="React" className="h-[50px] w-[60px]" />
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
                    <img src="src\assets\Icons\Vite.png" alt="Vite" className="h-[55px] w-[60px]" />
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
                    <img src="src\assets\Icons\Figma.png" alt="Figma" className="h-[50px] w-[65px]" />

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
                    <img src="src\assets\Icons\HTML.png" alt="HTML" className="h-[50px] w-[45px]" />
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
                    <img src="src\assets\Icons\CSS.png" alt="CSS" className="h-[50px] w-[45px]" />
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
                    <img src="src\assets\Icons\Prisma.png" alt="Prisma" className="h-[50px] w-[40px]" />
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
                    <img src="src\assets\Icons\Node.png" alt="Node" className="h-[50px] w-[45px]" />
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