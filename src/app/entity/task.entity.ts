import {BeforeInsert, BeforeUpdate, Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Entity} from 'typeorm/decorator/entity/Entity';

import {Project} from './project.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 100})
    description: string;

    @CreateDateColumn()
    creationDate: Date;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    finishDate: Date;

    @Column({
        type: 'enum',
        enum: ['done', 'open'],
        default: 'open',
    })
    status: string;

    @ManyToOne(type => Project)
    project: Project;

    @BeforeInsert()
    async beforeInsert() {
        this.creationDate = new Date();
    }

    @BeforeUpdate()
    async beforeUpdate() {
        this.finishDate = this.status === 'done' ? new Date() : null;
    }
}