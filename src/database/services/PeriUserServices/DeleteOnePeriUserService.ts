import { appDataSource } from "../..";
import { PeriUser } from "../../../Entities/PeriUser";

export class deleteOnePeriUserService {
    // put column active to false
    async execute(id: number) {
        const periUserRepository = appDataSource.getRepository(PeriUser);
        const periUser = await periUserRepository.findOneBy({ id });
        
        if (!periUser) return new Error("PeriUser not found!");
        else {
            periUser.active = false;
            await periUserRepository.save(periUser);
            return periUser;
        }
    }
}