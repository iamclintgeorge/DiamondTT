import React from 'react'
import { Link } from "react-router-dom";
import Loginpage from './Loginpage';

const Signup = () => {
  return (
    <>
    <div className="flex flex-row justify-center items-center h-screen bg-green-950">
<div className="bg-white h-96 w-72">
    <div className="flex flex-1 flex-col">
    <div className="pl-5 pt-7">
<h1 className="text-2xl font-semibold text-center mr-4 mb-7">SIGN UP</h1>
<input
          className="bg-gray-200 pl-3 py-2 mb-3"
          type="text"
          name="Emailid"
          placeholder="Email ID"
        />
<input
          className="bg-gray-200 pl-3 py-2 mb-3"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="bg-gray-200 pl-3 py-2 mb-5"
          type="password"
          name="password"
          placeholder="Password"
        />
<button className="bg-green-950 text-white px-14 py-2 rounded-sm ml-10 mt-3" name="login">Sign Up</button>
<div className='text-sm text-gray-700 text-center mr-4 mt-5'><Link to="/login">Already have an account? <span className=' text-green-950 font-medium'>Login</span></Link></div>
</div>
</div>
</div>
</div> 
</>
  )
}

export default Signup