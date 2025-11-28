import { Router } from "express";
import userRoutes from "./auth.routes.js";

const routes = Router();

routes.use(userRoutes);

export default routes;