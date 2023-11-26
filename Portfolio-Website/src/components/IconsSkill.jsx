/*
    *Icons Skills Component* 
*/
export const IconsSkill = ({  }) => {
  return (
    <>
      {/* Skills Icons Container */}
      <div className='flex flex-row w-full mt-20 lg:mt-48 space-x-44'>
        <div className=" flex flex-col justify-center basis-1/2">

          {/* Programing Section  */}
          <h1 className="text-white text-4xl text-center">Programing</h1>

          {/* First Row */}
          <div className="flex flex-row w-full justify-center space-x-5 mt-20">

            {/* JavaScript Icons */}
            <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
              <div className="grid place-content-center place-items-center">
                <img src="src\assets\Icons\JavaScript.png" alt="JavaScript" className="h-[50px] w-[50px] mb-3" />
                <p className="text-white text-center text-xs">JavaScript</p>

              </div>
            </div>

            {/* PHP Icons */}
            <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
              <div className="grid place-content-center place-items-center  h-[50px] ">
                <img src="src\assets\Icons\PHP.png" alt="PHP Icon" className="h-[35px] w-[60px] mt-3" />
                <p className="text-white text-center text-xs pt-4">PHP</p>
              </div>
            </div>

            {/* C# Icons */}
            <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
              <div className="grid place-content-center place-items-center">
                <img src="src\assets\Icons\csharp.png" alt="CSharp" className="h-[50px] w-[50px] mb-3" />
                <p className="text-white text-center text-xs">C#</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-row w-full justify-center space-x-5 mt-5">

            {/* Java Icons */}
            <div className="grid place-content-center w-[110px] h-[130px] bg-secondary">
              <div className="grid place-content-center place-items-center">
                <img src="src\assets\Icons\Java.png" alt="Java" className="h-[50px] w-[40px] mb-3" />
                <p className="text-white text-center text-xs">Java</p>

              </div>

            </div>
          </div>
        </div>
        <div className=" text-center basis-1/2">
          <h1 className="text-white text-4xl"><span className="text-vivid-cyan">Database</span> Managment</h1>
        </div>
      </div>
    </>
  )
}