import {Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
// import {v4 as uuid} from 'uuid';

@Entity()
export class PeriUser {
    @PrimaryGeneratedColumn("increment")
    readonly id: number;    

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    birth_date: Date;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    nFollowers: number = 0;

    @Column()
    active: boolean = true;
}