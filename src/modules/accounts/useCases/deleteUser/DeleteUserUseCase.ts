import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/implementatios/IUsersRepository";



@injectable()
export class DeleteUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    
    async execute(email: string): Promise<void>{


        const search = await this.usersRepository.findByEmail(email)

        if(!search){
            throw new Error("User do not exists")
        }

        await this.usersRepository.deleteUser(search)


    }


}