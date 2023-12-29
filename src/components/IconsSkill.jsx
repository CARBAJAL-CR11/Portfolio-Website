/*
    *Icons Skills Component* 
*/

// Show Animation import
import { Reveal } from './Animations/Reveal.tsx';

export const IconsSkill = ({ }) => {
  return (
    <>
      {/* Skills Icons Container */}
      <div className='flex flex-col xl:flex-row w-full mt-20 lg:mt-48 xl:space-x-44 space-y-10 xl:space-y-0'>
        <div className="flex flex-col justify-start basis-1/2">

          {/* Programing Section  */}

          <h1 className="text-white text-4xl text-center flex justify-center"><Reveal>Programing</Reveal></h1>

          {/* First Row */}
          <div className="flex flex-row w-full justify-center space-x-5 mt-10 lg:mt-20 scale-[70%] md:scale-90 lg:scale-90 xl:scale-100">

            {/* JavaScript Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <img src="src\assets\Icons\JavaScript.png" alt="JavaScript" className="h-[50px] w-[50px] mb-3" />
                  <p className="text-white text-center text-xs">JavaScript</p>

                </div>
              </div>
            </Reveal>

            {/* PHP Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center  h-[50px] ">
                  <img src="src\assets\Icons\PHP.png" alt="PHP Icon" className="h-[35px] w-[60px] mt-3" />
                  <p className="text-white text-center text-xs pt-4">PHP</p>
                </div>
              </div>
            </Reveal>

            {/* C# Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <img src="src\assets\Icons\csharp.png" alt="CSharp" className="h-[50px] w-[50px] mb-3" />
                  <p className="text-white text-center text-xs">C#</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Second Row */}
          <div className="flex flex-row w-full justify-center space-x-5 mt-5 scale-[70%] md:scale-90 lg:scale-90 xl:scale-100">

            {/* Java Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <img src="src\assets\Icons\Java.png" alt="Java" className="h-[50px] w-[40px] mb-3" />
                  <p className="text-white text-center text-xs">Java</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Database Managment Section */}
        <div className="flex flex-col justify-start basis-1/2">
          <h1 className="text-white text-center text-4xl flex justify-center"><Reveal> <span className="text-vivid-cyan">Database</span> Managment</Reveal></h1>

          {/* First Row */}
          <div className="flex flex-row w-full justify-center space-x-5 mt-10 lg:mt-20 scale-[70%] md:scale-90 lg:scale-90 xl:scale-100">

            {/* Postgres Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src="src\assets\Icons\Postgres.png" alt="Postgres" className="h-[50px] w-[45px]" />

                  </div>
                  <p className="text-white text-center text-xs">Postgres</p>
                </div>
              </div>
            </Reveal>

            {/* MySql Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[75px] mb-3">
                    <img src="src\assets\Icons\MySql.png" alt="MySql" className="h-[50px] w-[75px]" />

                  </div>
                  <p className="text-white text-center text-xs">MySql</p>
                </div>
              </div>
            </Reveal>

            {/* SQL Server Icons */}
            <Reveal>
              <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
                <div className="grid place-content-center place-items-center">
                  <div className="grid place-content-center h-[50px] w-[65px] mb-3">
                    <img src="src\assets\Icons\SQLserverIcon.png" alt="SQL Server" className="h-[50px] w-[50px]" />

                  </div>
                  <p className="text-white text-center text-xs">SQL Server</p>
                </div>
              </div>
            </Reveal>
            
          </div>
        </div>
      </div >
    </>
  )
}