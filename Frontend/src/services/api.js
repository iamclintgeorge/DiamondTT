import axios from "axios";

const API_URL = "http://localhost:6363";

export const signup = async (email, username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/signup`,
      {
        emailId: email,
        userName: username,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("SignUp error:", error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      {
        userName: username,
        password: password,
      },
      {
        withCredentials: true, // This allows cookies to be sent/received with cross-origin requests
      }
    );

    return response; // Or handle response as needed
  } catch (error) {
    console.error("Login error:", error);
  }
};
