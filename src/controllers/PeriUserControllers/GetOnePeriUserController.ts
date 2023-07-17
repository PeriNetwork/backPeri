import { Request, Response } from "express";
import { getOnePeriUserService } from "../../database/services/PeriUserServices/GetOnePeriUserService";

export class GetOnePeriUserController {
    async handle(request: Request, response: Response) {

        const service = new getOnePeriUserService();

        const periUser = await service.execute(Number(request.params.id));

        return response.json(periUser);
    }
}