import { User } from "@prisma/client";

// add 'user' to request which holds user values
declare global {
    namespace Express {
        export interface Request {
            user?: User;
        }
    }
}
