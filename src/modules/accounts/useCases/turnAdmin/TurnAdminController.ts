import { Request, Response } from "express"
import { container } from "tsyringe"
import { TurnAdminUseCase } from "./TurnAdminUseCase"



export class TurnAdminController{

    async handle(request: Request, response: Response): Promise<Response>{

        const { email } = request.body;

        const turnAdminUseCase = container.resolve(TurnAdminUseCase)

        try {
            
            const turnAdmin = await turnAdminUseCase.execute(email)

            return response.status(200).json({user: turnAdmin})

        } catch (error) {
            
            return response.status(200).json({error: error.message})

        }
    }

}