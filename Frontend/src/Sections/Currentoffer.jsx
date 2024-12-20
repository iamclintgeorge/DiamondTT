import React from 'react';
import heroimg from '../assets/nature-6780354_1280.jpg';

const Currentoffer = () => {
  return (
    <>
     <div className='h-auto bg-green-950 pb-24 flex flex-col items-center'>
        <h1 className='my-14 text-2xl text-white pt-20'>Our Current Offers</h1>
        <div className='flex flex-row mx-10'>
            <div className='border-2 bg-white rounded-lg h-80 w-56 m-5 p-3'>
                <img className='rounded-md h-60' src={heroimg} alt="" />
                <p>Niladri Reserve</p>
            </div>
            <div className='border-2 bg-white rounded-lg h-80 w-56 m-5 p-3'>
                <img className='rounded-md h-60' src={heroimg} alt="" />
                <p>Niladri Reserve</p>
            </div>
            <div className='border-2 bg-white rounded-lg h-80 w-56 m-5 p-3'>
                <img className='rounded-md h-60' src={heroimg} alt="" />
                <p>Niladri Reserve</p>
            </div>
            <div className='border-2 bg-white rounded-lg h-80 w-56 m-5 p-3'>
                <img className='rounded-md h-60' src={heroimg} alt="" />
                <p>Niladri Reserve</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default Currentoffer
