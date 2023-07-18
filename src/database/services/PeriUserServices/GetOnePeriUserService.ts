import { appDataSource } from "../..";
import { PeriUser } from "../../../Entities/PeriUser";

export class getOnePeriUserService {
    async execute(id: number) {
        const periUserRepository = appDataSource.getRepository(PeriUser);
        const periUser = await periUserRepository.findOneBy({id});
        return periUser;
    }
}

