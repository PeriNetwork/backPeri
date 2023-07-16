import { Router } from "express";

import { getAllPeriUserService } from "../services/PeriUserServices/GetAllPeriUserService";
import { GetAllPeriUserController } from "../../controllers/PeriUserControllers/GetAllPeriUserController";
import { CreatePeriUserController } from "../../controllers/PeriUserControllers/CreatePeriUserController";

const routes = Router();

routes.route("/periusers").get(new GetAllPeriUserController().handle).post(new CreatePeriUserController().handle);

export { routes };
