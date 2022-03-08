import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/UsersRepository";

interface IPayLoad{
    sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authHeader = request.headers.authorization

    

    if(!authHeader){
        throw new Error("Token Missing")
    }

    const [, token] = authHeader.split(" ")
    
    try {
        
        const { sub: user_id } = verify(token, "3fa1504ee18dcac2200f90af8cead338") as IPayLoad;

        const usersRepository = new UsersRepository()

        const user = await usersRepository.findById(user_id)

        if(!user){
            throw new Error("User does not exists!")
        }

        request.user = {
            id: user.id,
            isAdmin: user.isAdmin
        }

        /* request.userAdmin = user.isAdmin
        request.userId = user.id */

        next()

    } catch (error) {
        
        throw new Error("Invalid Token!")

    }

}