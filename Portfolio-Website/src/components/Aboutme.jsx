import React from 'react'

const Aboutme = () => {
    return (
        <div name="about" className='h-[800px] lg:max-w-[1080px] lg:basis-1/2 mt-[300px] lg:mt-[400px] xl:mt-[500px] m-24 lg:m-44 xl-64 flex flex-col lg:flex-row  lg:space-x-10 xl:space-x-40'>
            <div className='flex w-full lg:h-full lg:basis-1/2 justify-center lg:justify-end items-center'>
                <img className='h-[300px] w-[250px] lg:w-[300px] lg:h-[400px] xl:h-[450px] xl:w-[350px]' src="src\assets\img\Me.png" alt="Criss_Photo" />
            </div>
            <div className='flex w-full lg:basis-1/2  flex-col justify-center mt-12 lg:mt-0 lg:ml-10'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>
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
    )
}

export default Aboutme