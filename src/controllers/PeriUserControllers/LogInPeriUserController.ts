import { Request, Response } from "express";
import { LogInPeriUserService } from "../../database/services/PeriUserServices/LogInPeriUserService";

export class LogInPeriUserController {
    async handle(request: Request, response: Response) {

        const service = new LogInPeriUserService();

        const periUser = await service.execute(request.body.email, request.body.password);
        if (periUser instanceof Error) return response.status(400).json({ error: periUser.message + "\nIsn't possible to log in Peri User "});
        else if  (periUser.active == false) return response.status(400).json({ error: "Peri User is not active" });
        else return response.status(200).json({"message": "Peri User logged in successfully"});
    }
}