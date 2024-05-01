import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SectionLayout = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className='hero'>
      <div className='hero-content flex-col lg:flex-row'>
        <Image src={image} alt='' className="max-w-sm rounded-lg" />
        <div>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <p className='py-6'>{description}</p>
          <Link href='/courses' className='btn btn-neutral'>
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

const ReverseSectionLayout = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className='hero'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <Image src={image} alt='' className="max-w-sm rounded-lg" />
        <div>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <p className='py-6'>{description}</p>
          <Link href='/courses' className='btn btn-neutral'>
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export { SectionLayout, ReverseSectionLayout };
