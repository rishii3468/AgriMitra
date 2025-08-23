import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  logoutUser,
} from "../controllers/usersController.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);


router.get("/", getUsers);

export default router;
