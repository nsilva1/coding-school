import React from 'react';

const Stats = () => {
  return (
    <div className='my-4'>

      <div className='flex justify-around'>
        <div className='flex-col text-center'>
        <div className='stat-title'>Graduates</div>
          <div className='stat-value'>69</div>
        </div>
        <div className='flex-col text-center'>
        <div className='stat-title'>IT Companies/Partners</div>
          <div className='stat-value'>16</div>
        </div>
        <div className='flex-col text-center'>
        <div className='stat-title'>Tutors</div>
          <div className='stat-value'>11</div>
        </div>
      </div>
      
      
    </div>
  );
};

export { Stats };
