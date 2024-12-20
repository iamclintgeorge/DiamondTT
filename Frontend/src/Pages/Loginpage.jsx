import React, {useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";


const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/login", username, password)
      .then(res=>{
        Navigate("/");
      })
  }

  return (
    <>
    <div className="flex flex-row justify-center items-center h-screen bg-green-950">
<div className="bg-white h-96 w-72">
    <div className="flex flex-1 flex-col">
    <div className="pl-5 pt-7">
<h1 className="text-2xl font-semibold text-center mr-4 mb-7">LOGIN</h1>
<input
          className="bg-gray-200 pl-3 py-2 mb-3"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          className="bg-gray-200 pl-3 py-2 mb-5"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />
<button className="bg-green-950 text-white px-14 py-2 rounded-sm ml-12 mt-3" name="login" onSubmit={handleSubmit}>Login</button>
<div className='text-sm text-gray-700 text-center mr-4 mt-5'><Link to="/signup">Don't Have an account? <span className=' text-green-950 font-medium'>Sign Up</span></Link></div>
</div>
</div>
</div>
</div> 
</>
  )
}

export default Loginpage