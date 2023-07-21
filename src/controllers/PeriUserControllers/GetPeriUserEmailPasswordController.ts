import { Request, Response } from "express";
import { getPeriUserEmailPasswordService } from "../../database/services/PeriUserServices/GetPeriUserEmailPasswordService";

export class GetPeriUserEmailPasswordController {
    async handle(request: Request, response: Response) {

        const service = new getPeriUserEmailPasswordService();

        const periUser = await service.execute(String(request.params.email), String(request.params.password));
        if (periUser instanceof Error || periUser == null) return response.status(400).json({ error: "\nIsn't possible to get Peri User "});

        return response.status(200).json(periUser);
    }
}