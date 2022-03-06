import { Request, Response } from "express"
import { container } from "tsyringe";
import { EditUserPasswordUseCase } from "./EditUserPasswordUseCase";


export class EditUserPasswordController{

    async handle(request: Request, response: Response): Promise<Response>{

        const { email, newPassword } = request.body;

        const editUserPasswordUseCase = container.resolve(EditUserPasswordUseCase)

        try {
            
            const user = await editUserPasswordUseCase.execute(email, newPassword)

            return response.status(200).json(user)

        } catch (error) {
            
            return response.status(400).json({error: error.message})

        }

    }    

}