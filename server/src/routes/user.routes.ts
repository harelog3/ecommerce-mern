// '/users'
// TODO: Since this routes require previous auth, they can be done after

import { Router } from "express";

const userRoutes = Router();

// 'GET /users'
userRoutes.get("/");

export default userRoutes;
