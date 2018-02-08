import {BeforeInsert, Column, PrimaryGeneratedColumn} from 'typeorm';
import {Entity} from 'typeorm/decorator/entity/Entity';
import * as sha1 from 'sha1';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 50,
        unique: true,
    })
    username: string;

    @Column({length: 40})
    password: string;

    @BeforeInsert()
    async beforeInsert() {
        this.password = sha1(this.password);
    }
}