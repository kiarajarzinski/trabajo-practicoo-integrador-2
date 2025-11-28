import Router from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import {
  getAllUsersWithArticles,
  getUserWithArticlesAndComments,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";


const userRoutes = Router();

userRoutes.get("/users", adminMiddleware, getAllUsersWithArticles);
userRoutes.get("/users/:id", adminMiddleware, getUserWithArticlesAndComments);
userRoutes.put("/users/:id", adminMiddleware, updateUser);
userRoutes.delete("/users/:id", adminMiddleware, deleteUser);

export default userRoutes;