import { Router } from "express";

import { GetAllPeriUserController } from "../../controllers/PeriUserControllers/GetAllPeriUserController";
import { CreatePeriUserController } from "../../controllers/PeriUserControllers/CreatePeriUserController";
import { GetOnePeriUserController } from "../../controllers/PeriUserControllers/GetOnePeriUserController";
import { DeleteOnePeriUserController } from "../../controllers/PeriUserControllers/DeleteOnePeriUserController";

const routes = Router();

routes.route("/api/periusers")
    .get(new GetAllPeriUserController().handle)
    .post(new CreatePeriUserController().handle);

routes.route("/api/periusers/:id")
    .get(new GetOnePeriUserController().handle)
    .put(new DeleteOnePeriUserController().handle);


export { routes };
