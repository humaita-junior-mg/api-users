import { inject, injectable } from "tsyringe";
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
            throw new Error("User do not exists!")
        }

        const user = await this.usersRepository.turnAdmin(search)

        return user

    }

}