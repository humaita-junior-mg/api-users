import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/implementatios/IUsersRepository";
import { User } from "../../entities/User";



@injectable()
export class ListUsersUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute(): Promise<User[]>{

        return await this.usersRepository.list()

    }

}