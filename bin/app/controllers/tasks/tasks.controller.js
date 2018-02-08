"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const request_object_decorator_1 = require("../../decorators/request-object.decorator");
const task_dto_1 = require("../../dto/task.dto");
const project_entity_1 = require("../../entity/project.entity");
const task_entity_1 = require("../../entity/task.entity");
const validator_pipe_1 = require("../../pipes/validator/validator.pipe");
const tasks_service_1 = require("../../services/tasks/tasks.service");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    post(project, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataToCreate = Object.assign({}, data, { project });
            const task = class_transformer_1.plainToClass(task_entity_1.Task, dataToCreate);
            return yield this.tasksService.save(task);
        });
    }
    patch(task, taskData) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskToUpdate = Object.assign(task, taskData);
            return yield this.tasksService.save(taskToUpdate);
        });
    }
    delete(task) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tasksService.delete(task);
            return;
        });
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(201),
    __param(0, request_object_decorator_1.RequestObjectDecorator('project')), __param(1, common_1.Body(new validator_pipe_1.ValidatorPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_entity_1.Project, task_dto_1.TaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "post", null);
__decorate([
    common_1.Patch(':task'),
    __param(0, request_object_decorator_1.RequestObjectDecorator('task')), __param(1, common_1.Body(new validator_pipe_1.ValidatorPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_entity_1.Task, task_dto_1.TaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "patch", null);
__decorate([
    common_1.Delete(':task'),
    __param(0, request_object_decorator_1.RequestObjectDecorator('task')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_entity_1.Task]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "delete", null);
TasksController = __decorate([
    common_1.Controller('projects/:project/tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map