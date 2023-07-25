import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex col justify-center max-w-[100%] mx-auto py-16 px-4 text-black bg-[white] pr-[90px] pl-[90px]'>
      <div className=''>
        <span className='flex col place-items-center'>
        <a href="https://github.com/mohsanfarid" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={50} className='mr-[10px]'/></a>
        <h1 className='w-full text-3xl font-bold text-black font-comforta'>Mohsan Farid</h1>
        
        </span>
      </div>
    </div>
  );
};

export default Footer;
