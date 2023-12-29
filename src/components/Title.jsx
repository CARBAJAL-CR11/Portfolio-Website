/*
    *Title Component*
    Properties: 
        - text: Title to name the section 
    Return:
        - Property "text" styled like a title 
*/

// Show Animation import
import { Reveal } from './Animations/Reveal.tsx';

export const Title = ({ text }) => {
  return (
    <div className='grid place-content-center mb-28 uppercase text-center'>
      <div className='z-10 '>
        <h3 className=' text-vivid-cyan text-3xl font-bold -mb-[40px]  flex justify-center'>
          <Reveal>{text}</Reveal></h3>
      </div>
      <div className='relative -mt-0 lg:-mt-[10px]'>
        <Reveal>
          <h1 className='text-[#1E1E1E] text-6xl lg:text-8xl'>{text}</h1>
        </Reveal>
      </div>
    </div>
  )
}