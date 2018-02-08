import {Connection} from 'typeorm';

import {Project} from '../entity/project.entity';
import {Task} from '../entity/task.entity';
import {User} from '../entity/user.entity';

export const repositoryProviders = [
    {
        provide: 'ProjectRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Project),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'TaskRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Task),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'UserRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DbConnectionToken'],
    },
];