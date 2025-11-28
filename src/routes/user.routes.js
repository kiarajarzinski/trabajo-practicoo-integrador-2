import Router from "express";
import {
  getAllUsersWithArticles,
  getUserWithArticlesAndComments,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/users", getAllUsersWithArticles);
userRoutes.get("/users/:id", getUserWithArticlesAndComments);
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);

export default userRoutes;