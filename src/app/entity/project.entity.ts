import {Column, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Entity} from 'typeorm/decorator/entity/Entity';

import {Task} from './task.entity';
import {User} from './user.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 100})
    name: string;

    @ManyToOne(type => User)
    user: User;

    @OneToMany(type => Task, task => task.project)
    tasks: Task[];
}