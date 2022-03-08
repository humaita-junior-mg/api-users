import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/implementatios/IUsersRepository";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IRequest{
    email: string;
    password: string;
}

interface IResponse{

    user:{
        name: string;
        email: string;
    },
    token: string

}

@injectable()
export class AuthenticateUserUseCase{

    constructor(@inject("UsersRepository")
    private usersRepository: IUsersRepository
    ){}

    async execute({email, password}: IRequest): Promise<IResponse>{

        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new Error("Email or password incorrect!")
        }

        const passwordMatch = await compare(password, user.password)

        if(passwordMatch === false){
            throw new Error("Email or password incorrect!")
        }

        const token = sign({}, "3fa1504ee18dcac2200f90af8cead338", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }

        return tokenReturn

    }

}