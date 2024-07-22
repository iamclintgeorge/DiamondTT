import React from 'react'
import heroimg from '../assets/forest-7141417_1280.jpg'

const Testimonials = () => {
  return (
    <>
    <div className='absolute z-10'>
        <h1 className='text-white text-5xl pt-28 px-28 text-wrap'>What People Say About Us</h1>
    </div>
    <div style={{backgroundImage:`url(${heroimg})`}} className=' h-svh bg-no-repeat bg-cover brightness-50 relative opacity-95 flex-col pt-44 items-center'>
    </div>
    </>
  )
}

export default Testimonials