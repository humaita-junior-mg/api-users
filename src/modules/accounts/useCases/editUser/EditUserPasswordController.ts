import { Request, Response } from "express"
import { container } from "tsyringe";
import { EditUserPasswordUseCase } from "./EditUserPasswordUseCase";


export class EditUserPasswordController{

    async handle(request: Request, response: Response): Promise<Response>{

        const { newPassword } = request.body;
        const { id } = request.user;

        const editUserPasswordUseCase = container.resolve(EditUserPasswordUseCase)
           
        const user = await editUserPasswordUseCase.execute(id, newPassword)

        return response.status(200).json(user)
        
    }    

}