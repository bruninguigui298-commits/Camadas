import { Router } from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddlewares.js";

const userRouters = Router();

userRouters.get("/", userController.Selection);
userRouters.post("/", userController.create);
userRouters.delete("/:id", authMiddleware, userController.delete);
userRouters.patch("/:id", userController.update );

export default userRouters;