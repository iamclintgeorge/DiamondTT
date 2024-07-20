import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex justify-between mt-5'>
    <div>
      <img className='flex-1 ml-10 w-10' src="/src/assets/Fleur-de-lis-fill-white.png" alt="Logo" />
    </div>
    <div className='w-full ml-52 content-center'>
    <ul className='list-none flex justify-around text-white'>
        <li>Home</li>
        <li>Contact Us</li>
        <li>Packages</li>
        <li>Design Itinerary</li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Header
