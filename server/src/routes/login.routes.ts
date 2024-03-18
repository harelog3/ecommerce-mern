// '/api/login'

import { Router } from "express";
import loginController from "../controllers/login.controller";

const loginRoutes = Router();

// '/POST /api/login/user'
loginRoutes.post("/user", loginController.loginUser);

export default loginRoutes;
