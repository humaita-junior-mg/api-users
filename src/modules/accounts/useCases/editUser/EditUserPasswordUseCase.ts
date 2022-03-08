import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/implementatios/IUsersRepository";
import { hash } from "bcryptjs"




@injectable()
export class EditUserPasswordUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute(user_id: string, password: string): Promise<User>{

        const search = await this.usersRepository.findById(user_id)

        if(!search){
            throw new Error("User do not exists!")
        }

        const passwordHash = await hash(password, 10)

        const user = await this.usersRepository.editUserPassword(search,passwordHash)

        return user

    }

}