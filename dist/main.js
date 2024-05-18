"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors_1 = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cors_1.default)());
    await app.listen(5000, () => console.log(`API online on port 5000`));
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map