"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../entity/user.entity");
exports.AuthenticatedUserDecorator = common_1.createRouteParamDecorator((data, req) => class_transformer_1.plainToClass(user_entity_1.User, { id: req.user.id }));
//# sourceMappingURL=authenticated-user.decorator.js.map