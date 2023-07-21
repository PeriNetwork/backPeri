import { Router } from "express";

import { GetAllPeriUserController } from "../../controllers/PeriUserControllers/GetAllPeriUserController";
import { CreatePeriUserController } from "../../controllers/PeriUserControllers/CreatePeriUserController";
import { GetOnePeriUserController } from "../../controllers/PeriUserControllers/GetOnePeriUserController";
import { DeleteOnePeriUserController } from "../../controllers/PeriUserControllers/DeleteOnePeriUserController";
import { GetPeriUserEmailPasswordController } from "../../controllers/PeriUserControllers/GetPeriUserEmailPasswordController";

const routes = Router();

// PeriUser routes

// get all periusers and create periuser
routes.route("/api/periusers")
    .get(new GetAllPeriUserController().handle)
    .post(new CreatePeriUserController().handle);

// get one periuser and delete one periuser
routes.route("/api/periusers/:id")
    .get(new GetOnePeriUserController().handle)
    .put(new DeleteOnePeriUserController().handle);

// log in periuser using email and password

routes.route("/api/periusers/login/:email/:password")
    .get(new GetPeriUserEmailPasswordController().handle);


export { routes };
