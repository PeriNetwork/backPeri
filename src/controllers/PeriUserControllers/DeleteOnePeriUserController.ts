import { Request, Response } from "express";
import { deleteOnePeriUserService } from "../../database/services/PeriUserServices/DeleteOnePeriUserService";

export class DeleteOnePeriUserController {
    async handle(request: Request, response: Response) {

        const service = new deleteOnePeriUserService();

        const periUser = await service.execute(Number(request.params.id));
        if (periUser instanceof Error) return response.status(400).json({ error: periUser.message + "\nIsn't possible to delete Peri User "});

        return response.status(200).json({ message: "\nPeri User of id: " + periUser.id + " deleted successfully" });
    }
}