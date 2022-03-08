import { Request, Response, NextFunction } from "express";

export function ensureAdminAuthenticated(request: Request, response: Response, next: NextFunction){

    const { isAdmin } = request.user

    if(isAdmin === false){
        throw new Error("User is not admin")
    }

    next()

}