import { Router } from "express";
import { articleOwnerAdminMiddleware } from "../middlewares/articleOwnerOrAdmin.js";

import {
  addTagToArticle,
  removeTagFromArticle,
} from "../controllers/article_tag.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const articleTagRoutes = Router();

articleTagRoutes.post(
  "/articles/:articleId/tags/:tagId",
  authMiddleware,
  addTagToArticle,
  articleOwnerAdminMiddleware
);

articleTagRoutes.delete(
  "/articles/:articleId/tags/:tagId",
  authMiddleware,
  articleOwnerAdminMiddleware,
  removeTagFromArticle
);

export default articleTagRoutes;