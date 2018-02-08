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
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const unique_constraint_1 = require("../validators/constraints/unique.constraint");
const bot_entity_1 = require("../entity/bot.entity");
let BotDto = class BotDto {
};
__decorate([
    class_validator_1.IsOptional({ groups: ['patch'] }),
    class_validator_1.IsString({ always: true }),
    class_validator_1.Length(2, 50, { always: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], BotDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional({ groups: ['patch'] }),
    class_validator_1.IsString({ always: true }),
    class_validator_1.IsEmail({}, { always: true }),
    unique_constraint_1.UniqueEntity(bot_entity_1.Bot, { always: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], BotDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional({ groups: ['patch'] }),
    class_validator_1.IsString({ always: true }),
    class_validator_1.Matches(/^\d{17}$/, { always: true }),
    unique_constraint_1.UniqueEntity(bot_entity_1.Bot, { always: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], BotDto.prototype, "steamid", void 0);
__decorate([
    class_validator_1.IsOptional({ groups: ['patch'] }),
    class_validator_1.IsString({ always: true }),
    class_validator_1.Length(8, 32, { always: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], BotDto.prototype, "steampass", void 0);
__decorate([
    class_validator_1.IsOptional({ groups: ['patch'] }),
    class_validator_1.IsString({ always: true }),
    class_validator_1.IsBase64({ always: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], BotDto.prototype, "sharedSecret", void 0);
__decorate([
    class_validator_1.IsOptional({ groups: ['patch'] }),
    class_validator_1.IsString({ always: true }),
    class_validator_1.IsBase64({ always: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], BotDto.prototype, "identitySecret", void 0);
BotDto = __decorate([
    class_transformer_1.Exclude()
], BotDto);
exports.BotDto = BotDto;
//# sourceMappingURL=bot.dto.js.map