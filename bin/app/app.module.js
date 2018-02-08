"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const projects_controller_1 = require("./controllers/projects/projects.controller");
const tasks_controller_1 = require("./controllers/tasks/tasks.controller");
const users_controller_1 = require("./controllers/users/users.controller");
const jwt_middleware_1 = require("./middlewares/jwt.middleware");
const project_task_find_middleware_1 = require("./middlewares/project-task-find.middleware");
const user_project_find_middleware_1 = require("./middlewares/user-project-find.middleware");
const username_find_middleware_1 = require("./middlewares/username-find.middleware");
const username_password_find_middleware_1 = require("./middlewares/username-password-find.middleware");
const database_provider_1 = require("./providers/database.provider");
const repository_providers_1 = require("./providers/repository.providers");
const auth_service_1 = require("./services/auth/auth.service");
const projects_service_1 = require("./services/projects/projects.service");
const tasks_service_1 = require("./services/tasks/tasks.service");
const users_service_1 = require("./services/users/users.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
let ApplicationModule = class ApplicationModule {
    configure(consumer) {
        consumer.apply(jwt_middleware_1.JwtMiddleware)
            .forRoutes({ path: 'projects', method: common_1.RequestMethod.ALL }, { path: 'projects/*', method: common_1.RequestMethod.ALL });
        consumer.apply(user_project_find_middleware_1.UserProjectFindMiddleware)
            .forRoutes({ path: 'projects/:project', method: common_1.RequestMethod.ALL }, { path: 'projects/:project/*', method: common_1.RequestMethod.ALL });
        consumer.apply(project_task_find_middleware_1.ProjectTaskFindMiddleware)
            .forRoutes({ path: 'projects/:project/tasks/:task', method: common_1.RequestMethod.ALL });
        consumer.apply(username_password_find_middleware_1.UsernamePasswordFindMiddleware)
            .forRoutes({ path: 'auth/token', method: common_1.RequestMethod.POST });
        consumer.apply(username_find_middleware_1.UsernameFindMiddleware)
            .forRoutes({ path: 'users', method: common_1.RequestMethod.POST });
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        components: [
            ...database_provider_1.databaseProviders,
            ...repository_providers_1.repositoryProviders,
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
            projects_service_1.ProjectsService,
            tasks_service_1.TasksService,
            users_service_1.UsersService,
        ],
        controllers: [
            auth_controller_1.AuthController,
            projects_controller_1.ProjectsController,
            tasks_controller_1.TasksController,
            users_controller_1.UsersController,
        ],
        exports: [...database_provider_1.databaseProviders],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map