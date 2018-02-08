"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.UserDecorator = common_1.createRouteParamDecorator((data, req) => req.user);
//# sourceMappingURL=user.decorator.js.map