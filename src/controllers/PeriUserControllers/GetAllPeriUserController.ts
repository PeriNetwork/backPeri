import { Request, Response } from "express";
import { getAllPeriUserService } from "../../database/services/PeriUserServices/GetAllPeriUserService";

export class GetAllPeriUserController {
    async handle(request: Request, response: Response) {
        const service = new getAllPeriUserService();

        const periUsers = await service.execute();

        return response.json(periUsers);
    }
}