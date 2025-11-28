import Router from "express";
import {
  createComment,
  deleteComment,
  getArticleComments,
  getUserLoggedComments,
  updateComment,
} from "../controllers/comment.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const commentRoutes = Router();

commentRoutes.post("/comments", authMiddleware, createComment);

commentRoutes.get("/comments/article/:articleId", getArticleComments);

commentRoutes.get("/comments/my", authMiddleware, getUserLoggedComments);

commentRoutes.put("/comments/:id", updateComment);

commentRoutes.delete("/comments/:id", deleteComment);

export default commentRoutes;