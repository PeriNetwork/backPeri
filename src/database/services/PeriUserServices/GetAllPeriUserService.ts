import {PeriUser} from "../../../Entities/PeriUser";
import { appDataSource } from "../..";

export class getAllPeriUserService {
    async execute() {
        const periUserRepository = appDataSource.getRepository(PeriUser);
        const periUsers = await periUserRepository.find();
        return periUsers;
    }
}