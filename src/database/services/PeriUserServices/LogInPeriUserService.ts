import { PeriUser } from "../../../Entities/PeriUser";
import { appDataSource } from "../..";

export class LogInPeriUserService {
    async execute(email: string, password: string) {
        const periUserRepository = appDataSource.getRepository(PeriUser);
        const periUser = await periUserRepository.findOneBy({ email, password});
        
        if (!periUser) return new Error("PeriUser not found ! cannot log in");
        else {
            return periUser;
        }
    }
}