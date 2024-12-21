import axios from "axios";

const API_URL = "http://localhost:6363";

export const signup = async (email, username, password) => {
  return await axios.post(`${API_URL}/signup`, {
    emailId: email,
    userName: username,
    password: password,
  });
};

export const login = async (username, password) => {
  return await axios.post(`${API_URL}/login`, {
    userName: username,
    password: password,
  });
};
