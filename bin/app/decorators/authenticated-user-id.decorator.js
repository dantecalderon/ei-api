"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.AuthenticatedUserIdDecorator = common_1.createRouteParamDecorator((data, req) => req.user.id);
//# sourceMappingURL=authenticated-user-id.decorator.js.map