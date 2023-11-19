import React from 'react'

const Aboutme = () => {
    return (
        <div name="about" className='h-[2000px] mt-[800px] m-64 flex flex-row space-x-40'>
            <div className='flex basis-1/2 justify-end w-full pr-24'>
                <img className='h-[620px] w-[490px]' src="src\assets\img\Me.png" alt="Criss_Photo" />
            </div>
            <div className='flex basis-1/2  flex-col'>
                <h1 className='text-white lg:text-8xl'>
                    Hi there!
                </h1>
                <div className='text-white-secondary text-left w-full pt-10 text-4xl'>
                    <div className='flex flex-col space-y-10 w-[730px]'>
                        <p>
                            I'm Cristian, a university student with the goal of being a computer science engineer, proactive, innovative, and focused on UI/UX design. A Full Stack developer, with a lot of aspiration to fulfill the projects that I propose.
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