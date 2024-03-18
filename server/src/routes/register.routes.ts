import { Router } from "express";
import registerController from "../controllers/register.controller";

const registerRoutes = Router();

// 'POST /api/register/user'
registerRoutes.post("/user", registerController.registerUser);

export default registerRoutes;
