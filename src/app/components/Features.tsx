import React from 'react';
import { schoolFeatures } from '../utils/constants';

const Features = () => {
  return (
    <div>
      <div className='my-8 px-4'>
        <div className='flex justify-center gap-4 flex-wrap'>
          {schoolFeatures.map((feature, index) => (
            <div className='card w-96 shadow-2xl cursor-pointer hover:bg-success hover:text-white p-4' key={index}>
              <figure className=''>{feature.icon}</figure>
              <div className='card-body'>
                <div className='card-title text-center'>{feature.title}</div>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Features };
