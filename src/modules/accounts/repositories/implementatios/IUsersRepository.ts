import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { User } from "../../entities/User"


export interface IUsersRepository{

    create({name, email, password}:ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    deleteUser(user: User): Promise<void>
    list(): Promise<User[]>
    turnAdmin(user: User): Promise<User>
    editUserPassword(user: User, password: string): Promise<User>
}