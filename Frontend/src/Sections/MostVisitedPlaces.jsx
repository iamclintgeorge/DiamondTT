import React from 'react';
import heroimg from '../assets/nature-6780354_1280.jpg';

const MostVisitedPlaces = () => {
  return (
    <>
     <div className='flex flex-col items-center h-96 mb-36'>
        <div>
        <h1 className='my-14 text-2xl items-center'>Most Visited Places</h1>
        </div>
        <div className='flex flex-row justify-evenly mx-10'>
            <div className='border-2 rounded-md h-80 w-56 m-5 p-2'>
                <img className='rounded-md h-60' src={heroimg} alt="" />
                <p>Niladri Reserve</p>
            </div>
            <div className='border-2 rounded-md h-80 w-56 m-5 p-2'>
                <img className='rounded-md h-60' src={heroimg} alt="" />
                <p>Niladri Reserve</p>
            </div>
            <div className='border-2 rounded-md h-80 w-56 m-5 p-2'>
                <img className='rounded-md h-60' src={heroimg} alt="" />
                <p>Niladri Reserve</p>
            </div>
            <div className='border-2 rounded-md h-80 w-56 m-5 p-2'>
                <img className='rounded-md h-60' src={heroimg} alt="" />
                <p>Niladri Reserve</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default MostVisitedPlaces
