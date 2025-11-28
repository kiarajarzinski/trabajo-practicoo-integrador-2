import { Router } from "express";

import {
  addTagToArticle,
  removeTagFromArticle,
} from "../controllers/article_tag.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const articleTagRoutes = Router();

articleTagRoutes.post(
  "/articles/:articleId/tags/:tagId",
  authMiddleware,
  addTagToArticle
);

articleTagRoutes.delete(
  "/articles/:articleId/tags/:tagId",
  authMiddleware,
  removeTagFromArticle
);

export default articleTagRoutes;