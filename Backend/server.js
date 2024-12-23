// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"; // Import routes

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies to be sent with the request
  })
);
app.use(express.json());

// Use routes
app.use("/", userRoutes); // Prefix routes with /api

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import bcrypt from "bcrypt"; // Add bcrypt for password hashing
// // import db from "./config/db.js";
// import jwt from "jsonwebtoken"; // JWT for token generation
// dotenv.config();

// const app = express();
// const port = process.env.SERVER_PORT;
// const jwtSecret = process.env.JWT_SECRET;

// // Middleware
// app.use(
//   cors({
//     origin: "http://localhost:5173", // React dev server URL
//     methods: ["GET", "POST"],
//     credentials: true, // Ensure credentials are sent with requests
//   })
// );
// app.use(express.json()); // Parse JSON bodies

// // Signup Endpoint
// app.post("/signup", async (req, res) => {
//   try {
//     const { emailId, userName, password } = req.body;

//     // Check for missing fields
//     if (!emailId || !userName || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Hash the password before saving it to the database
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert user into the database
//     const query =
//       "INSERT INTO users (emailId, userName, password) VALUES ($1, $2, $3) RETURNING *";
//     const values = [emailId, userName, hashedPassword];
//     const { rows } = await db.query(query, values);

//     res
//       .status(201)
//       .json({ message: "User created successfully", user: rows[0] });
//   } catch (err) {
//     console.error(err);
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: err.message });
//   }
// });

// // Login Endpoint
// app.post("/login", async (req, res) => {
//   try {
//     const { userName, password } = req.body;

//     // Check for missing fields
//     if (!userName || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Get the user from the database
//     const query = "SELECT * FROM users WHERE userName = $1";
//     const values = [userName];
//     const { rows } = await db.query(query, values);

//     if (rows.length === 0) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     // Compare the password with the hashed password in the database
//     const match = await bcrypt.compare(password, rows[0].password);
//     if (!match) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { id: rows[0].id, userName: rows[0].userName },
//       jwtSecret,
//       {
//         expiresIn: "1h", // Set token expiry time
//       }
//     );

//     // Send the token in the response
//     res.status(200).json({
//       message: "User successfully logged in",
//       user: rows[0],
//       token: token, // Send the token to the frontend
//     });
//   } catch (err) {
//     console.error(err);
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: err.message });
//   }
// });

// // Protected Route Example (only accessible with JWT)
// app.get("/protected", authenticateJWT, (req, res) => {
//   res
//     .status(200)
//     .json({ message: "This is a protected route", user: req.user });
// });

// // Middleware to authenticate JWT
// function authenticateJWT(req, res, next) {
//   const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from 'Authorization' header

//   if (!token) {
//     return res.status(401).json({ message: "Access denied, token missing" });
//   }

//   jwt.verify(token, jwtSecret, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: "Token is invalid or expired" });
//     }

//     req.user = user; // Attach user info to request object
//     next(); // Proceed to the next middleware or route handler
//   });
// }

// // Start the server
// app.listen(port, () => {
//   console.log(`Server started at port ${port}`);
// });
