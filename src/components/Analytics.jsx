import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full py-16 px-4'>
      <h1 className='flex justify-center m-10 mt-[-100px] '>Projects</h1>
      <div className='drop-shadow-md bg-white rounded-lg shadow-lg max-w-[1000px] mx-auto grid md:grid-cols-1 my-12 hover:scale-105 duration-300 hover:shadow-[#FFC637]'>
        
        <div className='max-w-[1000px] mx-auto grid md:grid-cols-2'>
          
          
        <div className='flex flex-col justify-center m-10'>
          <p className='text-[#black] font-bold text-4xl my-6'>Project Name</p>
          <p className='text-[#828282]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-white border-2 border-black text-[black] w-[150px] rounded-full font-medium my-6 mx-auto md:mx-0 py-2'>View Project</button>
        </div>
          
          <div>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
          </div>
        </div>
      </div>
      <div className='bg-white rounded-lg drop-shadow-md max-w-[1000px] mx-auto grid md:grid-cols-1 my-12 hover:scale-105 duration-300 shadow-lg hover:shadow-[#FFC637]'>
        
        <div className='max-w-[1000px] mx-auto grid md:grid-cols-2'>
          
          
        
          
          <div>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
          </div>
          <div className='flex flex-col justify-center m-10'>
          <p className='text-[#black] font-bold text-4xl my-6'>Project Name</p>
          <p className='text-[#828282]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-white border-2 border-black text-[black] w-[150px] rounded-full font-medium my-6 mx-auto md:mx-0 py-2'>View Project</button>
        </div>
        </div>
      </div>

      <div className='bg-white rounded-lg drop-shadow-md max-w-[1000px] mx-auto grid md:grid-cols-1 my-12 hover:scale-105 duration-300 shadow-lg hover:shadow-[#FFC637]'>
        
        <div className='max-w-[1000px] mx-auto grid md:grid-cols-2'>
          
          
        <div className='flex flex-col justify-center m-10'>
          <p className='text-[#black] font-bold text-4xl my-6'>Project Name</p>
          <p className='text-[#828282]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-white border-2 border-black text-[black] w-[150px] rounded-full font-medium my-6 mx-auto md:mx-0 py-2'>View Project</button>
        </div>
          
          <div>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Analytics;
