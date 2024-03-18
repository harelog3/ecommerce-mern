import bcrypt from "bcryptjs";

export function hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}

export function comparePasswords(target: string, hashedpwd: string) {
    return bcrypt.compareSync(target, hashedpwd);
}
