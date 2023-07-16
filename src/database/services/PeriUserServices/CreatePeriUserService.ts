import { PeriUser } from "../../../Entities/PeriUser";
import { appDataSource } from "../..";

export class createPeriUserService {
    async execute(name: string, email: string, password: string, birth_date: Date) {
        const periUserRepository = appDataSource.getRepository(PeriUser);

        const periUserAlreadyExists = await periUserRepository.findOneBy({name});

        if(periUserAlreadyExists) {
            throw new Error("PeriUser already exists!");
        }

        const periUser = periUserRepository.create({
            name,
            email,
            password,
            birth_date
        });

        await periUserRepository.save(periUser);

        return periUser;
    }
}