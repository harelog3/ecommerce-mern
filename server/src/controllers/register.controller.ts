import { Request, Response } from "express";
import { StatusCodes } from "../utils/status-codes";
import userModel from "../models/user.model";
import { hashPassword } from "../utils/crypt";

class RegisterController {
    public async registerUser(req: Request, res: Response) {
        const {
            username,
            email,
            password,
        }: { username: string; email: string; password: string } =
            req.body["user"];
        if (!username || !email || !password)
            return res
                .status(StatusCodes.BAD_REQUEST)
                .send("Missing fields on body");
        try {
            const user = await userModel.create({
                data: { username, email, password: hashPassword(password) },
            });
            return res
                .status(StatusCodes.CREATED)
                .send("User created with ID: " + user.userId);
        } catch (e: any) {
            return res.status(StatusCodes.CONFLICT).send("User already exists");
        }
    }
}

export default new RegisterController();
