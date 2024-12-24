// controllers/userController.js
import bcrypt from "bcrypt"; // Import bcrypt
import { signupUser, loginUser } from "../models/userModels.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

// Signup Controller
export const signupController = async (req, res) => {
  try {
    const { emailId, userName, password } = req.body;

    // Check for missing fields
    if (!emailId || !userName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Save user to the database with the hashed password
    const user = await signupUser(emailId, userName, hashedPassword);

    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });

    res.cookie("uid", token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript on the client-side (for security)
      secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      sameSite: "Strict", // Strict CSRF protection
    });

    res.status(201).json({ message: "User created successfully", user, token });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

// Login Controller
export const loginController = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user in the database
    const user = await loginUser(userName, password);

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare provided password with the stored hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate JWT token after successful login
    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });

    res.cookie("uid", token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript on the client-side (for security)
      secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      sameSite: "Strict", // Strict CSRF protection
    });

    res
      .status(200)
      .json({ message: "User successfully logged in", user, token });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
