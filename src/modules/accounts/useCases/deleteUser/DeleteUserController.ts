import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { Request, Response } from "express"



export class DeleteUserController{

    async handle(request: Request, response: Response): Promise<Response>{

        const { email } = request.body;

        const deleteUserUseCase = container.resolve(DeleteUserUseCase)

        try {
            
            await deleteUserUseCase.execute(email)

            return response.status(200).send()

        } catch (error) {
            
            return response.status(400).json({error: error.message})
            
        }

    }

}