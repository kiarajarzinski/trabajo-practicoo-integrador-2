import Router from "express";
import {
  createComment,
  deleteComment,
  getArticleComments,
  getUserLoggedComments,
  updateComment,
} from "../controllers/comment.controller.js";
import { commentOwnerAdminMiddleware } from "../middlewares/commentOwnerOrAdmin.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const commentRoutes = Router();

commentRoutes.post("/comments", authMiddleware, createComment);

commentRoutes.get("/comments/article/:articleId", getArticleComments);

commentRoutes.get(
  "/comments/article/:articleId",
  authMiddleware,
  getArticleComments
);

commentRoutes.put(
  "/comments/:id",
  authMiddleware,
  commentOwnerAdminMiddleware,
  updateComment
);

commentRoutes.delete(
  "/comments/:id",
  authMiddleware,
  commentOwnerAdminMiddleware,
  deleteComment
);

export default commentRoutes;