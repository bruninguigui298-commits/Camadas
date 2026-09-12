import { Router } from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddlewares.js";
import authAdminMiddleware from "../middlewares/authAdiminMiddlewares.js";

const userRouters = Router();

userRouters.get("/", authMiddleware, userController.Selection);
userRouters.post("/", userController.create);
userRouters.delete("/:id", authMiddleware, authAdminMiddleware, userController.delete);
userRouters.patch("/:id", userController.update );

export default userRouters;