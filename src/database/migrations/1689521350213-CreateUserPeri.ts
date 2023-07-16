import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserPeri1689521350213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "userperi",
                columns: [
                    { name: "id", type: "varchar", length: "255", isPrimary: true, isGenerated: true, generationStrategy: "increment", isUnique: true },
                    { name: "name", type: "varchar", length: "255", isNullable: false },
                    { name: "email", type: "varchar", length: "255", isNullable: false, isUnique: true },
                    { name: "password", type: "varchar", length: "255", isNullable: false, isUnique: true },
                    { name: "birth_date", type: "date" },
                    { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    { name: "nFollowers", type: "int", default: 0 },
                ],
            })
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("userperi");
    }

}
