import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

const secret = process.env["SECRET_KEY"] || "";

function validateSecret() {
    return !!secret;
}

export function generateToken(user: User) {
    if (!validateSecret()) return null;
    const { email, userId, role } = user;
    return jwt.sign({ email, userId, role }, secret, { expiresIn: "3m" });
}

export function decodeToken(token: string) {
    if (!secret) return null;
    return jwt.verify(token, secret) as jwt.JwtPayload;
}
