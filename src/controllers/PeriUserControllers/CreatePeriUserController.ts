import { Request, Response } from "express";
import { createPeriUserService } from "../../database/services/PeriUserServices/CreatePeriUserService";

export class CreatePeriUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password, birth_date } = request.body;

        const service = new createPeriUserService();

        const periUser = await service.execute(name, email, password, birth_date);

        return response.json(periUser);
    }
}