import React from 'react'


const Loginpage = () => {
  return (
    <>
            <div className="flex flex-row justify-center h-screen">
        <div className="bg-red-500 h-96 w-72">
            <div className="flex flex-1 flex-col">
            <div className="pl-5 pt-7">
        <h1 className="logtitle">LOGIN</h1>
        <input
                  className="loginput"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
                <input
                  className="loginput"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
        <button className="loginbtn" name="login">Login</button>
        </div>
        </div>
        </div>
    </div> 
    </>
  )
}

export default Loginpage