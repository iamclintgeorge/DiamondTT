// Frontend (React)
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/api";
// import axios from "axios";

const Loginpage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("http://localhost:6363/login", {
      //   userName: username,
      //   password: password,
      // });

      const response = await login(username, password);

      console.log("Login Response:", response.data);
      
      // Store the JWT token in localStorage
      // localStorage.setItem("token", response.data.token);

      // // Store the JWT token in Cookie
      // const token = response.data.token;
      // res.cookie("uid", token, {
      //   httpOnly: true,
      //   })

      navigate("/"); // Redirect to the homepage or dashboard
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen bg-green-950">
        <div className="bg-white h-96 w-72">
          <div className="flex flex-1 flex-col">
            <div className="pl-5 pt-7">
              <h1 className="text-2xl font-semibold text-center mr-4 mb-7">LOGIN</h1>
              <form onSubmit={handleSubmit}>
                <input
                  className="bg-gray-200 pl-3 py-2 mb-3"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="bg-gray-200 pl-3 py-2 mb-5"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="bg-green-950 text-white px-14 py-2 rounded-sm ml-12 mt-3"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <div className="text-sm text-gray-700 text-center mr-4 mt-5">
                <Link to="/signup">
                  Don't have an account? <span className="text-green-950 font-medium">Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
