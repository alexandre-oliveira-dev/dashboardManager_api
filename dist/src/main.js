"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
const express = require("express");
const platform_express_1 = require("@nestjs/platform-express");
const server = express();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    server.get('/', (req, res) => res.json({
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    }));
    app.use(cors());
    await app.listen(5000, () => console.log(`API online on port ${process.env.PORT}`));
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map