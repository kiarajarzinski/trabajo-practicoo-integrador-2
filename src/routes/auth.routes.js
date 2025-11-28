import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import { login, register } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/register", register);


authRoutes.post("/auth/login", login);

authRoutes.post("/auth/logout", logout);

export default authRoutes;