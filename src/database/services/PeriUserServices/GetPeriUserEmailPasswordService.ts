import { appDataSource } from "../..";
import { PeriUser } from "../../../Entities/PeriUser";

export class getPeriUserEmailPasswordService {
    async execute(email: string, password: string) {
        //const periUserRepository = appDataSource.getRepository(PeriUser);
        //const periUser = await periUserRepository.findOneBy(email, password);

        const periUser = await appDataSource
            .getRepository(PeriUser)
            .createQueryBuilder("peri_user")
            .where("peri_user.email = :email", { email })
            .andWhere("peri_user.password = :password", { password })
            .getOne();

        return periUser;
    }
}