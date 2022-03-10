import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export function ensureAdminAuthenticated(request: Request, response: Response, next: NextFunction){

    const { isAdmin } = request.user

    if(isAdmin === false){
        throw new AppError("User is not admin", 401)
    }

    next()

}