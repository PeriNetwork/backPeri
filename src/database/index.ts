import { DataSource } from "typeorm";
import dotenv from "dotenv";
// import { PeriUser } from "../Entities/PeriUser";

dotenv.config();

export const appDataSource  = new DataSource({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    logging: true,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: Number(process.env.TYPEORM_PORT),
    synchronize: true,
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/Entities/PeriUser.ts'],
});
