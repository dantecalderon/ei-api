"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_entity_1 = require("../entity/project.entity");
const task_entity_1 = require("../entity/task.entity");
const user_entity_1 = require("../entity/user.entity");
exports.repositoryProviders = [
    {
        provide: 'ProjectRepositoryToken',
        useFactory: (connection) => connection.getRepository(project_entity_1.Project),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'TaskRepositoryToken',
        useFactory: (connection) => connection.getRepository(task_entity_1.Task),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'UserRepositoryToken',
        useFactory: (connection) => connection.getRepository(user_entity_1.User),
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=repository.providers.js.map