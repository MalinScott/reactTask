import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4'>
      <h1 className='text-7xl font-bold text-blue-700 pb-2'>404</h1>
      <h2 className='lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 py-2'>
        Page Not Found
      </h2>
      <div className='flex md:flex-row flex-col items-center justify-center md:gap-8 mt-4 mb-12 w-full'>
        <Link
          to='/'
          className='p-4 text-base text-center text-white md:w-auto md:mb-0 mb-4 w-full bg-blue-700 border rounded-md hover:bg-indigo-800'
        >
          Return to Home Page
        </Link>
      </div>
      <div className='hidden md:grid place-content-center lg:w-1/3 w-1/2'>
        <img
          src='https://i.ibb.co/JjmY1tm/tuk-component.png'
          alt='girl in an underconstruction site'
        />
      </div>
      <div className='md:hidden grid place-content-center'>
        <img
          src='https://i.ibb.co/zxQ6hyF/undraw-warning-cyit-1-1.png'
          alt='girl in an underconstruction site'
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
