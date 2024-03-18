// actions for '/api/login'

import { Request, Response } from "express";
import { StatusCodes } from "../utils/status-codes";
import userModel from "../models/user.model";
import { comparePasswords } from "../utils/crypt";
import { generateToken } from "../utils/token";

class LoginController {
    public async loginUser(req: Request, res: Response) {
        const { email, password } = req.body["user"];
        if (!email || !password)
            return res
                .status(StatusCodes.BAD_REQUEST)
                .send("Missing data on login body");
        const user = await userModel.findFirst({ where: { email } });
        if (!user || !comparePasswords(password, user.password))
            return res
                .status(StatusCodes.NOT_FOUND)
                .send("Could not find user");
        const token = generateToken(user);
        return res
            .status(StatusCodes.CREATED)
            .cookie("authorization", token, { httpOnly: true })
            .send("logged");
    }
}

export default new LoginController();
