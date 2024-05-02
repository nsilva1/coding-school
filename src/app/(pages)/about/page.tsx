import React from 'react';
import about from '@/app/assets/images/about.svg';
import Image from 'next/image';
import { Stats } from './(components)/Stats';
import { Team } from './(components)/Team';

const page = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row'>
          <Image
            src={about}
            className='max-w-sm rounded-lg'
            alt='About'
          />
          <div>
            
            <p className='text-xl leading-relaxed'>
              NDITO Coding Institute is dedicated to providing high-quality,
              accessible coding education for individuals seeking to advance
              their careers in the tech industry. Our expert instructors and
              comprehensive curriculum ensure that students receive the skills
              and knowledge needed to excel in today's competitive job market.
            </p>
            <p className='text-xl leading-relaxed my-4'>
              At NDITO, we offer a range of courses in web development, data
              analytics, cloud computing, and more. Our hands-on approach to
              learning, coupled with real-world projects and industry-relevant
              curriculum, prepares our students for success in their chosen
              field.
            </p>
            
          </div>
        </div>
      </div>

      <div className=''>
        <Stats />
      </div>

        <div>
            {/* <Team /> */}
        </div>

    </div>
  );
};

export default page;
