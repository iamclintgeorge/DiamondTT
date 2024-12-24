import express from "express";
import {
  signupController,
  loginController,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/hello", authMiddleware, (req, res) => {
  console.log("Hello route triggered!");
  res.send("Welcome to the protected Hello page!"); // or send any protected content
});

export default router;
