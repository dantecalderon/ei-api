"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const app = core_1.NestFactory.create(app_module_1.ApplicationModule);
app.then(instance => instance.listen(3000, () => console.log('Application is listening on port 3000')));
//# sourceMappingURL=server.js.map