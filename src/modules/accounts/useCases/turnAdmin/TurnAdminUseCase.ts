import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/implementatios/IUsersRepository";

@injectable()
export class TurnAdminUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute(email: string): Promise<User>{

        const search = await this.usersRepository.findByEmail(email)

        if(!search){
            throw new AppError("User do not exists!", 401)
        }

        const user = await this.usersRepository.turnAdmin(search)

        return user

    }

}