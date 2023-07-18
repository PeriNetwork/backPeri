import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class PeriUser1689542093582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "periUser",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment", isUnique: true },
                    { name: "name", type: "varchar", length: "255", isNullable: false, isUnique: true },
                    { name: "email", type: "varchar", length: "255", isNullable: false, isUnique: true },
                    { name: "password", type: "varchar", length: "255", isNullable: false, isUnique: true },
                    { name: "birth_date", type: "date" },
                    { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    { name: "nFollowers", type: "int", default: 0},
                    { name: "active", type: "boolean", default: true},
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("periUser");
    }

}
