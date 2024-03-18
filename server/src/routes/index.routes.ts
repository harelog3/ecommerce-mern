// main router handler
import { Router } from "express";
import userRoutes from "./user.routes";
import loginRoutes from "./login.routes";
import registerRoutes from "./register.routes";

const indexRoutes = Router();

// '/api/users'
indexRoutes.use("/users", userRoutes);

// '/api/login'
indexRoutes.use("/login", loginRoutes);

// 'api/register'
indexRoutes.use("/register", registerRoutes);

export default indexRoutes;
