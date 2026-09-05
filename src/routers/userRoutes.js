import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouters = Router();

userRouters.get("/", userController.Selection);
userRouters.post("/", userController.create);
userRouters.delete("/:id", userController.delete);

export default userRouters;