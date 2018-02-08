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
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let ValidatorPipe = class ValidatorPipe {
    constructor(group) {
        this.group = group;
    }
    transform(value, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            const { metatype } = metadata;
            const object = class_transformer_1.plainToClass(metatype, value);
            const errors = yield class_validator_1.validate(object, { groups: this.group });
            if (errors.length > 0) {
                throw new common_1.UnprocessableEntityException(errors);
            }
            return class_transformer_1.classToPlain(object);
        });
    }
};
ValidatorPipe = __decorate([
    common_1.Pipe(),
    __metadata("design:paramtypes", [Object])
], ValidatorPipe);
exports.ValidatorPipe = ValidatorPipe;
//# sourceMappingURL=validator.pipe.js.map