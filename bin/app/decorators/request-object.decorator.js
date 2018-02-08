"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.RequestObjectDecorator = common_1.createRouteParamDecorator((data, req) => req[data]);
//# sourceMappingURL=request-object.decorator.js.map