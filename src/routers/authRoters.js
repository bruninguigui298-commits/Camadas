import { Router } from "express";
import authController from "../controllers/authController.js";

const authRouters =  Router();

authRouters.post("/login", authController.login);

export default authRouters;