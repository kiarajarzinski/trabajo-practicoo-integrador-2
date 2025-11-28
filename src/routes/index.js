import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import tagRoutes from "./tag.routes.js";
import articleRoutes from "./article.routes.js";
import commentRoutes from "./comment.routes.js";
import articleTagRoutes from "./article_tag.routes.js";

const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(tagRoutes);
routes.use(articleRoutes);
routes.use(commentRoutes);
routes.use(articleTagRoutes);


export default routes;