import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/implementatios/IUsersRepository";
import { hash } from "bcryptjs"

@injectable()
export class CreateUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
        ){}

    async execute({name, email, password}: ICreateUserDTO): Promise<void>{

        const verifyUser = await this.usersRepository.findByEmail(email)

        if(verifyUser){
            throw new Error("User Already Exists!")
        }

        const passwordHash = await hash(password, 10)

        await this.usersRepository.create({name, email, password: passwordHash})

    }

}