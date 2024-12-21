import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import navigate
import {signup} from "../services/api.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(email, username, password)
      console.log("Signup Response:", response.data);
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen bg-green-950">
      <div className="bg-white h-96 w-72">
        <div className="flex flex-1 flex-col">
          <div className="pl-5 pt-7">
            <h1 className="text-2xl font-semibold text-center mr-4 mb-7">SIGN UP</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="bg-gray-200 pl-3 py-2 mb-3"
                type="text"
                name="emailId"
                placeholder="Email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
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
                className="bg-green-950 text-white px-14 py-2 rounded-sm ml-10 mt-3"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div className="text-sm text-gray-700 text-center mr-4 mt-5">
              <Link to="/login">
                Already have an account? <span className="text-green-950 font-medium">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
