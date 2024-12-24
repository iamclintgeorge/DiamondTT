import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Hello = () => {
  const [message, setMessage] = useState("Loading...");  // Default message during loading
  const [loading, setLoading] = useState(true);  // Track the loading state
  const [error, setError] = useState(false);  // Track if an error occurred
  const navigate = useNavigate();  // Updated hook for navigation

  useEffect(() => {
    axios
      .get("http://localhost:6363/hello", {
        withCredentials: true,  // Make sure cookies are included with the request
      })
      .then((response) => {
        // On success, set the message and stop loading
        setMessage(response.data);  // Use the message returned from the backend
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        // On error, log the error and update message
        console.error("Error fetching data:", error);

        if (error.response) {
          // If the error response has a message, use it (for Unauthorized, etc.)
          setMessage(error.response.data.message || "You are not authenticated.");
        } else {
          // If there's a network issue or other error, show a network issue message
          setMessage("Failed to load message due to network issue.");
        }

        setError(true);  // Mark that there was an error
        setLoading(false);  // Stop loading

        // Optional: Redirect to login page if the user is not authenticated
        if (error.response && error.response.status === 401) {
          navigate("/login");  // Redirect to login if unauthorized
        }
      });
  }, [navigate]);

  if (loading) {
    return <h1>{message}</h1>;  // Show loading message until request completes
  }

  // If error occurred, show the error message (like "You are not authenticated")
  if (error) {
    return <h1>{message}</h1>;
  }

  // Otherwise, show the success message (the protected content)
  return <h1>{message}</h1>;
};

export default Hello;
