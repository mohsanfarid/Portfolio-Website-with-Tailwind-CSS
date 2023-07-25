import React from 'react';
import Typed from 'react-typed';
import image from '../assets/image.png'; 

const Hero = () => {
  return (
    <div className='text-white flex -z-10 mt-[-50px]'>
      <div className='max-w-[800px] mt-[-120px]  h-screen mx-auto text-left flex inline-flex flex-col justify-center'>
        <p className='text-[#FDC435] font-bold p-2 text-1xl'>
          FRONT-END DEVELOPER
        </p>
        <h1 className=' text-[black] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Hi, my name is <br/> Mohsan Farid 
        </h1>
        <div className='flex justify-center items-center text-[black]'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            I specialize in
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#FDC435]'
            strings={['React JS', 'JavaScript','jQuery', 'WordPress', 'Tailwind', 'Sass', 'Scss']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div className='block'>
       <button className='bg-[#FDC435] w-[120px] rounded-md font-medium my-6 mx-auto py-2 text-[black] mr-2'>GitHub</button>
        <button className='bg-[#FDC435] w-[120px] rounded-md font-medium my-6 mx-auto py-2 text-[black] mr-2'>LinkedIn</button>
        </div>
      </div>
      <div className='max-w-[700px] w-[50%] relative z-0 mr-[0]'>
      <img className='w-full mx-auto mt-[-3rem] bg-transparent mt-[-100px]' src={image} alt="/" />
      
      </div>
    </div>
  );
};

export default Hero;
