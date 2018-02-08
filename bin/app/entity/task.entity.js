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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Entity_1 = require("typeorm/decorator/entity/Entity");
const project_entity_1 = require("./project.entity");
let Task = class Task {
    beforeInsert() {
        return __awaiter(this, void 0, void 0, function* () {
            this.creationDate = new Date();
        });
    }
    beforeUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.finishDate = this.status === 'done' ? new Date() : null;
        });
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Task.prototype, "creationDate", void 0);
__decorate([
    typeorm_1.Column({
        type: 'datetime',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Task.prototype, "finishDate", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: ['done', 'open'],
        default: 'open',
    }),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(type => project_entity_1.Project),
    __metadata("design:type", project_entity_1.Project)
], Task.prototype, "project", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Task.prototype, "beforeInsert", null);
__decorate([
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Task.prototype, "beforeUpdate", null);
Task = __decorate([
    Entity_1.Entity()
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map