import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";

const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);

export default routes;