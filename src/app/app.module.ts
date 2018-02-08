import {MiddlewaresConsumer, Module, RequestMethod} from '@nestjs/common';

import {AuthController} from './controllers/auth/auth.controller';
import {ProjectsController} from './controllers/projects/projects.controller';
import {TasksController} from './controllers/tasks/tasks.controller';
import {UsersController} from './controllers/users/users.controller';
import {JwtMiddleware} from './middlewares/jwt.middleware';
import {ProjectTaskFindMiddleware} from './middlewares/project-task-find.middleware';
import {UserProjectFindMiddleware} from './middlewares/user-project-find.middleware';
import {UsernameFindMiddleware} from './middlewares/username-find.middleware';
import {UsernamePasswordFindMiddleware} from './middlewares/username-password-find.middleware';
import {databaseProviders} from './providers/database.provider';
import {repositoryProviders} from './providers/repository.providers';
import {AuthService} from './services/auth/auth.service';
import {ProjectsService} from './services/projects/projects.service';
import {TasksService} from './services/tasks/tasks.service';
import {UsersService} from './services/users/users.service';
import {JwtStrategy} from './strategies/jwt.strategy';

@Module({
    components: [
        ...databaseProviders,
        ...repositoryProviders,
        AuthService,
        JwtStrategy,
        ProjectsService,
        TasksService,
        UsersService,
    ],
    controllers: [
        AuthController,
        ProjectsController,
        TasksController,
        UsersController,
    ],
    exports: [...databaseProviders],
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(JwtMiddleware)
            .forRoutes(
                {path: 'projects', method: RequestMethod.ALL},
                {path: 'projects/*', method: RequestMethod.ALL});
        consumer.apply(UserProjectFindMiddleware)
            .forRoutes(
                {path: 'projects/:project', method: RequestMethod.ALL},
                {path: 'projects/:project/*', method: RequestMethod.ALL});
        consumer.apply(ProjectTaskFindMiddleware)
            .forRoutes({path: 'projects/:project/tasks/:task', method: RequestMethod.ALL});
        consumer.apply(UsernamePasswordFindMiddleware)
            .forRoutes({path: 'auth/token', method: RequestMethod.POST});
        consumer.apply(UsernameFindMiddleware)
            .forRoutes({path: 'users', method: RequestMethod.POST});
    }
}