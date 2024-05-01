import React from 'react';
import hero from '../assets/images/tech_hero.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className=''>
        <div className='flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:px-14'>
          <div>
            <Image src={hero} alt='Coder Hero' />
          </div>
          <div className=''>
            <h1 className='text-5xl font-bold text-center lg:text-start'>Ndito Coding Institute</h1>
            <p className='py-6 text-center lg:text-start'>
              Embrace the future of possibilities. Learn a tech skill today and
              be equipped for the endless possibilities of the future.
            </p>
            <div className='text-center lg:text-start'>
            <button className='btn btn-accent btn-wide'>Get Started</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
