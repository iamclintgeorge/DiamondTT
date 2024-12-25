import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.includes("uid=");
    console.log("privateRoute:", token);
    if (!token) {
      navigate("/login");
    } else {
      setIsLoading(false); // Set loading to false after auth check
    }
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator or nothing
  }

  return <Component />;
};

export default PrivateRoute;
