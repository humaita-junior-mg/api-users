import { getRepository, Repository } from "typeorm"
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { User } from "../entities/User"
import { IUsersRepository } from "./implementatios/IUsersRepository"


export class UsersRepository implements IUsersRepository{

    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        
        const user = this.repository.create({
            name,
            email,
            password
        })

        await this.repository.save(user)

    }   

    async findByEmail(email: string): Promise<User> {
        
        const user = await this.repository.findOne({email})

        return user

    }

    async deleteUser(user: User): Promise<void> {
        
        await this.repository.delete(user.id)

    }

    async list(): Promise<User[]> {
        
        return await this.repository.find()

    }

    async turnAdmin(user: User): Promise<User>{

       await this.repository.update({id: user.id}, {isAdmin: true})

       const id = user.id

       return this.repository.findOne({id})
    }

    async editUserPassword(user: User, password: string): Promise<User> {
        
        const id = user.id

        await this.repository.update({id: user.id}, {password: password})

        return await this.repository.findOne({id})

    }

}