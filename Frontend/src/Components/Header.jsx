import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <div className='flex justify-between absolute z-10 w-full'>
    <div className='flex ml-10 mt-5'>
      <img className='w-10 mr-5' src="/src/assets/Fleur-de-lis-fill-white.png" alt="Logo" />
      <p className='content-center text-white'>Diamond</p>
    </div>
    <div className='w-full ml-52 content-center mt-5'>
    <ul className='list-none flex justify-around text-white'>
        <li>Home</li>
        <li><Link to="/hello">Hello</Link></li>
        <li>Packages</li>
        <li>Design Itinerary</li>
        <Link to="/signup"><li>Sign Up</li></Link>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Header
