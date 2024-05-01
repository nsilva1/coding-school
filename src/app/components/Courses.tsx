import React from 'react'
import { SectionLayout, ReverseSectionLayout } from './SectionLayout'
import { courses } from '../utils/constants'

const Courses = () => {
  return (
    <div className='my-4'>
        <h3 className='text-center mt-20 text-2xl font-semibold'>Our Popular Courses</h3>
        <SectionLayout title={courses[0].title} image={courses[0].image} description={courses[0].description} />
        <ReverseSectionLayout title={courses[1].title} image={courses[1].image} description={courses[1].description} />
        <SectionLayout title={courses[2].title} image={courses[2].image} description={courses[2].description} />
    </div>
  )
}

export { Courses }