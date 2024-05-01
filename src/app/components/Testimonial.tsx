import React from 'react'
import Image from 'next/image'
import img from '@/app/assets/images/tech_hero.svg'

const Testimonial = () => {
  return (
    <div className='my-10'>
        <div className='carousel rounded-box'>
            <div className='carousel-item'>
                <Image src={img}  alt="Tailwind CSS Carousel component" />
            </div>
            <div className='carousel-item'>
            <Image src={img}  alt="Tailwind CSS Carousel component" />
            </div>
            <div className='carousel-item'>
            <Image src={img}  alt="Tailwind CSS Carousel component" />
            </div>
        </div>
    </div>
  )
}

export { Testimonial }