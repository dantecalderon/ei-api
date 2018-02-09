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
const authenticated_user_decorator_1 = require("../../decorators/authenticated-user.decorator");
const authenticated_user_id_decorator_1 = require("../../decorators/authenticated-user-id.decorator");
const request_object_decorator_1 = require("../../decorators/request-object.decorator");
const project_dto_1 = require("../../dto/project.dto");
const project_entity_1 = require("../../entity/project.entity");
const validator_pipe_1 = require("../../pipes/validator/validator.pipe");
const projects_service_1 = require("../../services/projects/projects.service");
let ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    getList(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectsService.findByUser(user);
        });
    }
    post(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataToCreate = Object.assign({}, data, { user });
            const project = class_transformer_1.plainToClass(project_entity_1.Project, dataToCreate);
            return yield this.projectsService.save(project);
        });
    }
    patch(project, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedProject = Object.assign({}, project, data);
            return yield this.projectsService.save(mergedProject);
        });
    }
    delete(project) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.projectsService.delete(project);
            return;
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, authenticated_user_id_decorator_1.AuthenticatedUserIdDecorator()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getList", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(201),
    __param(0, common_1.Body(new validator_pipe_1.ValidatorPipe())), __param(1, authenticated_user_decorator_1.AuthenticatedUserDecorator()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_dto_1.ProjectDto, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "post", null);
__decorate([
    common_1.Patch(':project'),
    __param(0, request_object_decorator_1.RequestObjectDecorator('project')), __param(1, common_1.Body(new validator_pipe_1.ValidatorPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_entity_1.Project, project_dto_1.ProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "patch", null);
__decorate([
    common_1.Delete(':project'),
    __param(0, request_object_decorator_1.RequestObjectDecorator('project')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_entity_1.Project]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "delete", null);
ProjectsController = __decorate([
    common_1.Controller('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects.controller.js.map