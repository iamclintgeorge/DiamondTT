import React from 'react'
import Header from '../Components/Header'
import heroimg from '../assets/nature-6780354_1280.jpg'

const Homehero = () => {
  return (
    <>
    <Header />
    <div className='flex flex-col z-10 absolute mt-44 text-center mx-44 items-center justify-center'>
    <h1 className='text-white font-bold text-4xl pb-5'>Welcome to Diamond Tours and Travels</h1>
    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum suscipit repellat ex sapiente voluptate nobis fugit nemo itaque, esse eos omnis officia quasi odit dicta repudiandae eius? Nulla, quos quia!</p>
    <div className='bg-white h-10 w-56 mt-10'>

    </div>
    </div>
    <div style={{backgroundImage:`url(${heroimg})`}} className=' h-svh bg-no-repeat bg-cover brightness-50 relative opacity-95 flex-col pt-44 items-center'>
    </div>
    </>
  )
}

export default Homehero
